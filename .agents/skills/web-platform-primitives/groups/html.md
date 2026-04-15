# HTML

This group isn't intended for everything defined in HTML: spec: https://html.spec.whatwg.org/multipage/ It is for the markup language, and not for all APIs and infrastructure defined in HTML. For example, structuredClone() should not be in this group. APIs on HTML*Element and CSS features specific to an HTML element generally do make sense to group under HTML, however.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Custom elements](custom-elements.md)
- [Forms](forms.md)
- [HTML elements](html-elements.md)
- [Media elements](media-elements.md)

## HTML features

### `<meta name="theme-color">`

The `name="theme-color"` attribute for the `<meta>` HTML element suggests a color that the browser can use to customize the display of the page or the browser user interface.

**Spec:**
- <https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: 92
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [`<meta name="theme-color">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta/name/theme-color)

### blocking="render"

The `blocking="render"` attribute for `<link>`, `<script>`, and `<style>` elements blocks rendering until the external script or stylesheet has been loaded. For `<link rel="expect">`, rendering is blocked until a specific element is in the DOM.

**Spec:**
- <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attributes>

**Limited Availability — Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: —
- Firefox for Android: —
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [HTMLLinkElement: blocking property](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/blocking)
- [HTMLScriptElement: blocking property](https://developer.mozilla.org/docs/Web/API/HTMLScriptElement/blocking)
- [HTMLStyleElement: blocking property](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/blocking)

### Declarative shadow DOM

The `shadowrootmode` attribute on `<template>` creates a shadow root without the use of JavaScript. It is a declarative alternative to the `attachShadow()` method.

**Spec:**
- <https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode>

**Baseline Newly Available since 2024-02-20**

**MDN:**
- [`<template>`: The Content Template element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode)

### hidden="until-found"

The `hidden="until-found"` attribute hides an element until it is found using the browser's find-in-page search or it is directly navigated to by following a URL fragment.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden-until-found>

**Limited Availability — Browser support:**
- Chrome: 102
- Chrome Android: 102
- Edge: 102
- Firefox: 148
- Firefox for Android: 148
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTML hidden global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/hidden)

### Interest invokers

Interest invokers, registered by the `interestfor` HTML attribute, trigger events and actions on a target element when a user shows interest in the element, through behaviors such as hover, focus, or long-press. Pseudo-elements apply styles to sources and targets of interest.

**Spec:**
- <https://github.com/whatwg/html/pull/11006>

**Limited Availability — Browser support:**
- Chrome: 142
- Chrome Android: 142
- Edge: 142
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Popover

The `popover` HTML attribute creates an overlay to display content on top of other page content. Popovers can be shown declaratively using HTML, or using the `showPopover()` method.

**Spec:**
- <https://html.spec.whatwg.org/multipage/popover.html>

**Baseline Newly Available since 2025-01-27**

**MDN:**
- [Popover API](https://developer.mozilla.org/docs/Web/API/Popover_API)

### popover="hint"

The `popover="hint"` global HTML attribute creates a popover that is subordinate to popovers with a `popover="auto"` attribute. You can use this to create tooltips that don't dismiss `auto` popovers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/popover.html#attr-popover-hint>

**Limited Availability — Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 149
- Firefox for Android: 149
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTML popover global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/popover#hint)

### ToggleEvent source

The `source` property of a `ToggleEvent` object is the element which triggered the `toggle` event to fire for a popover, `<dialog>`, or `<details>` element, if applicable.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#dom-toggleevent-source>

**Limited Availability — Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: 145
- Firefox for Android: 145
- Safari: —
- Safari on iOS: —

**MDN:**
- [ToggleEvent: source property](https://developer.mozilla.org/docs/Web/API/ToggleEvent/source)
