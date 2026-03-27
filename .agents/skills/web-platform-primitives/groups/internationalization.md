# Internationalization

JavaScript APIs for language- and region-specific string, number, and date handling. Also known as the Internationalization API.

## Internationalization features

### Intl.DurationFormat

The `Intl.DurationFormat` API creates a locale-aware formatter that turns an object representing a duration (such as days, hours, and minutes) into a string.

**Spec:**
- <https://tc39.es/proposal-intl-duration-format/>

**Baseline Newly Available since 2025-03-04**

**MDN:**
- [Intl.DurationFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat)

### Intl.Locale info

The getter methods of the `Intl.Locale` API provide supplemental information about a Unicode locale, such as the locale's calendar (for example, the first day in a week or the weekend start day), writing direction, 12- or 24-hour cycles, and numbering system.

**Spec:**
- <https://tc39.es/ecma402/#locale-objects>

**Limited Availability — Browser support:**
- Chrome: 130
- Chrome Android: 130
- Edge: 130
- Firefox: —
- Firefox for Android: —
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [Intl.Locale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

### Intl.Segmenter

The `Intl.Segmenter` API creates a locale-aware text splitter that can separate a string into meaningful graphemes, words, or sentences.

**Spec:**
- <https://tc39.es/ecma402/#segmenter-objects>

**Baseline Newly Available since 2024-04-16**

**MDN:**
- [Intl.Segmenter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
