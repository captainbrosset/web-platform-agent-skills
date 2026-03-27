# Canvas

`<canvas>` including 2D and WebGL rendering contexts, and offscreen canvas.

## Canvas features

### 2D canvas opacity

The optional `alpha` parameter of a 2D canvas's `getContext()` method sets whether the canvas has an alpha transparency channel. If set to `false`, then this permits the browser to optimize compositing for an opaque canvas.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-alpha>

**Limited Availability — Browser support:**
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

**Baseline Widely Available since 2025-10-11**

**MDN:**
- [CanvasRenderingContext2D: createConicGradient() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient)

### Canvas reset()

The `reset()` method clears a canvas to its initial state.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-reset>

**Baseline Newly Available since 2023-12-11**

**MDN:**
- [CanvasRenderingContext2D: reset() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/reset)

### Canvas roundRect()

The `roundRect()` methods draw a rounded rectangle to a 2D canvas.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-roundrect>

**Baseline Widely Available since 2025-10-11**

**MDN:**
- [CanvasRenderingContext2D: roundRect() method](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)

### Color management for 2D canvas

The optional `colorSpace` parameter of a 2D canvas's `getContext()` method chooses the color representation, such as `"srgb"` or `"display-p3"`.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-color-space>

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
- Chrome: 81
- Chrome Android: 75
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext#desynchronized)

### willReadFrequently

The optional `willReadFrequently` parameter of a canvas's `getContext()` method permits the browser to optimize for frequent `getImageData()` calls by avoiding hardware acceleration. Also known as multiple readback.

**Spec:**
- <https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-will-read-frequently>

**Baseline Newly Available since 2024-09-16**

**MDN:**
- [HTMLCanvasElement: getContext() method](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/getContext)
