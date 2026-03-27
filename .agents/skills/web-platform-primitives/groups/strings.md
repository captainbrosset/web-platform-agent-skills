# Strings

Web platform features about Strings

## Strings features

### String at()

The `at()` method of strings returns the character (one UTF-16 code unit) at an index, including negative indices for getting the character relative to the end of the string. Also known as the relative indexing method.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 92
- Chrome Android: 92
- Edge: 92
- Firefox: 90
- Firefox for Android: 90
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [String.prototype.at()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/at)

### String codePointAt() and fromCodePoint()

The `codePointAt()` method returns the numeric value of the UTF-16 code point at an index of the string. The `fromCodePoint()` method returns a string created from one or more code points.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 12
- Firefox: 29
- Firefox for Android: 29
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [String.prototype.codePointAt()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [String.fromCodePoint()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)

### String includes()

The `includes()` method of strings returns whether a search string appears within the string.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 12
- Firefox: 40
- Firefox for Android: 40
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [String.prototype.includes()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

### String isWellFormed() and toWellFormed()

The `isWellFormed()` method of strings returns a boolean indicating if the string contains any Unicode lone surrogates. The `toWellFormed()` method returns a new string where all lone surrogates are replaced by the Unicode replacement character.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 119
- Firefox for Android: 119
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [String.prototype.isWellFormed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)
- [String.prototype.toWellFormed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed)

### String matchAll()

The `matchAll()` method of strings matches a string against a regular expression and returns an iterator of all results, including capturing groups.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 73
- Chrome Android: 73
- Edge: 79
- Firefox: 67
- Firefox for Android: 67
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [String.prototype.matchAll()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

### String normalize()

The `normalize()` method of strings returns a Unicode normal form of a string as a new string. More than one code point sequence can represent the same characters. You can use the `normalize()` method to find canonically or compatibly equivalent strings.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 34
- Chrome Android: 34
- Edge: 12
- Firefox: 31
- Firefox for Android: 31
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [String.prototype.normalize()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

### String padStart() and padEnd()

The `padStart()` and `padEnd()` methods of strings return a string lengthened to a minimum number of characters by adding characters to the start or end of the string.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 15
- Firefox: 48
- Firefox for Android: 48
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [String.prototype.padEnd()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
- [String.prototype.padStart()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

### String raw()

The `String.raw()` static method interpolates template literal substitutions, but ignores escape sequences. It is the tag function for template literals.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 12
- Firefox: 34
- Firefox for Android: 34
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [String.raw()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/raw)

### String repeat()

The `repeat()` method of strings returns the original string repeated a number of times.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 41
- Chrome Android: 36
- Edge: 12
- Firefox: 24
- Firefox for Android: 24
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [String.prototype.repeat()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

### String replaceAll()

The `replaceAll()` method of strings returns a new string where all matches of a pattern (a string or regular expression) have been substituted with a replacement string.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 77
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [String.prototype.replaceAll()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

### String startsWith() and endsWith()

The `startsWith()` and `endsWith()` methods of strings returns whether a search string appears at the beginning or end of the provided string.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 41
- Chrome Android: 36
- Edge: 12
- Firefox: 17
- Firefox for Android: 17
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [String.prototype.endsWith()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [String.prototype.startsWith()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

### String trimStart() and trimEnd()

The `trimStart()` and `trimEnd()` methods of strings return a new string with whitespace removed from the beginning or end of the string.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: 61
- Firefox for Android: 61
- Safari: 12
- Safari on iOS: 12

**MDN:**
- [String.prototype.trimEnd()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
- [String.prototype.trimStart()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
