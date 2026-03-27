# Selectors

CSS features that allow selecting elements in the DOM.

## Selectors features

### ::details-content

The `::details-content` pseudo-element selects the expandable content of a `<details>` element, excluding the `<summary>`.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#details-content-pseudo>

**Baseline Newly Available since 2025-09-16**

**MDN:**
- [::details-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::details-content)

### ::selection

The `::selection` CSS pseudo-element selects text a user has highlighted.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-selection>

**Limited Availability — Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 62
- Firefox for Android: 62
- Safari: 1.1
- Safari on iOS: —

**MDN:**
- [::selection](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::selection)

### ::spelling-error and ::grammar-error

The `::spelling-error` and `::grammar-error` CSS pseudo-elements match text that is highlighted as misspelled and grammatically incorrect, respectively.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-spelling-error>
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-grammar-error>

**Limited Availability — Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: —
- Firefox for Android: —
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [::grammar-error](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::grammar-error)
- [::spelling-error](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::spelling-error)

### :dir()

The `:dir()` CSS functional pseudo-class matches elements by text direction, either right to left (`rtl`) or left to right (`ltr`).

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-dir-pseudo>

**Baseline Newly Available since 2023-12-07**

**MDN:**
- [:dir()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:dir)

### :has-slotted

The `:has-slotted` CSS pseudo-class matches `<slot>` elements where the fallback content is not shown. The pseudo-class matches any slotted content, including white space, text nodes, or elements.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#the-has-slotted-pseudo>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:has-slotted](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has-slotted)

### :has()

The `:has()` CSS functional pseudo-class matches an element if any of the selectors passed as parameters would match at least one element.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#relational>

**Baseline Newly Available since 2023-12-19**

**MDN:**
- [:has()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has)

### :nth-child() of `<selector>`

The `of` syntax for the `:nth-child()` and `:nth-last-child()` CSS functional pseudo-classes match elements by the relative position of elements, counted from the first or last sibling matching a selector list.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-nth-child-pseudo>
- <https://drafts.csswg.org/selectors-4/#the-nth-last-child-pseudo>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [:nth-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-child)
- [:nth-last-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-last-child)

### :open

The `:open` CSS pseudo-class matches elements that have open states, like `<details>`, `<dialog>`, or `<select>`, based on their state.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#open-state>

**Limited Availability — Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:open](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:open)

### :user-valid and :user-invalid

The `:user-valid` and `:user-invalid` pseudo-classes match form controls that have been marked as valid or invalid based on their validation constraints.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#user-pseudos>

**Baseline Newly Available since 2023-11-02**

**MDN:**
- [:user-invalid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:user-invalid)
- [:user-valid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:user-valid)

### Active view transition

The `:active-view-transition` CSS pseudo-class matches the root element when a view transition is active. The `:active-view-transition-type()` CSS pseudo-class matches only when the active view transition was started with the specified type.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-2/#the-active-view-transition-pseudo>

**Baseline Newly Available since 2026-01-13**

**MDN:**
- [:active-view-transition](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:active-view-transition)

### Case-sensitive attribute selector

The `s` identifier in a CSS attribute selector matches attribute values case-sensitively in document languages like HTML where attribute values are case-insensitive.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#attribute-case>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 66
- Firefox for Android: 66
- Safari: —
- Safari on iOS: —

**MDN:**
- [Attribute selectors](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/Attribute_selectors)

### Page selectors

The `:first`, `:left`, and `:right` pseudo-classes select pages based on their position in sequence after pagination.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#page-selectors>

**Limited Availability — Browser support:**
- Chrome: 18
- Chrome Android: 18
- Edge: 12
- Firefox: —
- Firefox for Android: —
- Safari: 6
- Safari on iOS: 6

**MDN:**
- [:first](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:first)
- [:left](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:left)
- [:right](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:right)

### text-decoration in ::selection

The `text-decoration` CSS property in a `::selection` rule sets the underline and other text decoration styles on the text a user has highlighted.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#highlight-styling>

**Limited Availability — Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [::selection](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::selection)

### Time-relative pseudo-selectors

The `:past` and `:future` CSS pseudo-classes match prior or upcoming text track cues during media playback.

**Spec:**
- <https://w3c.github.io/webvtt/#the-past-and-future-pseudo-classes>

**Limited Availability — Browser support:**
- Chrome: 23
- Chrome Android: 25
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [:future](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:future)
- [:past](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:past)
