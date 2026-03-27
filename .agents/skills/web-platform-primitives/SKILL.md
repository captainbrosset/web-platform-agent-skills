---
name: web-platform-primitives
description: Recommends using native web platform features (HTML elements, CSS properties, APIs) instead of custom implementations or unnecessary framework abstractions. Use when developers ask for UI components, animations, forms, storage, real-time communication, accessibility, or layout solutions.
---

# Web Platform Primitives Guide

When a web developer asks for help building something, recommend native web platform primitives before suggesting third-party libraries or framework-specific solutions.

## Your Task

1. **Identify the problem** — What is the developer trying to build or solve?
2. **Search for native solutions** — Assume the web platform has a built-in feature (element, API, CSS property) before suggesting custom code
3. **Recommend the primitive** — Show the native feature and explain why it's better
4. **Provide context** — Minimal working example, MDN link, browser support notes

## How to Recommend

**Bias strongly toward:**
- ✅ HTML elements (`<dialog>`, `<details>`, `<form>`, `<input>`, etc.)
- ✅ CSS features (Flexbox, Grid, Container Queries, Animations, Transitions)
- ✅ Web APIs (Fetch, Storage, Geolocation, WebSocket, etc.)
- ✅ JavaScript primitives (async/await, Promises, Proxy, etc.)
- ✅ Accessibility features (semantic HTML, focus management, ARIA attributes (only if necessary))

**Avoid suggesting:**
- ❌ Custom implementations of things the web platform already solves
- ❌ Heavy libraries when native features work
- ❌ JavaScript solutions when CSS is simpler
- ❌ Accessibility shortcuts when semantic HTML works

## Decision Flow

1. Parse the developer's request into a web problem (modal, animation, validation, storage, etc.)
2. Search your knowledge of web platform features, under `groups/`
3. If a native feature exists, recommend it with:
   - Brief explanation of what it does
   - Why it's better than custom code (performance, accessibility, simplicity)
   - Minimal code example
   - Link to MDN or spec for details
4. For browser compatibility concerns, use the data in `groups/`

## Reference Resources

To suggest the right web platform primitive to the user, search your knowledge of web features by using the following files:

<!-- TOC:START -->
* [Animation](groups/animation.md)
  Methods of moving elements.
  Contains features such as: animation-composition, Animations (CSS), cubic-bezier() easing, interpolate-size, Scroll-driven animations, ...
* [Canvas](groups/canvas.md)
  `<canvas>` including 2D and WebGL rendering contexts, and offscreen canvas.
  Contains features such as: `<canvas>`, 2D canvas, 2D canvas opacity, Canvas createConicGradient(), Canvas reset(), ...
* [Clipboard](groups/clipboard.md)
  Contains features such as: Async clipboard, Clipboard events, clipboardchange, ClipboardItem.supports(), Custom formats for clipboard items, ...
* [Clipping, shapes, and masking](groups/clipping-shapes-and-masking.md)
  Methods of clipping, masking and creating shapes with CSS and SVG. Based on CSS-Next CSS 4 group
  Contains features such as: Animatable clipping paths, clip, Clip path boxes, clip-path, mask-border, ...
* [Compute pressure](groups/compute-pressure.md)
  Contains features such as: CPU compute pressure, Virtual pressure sources
* [Cookies](groups/cookies.md)
  Contains features such as: Cookie store, cookieEnabled, Cookies, Partitioned cookies
* [Credential management](groups/credential-management.md)
  Scope: anything accessed via `navigator.credentials`
  Contains features such as: Credential management, Federated credential management, Federated credentials, Password credentials, WebOTP
  * [WebAuthn](groups/webauthn.md)
    Features related to https://w3c.github.io/webauthn/ (a public key-based credentials API)
    Contains features such as: Web authentication, Web authentication easy public key access, Web authentication signal methods
* [CSS](groups/css.md)
  This group is intended for everything that can be done with CSS syntax and its associated APIs. Almost all such features are defined by the CSSWG, but there are exceptions: https://compat.spec.whatwg.org/#css-compat-section Additionally, not every deliverable of the CSSWG is a CSS feature: https://drafts.csswg.org/geometry/
  Contains features such as: @charset, @function, @import, @namespace, @scope, ...
  * [Background](groups/background.md)
    The background CSS properties set the display of the layers behind an element's main content.
    Contains features such as: background, background-attachment, background-clip, background-clip: border-area, background-clip: text, ...
  * [Blend mode](groups/blend-mode.md)
    https://drafts.csswg.org/compositing-1/ Blend modes control how parts of an element are composited, or visually mixed.
    Contains features such as: background-blend-mode, isolation, mix-blend-mode
  * [Borders and outlines](groups/borders-and-outlines.md)
    Properties related to the lines drawn around an element.
    Contains features such as: Border images, border-radius, Borders
  * [Color types](groups/color-types.md)
    https://drafts.csswg.org/css-color/#introduction
    Contains features such as: color-contrast(), color(), contrast-color(), currentColor, HSL, ...
  * [Container queries](groups/container-queries.md)
    https://drafts.csswg.org/css-conditional-5/#container-queries
    Contains features such as: Container queries, Container scroll-state queries, Container style queries, Range syntax for style queries
  * [Containment](groups/containment.md)
    https://drafts.csswg.org/css-contain/ (any level) and containment-specific things in other specs, like contain-intrinsic-size.
    Contains features such as: contain, contain-intrinsic-size, Inline-size containment, Layout containment, Paint containment, ...
  * [Counters](groups/counters.md)
    Counters in CSS track and display the number of times they are used in a document, for instance with counting list items or headings.
    Contains features such as: @counter-style, counter-set, Counters (CSS), Reversed counter-reset
  * [CSS environment variables](groups/css-environment-variables.md)
    CSS environment variables expose system-specific values using the `env()` function.
    Contains features such as: Safe area inset environment variables
  * [CSS object models](groups/css-object-models.md)
    The CSS Object Model (CSSOM) and CSS Typed Object Model allow authors to programmatically interact with CSS with JavaScript.
    Contains features such as: CSS object model, CSS object model (DOM level 2), CSS typed object model, CSS.escape(), getComputedStyle(), ...
  * [Explicit defaults](groups/explicit-defaults.md)
    https://drafts.csswg.org/css-cascade/
    Contains features such as: all, inherit, initial, revert, unset
  * [Fonts](groups/fonts.md)
    Everything related to web fonts and font rendering control.
    Contains features such as: @font-face, COLRv0, COLRv1, Font metric overrides, Font shorthand, ...
    * [Font synthesis](groups/font-synthesis.md)
      https://drafts.csswg.org/css-fonts-4/#font-synthesis-intro
      Contains features such as: font-synthesis, font-synthesis-position, font-synthesis-small-caps, font-synthesis-style, font-synthesis-weight
    * [Typographic font features](groups/typographic-font-features.md)
      Typographic font features control how a font chooses glyphs to display. For example, you could request zeroes displayed with slashes, small capitals, or a font-specific character. https://drafts.csswg.org/css-fonts-4/#font-rend-props
      Contains features such as: font-feature-settings, font-kerning, font-language-override, font-variant, font-variant-caps, ...
  * [Gradients](groups/gradients.md)
    https://drafts.csswg.org/css-images-4/#gradients
    Contains features such as: Conic gradients, Gradient interpolation, Gradients
  * [Layout](groups/layout.md)
    CSS layout features which give size and positions to boxes.
    Contains features such as: align-content in block layouts, box-sizing, Column breaks, fit-content, fit-content(), ...
    * [Flexbox](groups/flexbox.md)
      https://drafts.csswg.org/css-flexbox-1/
      Contains features such as: Flexbox, Flexbox gap, Gap decorations
    * [Grid](groups/grid.md)
      https://drafts.csswg.org/css-grid/ (any level) but excluding Masonry, as it's currently being debated if it should be part of Grid or not: https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/ https://developer.chrome.com/blog/masonry
      Contains features such as: Gap decorations, Grid, Grid animation, Subgrid
    * [Multi-column](groups/multi-column.md)
      CSS layout features which flow content into multiple columns
      Contains features such as: ::column, column-fill, column-span, Gap decorations, Multi-column layout
    * [Positioning](groups/positioning.md)
      CSS positioning property and schemes.
      Contains features such as: Absolute positioning, Fixed positioning, Position, Relative positioning, Static positioning, ...
  * [Lists](groups/lists.md)
    Features related to the display of lists of items.
    Contains features such as: ::marker, `<ol>`, `<ul>`, and `<li>`, display: list-item, List style
  * [Media queries](groups/media-queries.md)
    CSS Media queries allow you to provide different styles based on the user's device and settings.
    Contains features such as: @supports (compatibility prefix), color-gamut media query, Custom media queries, Device media queries, display-mode media query, ...
  * [Selectors](groups/selectors.md)
    CSS features that allow selecting elements in the DOM.
    Contains features such as: ::backdrop, ::details-content, ::file-selector-button, ::first-letter, ::first-line, ...
  * [Text](groups/text.md)
    Features related to text display
    Contains features such as: alignment-baseline, baseline-shift, dominant-baseline, letter-spacing, line-height, ...
    * [Text wrap](groups/text-wrap.md)
      Features relating to how lines break.
      Contains features such as: Hyphenate character, Hyphenate limit chars, line-break, overflow-wrap, text-wrap, ...
  * [Transforms](groups/transforms.md)
    https://drafts.csswg.org/css-transforms/ (any level)
    Contains features such as: 2D transforms, 3D transforms, Individual transform properties
  * [Transitions (CSS)](groups/transitions-css.md)
    Features related to transitions of an element's CSS properties
    Contains features such as: cubic-bezier() easing, interpolate-size, steps() easing, transition-behavior, Transitions (CSS)
  * [Units](groups/units.md)
    Features that define units of measurement in CSS.
    Contains features such as: cap unit, ch unit, em unit, ex unit, ic unit, ...
  * [White space](groups/white-space.md)
    Features that control the appearance of white space such as tabs, spaces, and line breaks.
    Contains features such as: tab-size, white-space, white-space-collapse
* [DOM](groups/dom.md)
  Features that manipulate the tree of nodes that make up a document.
  Contains features such as: Declarative shadow DOM, DOM, getHTML(), moveBefore(), Mutation events, ...
* [File system access](groups/file-system-access.md)
  Contains features such as: `<input type="file" multiple>`, `<input type="file" webkitdirectory>`, File system access, Origin private file system
* [Gamepad](groups/gamepad.md)
  Contains features such as: Gamepad, Gamepad haptic feedback, Gamepad touch buttons, Gamepad VR hands and poses
* [Geolocation](groups/geolocation.md)
  Contains features such as: `<geolocation>`, Geolocation API
* [HTML](groups/html.md)
  This group isn't intended for everything defined in HTML: spec: https://html.spec.whatwg.org/multipage/ It is for the markup language, and not for all APIs and infrastructure defined in HTML. For example, structuredClone() should not be in this group. APIs on HTML*Element and CSS features specific to an HTML element generally do make sense to group under HTML, however.
  Contains features such as: `<meta name="theme-color">`, `<ruby>`, blocking="render", Declarative shadow DOM, Description list, ...
  * [Custom elements](groups/custom-elements.md)
    https://html.spec.whatwg.org/multipage/custom-elements.html
    Contains features such as: :state(), Autonomous custom elements, Customized built-in elements, Form-associated custom elements, Scoped custom element registries
  * [Forms](groups/forms.md)
    This group is for `<form>`, all form controls, and APIs or CSS features specific to them.
    Contains features such as: :autofill, :indeterminate, :read-only and :read-write, `alpha` and `colorspace` attributes for ``<input type=color>``, `<button>`, ...
  * [HTML elements](groups/html-elements.md)
    Contains features such as: `alpha` and `colorspace` attributes for ``<input type=color>``, `<a>`, `<abbr>`, `<address>`, `<article>`, ...
    * [Landmark elements](groups/landmark-elements.md)
      Also known as sectioning elements. Prior art: - https://en.wikipedia.org/wiki/HTML_landmarks - https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html
      Contains features such as: `<aside>`, `<form>`, `<header>` and `<footer>`, `<main>`, `<nav>`, ...
  * [Media elements](groups/media-elements.md)
    Media elements are `<audio>` and `<video>`, but the `<track>` element is also included in this group.
    Contains features such as: `<audio>`, `<source>`, `<video>`, Audio and video tracks, captureStream() for `<audio>` and `<video>`, ...
* [Images](groups/images.md)
  Features relating to how images are displayed.
  Contains features such as: `<img sizes="auto" loading="lazy">`, cross-fade(), image-orientation, image()
  * [Image scaling](groups/image-scaling.md)
    The `image-rendering` CSS property sets how images are scaled.
    Contains features such as: crisp-edges, image-rendering, image-rendering: smooth
* [JavaScript](groups/javascript.md)
  https://tc39.es/ecma262/ (any edition)
  Contains features such as: __proto__, Accessor methods, arguments.callee, Async functions, Async generators, ...
  * [Collections](groups/collections.md)
    Contains features such as: WeakMap, WeakSet
    * [Arrays](groups/arrays.md)
      Contains features such as: Array (initial support), Array at(), Array by copy, Array copyWithin(), Array fill(), ...
    * [Maps](groups/maps.md)
      Contains features such as: Array grouping, Map (initial support), Map getOrInsert()
    * [Sets](groups/sets.md)
      Contains features such as: Set (initial support), Set methods
    * [Typed arrays](groups/typed-arrays.md)
      Contains features such as: Array at(), Array by copy, Array copyWithin(), Array fill(), Array find() and findIndex(), ...
  * [Internationalization](groups/internationalization.md)
    JavaScript APIs for language- and region-specific string, number, and date handling. Also known as the Internationalization API.
    Contains features such as: Intl, Intl.DisplayNames, Intl.DurationFormat, Intl.ListFormat, Intl.Locale, ...
  * [Iterators](groups/iterators.md)
    Contains features such as: Array iterators, Async iterators and the for await..of loop, Iterator methods, Iterator.concat(), Iterators and the for...of loop, ...
  * [JavaScript modules](groups/javascript-modules.md)
    Contains features such as: Import assertions, JavaScript modules, JavaScript modules in service workers, JavaScript modules in shared workers, JavaScript modules in workers
  * [JSON](groups/json.md)
    Features for the JSON format itself and related features, such as the JSON JavaScript namespace and JSON import attributes.
    Contains features such as: JSON, JSON import attributes, JSON source text access
  * [Primitive types](groups/primitive-types.md)
    JavaScript primitive data types, such as strings or numbers, and their corresponding object wrappers, such as `String` and `Number`.
    Contains features such as: Date, Math and numbers, String (initial support), Symbol
    * [Strings](groups/strings.md)
      Contains features such as: String at(), String codePointAt() and fromCodePoint(), String includes(), String isWellFormed() and toWellFormed(), String matchAll(), ...
  * [Promises](groups/promises.md)
    Contains features such as: Promise (initial support), Promise finally(), Promise.allSettled(), Promise.any(), Promise.try(), ...
  * [Regular expressions](groups/regular-expressions.md)
    Contains features such as: RegExp compile(), RegExp static properties, RegExp.escape(), Regular expressions
* [Messaging](groups/messaging.md)
  Covers messaging APIs like BroadcastChannel, EventSource and more. The spec calls this group "Communications", but that seems overly general for the web features group.
  Contains features such as: BroadcastChannel, Channel messaging, messageerror, postMessage, Server-sent events
* [Parsing and serialization](groups/parsing-and-serialization.md)
  Caniuse lumps all parsing/serialization of html and xml into one feature. For Web Features, they are separate features in a group.
  Contains features such as: DOMParser, XMLSerializer
* [Payments](groups/payments.md)
  Contains features such as: Payment handler, Payment request, Secure payment confirmation
* [Performance](groups/performance.md)
  Features for measuring the Performance of Web applications.
  Contains features such as: Back/forward cache blocking reasons, Element timing, Event timing, Largest contentful paint (LCP), Layout instability, ...
* [Print media](groups/print-media.md)
  Contains features such as: color-adjust, Page selectors, Page setup, page-orientation, Print events, ...
* [Progressive web app](groups/progressive-web-app.md)
  Progressive web apps is built with web technologies, but has capabilities similar to a platform-specific app. Also known as PWA.
  Contains features such as: `<install>`, `<meta name="application-title">`, Application shortcuts, beforeinstallprompt, File handlers, ...
* [Reading order](groups/reading-order.md)
  Features that change the order in which content can be reached, such as through screen readers and sequential keyboard navigation.
  Contains features such as: focusgroup, reading-flow, tabindex
* [Resource hints](groups/resource-hints.md)
  Contains features such as: `<link rel="dns-prefetch">`, `<link rel="preconnect">`, `<link rel="prefetch">`, `<link rel="preload">`, Fetch priority
* [Ruby](groups/ruby.md)
  Features related to ruby annotation
  Contains features such as: `<ruby>`, display: ruby, ruby-align, ruby-overhang, ruby-position
* [Scrolling](groups/scrolling.md)
  Features related to scrollbar appearance and behavior, and scrolling content on a webpage.
  Contains features such as: ::column, ::scroll-button, overflow-anchor, overscroll-behavior, Scroll snap, ...
  * [Scroll markers](groups/scroll-markers.md)
    https://drafts.csswg.org/css-overflow-5/#scroll-markers The collection of things that make up scroll-markers. It's likely that all of the items in this group will some day merge into the `scroll-markers` feature, but until we have the machinery to represent feature merges, this is a good way to find them all.
    Contains features such as: Scroll marker target pseudo-classes, Scroll markers, scroll-target-group
* [Security](groups/security.md)
  Features related to web application security See also SWAG CG https://github.com/w3c-cg/swag/issues/2
  Contains features such as: Content Security Policy (CSP), CORS, Credentialless iframes, HTTP Strict Transport Security, Mixed content handling, ...
* [Selection](groups/selection.md)
  Contains features such as: ::selection, Selection, Selection composed ranges, text-decoration in ::selection
* [Sensors](groups/sensors.md)
  Contains features such as: Accelerometer, Ambient light sensor, Device orientation events, Gyroscope, Magnetometer, ...
* [Speech](groups/speech.md)
  https://webaudio.github.io/web-speech-api/ https://drafts.csswg.org/css-speech-1/
  Contains features such as: speak, speak-as, Speech recognition, Speech recognition grammar, Speech synthesis
* [Storage](groups/storage.md)
  Group for the set of features related to storage of data. Currently this group contains all storage related features that have been developed. However, there are still many to add, so it's possible this eventually gets sub-groups or another approach for more specific categorization.
  Contains features such as: localStorage and sessionStorage, Non-cookie storage access, Shared storage, Storage access, Storage buckets, ...
  * [IndexedDB](groups/indexeddb.md)
    Group for the set of features related to storing data in IndexedDB.
    Contains features such as: IndexedDB, IndexedDB getAllRecords()
* [Streams](groups/streams.md)
  https://streams.spec.whatwg.org/
  Contains features such as: Asynchronously iterable streams, Readable byte streams, ReadableStream.from(), Streams, Transferable streams, ...
* [SVG](groups/svg.md)
  SVG (Scalable Vector Graphics) is a language for describing two-dimensional graphics. spec: https://svgwg.org/svg2-draft/
  Contains features such as: context-fill and context-stroke, Opacity (SVG), SMIL SVG animations, SVG, SVG filters
* [Text fragments](groups/text-fragments.md)
  This group was originally a feature, which has 3 parts:  1. Scrolling to a text fragment such as #:~:text=snippet.  2. Feature detection for this, document.fragmentDirective. This cannot be     relied upon due to https://webkit.org/b/273466. See also     https://github.com/WICG/scroll-to-text-fragment/issues/257.  3. The ::target-text pseudo-element for styling the highlight. TODO: Create a composite feature for text fragments as a whole. The original feature in https://github.com/web-platform-dx/web-features/pull/732 has a solid description to copy for that.
  Contains features such as: ::target-text, Scroll to text fragment
* [View transitions](groups/view-transitions.md)
  Features for managing transitions of properties, elements, and documents
  Contains features such as: Active view transition, Cross-document view transitions, Element-scoped view transitions, View transitions, view-transition-class
* [Web audio](groups/web-audio.md)
  https://webaudio.github.io/web-audio-api/
  Contains features such as: AudioListener, AudioListener setPosition() and setOrientation(), AudioWorklet, OfflineAudioContext, Web Audio
* [Web components](groups/web-components.md)
  Contains features such as: :has-slotted, :host-context(), `<slot>`, `<template>`, Declarative shadow DOM, ...
* [WebAssembly](groups/webassembly.md)
  WebAssembly (Wasm) features and extensions
  Contains features such as: BigInt to i64 conversion (WebAssembly), Branch hinting (WebAssembly), Bulk memory operations (WebAssembly), Exception handling (WebAssembly), Exception references with exnref (WebAssembly), ...
* [WebDriver](groups/webdriver.md)
  Contains features such as: Virtual pressure sources, Virtual sensors, WebDriver, WebDriver BiDi
* [WebGL](groups/webgl.md)
  https://www.khronos.org/webgl/ including 1.0 and 2.0
  Contains features such as: Color management for WebGL, Desynchronized WebGL canvas, SharedArrayBuffer in WebGL, WebGL
  * [WebGL extensions](groups/webgl-extensions.md)
    Group for all WebGL extensions, see https://registry.khronos.org/webgl/extensions/
    Contains features such as: ANGLE_instanced_arrays WebGL extension, EXT_blend_minmax WebGL extension, EXT_color_buffer_float WebGL extension, EXT_color_buffer_half_float WebGL extension, EXT_disjoint_timer_query WebGL extension, ...
* [WebGPU](groups/webgpu.md)
  Contains features such as: WebGPU, WebGPU subgroups
* [WebMCP](groups/webmcp.md)
  Contains features such as: Form-associated WebMCP attributes, navigator.modelContext
* [WebRTC](groups/webrtc.md)
  https://w3c.github.io/webrtc-pc/ and the many related specs.
  Contains features such as: WebRTC, WebRTC encoded transform, WebRTC SCTP information, WebRTC statistics
* [WebXR](groups/webxr.md)
  Contains features such as: Anchors (WebXR), Augmented reality, Depth sensing, DOM overlays for WebXR, Gamepad (WebXR), ...
* [Workers](groups/workers.md)
  https://html.spec.whatwg.org/multipage/workers.html and specific worker types like shared workers, service workers, etc.
  Contains features such as: Dedicated workers, JavaScript modules in service workers, JavaScript modules in shared workers, JavaScript modules in workers, requestAnimationFrame() in workers, ...
* [Worklets](groups/worklets.md)
  https://html.spec.whatwg.org/multipage/worklets.html and specific worklet types like audio worklets, paint worklets, etc.
  Contains features such as: AudioWorklet, paint(), Shared storage
* [XML](groups/xml.md)
  Group comprises XML features such as parsing/serializing, querying and more. It does not include XMLHTTPRequest, since it's not specific to XML.
  Contains features such as: XMLSerializer, XPath, XSLT
<!-- TOC:END -->

