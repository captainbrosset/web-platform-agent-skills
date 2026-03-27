import { browsers, features, groups } from "web-features";
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const WEB_FEATURES_MAPPINGS_URL =
  "https://raw.githubusercontent.com/web-platform-dx/web-features-mappings/refs/heads/main/mappings/combined-data.json";

const WEB_FEATURES_GROUP_SOURCE_URL =
  "https://raw.githubusercontent.com/web-platform-dx/web-features/refs/heads/main/groups/";

// Skip features that have been baseline for longer than this duration.
// This covers the LLM knowledge cutoff — no need to document very old features.
const MAX_BASELINE_AGE_YEARS = 3;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(
  __dirname,
  "..",
  ".agents",
  "skills",
  "web-platform-primitives",
  "groups"
);

// Browser ids and names from web-features data
const BROWSERS = Object.entries(browsers).map(([id, data]) => [id, data.name]);

function buildCompatSummary(status) {
  if (!status?.support) return null;
  return BROWSERS.map(
    ([key, label]) => `${label}:${status.support[key] ?? "—"}`
  ).join(", ");
}

function backtickTags(str) {
  return str.replace(/<([^>]+)>/g, "`<$1>`");
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&#x3C;/gi, "<")
    .replace(/&#x3E;/gi, ">")
    .replace(/&#38;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");
}

function codeTagsToBackticks(str) {
  return str.replace(/<code>([^<]+)<\/code>/g, "`$1`");
}

function isFeatureTooOld(feature) {
  const lowDate = feature.status?.baseline_low_date;
  if (!lowDate) return false;
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - MAX_BASELINE_AGE_YEARS);
  return new Date(lowDate) < cutoff;
}

function hasAnyBrowserSupport(feature) {
  const support = feature.status?.support;
  if (!support) return false;
  return Object.keys(support).length > 0;
}

function buildFeatureSection(featureId, feature, mappings) {
  const lines = [`### ${backtickTags(feature.name)}\n`];
  lines.push(decodeHtmlEntities(codeTagsToBackticks(feature.description_html)) + "\n");

  // Spec links
  if (feature.spec?.length) {
    lines.push("**Spec:**");
    for (const s of feature.spec) {
      lines.push(`- <${s}>`);
    }
    lines.push("");
  }

  const baseline = feature.status?.baseline;
  if (baseline === "high" || baseline === "low") {
    // Baseline features: just show the date, no per-browser data
    const date = baseline === "high"
      ? feature.status.baseline_high_date
      : feature.status.baseline_low_date;
    const label = baseline === "high" ? "Baseline Widely Available" : "Baseline Newly Available";
    lines.push(`**${label} since ${date}**\n`);
  } else if (feature.status?.support) {
    // Limited Availability: show per-browser support
    lines.push("**Limited Availability — Browser support:**");
    for (const [key, label] of BROWSERS) {
      lines.push(`- ${label}: ${feature.status.support[key] ?? "—"}`);
    }
    lines.push("");
  }

  // MDN docs from mappings
  const mapping = mappings[featureId];
  if (mapping?.["mdn-docs"]?.length) {
    lines.push("**MDN:**");
    for (const doc of mapping["mdn-docs"]) {
      lines.push(`- [${backtickTags(doc.title)}](${doc.url})`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchGroupDescription(groupId) {
  try {
    const res = await fetch(`${WEB_FEATURES_GROUP_SOURCE_URL}${groupId}.yml`);
    if (!res.ok) return null;
    const text = await res.text();
    const commentLines = text
      .split("\n")
      .filter((line) => line.startsWith("#"))
      .map((line) => line.replace(/^#\s?/, ""))
      .map((line) => line.replace(/^[Dd]escription:?\s?/, ""))
      .filter((line) => line.length > 0);
    return commentLines.length ? backtickTags(commentLines.join(" ")) : null;
  } catch {
    return null;
  }
}

const SKILL_MD_PATH = join(
  __dirname,
  "..",
  ".agents",
  "skills",
  "web-platform-primitives",
  "SKILL.md"
);

const TOC_START_MARKER = "<!-- TOC:START -->";
const TOC_END_MARKER = "<!-- TOC:END -->";

function buildTocTree(groupId, groupFeatures, childGroups, descriptions, indent) {
  const group = groups[groupId];
  if (!group) return "";

  const prefix = "  ".repeat(indent);
  const slug = slugify(group.name);
  const featureList = groupFeatures.get(groupId) || [];
  const subGroups = childGroups.get(groupId) || [];

  // Skip groups with no features and no sub-groups
  if (!featureList.length && !subGroups.length) return "";

  const lines = [];
  lines.push(`${prefix}* [${backtickTags(group.name)}](groups/${slug}.md)`);

  // Description
  const desc = descriptions.get(groupId);
  if (desc) {
    lines.push(`${prefix}  ${desc}`);
  }

  // Up to 5 feature names
  if (featureList.length) {
    const names = featureList
      .slice(0, 5)
      .map(([, f]) => backtickTags(f.name))
      .join(", ");
    const suffix = featureList.length > 5 ? ", ..." : "";
    lines.push(`${prefix}  Contains features such as: ${names}${suffix}`);
  }

  // Recurse into children
  if (subGroups.length) {
    const sorted = subGroups
      .map((id) => ({ id, name: groups[id].name }))
      .sort((a, b) => a.name.localeCompare(b.name));
    for (const sg of sorted) {
      const child = buildTocTree(sg.id, groupFeatures, childGroups, descriptions, indent + 1);
      if (child) lines.push(child);
    }
  }

  return lines.join("\n");
}

async function main() {
  // Fetch mappings data
  const res = await fetch(WEB_FEATURES_MAPPINGS_URL);
  if (!res.ok) throw new Error(`Failed to fetch mappings: ${res.status}`);
  const mappings = await res.json();

  // Build a map from group ID → list of [featureId, featureData]
  const groupFeatures = new Map();
  let skippedOld = 0;
  let skippedNoSupport = 0;
  for (const [id, feature] of Object.entries(features)) {
    if (feature.kind !== "feature") continue;
    if (feature.discouraged) continue;
    if (!feature.group) continue;

    // Skip features that have been baseline for too long (LLMs already know these)
    if (isFeatureTooOld(feature)) { skippedOld++; continue; }

    // For Limited Availability, only include if at least one browser supports it
    if (feature.status?.baseline === false && !hasAnyBrowserSupport(feature)) {
      skippedNoSupport++;
      continue;
    }

    for (const groupId of feature.group) {
      if (!groupFeatures.has(groupId)) groupFeatures.set(groupId, []);
      groupFeatures.get(groupId).push([id, feature]);
    }
  }
  console.log(`Skipped ${skippedOld} features with baseline older than ${MAX_BASELINE_AGE_YEARS} years`);
  console.log(`Skipped ${skippedNoSupport} Limited Availability features with no browser support`);

  // Build a map from group ID → list of child group IDs
  const childGroups = new Map();
  for (const [id, group] of Object.entries(groups)) {
    if (group.parent) {
      if (!childGroups.has(group.parent)) childGroups.set(group.parent, []);
      childGroups.get(group.parent).push(id);
    }
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  let written = 0;
  for (const [groupId, group] of Object.entries(groups)) {
    const featureList = groupFeatures.get(groupId);
    const subGroups = childGroups.get(groupId);
    if (!featureList?.length && !subGroups?.length) continue;

    const description = await fetchGroupDescription(groupId);
    const lines = [`# ${group.name}\n`];
    if (description) {
      lines.push(description + "\n");
    } else {
      lines.push(`Web platform features about ${group.name}\n`);
    }

    // Sub-categories section
    if (subGroups?.length) {
      const sortedSubGroups = subGroups
        .map((id) => ({ id, name: groups[id].name }))
        .sort((a, b) => a.name.localeCompare(b.name));
      lines.push("## See also\n");
      lines.push("This group of web platform features also includes the following sub-categories, which might be relevant to your query:\n");
      for (const sg of sortedSubGroups) {
        lines.push(`- [${sg.name}](${slugify(sg.name)}.md)`);
      }
      lines.push("");
    }

    // Features section
    if (featureList?.length) {
      featureList.sort((a, b) => a[1].name.localeCompare(b[1].name));
      lines.push(`## ${group.name} features\n`);
      for (const [featureId, feature] of featureList) {
        lines.push(buildFeatureSection(featureId, feature, mappings));
      }
    }

    const filename = `${slugify(group.name)}.md`;
    await writeFile(join(OUTPUT_DIR, filename), lines.join("\n"));
    written++;
  }

  console.log(`Generated ${written} group reference files in ${OUTPUT_DIR}`);

  // Build tree TOC for SKILL.md
  const descriptions = new Map();
  for (const [groupId] of Object.entries(groups)) {
    const desc = await fetchGroupDescription(groupId);
    if (desc) descriptions.set(groupId, desc);
  }

  // Find root groups (no parent)
  const rootGroups = Object.entries(groups)
    .filter(([, g]) => !g.parent)
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  const tocLines = [];
  for (const [groupId] of rootGroups) {
    const entry = buildTocTree(groupId, groupFeatures, childGroups, descriptions, 0);
    if (entry) tocLines.push(entry);
  }

  const tocContent = tocLines.join("\n");

  // Write TOC into SKILL.md between markers
  const { readFile } = await import("node:fs/promises");
  const skillMd = await readFile(SKILL_MD_PATH, "utf-8");
  const startIdx = skillMd.indexOf(TOC_START_MARKER);
  const endIdx = skillMd.indexOf(TOC_END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    console.error("TOC markers not found in SKILL.md");
    process.exit(1);
  }
  const updatedSkillMd =
    skillMd.slice(0, startIdx + TOC_START_MARKER.length) +
    "\n" +
    tocContent +
    "\n" +
    skillMd.slice(endIdx);
  await writeFile(SKILL_MD_PATH, updatedSkillMd);
  console.log(`Updated TOC in ${SKILL_MD_PATH}`);
}

main().catch((error) => {
  console.error("Error generating catalog:", error);
  process.exit(1);
});
