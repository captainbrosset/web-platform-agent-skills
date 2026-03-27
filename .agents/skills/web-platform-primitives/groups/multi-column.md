# Multi-column

CSS layout features which flow content into multiple columns

## Multi-column features

### ::column

The `::column` CSS pseudo-element represents the individual columns of a multi-column layout container. Columns can only be styled with scroll snap CSS properties and can also have a `::scroll-marker` pseudo-element, which scrolls to the column when activated.

**Spec:**
- <https://drafts.csswg.org/css-multicol-2/#column-pseudo>

**Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [::column](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::column)

### column-fill

The `column-fill` CSS property sets the distribution of content across columns in a multi-column layout.

**Spec:**
- <https://drafts.csswg.org/css-multicol-1/#filling-columns>

**Browser support:**
- Chrome: 50
- Chrome Android: 50
- Edge: 12
- Firefox: 52
- Firefox for Android: 52
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [column-fill](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill)

### column-span

The `column-span` CSS property controls whether a child element extends across all columns of a multi-column parent.

**Spec:**
- <https://drafts.csswg.org/css-multicol-1/#spanning-columns>

**Browser support:**
- Chrome: 50
- Chrome Android: 50
- Edge: 12
- Firefox: 71
- Firefox for Android: 79
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [column-span](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span)

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

### Multi-column layout

Multi-column layout flows an element's content across one or more columns in a single row, without affecting the `display` property of its children.

**Spec:**
- <https://drafts.csswg.org/css-multicol-1/>

**Browser support:**
- Chrome: 50
- Chrome Android: 50
- Edge: 12
- Firefox: 52
- Firefox for Android: 52
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [columns](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns)
