# AI agent skill for the web platform

When using a coding AI agent, this skill can help you make better use of modern web platform features instead of reaching for unnecessary custom implementations, which often use JavaScript, or framework-specific abstractions.

**Problem it solves**: AI agents sometimes recommend outdated code patterns or suggest building custom solutions when the web platform already has native primitives for the task that are easier to use, have better performance, or accessibility characteristics.

**What it does**: When you ask an AI agent to build UI components, animations, forms, storage solutions, or other common web tasks, this skill activates and recommends using native web platform features with explanations of why they're the right choice.

## Files

- **`SKILL.md`** — The main skill file, with agent guidance for using web platform features, and catalog of features organized by category.
- **`groups/*.md`** — Complete searchable catalog of recent web platform features organized by category.

## Use the skill in your project

Run the following command to install the skill in your project:

`npx skills add captainbrosset/web-platform-agent-skills`

## Contribute to this repo

The skill uses the [web-features](https://github.com/web-platform-dx/web-features) repository as the source of truth for web platform features. If any of the feature names, descriptions, or grouping is inaccurate, please submit a PR to that repository.

To update the version of web-features used by this skill, run the following commands:

`npm run bump`

To improve the structure or format of the skill and its groups, modify the `SKILL.md` file and the `script/generate-groups.js` file, which generates the group files from the web-features data. Then run `npm run generate-groups` to update the group files.
