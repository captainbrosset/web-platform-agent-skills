# Scroll markers

https://drafts.csswg.org/css-overflow-5/#scroll-markers The collection of things that make up scroll-markers. It's likely that all of the items in this group will some day merge into the `scroll-markers` feature, but until we have the machinery to represent feature merges, this is a good way to find them all.

## Scroll markers features

### Scroll marker target pseudo-classes

The `:target-current` CSS pseudo-class selects the active scroll marker (as in `::scroll-marker`), while the `:target-after` and `:target-before` pseudo-classes select the inactive markers preceding and following the active scroll marker.

**Spec:**
- <https://drafts.csswg.org/css-overflow-5/#active-before-after-scroll-markers>

**Browser support:**
- Chrome: 142
- Chrome Android: 142
- Edge: 142
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [:target-after](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:target-after)
- [:target-before](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:target-before)
- [:target-current](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:target-current)

### Scroll markers

A scroll marker scrolls a container to a scroll target. The `::scroll-marker` CSS pseudo-element selects a scroll marker in a `::scroll-marker-group` pseudo-element, generated before or after the scroll container. You can use them to navigate and style tables of contents, tab panels, and carousels.

**Spec:**
- <https://drafts.csswg.org/css-overflow-5/#scroll-markers>

**Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [scroll-marker-group](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-marker-group)
- [::scroll-marker](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::scroll-marker)
- [::scroll-marker-group](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::scroll-marker-group)

### scroll-target-group

The `scroll-target-group` CSS property sets the container where anchor links act as scroll markers. Using selectors such as `:target-current`, you can style elements when a target has scrolled into view. It's an alternative to the `::scroll-marker-group` pseudo-element, which generates scroll markers.

**Spec:**
- <https://drafts.csswg.org/css-overflow-5/#scroll-target-group>

**Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [scroll-target-group](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-target-group)
