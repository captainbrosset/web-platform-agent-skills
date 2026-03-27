# Arrays

Web platform features about Arrays

## Arrays features

### Array (initial support)

Arrays are ordered lists of JavaScript values.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array-objects>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array-constructor>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.concat>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-properties-of-array-instances-length>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.pop>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.push>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reverse>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.shift>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.slice>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tolocalestring>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.unshift>
- <https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-array-initializer>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

### Array flat() and flatMap()

The `flat()` and `flatMap()` methods for arrays creates a new array such that each nested array item is concatenated into it.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flat>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.flatmap>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 62
- Firefox for Android: 62
- Safari: 12
- Safari on iOS: 12

**MDN:**
- [Array.prototype.flat()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Array.prototype.flatMap()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

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

### Array iteration methods

Array iteration methods

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.indexof>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.lastindexof>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduceright>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some>

**Browser support:**
- Chrome: 3
- Chrome Android: 18
- Edge: 12
- Firefox: 3
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

### Array splice()

The array `splice()` method changes an array in-place. You can use it to delete items, overwrite items, or insert items, starting from an index.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.splice>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Array.prototype.splice()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

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

### Array.fromAsync()

The `Array.fromAsync()` static method copies items from an async iterable object to make a new array.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.fromasync>

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: 115
- Firefox for Android: 115
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Array.fromAsync()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)

### Array.isArray()

The `Array.isArray()` static method checks whether a value is an array.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.isarray>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 5

**MDN:**
- [Array.isArray()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

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

### Stable array sort

Stable array sort() function

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort>

**Browser support:**
- Chrome: 70
- Chrome Android: 70
- Edge: 79
- Firefox: 3
- Firefox for Android: 4
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Array.prototype.sort()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
