# Strings

Web platform features about Strings

## Strings features

### String isWellFormed() and toWellFormed()

The `isWellFormed()` method of strings returns a boolean indicating if the string contains any Unicode lone surrogates. The `toWellFormed()` method returns a new string where all lone surrogates are replaced by the Unicode replacement character.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-string-objects>

**Baseline Newly Available since 2023-10-24**

**MDN:**
- [String.prototype.isWellFormed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)
- [String.prototype.toWellFormed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed)
