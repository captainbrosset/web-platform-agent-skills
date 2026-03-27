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

1. Parse the developer's request into a web problem (modal, animation, validation, storage, etc.).

2. Search your knowledge of the web platform for existing primitives that solve this problem already.

3. If you cannot find a solution, search for newer platform primitives in [Resources for Newer Web Platform Feature](#resources-for-newer-web-platform-features), below, and see if any of those fit the problem. Only recommend a custom JavaScript solution, or a library or framework, if you are certain no native feature exists that can solve the problem.

4. If a native feature exists, recommend it with:

   - Brief explanation of what it does
   - Why it's better than custom code (performance, accessibility, simplicity)
   - Minimal code example
   - Link to MDN or spec for details

## Resources for Newer Web Platform Features

To suggest the right web platform primitives to the user, search through your resources for web features by using the files under the `.agents/skills/web-platform-primitives/groups/` directory.

Each file contains a list of features related to a specific topic, such as animation, forms, storage, etc. The features are organized into groups and subgroups for easier navigation.

Use the table of content below to find the relevant group, or groups, for the problem the developer is trying to solve:

<!-- TOC:START -->
* [Animation](groups/animation.md)
  Methods of moving elements.
  Contains features such as: animation-composition, interpolate-size, Scroll-driven animations
* [Canvas](groups/canvas.md)
  `<canvas>` including 2D and WebGL rendering contexts, and offscreen canvas.
  Contains features such as: 2D canvas opacity, Canvas createConicGradient(), Canvas reset(), Canvas roundRect(), Color management for 2D canvas, ...
* [Clipboard](groups/clipboard.md)
  Contains features such as: Async clipboard, clipboardchange, ClipboardItem.supports(), Custom formats for clipboard items, Read unsanitized clipboard data, ...
* [Clipping, shapes, and masking](groups/clipping-shapes-and-masking.md)
  Methods of clipping, masking and creating shapes with CSS and SVG. Based on CSS-Next CSS 4 group
  Contains features such as: Clip path boxes, mask-border, Masks, rect() and xywh(), shape()
* [Compute pressure](groups/compute-pressure.md)
  Contains features such as: CPU compute pressure, Virtual pressure sources
* [Cookies](groups/cookies.md)
  Contains features such as: Cookie store, cookieEnabled, Partitioned cookies
* [Credential management](groups/credential-management.md)
  Scope: anything accessed via `navigator.credentials`
  Contains features such as: Federated credential management, Federated credentials, Password credentials, WebOTP
  * [WebAuthn](groups/webauthn.md)
    Features related to https://w3c.github.io/webauthn/ (a public key-based credentials API)
    Contains features such as: Web authentication easy public key access, Web authentication signal methods
* [CSS](groups/css.md)
  This group is intended for everything that can be done with CSS syntax and its associated APIs. Almost all such features are defined by the CSSWG, but there are exceptions: https://compat.spec.whatwg.org/#css-compat-section Additionally, not every deliverable of the CSSWG is a CSS feature: https://drafts.csswg.org/geometry/
  Contains features such as: @function, @scope, @starting-style, abs() and sign(), accent-color, ...
  * [Background](groups/background.md)
    The background CSS properties set the display of the layers behind an element's main content.
    Contains features such as: background-attachment, background-clip: border-area, background-clip: text
  * [Color types](groups/color-types.md)
    https://drafts.csswg.org/css-color/#introduction
    Contains features such as: color(), contrast-color(), Lab and LCH, Oklab and OkLCh
  * [Container queries](groups/container-queries.md)
    https://drafts.csswg.org/css-conditional-5/#container-queries
    Contains features such as: Container scroll-state queries, Container style queries, Range syntax for style queries
  * [Containment](groups/containment.md)
    https://drafts.csswg.org/css-contain/ (any level) and containment-specific things in other specs, like contain-intrinsic-size.
    Contains features such as: contain-intrinsic-size
  * [Counters](groups/counters.md)
    Counters in CSS track and display the number of times they are used in a document, for instance with counting list items or headings.
    Contains features such as: @counter-style, counter-set, Reversed counter-reset
  * [CSS object models](groups/css-object-models.md)
    The CSS Object Model (CSSOM) and CSS Typed Object Model allow authors to programmatically interact with CSS with JavaScript.
    Contains features such as: CSS typed object model, Numeric factory functions
  * [Fonts](groups/fonts.md)
    Everything related to web fonts and font rendering control.
    Contains features such as: COLRv1, Font metric overrides, font-palette animation, font-size-adjust, font-width, ...
    * [Font synthesis](groups/font-synthesis.md)
      https://drafts.csswg.org/css-fonts-4/#font-synthesis-intro
      Contains features such as: font-synthesis-position
    * [Typographic font features](groups/typographic-font-features.md)
      Typographic font features control how a font chooses glyphs to display. For example, you could request zeroes displayed with slashes, small capitals, or a font-specific character. https://drafts.csswg.org/css-fonts-4/#font-rend-props
      Contains features such as: font-language-override, font-variant-emoji, font-variant-position
  * [Gradients](groups/gradients.md)
    https://drafts.csswg.org/css-images-4/#gradients
    Contains features such as: Gradient interpolation
  * [Layout](groups/layout.md)
    CSS layout features which give size and positions to boxes.
    Contains features such as: align-content in block layouts, Column breaks, justify-self in block layouts, Page setup, page-orientation, ...
    * [Grid](groups/grid.md)
      https://drafts.csswg.org/css-grid/ (any level) but excluding Masonry, as it's currently being debated if it should be part of Grid or not: https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/ https://developer.chrome.com/blog/masonry
      Contains features such as: Subgrid
    * [Multi-column](groups/multi-column.md)
      CSS layout features which flow content into multiple columns
      Contains features such as: ::column
  * [Lists](groups/lists.md)
    Features related to the display of lists of items.
    Contains features such as: ::marker
  * [Media queries](groups/media-queries.md)
    CSS Media queries allow you to provide different styles based on the user's device and settings.
    Contains features such as: display-mode media query, inverted-colors media query, Overflow media queries, prefers-reduced-transparency media query, scripting media query, ...
  * [Selectors](groups/selectors.md)
    CSS features that allow selecting elements in the DOM.
    Contains features such as: ::details-content, ::selection, ::spelling-error and ::grammar-error, :dir(), :has-slotted, ...
  * [Text](groups/text.md)
    Features related to text display
    Contains features such as: alignment-baseline, baseline-shift, text-box, text-indent: each-line, text-indent: hanging, ...
    * [Text wrap](groups/text-wrap.md)
      Features relating to how lines break.
      Contains features such as: Hyphenate character, Hyphenate limit chars, text-wrap, text-wrap: balance, text-wrap: pretty, ...
  * [Transitions (CSS)](groups/transitions-css.md)
    Features related to transitions of an element's CSS properties
    Contains features such as: interpolate-size, transition-behavior
  * [Units](groups/units.md)
    Features that define units of measurement in CSS.
    Contains features such as: cap unit, lh unit, rcap unit, rch unit, rex unit, ...
  * [White space](groups/white-space.md)
    Features that control the appearance of white space such as tabs, spaces, and line breaks.
    Contains features such as: white-space-collapse
* [DOM](groups/dom.md)
  Features that manipulate the tree of nodes that make up a document.
  Contains features such as: Declarative shadow DOM, getHTML(), moveBefore()
* [File system access](groups/file-system-access.md)
  Contains features such as: `<input type="file" webkitdirectory>`, File system access
* [Gamepad](groups/gamepad.md)
  Contains features such as: Gamepad haptic feedback, Gamepad touch buttons, Gamepad VR hands and poses
* [HTML](groups/html.md)
  This group isn't intended for everything defined in HTML: spec: https://html.spec.whatwg.org/multipage/ It is for the markup language, and not for all APIs and infrastructure defined in HTML. For example, structuredClone() should not be in this group. APIs on HTML*Element and CSS features specific to an HTML element generally do make sense to group under HTML, however.
  Contains features such as: `<meta name="theme-color">`, blocking="render", Declarative shadow DOM, hidden="until-found", inert, ...
  * [Custom elements](groups/custom-elements.md)
    https://html.spec.whatwg.org/multipage/custom-elements.html
    Contains features such as: :state(), Customized built-in elements, Scoped custom element registries
  * [Forms](groups/forms.md)
    This group is for `<form>`, all form controls, and APIs or CSS features specific to them.
    Contains features such as: :autofill, `alpha` and `colorspace` attributes for ``<input type=color>``, `<datalist>`, `<input type="color">`, `<input type="file" webkitdirectory>`, ...
  * [HTML elements](groups/html-elements.md)
    Contains features such as: `alpha` and `colorspace` attributes for ``<input type=color>``, `<dialog closedby>`, `<input type="color">`, `<output>`, `<search>`, ...
  * [Media elements](groups/media-elements.md)
    Media elements are `<audio>` and `<video>`, but the `<track>` element is also included in this group.
    Contains features such as: Audio and video tracks, captureStream() for `<audio>` and `<video>`, controlslist, fastSeek(), Media element pseudo-classes, ...
* [Images](groups/images.md)
  Features relating to how images are displayed.
  Contains features such as: `<img sizes="auto" loading="lazy">`, cross-fade()
  * [Image scaling](groups/image-scaling.md)
    The `image-rendering` CSS property sets how images are scaled.
    Contains features such as: crisp-edges, image-rendering: smooth
* [JavaScript](groups/javascript.md)
  https://tc39.es/ecma262/ (any edition)
  Contains features such as: Atomics.pause(), Atomics.waitAsync(), Error.isError(), Math.sumPrecise(), Resizable buffers, ...
  * [Collections](groups/collections.md)
    * [Arrays](groups/arrays.md)
      Contains features such as: Array by copy, Array.fromAsync()
    * [Maps](groups/maps.md)
      Contains features such as: Array grouping, Map getOrInsert()
    * [Sets](groups/sets.md)
      Contains features such as: Set methods
    * [Typed arrays](groups/typed-arrays.md)
      Contains features such as: Array by copy, Float16Array, Uint8Array base64 and hex conversion
  * [Internationalization](groups/internationalization.md)
    JavaScript APIs for language- and region-specific string, number, and date handling. Also known as the Internationalization API.
    Contains features such as: Intl.DurationFormat, Intl.Locale info, Intl.Segmenter
  * [Iterators](groups/iterators.md)
    Contains features such as: Iterator methods, Iterator.concat()
  * [JavaScript modules](groups/javascript-modules.md)
    Contains features such as: JavaScript modules in service workers, JavaScript modules in shared workers, JavaScript modules in workers
  * [JSON](groups/json.md)
    Features for the JSON format itself and related features, such as the JSON JavaScript namespace and JSON import attributes.
    Contains features such as: JSON import attributes, JSON source text access
  * [Primitive types](groups/primitive-types.md)
    JavaScript primitive data types, such as strings or numbers, and their corresponding object wrappers, such as `String` and `Number`.
    * [Strings](groups/strings.md)
      Contains features such as: String isWellFormed() and toWellFormed()
  * [Promises](groups/promises.md)
    Contains features such as: Promise.try(), Promise.withResolvers()
  * [Regular expressions](groups/regular-expressions.md)
    Contains features such as: RegExp.escape()
* [Payments](groups/payments.md)
  Contains features such as: Payment handler, Payment request, Secure payment confirmation
* [Performance](groups/performance.md)
  Features for measuring the Performance of Web applications.
  Contains features such as: Back/forward cache blocking reasons, Element timing, Event timing, Largest contentful paint (LCP), Layout instability, ...
* [Print media](groups/print-media.md)
  Contains features such as: Page selectors, Page setup, page-orientation, print-color-adjust, window.print()
* [Progressive web app](groups/progressive-web-app.md)
  Progressive web apps is built with web technologies, but has capabilities similar to a platform-specific app. Also known as PWA.
  Contains features such as: `<meta name="application-title">`, Application shortcuts, beforeinstallprompt, File handlers, Launch handler, ...
* [Reading order](groups/reading-order.md)
  Features that change the order in which content can be reached, such as through screen readers and sequential keyboard navigation.
  Contains features such as: reading-flow
* [Resource hints](groups/resource-hints.md)
  Contains features such as: `<link rel="dns-prefetch">`, `<link rel="prefetch">`, Fetch priority
* [Ruby](groups/ruby.md)
  Features related to ruby annotation
  Contains features such as: display: ruby, ruby-align, ruby-overhang, ruby-position
* [Scrolling](groups/scrolling.md)
  Features related to scrollbar appearance and behavior, and scrolling content on a webpage.
  Contains features such as: ::column, overflow-anchor, Scroll snap events, Scroll to text fragment, Scroll-driven animations, ...
  * [Scroll markers](groups/scroll-markers.md)
    https://drafts.csswg.org/css-overflow-5/#scroll-markers The collection of things that make up scroll-markers. It's likely that all of the items in this group will some day merge into the `scroll-markers` feature, but until we have the machinery to represent feature merges, this is a good way to find them all.
    Contains features such as: Scroll marker target pseudo-classes, Scroll markers, scroll-target-group
* [Security](groups/security.md)
  Features related to web application security See also SWAG CG https://github.com/w3c-cg/swag/issues/2
  Contains features such as: Credentialless iframes, Trusted types, User activation
* [Selection](groups/selection.md)
  Contains features such as: ::selection, Selection composed ranges, text-decoration in ::selection
* [Sensors](groups/sensors.md)
  Contains features such as: Accelerometer, Device orientation events, Gyroscope, Orientation Sensor, Virtual sensors
* [Speech](groups/speech.md)
  https://webaudio.github.io/web-speech-api/ https://drafts.csswg.org/css-speech-1/
  Contains features such as: speak-as, Speech recognition
* [Storage](groups/storage.md)
  Group for the set of features related to storage of data. Currently this group contains all storage related features that have been developed. However, there are still many to add, so it's possible this eventually gets sub-groups or another approach for more specific categorization.
  Contains features such as: Non-cookie storage access, Storage access, Storage buckets, Storage manager
  * [IndexedDB](groups/indexeddb.md)
    Group for the set of features related to storing data in IndexedDB.
    Contains features such as: IndexedDB getAllRecords()
* [Streams](groups/streams.md)
  https://streams.spec.whatwg.org/
  Contains features such as: Asynchronously iterable streams, Readable byte streams, ReadableStream.from(), Transferable streams
* [SVG](groups/svg.md)
  SVG (Scalable Vector Graphics) is a language for describing two-dimensional graphics. spec: https://svgwg.org/svg2-draft/
  Contains features such as: context-fill and context-stroke, Opacity (SVG)
* [Text fragments](groups/text-fragments.md)
  This group was originally a feature, which has 3 parts:  1. Scrolling to a text fragment such as #:~:text=snippet.  2. Feature detection for this, document.fragmentDirective. This cannot be     relied upon due to https://webkit.org/b/273466. See also     https://github.com/WICG/scroll-to-text-fragment/issues/257.  3. The ::target-text pseudo-element for styling the highlight. TODO: Create a composite feature for text fragments as a whole. The original feature in https://github.com/web-platform-dx/web-features/pull/732 has a solid description to copy for that.
  Contains features such as: ::target-text, Scroll to text fragment
* [View transitions](groups/view-transitions.md)
  Features for managing transitions of properties, elements, and documents
  Contains features such as: Active view transition, Cross-document view transitions, View transitions, view-transition-class
* [Web audio](groups/web-audio.md)
  https://webaudio.github.io/web-audio-api/
  Contains features such as: AudioListener
* [Web components](groups/web-components.md)
  Contains features such as: :has-slotted, Declarative shadow DOM, Selection composed ranges
* [WebAssembly](groups/webassembly.md)
  WebAssembly (Wasm) features and extensions
  Contains features such as: Branch hinting (WebAssembly), Exception references with exnref (WebAssembly), Extended constant expressions (WebAssembly), Garbage collection (WebAssembly), JavaScript promise integration (WebAssembly), ...
* [WebDriver](groups/webdriver.md)
  Contains features such as: Virtual pressure sources, Virtual sensors, WebDriver, WebDriver BiDi
* [WebGL](groups/webgl.md)
  https://www.khronos.org/webgl/ including 1.0 and 2.0
  Contains features such as: Color management for WebGL, Desynchronized WebGL canvas, SharedArrayBuffer in WebGL
  * [WebGL extensions](groups/webgl-extensions.md)
    Group for all WebGL extensions, see https://registry.khronos.org/webgl/extensions/
    Contains features such as: EXT_float_blend WebGL extension, EXT_frag_depth WebGL extension, EXT_shader_texture_lod WebGL extension, EXT_texture_compression_bptc WebGL extension, EXT_texture_compression_rgtc WebGL extension, ...
* [WebGPU](groups/webgpu.md)
  Contains features such as: WebGPU
* [WebRTC](groups/webrtc.md)
  https://w3c.github.io/webrtc-pc/ and the many related specs.
  Contains features such as: WebRTC encoded transform, WebRTC SCTP information
* [WebXR](groups/webxr.md)
  Contains features such as: Anchors (WebXR), Augmented reality, Depth sensing, DOM overlays for WebXR, Gamepad (WebXR), ...
* [Workers](groups/workers.md)
  https://html.spec.whatwg.org/multipage/workers.html and specific worker types like shared workers, service workers, etc.
  Contains features such as: JavaScript modules in service workers, JavaScript modules in shared workers, JavaScript modules in workers, Shared worker
* [Worklets](groups/worklets.md)
  https://html.spec.whatwg.org/multipage/worklets.html and specific worklet types like audio worklets, paint worklets, etc.
  Contains features such as: paint()
<!-- TOC:END -->
