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

The `name="theme-color"` attribute for the `<meta>` HTML element sets the preferred color to customize the display of the page or the surrounding browser user interface.

**Spec:**
- <https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color>

**Browser support:**
- Chrome: —
- Chrome Android: 92
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [`<meta name="theme-color">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta/name/theme-color)

### `<ruby>`

The `<ruby>` element produces small annotations that are rendered with its base text.

**Spec:**
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element>
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element>
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element>

**Browser support:**
- Chrome: 5
- Chrome Android: 18
- Edge: 12
- Firefox: 38
- Firefox for Android: 38
- Safari: 5
- Safari on iOS: 4.2

**MDN:**
- [`<ruby>`: The Ruby Annotation element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby)

### blocking="render"

The `blocking="render"` attribute for `<link>`, `<script>`, and `<style>` elements blocks rendering until the external script or stylesheet has been loaded. For `<link rel="expect">`, rendering is blocked until a specific element is in the DOM.

**Spec:**
- <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attributes>

**Browser support:**
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

### Description list

The `<dl>`, `<dt>`, and `<dd>` HTML elements represent a list of terms and their associated descriptions. Use a description list to create glossaries or similar list of key-value pairs.

**Spec:**
- <https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element>
- <https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element>
- <https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: ≤4
- Safari on iOS: ≤3.2

**MDN:**
- [`<dl>`: The Description List element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl)
- [`<dt>`: The Description Term element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt)
- [`<dd>`: The Description Details element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd)

### focusgroup

The `focusgroup` global HTML attribute combines descendant elements into a single tab stop, with arrow-key navigation between them, for toolbars, tabs, menus, radio groups, and other composite controls. It's an alternative to the sequential navigation of `tabindex`.

**Spec:**
- <https://github.com/whatwg/html/pull/11723>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### hidden="until-found"

The `hidden="until-found"` attribute hides an element until it is found using the browser's find-in-page search or it is directly navigated to by following a URL fragment.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden-until-found>

**Browser support:**
- Chrome: 102
- Chrome Android: 102
- Edge: 102
- Firefox: 148
- Firefox for Android: 148
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTML hidden global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/hidden)

### inert

The `inert` HTML attribute marks an element and its descendants as non-interactive. Inert elements don't get focus or fire `click` events.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#inert-subtrees>

**Browser support:**
- Chrome: 102
- Chrome Android: 102
- Edge: 102
- Firefox: 112
- Firefox for Android: 112
- Safari: 15.5
- Safari on iOS: 15.5

**MDN:**
- [HTML inert global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/inert)

### Interest invokers

Interest invokers, registered by the `interestfor` HTML attribute, trigger events and actions on a target element when a user shows interest in the element, through behaviors such as hover, focus, or long-press. Pseudo-elements apply styles to sources and targets of interest.

**Spec:**
- <https://github.com/whatwg/html/pull/11006>

**Browser support:**
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

**Browser support:**
- Chrome: 116
- Chrome Android: 116
- Edge: 116
- Firefox: 125
- Firefox for Android: 125
- Safari: 17
- Safari on iOS: 18.3

**MDN:**
- [Popover API](https://developer.mozilla.org/docs/Web/API/Popover_API)

### popover="hint"

The `popover="hint"` global HTML attribute creates a popover that is subordinate to popovers with a `popover="auto"` attribute. You can use this to create tooltips that don't dismiss `auto` popovers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/popover.html#attr-popover-hint>

**Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTML popover global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/popover#hint)

### srcset and sizes

The `srcset` and `sizes` attributes for `<img>` elements set a list of possible sources for the image and a corresponding list of size conditions for choosing a source, to show a responsive image that fits the size of the display.

**Spec:**
- <https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 13
- Firefox: 38
- Firefox for Android: 38
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [`<img>`: The Image Embed element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#srcset)
- [`<img>`: The Image Embed element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#sizes)

### style (attribute)

The `style` global HTML attribute applies inline CSS styling declarations to individual elements.

**Spec:**
- <https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [HTML style global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/style)

### tabindex

The `tabindex` HTML attribute make an element focusable, and sets the element's relative ordering for sequential focus navigation.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 18
- Firefox: 1.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [HTML tabindex global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/tabindex)

### ToggleEvent source

The `source` property of a `ToggleEvent` object is the element which triggered the `toggle` event to fire for a popover, `<dialog>`, or `<details>` element, if applicable.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#dom-toggleevent-source>

**Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: 145
- Firefox for Android: 145
- Safari: —
- Safari on iOS: —

**MDN:**
- [ToggleEvent: source property](https://developer.mozilla.org/docs/Web/API/ToggleEvent/source)
