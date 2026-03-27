# Promises

Web platform features about Promises

## Promises features

### Promise (initial support)

A promise represents an asynchronous operation which eventually succeeds or fails.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-objects>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-get-promise-@@species>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-constructor>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve>
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then>

**Browser support:**
- Chrome: 32
- Chrome Android: 32
- Edge: 12
- Firefox: 29
- Firefox for Android: 29
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Promise finally()

The promise `finally()` method executes a function when the promise settles (resolves or rejects).

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 18
- Firefox: 58
- Firefox for Android: 58
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Promise.prototype.finally()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

### Promise.allSettled()

The `Promise.allSettled()` static method waits for an array of promises to settle (resolve or reject).

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 71
- Firefox for Android: 79
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [Promise.allSettled()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

### Promise.any()

The `Promise.any()` static method returns a promise that fulfills as soon as the first of an iterable of promises fulfills, with that promise's value. Otherwise, it rejects with an `AggregateError` when all of the promises have rejected.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 79
- Firefox for Android: 79
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [Promise.any()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

### Promise.try()

The `Promise.try()` static method returns a promise that takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a `Promise`.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.try>

**Browser support:**
- Chrome: 128
- Chrome Android: 128
- Edge: 128
- Firefox: 134
- Firefox for Android: 134
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [Promise.try()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)

### Promise.withResolvers()

The `Promise.withResolvers()` static method is an alternative to the `Promise()` constructor that returns both the promise and resolution functions. You can use this to access `resolve` and `reject` outside the scope of the executor function.

**Spec:**
- <https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.withResolvers>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 121
- Firefox for Android: 121
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [Promise.withResolvers()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)
