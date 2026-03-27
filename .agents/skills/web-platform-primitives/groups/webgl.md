# WebGL

https://www.khronos.org/webgl/ including 1.0 and 2.0

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [WebGL extensions](webgl-extensions.md)

## WebGL features

### Color management for WebGL

The `drawingBufferColorSpace` and `unpackColorSpace` properties of `WebGLRenderingContext` sets the color representation for the buffer and imported textures, such as `"srgb"` or `"display-p3"`.

**Spec:**
- <https://registry.khronos.org/webgl/specs/latest/1.0/#DOM-WebGLRenderingContext-drawingBufferColorSpace>
- <https://registry.khronos.org/webgl/specs/latest/1.0/#DOM-WebGLRenderingContext-unpackColorSpace>

**Baseline Newly Available since 2024-10-29**

**MDN:**
- [WebGLRenderingContext: drawingBufferColorSpace property](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
- [WebGLRenderingContext: unpackColorSpace property](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/unpackColorSpace)

### Desynchronized WebGL canvas

The optional `desynchronized` parameter of a canvas's `getContext()` method permits the browser to draw a WebGL canvas independently of the event loop. This can reduce drawing latency.

**Spec:**
- <https://registry.khronos.org/webgl/specs/latest/1.0/#5.2.1>

**Limited Availability — Browser support:**
- Chrome: 81
- Chrome Android: 75
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### SharedArrayBuffer in WebGL

`SharedArrayBuffer` objects can be used in WebGL APIs that previously only worked with `ArrayBuffer` objects.

**Spec:**
- <https://registry.khronos.org/webgl/specs/latest/1.0/>
- <https://registry.khronos.org/webgl/specs/latest/2.0/>

**Limited Availability — Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 79
- Firefox for Android: 79
- Safari: —
- Safari on iOS: —

**MDN:**
- [WebGL: 2D and 3D graphics for the web](https://developer.mozilla.org/docs/Web/API/WebGL_API)
- [SharedArrayBuffer](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
