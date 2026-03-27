# Selection

Web platform features about Selection

## Selection features

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

### Selection composed ranges

The `window.getSelection().getComposedRanges()` method returns ranges that represent the current user selection, even if the selection spans across shadow tree boundaries.

**Spec:**
- <https://w3c.github.io/selection-api/#dom-selection-getcomposedranges>

**Baseline Newly Available since 2025-08-19**

**MDN:**
- [Selection: getComposedRanges() method](https://developer.mozilla.org/docs/Web/API/Selection/getComposedRanges)

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
