# WebAssembly

WebAssembly (Wasm) features and extensions

## WebAssembly features

### Branch hinting (WebAssembly)

Branch hints in WebAssembly allows a browser to optimize performance when a branch is a likely to take a specific path.

**Spec:**
- <https://github.com/WebAssembly/branch-hinting/blob/main/proposals/branch-hinting/Overview.md>

**Limited Availability — Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: 16
- Safari on iOS: 16

### Exception references with exnref (WebAssembly)

When caught, an exception is reified into an exception reference, a value of the new type `exnref`.

**Spec:**
- <https://github.com/WebAssembly/exception-handling/blob/main/proposals/exception-handling/Exceptions.md>

**Limited Availability — Browser support:**
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

**Baseline Newly Available since 2024-03-05**

### Garbage collection (WebAssembly)

Garbage collection tracks references for better memory management with garbage-collected languages running in WebAssmbly.

**Spec:**
- <https://webassembly.github.io/gc/core/bikeshed/#garbage-collection①>

**Baseline Newly Available since 2024-12-11**

### JavaScript promise integration (WebAssembly)

The JavaScript promise integration (JSPI) suspends a WebAssembly module when it calls a JavaScript method that returns a promise. The module resumes when the promise is resolved. You can use this to call asynchronous Web APIs from synchronous WebAssembly.

**Spec:**
- <https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md>

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 125
- Firefox for Android: 125
- Safari: —
- Safari on iOS: —

**MDN:**
- [WebAssembly.Memory](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory)

### Relaxed-width SIMD (WebAssembly)

Relaxed SIMD (Single Instruction Multiple Data) introduces local non-determinism, where the results of the instructions may vary based on hardware support.

**Spec:**
- <https://github.com/WebAssembly/relaxed-simd/blob/main/proposals/relaxed-simd/Overview.md>

**Limited Availability — Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 146
- Firefox for Android: 146
- Safari: —
- Safari on iOS: —

### String builtins (WebAssembly)

The WebAssembly builtin string functions mirror a subset of the JavaScript `String` API and adapt it to be efficiently callable without JavaScript glue code.

**Spec:**
- <https://github.com/WebAssembly/js-string-builtins/blob/main/proposals/js-string-builtins/Overview.md>

**Limited Availability — Browser support:**
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

**Baseline Newly Available since 2024-12-11**

### Typed function references (WebAssembly)

A typed function reference can be called directly.

**Spec:**
- <https://github.com/WebAssembly/function-references/blob/main/proposals/function-references/Overview.md>

**Baseline Newly Available since 2024-09-16**
