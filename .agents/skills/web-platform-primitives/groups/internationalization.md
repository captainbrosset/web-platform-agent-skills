# Internationalization

JavaScript APIs for language- and region-specific string, number, and date handling. Also known as the Internationalization API.

## Internationalization features

### Intl

The `Intl` API provides language sensitive string comparison, number formatting, date and time formatting, and more.

**Spec:**
- <https://tc39.es/ecma402/#introduction>

**Browser support:**
- Chrome: 24
- Chrome Android: 25
- Edge: 12
- Firefox: 29
- Firefox for Android: 56
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Intl](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl)

### Intl.DisplayNames

The `Intl.DisplayNames` API provides localized names of language, region, script, and currency codes.

**Spec:**
- <https://tc39.es/ecma402/#intl-displaynames-objects>

**Browser support:**
- Chrome: 81
- Chrome Android: 81
- Edge: 81
- Firefox: 86
- Firefox for Android: 86
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Intl.DisplayNames](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)

### Intl.DurationFormat

The `Intl.DurationFormat` API creates a locale-aware formatter that turns an object representing a duration (such as days, hours, and minutes) into a string.

**Spec:**
- <https://tc39.es/proposal-intl-duration-format/>

**Browser support:**
- Chrome: 129
- Chrome Android: 129
- Edge: 129
- Firefox: 136
- Firefox for Android: 136
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Intl.DurationFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat)

### Intl.ListFormat

The `Intl.ListFormat` API creates a locale-aware formatter that turns iterable objects into localized strings.

**Spec:**
- <https://tc39.es/ecma402/#listformat-objects>

**Browser support:**
- Chrome: 72
- Chrome Android: 72
- Edge: 79
- Firefox: 78
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Intl.ListFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)

### Intl.Locale

The `Intl.Locale` API parses Unicode locale identifiers, with language, region, and script codes, such as `zh-Hans-CN` or `en-GB`.

**Spec:**
- <https://tc39.es/ecma402/#locale-objects>

**Browser support:**
- Chrome: 74
- Chrome Android: 74
- Edge: 79
- Firefox: 75
- Firefox for Android: 79
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [Intl.Locale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

### Intl.Locale info

The getter methods of the `Intl.Locale` API provide supplemental information about a Unicode locale, such as the locale's calendar (for example, the first day in a week or the weekend start day), writing direction, 12- or 24-hour cycles, and numbering system.

**Spec:**
- <https://tc39.es/ecma402/#locale-objects>

**Browser support:**
- Chrome: 130
- Chrome Android: 130
- Edge: 130
- Firefox: —
- Firefox for Android: —
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [Intl.Locale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

### Intl.PluralRules

The `Intl.PluralRules` API creates a locale-aware object that tells you which of the language's pluralization rules apply based on a given number.

**Spec:**
- <https://tc39.es/ecma402/#pluralrules-objects>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 18
- Firefox: 58
- Firefox for Android: 58
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [Intl.PluralRules](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)

### Intl.RelativeTimeFormat

The `Intl.RelativeTimeFormat` API creates a locale-aware formatter that turns an object representing a relative time (such as '1 day ago') into a localized string.

**Spec:**
- <https://tc39.es/ecma402/#relativetimeformat-objects>

**Browser support:**
- Chrome: 71
- Chrome Android: 71
- Edge: 79
- Firefox: 76
- Firefox for Android: 79
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [Intl.RelativeTimeFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)

### Intl.Segmenter

The `Intl.Segmenter` API creates a locale-aware text splitter that can separate a string into meaningful graphemes, words, or sentences.

**Spec:**
- <https://tc39.es/ecma402/#segmenter-objects>

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 125
- Firefox for Android: 125
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Intl.Segmenter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
