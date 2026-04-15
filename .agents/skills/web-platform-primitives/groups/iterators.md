# Iterators

Web platform features about Iterators

## Iterators features

### Iterator methods

The `Iterator` object is an abstract base for objects that implement the iterator protocol. It provides methods common to built-in iterators, such as `filter()`, `find()`, `map()`, and `reduce()`. You can also use the static method `Iterator.from()` to convert an existing iterable into an `Iterator`.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iterator-helper-objects>

**Baseline Newly Available since 2025-03-31**

**MDN:**
- [Iterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator)

### Iterator.concat()

The `Iterator.concat()` JavaScript method returns an iterator that yields values from a sequence of iterators, exhausting each iterator before moving on to the next.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iterator.concat>

**Baseline Newly Available since 2026-03-24**

**MDN:**
- [Iterator.concat()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator/concat)
