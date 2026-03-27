# Print media

Web platform features about Print media

## Print media features

### Page selectors

The `:first`, `:left`, and `:right` pseudo-classes select pages based on their position in sequence after pagination.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#page-selectors>

**Browser support:**
- Chrome: 18
- Chrome Android: 18
- Edge: 12
- Firefox: —
- Firefox for Android: —
- Safari: 6
- Safari on iOS: 6

**MDN:**
- [:first](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:first)
- [:left](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:left)
- [:right](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:right)

### Page setup

The `@page` CSS at-rule sets the page-specific dimensions and margins for content such as printed documents, ebooks, or slides.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#at-page-rule>

**Browser support:**
- Chrome: 15
- Chrome Android: 18
- Edge: 79
- Firefox: 95
- Firefox for Android: 95
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [@page](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@page)

### page-orientation

The `page-orientation` CSS property sets the rotation of a page after pagination. This allows pages with the same `size` declaration to display with different orientations.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#page-orientation-prop>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 122
- Firefox for Android: 122
- Safari: —
- Safari on iOS: —

**MDN:**
- [page-orientation](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@page/page-orientation)

### Print events

An alternative to `@media print` queries, the `beforeprint` and `afterprint` events allow you to change the page for printing and and restore the page after printing.

**Spec:**
- <https://html.spec.whatwg.org/multipage/indices.html#event-afterprint>
- <https://html.spec.whatwg.org/multipage/indices.html#event-beforeprint>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 12
- Firefox: 6
- Firefox for Android: 6
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [Window: afterprint event](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)
- [Window: beforeprint event](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

### print-color-adjust

The `print-color-adjust` CSS property sets whether styles of printed pages should be adjusted to use less ink, in cases such as light text on a dark background.

**Spec:**
- <https://drafts.csswg.org/css-color-adjust-1/#propdef-print-color-adjust>

**Browser support:**
- Chrome: 136
- Chrome Android: 136
- Edge: 136
- Firefox: 97
- Firefox for Android: 97
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [print-color-adjust](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust)

### window.print()

The `window.print()` method opens the browser's print dialog.

**Spec:**
- <https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#printing>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 114
- Safari: 1.1
- Safari on iOS: 1

**MDN:**
- [Window: print() method](https://developer.mozilla.org/docs/Web/API/Window/print)
