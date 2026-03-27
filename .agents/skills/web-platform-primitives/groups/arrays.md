# Arrays

Web platform features about Arrays

## Arrays features

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

### Array.fromAsync()

The `Array.fromAsync()` static method copies items from an async iterable object to make a new array.

**Spec:**
- <https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.fromasync>

**Baseline Newly Available since 2024-01-25**

**MDN:**
- [Array.fromAsync()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)
