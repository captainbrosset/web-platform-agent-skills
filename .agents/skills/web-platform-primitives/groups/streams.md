# Streams

https://streams.spec.whatwg.org/

## Streams features

### Asynchronously iterable streams

Asynchronous iteration of a stream allows you to use `for await … of` loops to iterate through a stream's incoming data.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-asynciterator>

**Limited Availability — Browser support:**
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

**Baseline Newly Available since 2026-03-24**

**MDN:**
- [Using readable byte streams](https://developer.mozilla.org/docs/Web/API/Streams_API/Using_readable_byte_streams)

### ReadableStream.from()

The `ReadableStream.from()` static method converts an iterable or async iterable object, such as an array or async generator function, into a readable stream.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-from>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 117
- Firefox for Android: 117
- Safari: —
- Safari on iOS: —

**MDN:**
- [ReadableStream: from() static method](https://developer.mozilla.org/docs/Web/API/ReadableStream/from_static)

### Transferable streams

Streams are transferable objects, which can be moved between contexts such as windows and workers.

**Spec:**
- <https://streams.spec.whatwg.org/#rs-transfer>

**Limited Availability — Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 103
- Firefox for Android: 103
- Safari: —
- Safari on iOS: —

**MDN:**
- [Transferable objects](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Transferable_objects)
