# Typed arrays

Web platform features about Typed arrays

## Typed arrays features

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

**Baseline Widely Available since 2026-01-04**

**MDN:**
- [Array.prototype.toReversed()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [Array.prototype.toSorted()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [Array.prototype.toSpliced()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [Array.prototype.with()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

### Float16Array

Float16Array is a typed array of 16-bit floating point numbers.

**Spec:**
- <https://tc39.es/ecma262/multipage/global-object.html#sec-float16array>

**Baseline Newly Available since 2025-04-04**

**MDN:**
- [Float16Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float16Array)

### Uint8Array base64 and hex conversion

The `Uint8Array` object methods `fromBase64()`, `toBase64()`, and `setFromBase64()` convert to and from base64 strings. The `fromHex()`, `toHex()`, and `setFromHex()` methods convert to and from hex strings.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-additional-properties-of-the-uint8array-constructor>
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-additional-properties-of-the-uint8array-prototype-object>

**Baseline Newly Available since 2025-09-05**

**MDN:**
- [Uint8Array.fromBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64)
- [Uint8Array.prototype.toBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64)
- [Uint8Array.prototype.setFromBase64()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromBase64)
