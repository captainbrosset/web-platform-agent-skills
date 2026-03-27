# Clipping, shapes, and masking

Methods of clipping, masking and creating shapes with CSS and SVG. Based on CSS-Next CSS 4 group

## Clipping, shapes, and masking features

### Animatable clipping paths

The `clip-path` property can be animated using CSS transitions and animations.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#the-clip-path>

**Browser support:**
- Chrome: 55
- Chrome Android: 55
- Edge: 79
- Firefox: 49
- Firefox for Android: 49
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [clip-path](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path)

### Clip path boxes

The `fill-box`, `stroke-box`, and `view-box` values for `clip-path` set an edge of the element's box to use as the clipping shape.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#the-clip-path>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 54
- Firefox for Android: 54
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [clip-path](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path)

### clip-path

The `clip-path` CSS property and SVG attribute set the visible area of an element. Everything outside the area will be hidden.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#the-clip-path>

**Browser support:**
- Chrome: 88
- Chrome Android: 88
- Edge: 88
- Firefox: 71
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13

**MDN:**
- [clip-path](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path)
- [clip-path](https://developer.mozilla.org/docs/Web/SVG/Reference/Attribute/clip-path)

### mask-border

The `mask-border` CSS property sets how the edges of an element are masked. It is a shorthand for `mask-border-outset`, `mask-border-repeat`, `mask-border-slice`, `mask-border-source`, and `mask-border-width`.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#mask-borders>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [mask-border](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border)

### mask-type

The `mask-type` CSS property on an SVG `<mask>` element sets whether the mask is a `luminance` or `alpha` mask.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#the-mask-type>

**Browser support:**
- Chrome: 24
- Chrome Android: 25
- Edge: 79
- Firefox: 35
- Firefox for Android: 35
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [mask-type](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type)

### Masks

The `mask` CSS property (and several longhand properties) partially or completely hides an element according to the shape and depth of an image.

**Spec:**
- <https://drafts.csswg.org/css-masking-1/#positioned-masks>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 53
- Firefox for Android: 53
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [mask](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask)

### rect() and xywh()

The `rect()` CSS function creates a rectangle shape with insets from the edges of an element. The `xywh()` CSS function creates a rectangle shifted by an `x` and `y` distance. They can be used with `clip-path` and `shape-outside`.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-xywh>
- <https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-rect>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 122
- Firefox for Android: 122
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [rect()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/rect)
- [xywh()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/xywh)

### shape-outside

The `shape-outside` CSS property, along with `shape-margin` and `shape-image-threshold`, sets the shape around which adjacent content will wrap.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#declaring-shapes>

**Browser support:**
- Chrome: 37
- Chrome Android: 37
- Edge: 79
- Firefox: 62
- Firefox for Android: 62
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [shape-outside](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside)

### shape()

The `shape()` CSS function creates shapes with a series of commands like `line`, `move`, and `curve`. It can be used with `clip-path` and `shape-outside`.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#shape-function>

**Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: 148
- Firefox for Android: 148
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [shape()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/shape)

### shapes

The `circle()`, `ellipse()`, `inset()`, and `polygon()` CSS shape functions create shapes for use with `clip-path` and `shape-outside`.

**Spec:**
- <https://drafts.csswg.org/css-shapes-1/#basic-shape-functions>

**Browser support:**
- Chrome: 37
- Chrome Android: 37
- Edge: 79
- Firefox: 54
- Firefox for Android: 54
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [`<basic-shape>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape)
- [circle()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/circle)
- [ellipse()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/ellipse)
- [inset()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/inset)
- [polygon()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/polygon)
- [rect()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/rect)
- [shape()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/shape)
- [xywh()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/xywh)
