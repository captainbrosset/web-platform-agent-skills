# Scrolling

Features related to scrollbar appearance and behavior, and scrolling content on a webpage.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Scroll markers](scroll-markers.md)

## Scrolling features

### ::column

The `::column` CSS pseudo-element represents the individual columns of a multi-column layout container. Columns can only be styled with scroll snap CSS properties and can also have a `::scroll-marker` pseudo-element, which scrolls to the column when activated.

**Spec:**
- <https://drafts.csswg.org/css-multicol-2/#column-pseudo>

**Limited Availability — Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [::column](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::column)

### overflow-anchor

The `overflow-anchor` CSS property sets an element as a possible scroll anchor, reducing unintended scrolling when document changes occur above the current scrollport. This is enabled by default where supported.

**Spec:**
- <https://drafts.csswg.org/css-scroll-anchoring-1/#exclusion-api>

**Limited Availability — Browser support:**
- Chrome: 56
- Chrome Android: 56
- Edge: 79
- Firefox: 66
- Firefox for Android: 66
- Safari: —
- Safari on iOS: —

**MDN:**
- [Overview of scroll anchoring](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
- [overflow-anchor](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor)

### Scroll snap events

The `scrollsnapchanging` and `scrollsnapchange` events fire when a scroll gesture changes the selected scroll snap target.

**Spec:**
- <https://drafts.csswg.org/css-scroll-snap-2/#scrollsnapchange-and-scrollsnapchanging>

**Limited Availability — Browser support:**
- Chrome: 129
- Chrome Android: 129
- Edge: 129
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Element: scrollsnapchange event](https://developer.mozilla.org/docs/Web/API/Element/scrollsnapchange_event)
- [Element: scrollsnapchanging event](https://developer.mozilla.org/docs/Web/API/Element/scrollsnapchanging_event)

### Scroll to text fragment

Text fragments are URL fragments on the form `#:~:text=snippet` and link to a snippet of text within a page. The browser may scroll, highlight, or otherwise bring that text to the reader's attention.

**Spec:**
- <https://wicg.github.io/scroll-to-text-fragment/>

**Baseline Newly Available since 2024-10-01**

**MDN:**
- [Text fragments](https://developer.mozilla.org/docs/Web/URI/Reference/Fragment/Text_fragments)

### Scroll-driven animations

The `animation-timeline`, `scroll-timeline`, and `view-timeline` CSS properties advance animations based on the user's scroll position.

**Spec:**
- <https://drafts.csswg.org/scroll-animations-1/>

**Limited Availability — Browser support:**
- Chrome: 115
- Chrome Android: 115
- Edge: 115
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [CSS scroll-driven animations](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll-driven_animations)

### scrollbar-color

The `scrollbar-color` CSS property sets the color of the scrollbar track and thumb.

**Spec:**
- <https://drafts.csswg.org/css-scrollbars-1/#scrollbar-color>

**Baseline Newly Available since 2025-12-12**

**MDN:**
- [scrollbar-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color)

### scrollbar-gutter

The `scrollbar-gutter` CSS property reserves space for the scrollbar, preventing unwanted layout changes as the scrollbar appears and disappears.

**Spec:**
- <https://drafts.csswg.org/css-overflow-3/#scrollbar-gutter-property>

**Baseline Newly Available since 2024-12-11**

**MDN:**
- [scrollbar-gutter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter)

### scrollbar-width

The `scrollbar-width` CSS property sets the width of the scrollbar.

**Spec:**
- <https://drafts.csswg.org/css-scrollbars-1/#scrollbar-width>

**Baseline Newly Available since 2024-12-11**

**MDN:**
- [scrollbar-width](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width)

### scrollend

The `scrollend` event fires when an element or document has finished scrolling.

**Spec:**
- <https://drafts.csswg.org/cssom-view-1/#eventdef-document-scrollend>

**Baseline Newly Available since 2025-12-12**

**MDN:**
- [Document: scrollend event](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

### scrollIntoView() container

The `container` option of the `scrollIntoView()` method sets which ancestor scroll container to scroll. The `"nearest"` value scrolls only the nearest ancestor, instead of the default `"all"`.

**Spec:**
- <https://drafts.csswg.org/cssom-view-1/#dom-scrollintoviewoptions-container>

**Limited Availability — Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
