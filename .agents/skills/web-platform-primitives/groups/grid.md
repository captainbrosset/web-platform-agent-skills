# Grid

https://drafts.csswg.org/css-grid/ (any level) but excluding Masonry, as it's currently being debated if it should be part of Grid or not: https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/ https://developer.chrome.com/blog/masonry

## Grid features

### Gap decorations

The `column-rule` and `row-rule` CSS properties display decorative lines between columns and rows of a flex, grid, or multi-column layout. The `rule-break`, `rule-outset`, and `rule-paint-order` properties control the appearance of these lines.

**Spec:**
- <https://drafts.csswg.org/css-gaps-1/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Grid

CSS grid is a two-dimensional layout system, which lays content out in rows and columns.

**Spec:**
- <https://drafts.csswg.org/css-grid-3/>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 16
- Firefox: 52
- Firefox for Android: 52
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [CSS grid layout](https://developer.mozilla.org/docs/Web/CSS/Guides/Grid_layout)

### Grid animation

Grid animation allows you to animate the `grid-template-columns` and `grid-template-rows` CSS properties.

**Spec:**
- <https://drafts.csswg.org/css-grid-2/#track-sizing>

**Browser support:**
- Chrome: 107
- Chrome Android: 107
- Edge: 107
- Firefox: 66
- Firefox for Android: 66
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [grid-template-columns](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns)
- [grid-template-rows](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows)

### Subgrid

The `subgrid` value for the `grid-template-columns` and `grid-template-rows` properties allows a grid item to inherit the grid definition of its parent grid container.

**Spec:**
- <https://drafts.csswg.org/css-grid-2/#subgrids>

**Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: 71
- Firefox for Android: 79
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [Subgrid](https://developer.mozilla.org/docs/Web/CSS/Guides/Grid_layout/Subgrid)
