# Container queries

https://drafts.csswg.org/css-conditional-5/#container-queries

## Container queries features

### Container scroll-state queries

Container scroll-state queries with the `@container scroll-state(...)` at-rule apply styles to an element based on the sticky positioning, snapped, and scrollable state of the container.

**Spec:**
- <https://drafts.csswg.org/css-conditional-5/#scroll-state-container>

**Limited Availability — Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Using container scroll-state queries](https://developer.mozilla.org/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)

### Container style queries

Container style queries with the `@container` at-rule apply styles to an element based on the values of custom properties of its container.

**Spec:**
- <https://drafts.csswg.org/css-conditional-5/#style-container>

**Limited Availability — Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: —
- Firefox for Android: —
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [@container](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)

### Range syntax for style queries

The `@container style()` CSS at-rule and `if(style())` CSS function queries accept a range syntax, such as `>`, `<`, `>=`, `<=`, to query for inexact values.

**Spec:**
- <https://drafts.csswg.org/css-conditional-5/#typedef-style-range>

**Limited Availability — Browser support:**
- Chrome: 142
- Chrome Android: 142
- Edge: 142
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
