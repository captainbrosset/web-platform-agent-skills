# Canvas

`<canvas>` including 2D and WebGL rendering contexts, and offscreen canvas.

## Canvas features

### `<canvas>`

The `<canvas>` HTML element is a space to draw graphics in, using the 2D canvas API, WebGL, or WebGPU.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#canvas>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1.5
- Firefox for Android: 4
- Safari: 2
- Safari on iOS: 1

**MDN:**
- [`<canvas>`: The Graphics Canvas element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas)

### 2D canvas

The `CanvasRenderingContext2D` API is the "2d" rendering context for the `<canvas>` element. It represents a flat, two-dimensional space for drawing graphics and animations.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#2dcontext>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1.5
- Firefox for Android: 4
- Safari: 2
- Safari on iOS: 1

**MDN:**
- [`<canvas>`: The Graphics Canvas element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas)
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext)

### 2D canvas opacity

The optional `alpha` parameter of a 2D canvas's `getContext()` method sets whether the canvas has an alpha transparency channel. If set to `false`, then this permits the browser to optimize compositing for an opaque canvas.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-alpha>

**Browser support:**
- Chrome: 32
- Chrome Android: 32
- Edge: 79
- Firefox: 30
- Firefox for Android: 30
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext)

### Canvas createConicGradient()

The `createConicGradient()` methods draw a conic gradient to a 2D canvas.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createconicgradient-dev>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 112
- Firefox for Android: 112
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CanvasRenderingContext2D: createConicGradient() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient)

### Canvas reset()

The `reset()` method clears a canvas to its initial state.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-reset>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 113
- Firefox for Android: 113
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [CanvasRenderingContext2D: reset() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/reset)

### Canvas roundRect()

The `roundRect()` methods draw a rounded rectangle to a 2D canvas.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-roundrect>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 112
- Firefox for Android: 112
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CanvasRenderingContext2D: roundRect() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)

### captureStream() for `<canvas>`

The `captureStream()` method for `<canvas>` elements returns a `MediaStream` which includes a `CanvasCaptureMediaStreamTrack` representing real-time video of the canvas image. You can use this to record the canvas, or send it elsewhere, such as another canvas or WebRTC connection.

**Spec:**
- <https://w3c.github.io/mediacapture-fromelement/#html-canvas-element-media-capture-extensions>

**Browser support:**
- Chrome: 51
- Chrome Android: 51
- Edge: 79
- Firefox: 43
- Firefox for Android: 43
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [HTMLCanvasElement: captureStream() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/captureStream)

### Color management for 2D canvas

The optional `colorSpace` parameter of a 2D canvas's `getContext()` method chooses the color representation, such as `"srgb"` or `"display-p3"`.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-color-space>

**Browser support:**
- Chrome: 92
- Chrome Android: 92
- Edge: 92
- Firefox: —
- Firefox for Android: —
- Safari: 15.2
- Safari on iOS: 15.2

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext#colorspace)

### contextlost and contextrestored

The `contextlost` event for `<canvas>` fires when the canvas backing storage is lost, while the `contextrestored` event fires when it is recreated.

**Spec:**
- <https://html.spec.whatwg.org/multipage/webappapis.html#context-lost-steps>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 125
- Firefox for Android: 125
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLCanvasElement: webglcontextlost event](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [HTMLCanvasElement: webglcontextrestored event](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

### Desynchronized 2D canvas

The optional `desynchronized` parameter of a canvas's `getContext()` method permits the browser to draw a 2D canvas independently of the event loop. This can reduce drawing latency.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-desynchronized>

**Browser support:**
- Chrome: 81
- Chrome Android: 75
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext#desynchronized)

### Offscreen canvas

The `OffscreenCanvas` API provides a canvas that can be drawn to off screen, with no dependencies on the DOM, which can be used to run heavy rendering operations inside a worker context.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 105
- Firefox for Android: 105
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [OffscreenCanvas](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas)

### willReadFrequently

The optional `willReadFrequently` parameter of a canvas's `getContext()` method permits the browser to optimize for frequent `getImageData()` calls by avoiding hardware acceleration. Also known as multiple readback.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-will-read-frequently>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 28
- Firefox for Android: 28
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext)
