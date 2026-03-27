# DOM

Features that manipulate the tree of nodes that make up a document.

## DOM features

### Declarative shadow DOM

The `shadowrootmode` attribute on `<template>` creates a shadow root without the use of JavaScript. It is a declarative alternative to the `attachShadow()` method.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode>

**Baseline Newly Available since 2024-02-20**

**MDN:**
- [`<template>`: The Content Template element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode)

### getHTML()

The `getHTML()` method of `Element` and `ShadowRoot` objects serializes an element's DOM to an HTML string.

**Spec:**
- <https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#html-serialization-methods>

**Baseline Newly Available since 2024-09-16**

**MDN:**
- [Element: getHTML() method](https://developer.mozilla.org/docs/Web/API/Element/getHTML)
- [ShadowRoot: getHTML() method](https://developer.mozilla.org/docs/Web/API/ShadowRoot/getHTML)

### moveBefore()

The `moveBefore()` DOM method relocates a node while preserving its state. For example, you can move the active element without losing focus, move an animated element without resetting the animation, or move an iframe without reloading its content.

**Spec:**
- <https://dom.spec.whatwg.org/#dom-parentnode-movebefore>
- <https://html.spec.whatwg.org/multipage/custom-elements.html#preserving-custom-element-state-when-moved>

**Limited Availability — Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 144
- Firefox for Android: 144
- Safari: —
- Safari on iOS: —

**MDN:**
- [Element: moveBefore() method](https://developer.mozilla.org/docs/Web/API/Element/moveBefore)
- [Document: moveBefore() method](https://developer.mozilla.org/docs/Web/API/Document/moveBefore)
- [DocumentFragment: moveBefore() method](https://developer.mozilla.org/docs/Web/API/DocumentFragment/moveBefore)
