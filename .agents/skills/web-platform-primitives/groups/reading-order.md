# Reading order

Features that change the order in which content can be reached, such as through screen readers and sequential keyboard navigation.

## Reading order features

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

### reading-flow

The `reading-flow` CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation. The `reading-order` property overrides this order.

**Spec:**
- <https://drafts.csswg.org/css-display-4/#reading-flow>

**Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [reading-flow](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/reading-flow)

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
