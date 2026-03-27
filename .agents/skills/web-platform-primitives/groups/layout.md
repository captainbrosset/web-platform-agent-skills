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

**Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: 125
- Firefox for Android: 125
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [align-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content)

### box-sizing

The `box-sizing` CSS property sets whether an element's width and height are calculated based on the `content-box`, which does not count the size of borders or padding, or `border-box`, which does count them.

**Spec:**
- <https://drafts.csswg.org/css-sizing-3/#propdef-box-sizing>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: 12
- Firefox: 29
- Firefox for Android: 29
- Safari: 5.1
- Safari on iOS: 6

**MDN:**
- [box-sizing](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing)

### Column breaks

In columnar layouts (created by the `columns` or `column-count` CSS properties), the `break-after`, `break-before`, `break-inside` properties control where columns start or end.

**Spec:**
- <https://drafts.csswg.org/css-break-3/#breaking-controls>

**Browser support:**
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

### fit-content

The `fit-content` CSS keyword expands a box as needed to fit its contents until the maximum size is reached, preserving the content's preferred aspect ratio.

**Spec:**
- <https://drafts.csswg.org/css-sizing-4/#valdef-width-fit-content>

**Browser support:**
- Chrome: 46
- Chrome Android: 46
- Edge: 79
- Firefox: 94
- Firefox for Android: 94
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [fit-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/fit-content)

### fit-content()

The `fit-content()` CSS function, used outside of a grid layout property, clamps a length between `min-content` and `max-content`.

**Spec:**
- <https://drafts.csswg.org/css-sizing-3/#funcdef-width-fit-content>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [fit-content()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/fit-content_function)

### justify-self in block layouts

The `justify-self` CSS property aligns an item along a container's inline axis in block layouts, like it does in grid layouts. Likewise, the `justify-items` property sets a default `justify-self` value for all items in a container in a block layout.

**Spec:**
- <https://drafts.csswg.org/css-align-3/#justify-block>

**Browser support:**
- Chrome: 130
- Chrome Android: 130
- Edge: 130
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### margin

The `margin` CSS property sets space around an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

**Spec:**
- <https://drafts.csswg.org/css-box-4/#margins>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [margin](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin)

### Masonry

The `display: grid-lanes` or `display: inline-grid-lanes` CSS declaration creates a layout where items are tightly packed, like brickwork, in parallel lanes. Items are placed one by one in the lane that has the most available space.

**Spec:**
- <https://drafts.csswg.org/css-grid-3/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Masonry layout](https://developer.mozilla.org/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)

### min-content and max-content

The `min-content` and `max-content` CSS keywords represent the smallest and largest intrinsic sizes of an element.

**Spec:**
- <https://drafts.csswg.org/css-sizing-3/#valdef-width-max-content>
- <https://drafts.csswg.org/css-sizing-3/#valdef-width-min-content>

**Browser support:**
- Chrome: 46
- Chrome Android: 46
- Edge: 79
- Firefox: 66
- Firefox for Android: 66
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [min-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/min-content)
- [max-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/max-content)

### padding

The `padding` CSS property sets space between an element's edge and its contents. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

**Spec:**
- <https://drafts.csswg.org/css-box-4/#paddings>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [padding](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding)

### Page breaks

In printed page layouts, the `break-after`, `break-before`, `break-inside` CSS properties control where printed pages start and end. Also known as pagination or page breaking.

**Spec:**
- <https://drafts.csswg.org/css-break-4/#breaking-controls>

**Browser support:**
- Chrome: 50
- Chrome Android: 50
- Edge: 12
- Firefox: 65
- Firefox for Android: 65
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [break-after](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after)
- [break-before](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before)
- [break-inside](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside)

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

### stretch

The `stretch` CSS keyword expands a box as needed to fit its contents until the maximum size is reached, without preserving the content's preferred aspect ratio.

**Spec:**
- <https://drafts.csswg.org/css-sizing-4/#stretch-fit-sizing>

**Browser support:**
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

**Browser support:**
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

### Width and height

The `width` and `height` CSS properties set the preferred physical size of an element.

**Spec:**
- <https://drafts.csswg.org/css-sizing-3/#preferred-size-properties>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [width](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width)
- [height](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height)
