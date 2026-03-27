# Promises

Web platform features about Promises

## Promises features

### Promise.try()

The `Promise.try()` static method returns a promise that takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a `Promise`.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.try>

**Baseline Newly Available since 2025-01-07**

**MDN:**
- [Promise.try()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)

### Promise.withResolvers()

The `Promise.withResolvers()` static method is an alternative to the `Promise()` constructor that returns both the promise and resolution functions. You can use this to access `resolve` and `reject` outside the scope of the executor function.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.withResolvers>

**Baseline Newly Available since 2024-03-05**

**MDN:**
- [Promise.withResolvers()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)
