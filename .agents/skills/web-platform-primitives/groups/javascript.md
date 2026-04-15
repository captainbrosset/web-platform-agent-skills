# JavaScript

https://tc39.es/ecma262/ (any edition)

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Collections](collections.md)
- [Internationalization](internationalization.md)
- [Iterators](iterators.md)
- [JavaScript modules](javascript-modules.md)
- [JSON](json.md)
- [Primitive types](primitive-types.md)
- [Promises](promises.md)
- [Regular expressions](regular-expressions.md)

## JavaScript features

### Atomics.pause()

The `Atomics.pause()` static method gives a hint to the CPU that the code calling the method is in a short-duration wait for shared memory, known as spinning or a spinlock.

**Spec:**
- <https://tc39.es/proposal-atomics-microwait/>

**Baseline Newly Available since 2025-04-01**

**MDN:**
- [Atomics.pause()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics/pause)

### Atomics.waitAsync()

The `Atomics.waitAsync()` static method waits for a value in a shared memory location, providing a promise when the expected value is not yet in memory. The `waitAsync()` method is a non-blocking alternative to `Atomics.wait()`.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.waitasync>

**Baseline Newly Available since 2025-11-11**

**MDN:**
- [Atomics.waitAsync()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync)

### Error.isError()

The `Error.isError()` static method checks whether a value is an `Error` object.

**Spec:**
- <https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-error.iserror>

**Limited Availability — Browser support:**
- Chrome: 134
- Chrome Android: 134
- Edge: 134
- Firefox: 138
- Firefox for Android: 138
- Safari: —
- Safari on iOS: —

**MDN:**
- [Error.isError()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/isError)

### Math.sumPrecise()

The `Math.sumPrecise()` static method returns the sum of an iterable of numbers. It avoids the precision loss of intermediate partial sums, as found using `reduce()` or a loop to add together an array of values.

**Spec:**
- <https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.sumprecise>

**Limited Availability — Browser support:**
- Chrome: 147
- Chrome Android: 147
- Edge: —
- Firefox: 137
- Firefox for Android: 137
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [Math.sumPrecise()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise)

### Resizable buffers

The `resize()` method of an `ArrayBuffer` and the `grow()` method of a `SharedArrayBuffer`, constructed with the `maxByteLength` option, changes the size of the buffer in place.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-get-arraybuffer.prototype.resizable>
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-get-sharedarraybuffer.prototype.growable>

**Baseline Newly Available since 2024-07-09**

**MDN:**
- [ArrayBuffer.prototype.resize()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize)
- [SharedArrayBuffer.prototype.grow()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)

### Temporal

The `Temporal` API allows you to work with dates, times, time zones, and durations. It is more powerful than the `Date` API.

**Spec:**
- <https://tc39.es/proposal-temporal/>

**Limited Availability — Browser support:**
- Chrome: 144
- Chrome Android: 144
- Edge: 144
- Firefox: 139
- Firefox for Android: 139
- Safari: —
- Safari on iOS: —

**MDN:**
- [Temporal](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal)

### Top-level await

The `await` keyword, when used at the top level of a module (outside of an async function), delays parent module execution until after a promise fulfills.

**Spec:**
- <https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-async-function-definitions>

**Limited Availability — Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: 89
- Firefox for Android: 89
- Safari: —
- Safari on iOS: —

**MDN:**
- [await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await#top_level_await)

### Transferable ArrayBuffer

The `transfer()` and `transferToFixedLength()` methods of `ArrayBuffer` move a buffer from one context to another (for example, to a worker).

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-arraybuffer.prototype.transfer>

**Baseline Newly Available since 2024-03-05**

**MDN:**
- [ArrayBuffer.prototype.transfer()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer)
- [ArrayBuffer.prototype.transferToFixedLength()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength)
