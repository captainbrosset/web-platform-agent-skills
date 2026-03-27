# Text wrap

Features relating to how lines break.

## Text wrap features

### Hyphenate character

The `hyphenate-character` CSS property sets the character or string to use at the end of a line before a line break.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#hyphenate-character>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [hyphenate-character](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character)

### Hyphenate limit chars

The `hyphenate-limit-chars` CSS property sets the number of characters in a word before it is hyphenated and the minimum number of characters on either side of the hyphen.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#hyphenate-char-limits>

**Limited Availability — Browser support:**
- Chrome: 109
- Chrome Android: 109
- Edge: 109
- Firefox: 137
- Firefox for Android: 137
- Safari: —
- Safari on iOS: —

**MDN:**
- [hyphenate-limit-chars](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars)

### text-wrap

The `text-wrap` CSS property sets how lines break in text that overflows the container. It is a shorthand for `text-wrap-style` and `text-wrap-mode`.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#text-wrap-shorthand>

**Baseline Newly Available since 2024-10-17**

**MDN:**
- [text-wrap](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap)

### text-wrap: balance

The `text-wrap: balance` CSS declaration balances the length of each line when text is broken into multiple lines. Also known as headline balancing.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#valdef-text-wrap-style-balance>

**Baseline Newly Available since 2024-05-13**

**MDN:**
- [text-wrap](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap)

### text-wrap: pretty

The `text-wrap: pretty` CSS declaration prioritizes better layout over speed when text is broken into multiple lines.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#valdef-text-wrap-style-pretty>

**Limited Availability — Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [text-wrap](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap)

### word-break: auto-phrase

The `word-break: auto-phrase` CSS declaration specifies that wrapping should occur at natural phrase boundaries, especially in CJK languages.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#valdef-word-break-auto-phrase>

**Limited Availability — Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [word-break](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break)
