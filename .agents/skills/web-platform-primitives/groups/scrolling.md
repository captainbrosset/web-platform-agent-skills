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

### ::scroll-button

The `::scroll-button(<dir>)` CSS pseudo-element is a focusable button which scrolls its originating scroll container element in the specified direction.

**Spec:**
- <https://drafts.csswg.org/css-overflow-5/#scroll-buttons>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [::scroll-button()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::scroll-button)

### overflow-anchor

The `overflow-anchor` CSS property sets an element as a possible scroll anchor, reducing unintended scrolling when document changes occur above the current scrollport. This is enabled by default where supported.

**Spec:**
- <https://drafts.csswg.org/css-scroll-anchoring-1/#exclusion-api>

**Browser support:**
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

### overscroll-behavior

The `overscroll-behavior` CSS property disables default scrolling behaviors when the edges of a scrolling area are reached.

**Spec:**
- <https://drafts.csswg.org/css-overscroll-1/>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 18
- Firefox: 59
- Firefox for Android: 59
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [overscroll-behavior](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior)

### Scroll snap

CSS scroll snap controls the panning and scrolling behavior within a scroll container.

**Spec:**
- <https://drafts.csswg.org/css-scroll-snap-2/>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 68
- Firefox for Android: 68
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [CSS scroll snap](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll_snap)

### Scroll snap events

The `scrollsnapchanging` and `scrollsnapchange` events fire when a scroll gesture changes the selected scroll snap target.

**Spec:**
- <https://drafts.csswg.org/css-scroll-snap-2/#scrollsnapchange-and-scrollsnapchanging>

**Browser support:**
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

**Browser support:**
- Chrome: 80
- Chrome Android: 80
- Edge: 80
- Firefox: 131
- Firefox for Android: 131
- Safari: 16.1
- Safari on iOS: 16.1

**MDN:**
- [Text fragments](https://developer.mozilla.org/docs/Web/URI/Reference/Fragment/Text_fragments)

### scroll-behavior

The `scroll-behavior` CSS property controls whether scrolling is smooth or snaps, for scroll actions not performed by the user such as those triggered by navigation.

**Spec:**
- <https://drafts.csswg.org/css-overflow-3/#smooth-scrolling>

**Browser support:**
- Chrome: 61
- Chrome Android: 61
- Edge: 79
- Firefox: 36
- Firefox for Android: 36
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [scroll-behavior](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior)

### Scroll-driven animations

The `animation-timeline`, `scroll-timeline`, and `view-timeline` CSS properties advance animations based on the user's scroll position.

**Spec:**
- <https://drafts.csswg.org/scroll-animations-1/>

**Browser support:**
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

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: 64
- Firefox for Android: 64
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [scrollbar-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color)

### scrollbar-gutter

The `scrollbar-gutter` CSS property reserves space for the scrollbar, preventing unwanted layout changes as the scrollbar appears and disappears.

**Spec:**
- <https://drafts.csswg.org/css-overflow-3/#scrollbar-gutter-property>

**Browser support:**
- Chrome: 94
- Chrome Android: 94
- Edge: 94
- Firefox: 97
- Firefox for Android: 97
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [scrollbar-gutter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter)

### scrollbar-width

The `scrollbar-width` CSS property sets the width of the scrollbar.

**Spec:**
- <https://drafts.csswg.org/css-scrollbars-1/#scrollbar-width>

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: 64
- Firefox for Android: 64
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [scrollbar-width](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width)

### scrollend

The `scrollend` event fires when an element or document has finished scrolling.

**Spec:**
- <https://drafts.csswg.org/cssom-view-1/#eventdef-document-scrollend>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 109
- Firefox for Android: 109
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [Document: scrollend event](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

### scrollIntoView()

The `scrollIntoView()` method scrolls an element's ancestor containers such that the element is visible to the user.

**Spec:**
- <https://drafts.csswg.org/cssom-view-1/#dom-element-scrollintoview>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 79
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [Element: scrollIntoView() method](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)

### scrollIntoView() container

The `container` option of the `scrollIntoView()` method sets which ancestor scroll container to scroll. The `"nearest"` value scrolls only the nearest ancestor, instead of the default `"all"`.

**Spec:**
- <https://drafts.csswg.org/cssom-view-1/#dom-scrollintoviewoptions-container>

**Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
