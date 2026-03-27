# Web components

Web platform features about Web components

## Web components features

### :has-slotted

The `:has-slotted` CSS pseudo-class matches `<slot>` elements where the fallback content is not shown. The pseudo-class matches any slotted content, including white space, text nodes, or elements.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#the-has-slotted-pseudo>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:has-slotted](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has-slotted)

### Declarative shadow DOM

The `shadowrootmode` attribute on `<template>` creates a shadow root without the use of JavaScript. It is a declarative alternative to the `attachShadow()` method.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode>

**Baseline Newly Available since 2024-02-20**

**MDN:**
- [`<template>`: The Content Template element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode)

### Selection composed ranges

The `window.getSelection().getComposedRanges()` method returns ranges that represent the current user selection, even if the selection spans across shadow tree boundaries.

**Spec:**
- <https://w3c.github.io/selection-api/#dom-selection-getcomposedranges>

**Baseline Newly Available since 2025-08-19**

**MDN:**
- [Selection: getComposedRanges() method](https://developer.mozilla.org/docs/Web/API/Selection/getComposedRanges)
