# WebAssembly

WebAssembly (Wasm) features and extensions

## WebAssembly features

### BigInt to i64 conversion (WebAssembly)

Integer values pass bidirectionally between JavaScript and WebAssembly, converted to i64 values in WebAssembly or BigInt values in JavaScript.

**Spec:**
- <https://webassembly.github.io/spec/js-api/#ref-for-syntax-numtype①⓪>

**Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: 78
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

### Branch hinting (WebAssembly)

Branch hints in WebAssembly allows a browser to optimize performance when a branch is a likely to take a specific path.

**Spec:**
- <https://github.com/WebAssembly/branch-hinting/blob/main/proposals/branch-hinting/Overview.md>

**Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: 16
- Safari on iOS: 16

### Bulk memory operations (WebAssembly)

Bulk memory operations, such as `copy` and `init`, mirror the efficiency of native `memcpy` and `memmove` operations.

**Spec:**
- <https://github.com/WebAssembly/spec/blob/main/proposals/bulk-memory-operations/Overview.md>

**Browser support:**
- Chrome: 75
- Chrome Android: 75
- Edge: 79
- Firefox: 78
- Firefox for Android: 79
- Safari: 15.1
- Safari on iOS: 15.1

### Exception handling (WebAssembly)

Exceptions break the normal control flow of execution to represent exceptional behavior, such as an error. You can respond to the exception in JavaScript code.

**Spec:**
- <https://github.com/WebAssembly/exception-handling/blob/main/proposals/exception-handling/legacy/Exceptions.md>

**Browser support:**
- Chrome: 95
- Chrome Android: 95
- Edge: 95
- Firefox: 100
- Firefox for Android: 100
- Safari: 15.2
- Safari on iOS: 15.2

**MDN:**
- [WebAssembly.Exception](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception)
- [WebAssembly.Exception constructor](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception)
- [WebAssembly.Exception.prototype.getArg()](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)
- [WebAssembly.Exception.prototype.is()](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/is)
- [WebAssembly.Exception.prototype.stack](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack)
- [WebAssembly.Tag](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Tag)
- [WebAssembly.Tag() constructor](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
- [WebAssembly.Tag.prototype.type()](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)

### Exception references with exnref (WebAssembly)

When caught, an exception is reified into an exception reference, a value of the new type `exnref`.

**Spec:**
- <https://github.com/WebAssembly/exception-handling/blob/main/proposals/exception-handling/Exceptions.md>

**Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: —
- Firefox: 131
- Firefox for Android: 131
- Safari: 18.4
- Safari on iOS: 18.4

### Extended constant expressions (WebAssembly)

The `i32.add`, `i32.sub`, `i32.mul`, `i64.add`, `i64.sub`, and `i64.mul` operations extend constant expressions to include arithmetic.

**Spec:**
- <https://github.com/WebAssembly/extended-const/blob/main/proposals/extended-const/Overview.md>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 112
- Firefox for Android: 112
- Safari: 17.4
- Safari on iOS: 17.4

### Fixed-width SIMD (WebAssembly)

128-bit SIMD (Single Instruction Multiple Data) performs one instruction on multiple units of data, when running on hardware that supports such instructions. Also known as vector instructions.

**Spec:**
- <https://webassembly.github.io/spec/core/bikeshed/#vector-instructions>

**Browser support:**
- Chrome: 91
- Chrome Android: 91
- Edge: 91
- Firefox: 89
- Firefox for Android: 89
- Safari: 16.4
- Safari on iOS: 16.4

### Garbage collection (WebAssembly)

Garbage collection tracks references for better memory management with garbage-collected languages running in WebAssmbly.

**Spec:**
- <https://webassembly.github.io/gc/core/bikeshed/#garbage-collection①>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 120
- Firefox for Android: 120
- Safari: 18.2
- Safari on iOS: 18.2

### Import and export of mutable globals (WebAssembly)

Mutable global variables are importable and exportable.

**Spec:**
- <https://webassembly.github.io/spec/js-api/#dom-globaldescriptor-mutable>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 62
- Firefox for Android: 62
- Safari: 13.1
- Safari on iOS: 13.4

### JavaScript promise integration (WebAssembly)

The JavaScript promise integration (JSPI) suspends a WebAssembly module when it calls a JavaScript method that returns a promise. The module resumes when the promise is resolved. You can use this to call asynchronous Web APIs from synchronous WebAssembly.

**Spec:**
- <https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md>

**Browser support:**
- Chrome: 137
- Chrome Android: —
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Memory64 (WebAssembly)

Instructions accept 64-bit memory indexes.

**Spec:**
- <https://github.com/WebAssembly/memory64/blob/main/proposals/memory64/Overview.md>

**Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 134
- Firefox for Android: 134
- Safari: —
- Safari on iOS: —

### Multi-memory (WebAssembly)

A single module in WebAssembly can have multiple memories.

**Spec:**
- <https://github.com/WebAssembly/multi-memory/blob/main/proposals/multi-memory/Overview.md>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 125
- Firefox for Android: 125
- Safari: —
- Safari on iOS: —

**MDN:**
- [WebAssembly.Memory](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory)

### Multi-value (WebAssembly)

Instructions and blocks can produce multiple result values.

**Spec:**
- <https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md>

**Browser support:**
- Chrome: 86
- Chrome Android: 86
- Edge: 86
- Firefox: 78
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13.4

### Non-trapping float-to-int conversion (WebAssembly)

Saturating floating-point to integer conversion operators return the maximum or minimum integer value on overflow instead of trapping.

**Spec:**
- <https://github.com/WebAssembly/spec/blob/main/proposals/nontrapping-float-to-int-conversion/Overview.md>

**Browser support:**
- Chrome: 75
- Chrome Android: 75
- Edge: 18
- Firefox: 64
- Firefox for Android: 64
- Safari: 15.1
- Safari on iOS: 15.1

### Reference types (WebAssembly)

The `externref` type can be both a value type and a table element type, while `funcref` can be a value type.

**Spec:**
- <https://github.com/WebAssembly/spec/blob/main/proposals/reference-types/Overview.md>

**Browser support:**
- Chrome: 96
- Chrome Android: 96
- Edge: 96
- Firefox: 79
- Firefox for Android: 79
- Safari: 15.1
- Safari on iOS: 15.1

### Relaxed-width SIMD (WebAssembly)

Relaxed SIMD (Single Instruction Multiple Data) introduces local non-determinism, where the results of the instructions may vary based on hardware support.

**Spec:**
- <https://github.com/WebAssembly/relaxed-simd/blob/main/proposals/relaxed-simd/Overview.md>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 146
- Firefox for Android: 146
- Safari: —
- Safari on iOS: —

### Sign extension operators (WebAssembly)

Sign-extension operator instructions extend the width of 8-bit, 16-bit, and 32-bit values to 32-bit and 64-bit values.

**Spec:**
- <https://github.com/WebAssembly/spec/blob/main/proposals/sign-extension-ops/Overview.md>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 18
- Firefox: 62
- Firefox for Android: 62
- Safari: 14.1
- Safari on iOS: 14.5

### String builtins (WebAssembly)

The WebAssembly builtin string functions mirror a subset of the JavaScript `String` API and adapt it to be efficiently callable without JavaScript glue code.

**Spec:**
- <https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md>

**Browser support:**
- Chrome: 130
- Chrome Android: 130
- Edge: 130
- Firefox: 134
- Firefox for Android: 134
- Safari: —
- Safari on iOS: —

### Tail call optimization (WebAssembly)

Tail call optimization discards a caller frame and replaces the call with a jump instruction.

**Spec:**
- <https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md>

**Browser support:**
- Chrome: 112
- Chrome Android: 112
- Edge: 112
- Firefox: 121
- Firefox for Android: 121
- Safari: 18.2
- Safari on iOS: 18.2

### Threads and atomics (WebAssembly)

Threads in WebAssembly run code in parallel, while atomic memory instructions can guarantee that no two threads can read or write to shared memory at the same time.

**Spec:**
- <https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md>

**Browser support:**
- Chrome: 74
- Chrome Android: 88
- Edge: 79
- Firefox: 79
- Firefox for Android: 79
- Safari: 15.2
- Safari on iOS: 15.2

### Typed function references (WebAssembly)

A typed function reference can be called directly.

**Spec:**
- <https://github.com/WebAssembly/function-references/blob/main/proposals/function-references/Overview.md>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 120
- Firefox for Android: 120
- Safari: 18
- Safari on iOS: 18

### WebAssembly

The `WebAssembly.instantiate()` and `WebAssembly.instantiateStreaming()` global static methods load WebAssembly code (also known as Wasm), a portable binary instruction format.

**Spec:**
- <https://webassembly.github.io/gc/core/bikeshed/>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 16
- Firefox: 52
- Firefox for Android: 52
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [WebAssembly](https://developer.mozilla.org/docs/WebAssembly)
