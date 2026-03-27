# Layout

CSS layout features which give size and positions to boxes.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Flexbox](flexbox.md)
- [Grid](grid.md)
- [Multi-column](multi-column.md)
- [Positioning](positioning.md)

## Layout features

### align-content in block layouts

The `align-content` property vertically aligns content in block layouts, like it does in flex or grid layouts.

**Spec:**
- <https://drafts.csswg.org/css-align-3/#align-justify-content>

**Baseline Newly Available since 2024-04-16**

**MDN:**
- [align-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content)

### Column breaks

In columnar layouts (created by the `columns` or `column-count` CSS properties), the `break-after`, `break-before`, `break-inside` properties control where columns start or end.

**Spec:**
- <https://drafts.csswg.org/css-break-3/#breaking-controls>

**Limited Availability — Browser support:**
- Chrome: 102
- Chrome Android: 102
- Edge: 102
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [break-after](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after)
- [break-before](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before)
- [break-inside](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside)

### justify-self in block layouts

The `justify-self` CSS property aligns an item along a container's inline axis in block layouts, like it does in grid layouts. Likewise, the `justify-items` property sets a default `justify-self` value for all items in a container in a block layout.

**Spec:**
- <https://drafts.csswg.org/css-align-3/#justify-block>

**Limited Availability — Browser support:**
- Chrome: 130
- Chrome Android: 130
- Edge: 130
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Page setup

The `@page` CSS at-rule sets the page-specific dimensions and margins for content such as printed documents, ebooks, or slides.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#at-page-rule>

**Baseline Newly Available since 2024-12-11**

**MDN:**
- [@page](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@page)

### page-orientation

The `page-orientation` CSS property sets the rotation of a page after pagination. This allows pages with the same `size` declaration to display with different orientations.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#page-orientation-prop>

**Limited Availability — Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 122
- Firefox for Android: 122
- Safari: —
- Safari on iOS: —

**MDN:**
- [page-orientation](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@page/page-orientation)

### stretch

The `stretch` CSS keyword expands a box as needed to fit its contents until the maximum size is reached, without preserving the content's preferred aspect ratio.

**Spec:**
- <https://drafts.csswg.org/css-sizing-4/#stretch-fit-sizing>

**Limited Availability — Browser support:**
- Chrome: 138
- Chrome Android: 138
- Edge: 138
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [height](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height)

### Widows and orphans

The `widows` and `orphans` CSS properties set the minimum lines included in a text fragment created by page, column, or region breaks.

**Spec:**
- <https://drafts.csswg.org/css-break-4/#widows-orphans>

**Limited Availability — Browser support:**
- Chrome: 25
- Chrome Android: 25
- Edge: 12
- Firefox: —
- Firefox for Android: —
- Safari: 1.3
- Safari on iOS: 1

**MDN:**
- [widows](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows)
- [orphans](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans)
