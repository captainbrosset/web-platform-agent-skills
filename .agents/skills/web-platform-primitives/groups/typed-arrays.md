# Typed arrays

Web platform features about Typed arrays

## Typed arrays features

### Array at()

The `at()` method of arrays and typed arrays returns the item at an index, including negative indices for getting items relative to the end of an array. Also known as the relative indexing method.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at>

**Browser support:**
- Chrome: 92
- Chrome Android: 92
- Edge: 92
- Firefox: 90
- Firefox for Android: 90
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [Array.prototype.at()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

### Array by copy

The `toReversed()`, `toSorted()`, `toSpliced()`, and `with()` methods of arrays and typed arrays return changed copies of arrays. They stand in contrast to methods such as `sort()` or `reverse()` that change arrays in place.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.toreversed>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tospliced>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.with>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.toreversed>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.tosorted>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.with>

**Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: 115
- Firefox for Android: 115
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [Array.prototype.toReversed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [Array.prototype.toSorted()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [Array.prototype.toSpliced()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [Array.prototype.with()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

### Array copyWithin()

The `copyWithin()` method of arrays and typed arrays shifts or copies items of an array to another index of the array without changing its length.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.copywithin>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 34
- Firefox for Android: 34
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.prototype.copyWithin()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [TypedArray.prototype.copyWithin()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin)

### Array fill()

The `fill()` method of arrays and typed arrays sets all or some items of an array to a given a value.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.fill>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.fill>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 37
- Firefox for Android: 37
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.prototype.fill()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [TypedArray.prototype.fill()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill)

### Array find() and findIndex()

The `find()` and `findIndex()` methods of arrays and typed arrays search an array for the first item that satisfies a test function.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findindex>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.find>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.findindex>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 37
- Firefox for Android: 37
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.prototype.find()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### Array findLast() and findLastIndex()

The `findLast()` and `findLastIndex()` methods of arrays and typed arrays search an array in reverse order for the first item that satisfies a test function.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlast>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.findlastindex>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.findlast>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.findlastindex>

**Browser support:**
- Chrome: 97
- Chrome Android: 97
- Edge: 97
- Firefox: 104
- Firefox for Android: 104
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [Array.prototype.findLast()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

### Array includes()

The `includes()` method of arrays and typed arrays returns whether a given value appears in the array.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.includes>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.includes>

**Browser support:**
- Chrome: 47
- Chrome Android: 47
- Edge: 14
- Firefox: 43
- Firefox for Android: 43
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.prototype.includes()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [TypedArray.prototype.includes()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes)

### Array.from()

The `Array.from()` and typed array `.from()` static methods copy items from an iterable or array-like object to make a new array.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.from>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.of>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 38
- Firefox for Android: 38
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.from()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [TypedArray.from()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)

### Array.of()

The `Array.of()` and typed array `.of()` static methods create new arrays from the values of any number of arguments.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.of>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.of>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 38
- Firefox for Android: 38
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [Array.of()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- [TypedArray.of()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of)

### Float16Array

Float16Array is a typed array of 16-bit floating point numbers.

**Spec:**
- <https://tc39.es/ecma262/multipage/global-object.html#sec-float16array>

**Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: 129
- Firefox for Android: 129
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [Float16Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float16Array)

### Typed array iteration methods

Typed array iteration methods

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.every>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.filter>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.foreach>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.indexof>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.lastindexof>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.map>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.reduce>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.reduceright>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.some>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 12
- Firefox: 38
- Firefox for Android: 38
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [TypedArray.prototype.every()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every)
- [TypedArray.prototype.filter()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter)
- [TypedArray.prototype.forEach()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach)
- [TypedArray.prototype.indexOf()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf)
- [TypedArray.prototype.lastIndexOf()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf)
- [TypedArray.prototype.map()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)
- [TypedArray.prototype.reduce()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce)
- [TypedArray.prototype.reduceRight()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight)
- [TypedArray.prototype.some()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some)

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

### Typed arrays (initial support)

Typed arrays are ordered lists of JavaScript values, where all values are of the same numerical type, such as 8-bit integers or 32-bit floating point numbers.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#table-49>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-typedarray-constructors>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-typedarray-objects>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-typedarray.bytes_per_element>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-get-%25typedarray%25.prototype.buffer>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-get-%25typedarray%25.prototype.bytelength>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-get-%25typedarray%25.prototype.byteoffset>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.join>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-get-%25typedarray%25.prototype.length>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-properties-of-the-typedarray-constructors>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.reverse>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.set>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.slice>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.sort>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.subarray>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.tolocalestring>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-%25typedarray%25.prototype.tostring>

**Browser support:**
- Chrome: 7
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 5.1
- Safari on iOS: 4.2

**MDN:**
- [JavaScript typed arrays](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Typed_arrays)

### Uint8Array base64 and hex conversion

The `Uint8Array` object methods `fromBase64()`, `toBase64()`, and `setFromBase64()` convert to and from base64 strings. The `fromHex()`, `toHex()`, and `setFromHex()` methods convert to and from hex strings.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-additional-properties-of-the-uint8array-constructor>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-additional-properties-of-the-uint8array-prototype-object>

**Browser support:**
- Chrome: 140
- Chrome Android: 140
- Edge: 140
- Firefox: 133
- Firefox for Android: 133
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [Uint8Array.fromBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64)
- [Uint8Array.prototype.toBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64)
- [Uint8Array.prototype.setFromBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64)
