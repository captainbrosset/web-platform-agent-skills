# Regular expressions

Web platform features about Regular expressions

## Regular expressions features

### RegExp compile()

The `compile()` method of `RegExp` objects recompiles an existing regular expression object using a new pattern and flags.

**Spec:**
- <https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-regexp.prototype.compile>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [RegExp.prototype.compile()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile)

### RegExp static properties

The `RegExp` object has several static properties to access the input and results of the most-recent regular expression match.

**Spec:**
- <https://github.com/tc39/proposal-regexp-legacy-features>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [RegExp.input ($_)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [RegExp.lastMatch ($&)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [RegExp.lastParen ($+)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [RegExp.leftContext ($`)](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [RegExp.$1, …, RegExp.$9](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
- [RegExp.rightContext ($')](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)

### RegExp.escape()

The `RegExp.escape()` static method takes a string and replaces any characters that are potentially special characters of a regular expression with equivalent escape sequences. For example, `RegExp.escape("[abc]")` returns `"\\[abc\\]"`.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-regexp.escape>

**Browser support:**
- Chrome: 136
- Chrome Android: 136
- Edge: 136
- Firefox: 134
- Firefox for Android: 134
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [RegExp.escape()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape)

### Regular expressions

The `RegExp` object represents a regular expression, a notation for matching text patterns.

**Spec:**
- <https://tc39.es/ecma262/multipage/text-processing.html#sec-regexp-regular-expression-objects>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
