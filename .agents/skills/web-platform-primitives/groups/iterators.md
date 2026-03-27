# Iterators

Web platform features about Iterators

## Iterators features

### Array iterators

Arrays are iterable with the `for … of` statement and enumerable with the methods `entries()`, `keys()`, and `values()`.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype-@@iterator>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.entries>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.keys>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.values>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 14
- Firefox: 60
- Firefox for Android: 60
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [for...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)

### Async iterators and the for await..of loop

Asynchronous iterator objects, such as those returned by promises or generator functions, are iterable with the `for await .. of` loop.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-asynciteratorprototype>
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 79
- Firefox: 57
- Firefox for Android: 57
- Safari: 12
- Safari on iOS: 12

**MDN:**
- [for await...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for-await...of)

### Iterator methods

The `Iterator` object is an abstract base for objects that implement the iterator protocol. It provides methods common to built-in iterators, such as `filter()`, `find()`, `map()`, and `reduce()`. You can also use the static method `Iterator.from()` to convert an existing iterable into an `Iterator`.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iterator-helper-objects>

**Browser support:**
- Chrome: 122
- Chrome Android: 122
- Edge: 122
- Firefox: 131
- Firefox for Android: 131
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [Iterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)

### Iterator.concat()

The `Iterator.concat()` JavaScript method returns an iterator that yields values from a sequence of iterators, exhausting each iterator before moving on to the next.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iterator.concat>

**Browser support:**
- Chrome: 146
- Chrome Android: 146
- Edge: 146
- Firefox: 147
- Firefox for Android: 147
- Safari: —
- Safari on iOS: —

**MDN:**
- [Iterator.concat()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator/concat)

### Iterators and the for...of loop

The `for...of` loop operates on a sequence of values sourced from an iterable object, such as arrays, array-like objects, DOM collections, iterators, generators, and user-defined iterables. All built-in iterators inherit from the `Iterator` class.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-%iteratorprototype%-object>
- <https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 12
- Firefox: 13
- Firefox for Android: 14
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [for...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)

### Typed array iterators

Typed arrays are iterable with the `for … of` statement and enumerable with the methods `entries()`, `keys()`, and `values()`.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype-@@iterator>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.entries>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.keys>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.values>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 37
- Firefox for Android: 37
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [for...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)
- [TypedArray.prototype.entries()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries)
- [TypedArray.prototype.keys()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys)
- [TypedArray.prototype.values()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values)
