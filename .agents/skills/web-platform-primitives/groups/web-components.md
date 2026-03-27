# Web components

Web platform features about Web components

## Web components features

### :has-slotted

The `:has-slotted` CSS pseudo-class matches `<slot>` elements where the fallback content is not shown. The pseudo-class matches any slotted content, including white space, text nodes, or elements.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#the-has-slotted-pseudo>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:has-slotted](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has-slotted)

### :host-context()

The `:host-context()` CSS pseudo-class selects the containing element of the shadow tree in which it is used if that element or an ancestor matches the provided selector.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#host-selector>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [:host-context()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:host-context)

### `<slot>`

The `<slot>` HTML element is a placeholder inside a web component where consumers of the component can insert their own markup.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element>

**Browser support:**
- Chrome: 53
- Chrome Android: 53
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [`<slot>`: The Web Component Slot element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot)

### `<template>`

The `<template>` HTML element holds HTML fragments which you can clone and insert into the document using JavaScript.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#the-template-element>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 13
- Firefox: 22
- Firefox for Android: 22
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [`<template>`: The Content Template element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template)

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

### Host

The `:host` CSS pseudo-class selects the containing element of the shadow tree in which it is used. The `:host()` CSS pseudo-class selects the that element only if it matches the provided selector.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#host-selector>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [:host](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:host)
- [:host()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:host_function)

### Imperative slot assignment

The `assign()` method for `<slot>` elements assigns nodes to the slot, as an alternative to using the `slot` and `name` HTML attributes. The nodes must be children of a shadow host and the shadow root must be created with the `slotAssignment` set to "manual". Also known as manual slot assignment.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#dom-slot-assign>

**Browser support:**
- Chrome: 92
- Chrome Android: 92
- Edge: 92
- Firefox: 92
- Firefox for Android: 92
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [HTMLSlotElement: assign() method](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assign)
- [ShadowRoot: slotAssignment property](https://developer.mozilla.org/docs/Web/API/ShadowRoot/slotAssignment)

### Reference target

The `referenceTarget` property of a `ShadowRoot` object forwards attributes such as `for` and `aria-labelledby` to elements inside a shadow DOM. You can use this to, for example, link a `<label>` to its `<input>` even if the `<input>` is in the shadow DOM of a web component.

**Spec:**
- <https://github.com/whatwg/dom/pull/1353>
- <https://github.com/whatwg/html/pull/10995>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Selection composed ranges

The `window.getSelection().getComposedRanges()` method returns ranges that represent the current user selection, even if the selection spans across shadow tree boundaries.

**Spec:**
- <https://w3c.github.io/selection-api/#dom-selection-getcomposedranges>

**Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: 142
- Firefox for Android: 142
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [Selection: getComposedRanges() method](https://developer.mozilla.org/docs/Web/API/Selection/getComposedRanges)

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

### Shadow parts

The `part` and `exportparts` HTML attributes expose elements of a shadow DOM as named parts, which can be selected by the `::part()` CSS pseudo-element for styling.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#exposing>

**Browser support:**
- Chrome: 73
- Chrome Android: 73
- Edge: 79
- Firefox: 72
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [HTML part global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/part)
- [HTML exportparts global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/exportparts)
- [::part()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::part)
