# DOM

Features that manipulate the tree of nodes that make up a document.

## DOM features

### Declarative shadow DOM

The `shadowrootmode` attribute on `<template>` creates a shadow root without the use of JavaScript. It is a declarative alternative to the `attachShadow()` method.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 123
- Firefox for Android: 123
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [`<template>`: The Content Template element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode)

### DOM

The DOM (Document Object Model) API represents HTML and XML documents as trees of nodes. You can use the API to inspect and modify the structure and content of a document.

**Spec:**
- <https://dom.spec.whatwg.org/>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Document Object Model (DOM)](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)

### getHTML()

The `getHTML()` method of `Element` and `ShadowRoot` objects serializes an element's DOM to an HTML string.

**Spec:**
- <https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#html-serialization-methods>

**Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: 128
- Firefox for Android: 128
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [Element: getHTML() method](https://developer.mozilla.org/docs/Web/API/Element/getHTML)
- [ShadowRoot: getHTML() method](https://developer.mozilla.org/docs/Web/API/ShadowRoot/getHTML)

### moveBefore()

The `moveBefore()` DOM method relocates a node while preserving its state. For example, you can move the active element without losing focus, move an animated element without resetting the animation, or move an iframe without reloading its content.

**Spec:**
- <https://dom.spec.whatwg.org/#dom-parentnode-movebefore>
- <https://html.spec.whatwg.org/multipage/custom-elements.html#preserving-custom-element-state-when-moved>

**Browser support:**
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

### MutationObserver

The `MutationObserver` API watches for changes to the DOM tree and calls a callback function when DOM changes occur.

**Spec:**
- <https://dom.spec.whatwg.org/#interface-mutationobserver>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 12
- Firefox: 14
- Firefox for Android: 14
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver)

### Shadow DOM

Shadow DOM allows you to attach encapsulated "shadow" DOM trees to elements. A shadow DOM tree is a separate component, isolated from the scripts and styles in other parts of the document. This is a part of Web Components.

**Spec:**
- <https://dom.spec.whatwg.org/#shadow-trees>

**Browser support:**
- Chrome: 53
- Chrome Android: 53
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Using shadow DOM](https://developer.mozilla.org/docs/Web/API/Web_components/Using_shadow_DOM)
