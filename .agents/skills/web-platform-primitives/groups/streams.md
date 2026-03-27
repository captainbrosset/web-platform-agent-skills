# Streams

https://streams.spec.whatwg.org/

## Streams features

### Asynchronously iterable streams

Asynchronous iteration of a stream allows you to use `for await … of` loops to iterate through a stream's incoming data.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-asynciterator>

**Browser support:**
- Chrome: 124
- Chrome Android: 124
- Edge: 124
- Firefox: 110
- Firefox for Android: 110
- Safari: —
- Safari on iOS: —

**MDN:**
- [for await...of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for-await...of)

### Readable byte streams

A `ReadableStream` constructed with `{ type: "bytes" }` reads bytes from a stream without making extra copies, improving efficiency for streams of large chunks. Also known as BYOB or bring your own buffer.

**Spec:**
- <https://streams.spec.whatwg.org/>

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: 102
- Firefox for Android: 102
- Safari: —
- Safari on iOS: —

**MDN:**
- [Using readable byte streams](https://developer.mozilla.org/docs/Web/API/Streams_API/Using_readable_byte_streams)

### ReadableStream.from()

The `ReadableStream.from()` static method converts an iterable or async iterable object, such as an array or async generator function, into a readable stream.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-from>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 117
- Firefox for Android: 117
- Safari: —
- Safari on iOS: —

**MDN:**
- [ReadableStream: from() static method](https://developer.mozilla.org/docs/Web/API/ReadableStream/from_static)

### Streams

The streams API creates, composes, and consumes continuously generated data.

**Spec:**
- <https://streams.spec.whatwg.org/>

**Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: 102
- Firefox for Android: 102
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Streams API](https://developer.mozilla.org/docs/Web/API/Streams_API)

### Transferable streams

Streams are transferable objects, which can be moved between contexts such as windows and workers.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-transfer>

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 103
- Firefox for Android: 103
- Safari: —
- Safari on iOS: —

**MDN:**
- [Transferable objects](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Transferable_objects)

### TransformStream transformer cancel() method

The `cancel()` method of a `TransformStream` transformer cleans up resources when the readable side cancels or the writable side aborts.

**Spec:**
- <https://streams.spec.whatwg.org/#dom-transformer-cancel>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
