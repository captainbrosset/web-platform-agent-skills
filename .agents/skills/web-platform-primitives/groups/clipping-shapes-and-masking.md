# Clipping, shapes, and masking

Methods of clipping, masking and creating shapes with CSS and SVG. Based on CSS-Next CSS 4 group

## Clipping, shapes, and masking features

### Clip path boxes

The `fill-box`, `stroke-box`, and `view-box` values for `clip-path` set an edge of the element's box to use as the clipping shape.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#the-clip-path>

**Baseline Newly Available since 2023-11-02**

**MDN:**
- [clip-path](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path)

### mask-border

The `mask-border` CSS property sets how the edges of an element are masked. It is a shorthand for `mask-border-outset`, `mask-border-repeat`, `mask-border-slice`, `mask-border-source`, and `mask-border-width`.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#mask-borders>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [mask-border](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border)

### Masks

The `mask` CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#positioned-masks>

**Baseline Newly Available since 2023-12-07**

**MDN:**
- [mask](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask)

### rect() and xywh()

The `rect()` CSS function creates a rectangle shape with insets from the edges of an element. The `xywh()` CSS function creates a rectangle shifted by an `x` and `y` distance. They can be used with `clip-path` and `shape-outside`.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-xywh>
- <https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-rect>

**Baseline Newly Available since 2024-01-23**

**MDN:**
- [rect()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/rect)
- [xywh()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/xywh)

### shape()

The `shape()` CSS function creates shapes with a series of commands like `line`, `move`, and `curve`. It can be used with `clip-path` and `shape-outside`.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#shape-function>

**Baseline Newly Available since 2026-02-24**

**MDN:**
- [shape()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/shape)
