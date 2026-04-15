# WebXR

Web platform features about WebXR

## WebXR features

### Anchors (WebXR)

An `XRAnchor` object keeps track of a pose that is fixed relative to the real world. Anchors build an illusion that the placed objects are really present in the user's environment.

**Spec:**
- <https://immersive-web.github.io/anchors/>

**Limited Availability — Browser support:**
- Chrome: 85
- Chrome Android: 85
- Edge: 85
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRAnchor](https://developer.mozilla.org/docs/Web/API/XRAnchor)

### Augmented reality

The `"immersive-ar"` value for `navigator.xr.requestSession()` starts an augmented reality WebXR session that renders content aligned with the visible environment.

**Spec:**
- <https://immersive-web.github.io/webxr-ar-module/>

**Limited Availability — Browser support:**
- Chrome: 86
- Chrome Android: 86
- Edge: 86
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRSystem: requestSession() method](https://developer.mozilla.org/docs/Web/API/XRSystem/requestSession#mode)

### Depth sensing

An `XRDepthInformation` object represents a measurement of the distance from the user's device to the real-world geometry in the user's environment.

**Spec:**
- <https://immersive-web.github.io/depth-sensing/>

**Limited Availability — Browser support:**
- Chrome: 90
- Chrome Android: 90
- Edge: 90
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRDepthInformation](https://developer.mozilla.org/docs/Web/API/XRDepthInformation)

### DOM overlays for WebXR

A DOM overlay shows 2D DOM content as an interactive, transparent layer on top of a WebXR application's WebGL content and camera image.

**Spec:**
- <https://immersive-web.github.io/dom-overlays/>

**Limited Availability — Browser support:**
- Chrome: 83
- Chrome Android: 83
- Edge: 83
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRSession: domOverlayState property](https://developer.mozilla.org/docs/Web/API/XRSession/domOverlayState)

### Gamepad (WebXR)

The `gamepad` attribute of an `XRInputSource` represents an XR input device, such as a motion controller, that reports data from physical inputs (such as buttons, touch pads, and triggers).

**Spec:**
- <https://immersive-web.github.io/webxr-gamepads-module/>

**Limited Availability — Browser support:**
- Chrome: 79
- Chrome Android: 79
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRInputSource: gamepad property](https://developer.mozilla.org/docs/Web/API/XRInputSource/gamepad)

### Hand input

An `XRHand` object, from the `hand` attribute of an `XRInputSource` object, represents a WebXR session's fully-articulated hand tracking model.

**Spec:**
- <https://immersive-web.github.io/webxr-hand-input/>

**Limited Availability — Browser support:**
- Chrome: 131
- Chrome Android: 131
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRHand](https://developer.mozilla.org/docs/Web/API/XRHand)

### Hit test

The `getHitTestResults()` method of an `XRFrame` object helps place objects in an augmented reality session by finding where cast rays intersect with real-world geometry.

**Spec:**
- <https://immersive-web.github.io/hit-test/>

**Limited Availability — Browser support:**
- Chrome: 81
- Chrome Android: 81
- Edge: 81
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRFrame: getHitTestResults() method](https://developer.mozilla.org/docs/Web/API/XRFrame/getHitTestResults)

### Layers (WebXR)

WebXR layer types, such as `XRCylinderLayer`, `XRCylinderLayer`, `XREquirectLayer`, `XRProjectionLayer` or `XRQuadLayer`, are managed by the system compositor, to reduce latency or resampling.

**Spec:**
- <https://immersive-web.github.io/layers/>

**Limited Availability — Browser support:**
- Chrome: 147
- Chrome Android: 147
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRCompositionLayer](https://developer.mozilla.org/docs/Web/API/XRCompositionLayer)

### Lighting estimation

The `XRLightProbe` and `XRLightEstimate` objects represent real-world environmental lighting conditions during a WebXR session.

**Spec:**
- <https://immersive-web.github.io/lighting-estimation/>

**Limited Availability — Browser support:**
- Chrome: 90
- Chrome Android: 90
- Edge: 90
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRLightProbe](https://developer.mozilla.org/docs/Web/API/XRLightProbe)
- [XRLightEstimate](https://developer.mozilla.org/docs/Web/API/XRLightEstimate)

### Raw camera access for WebXR

The `XRView.camera` property provides direct access to pose-synchronized camera images within a WebXR session.

**Spec:**
- <https://immersive-web.github.io/raw-camera-access/>

**Limited Availability — Browser support:**
- Chrome: 107
- Chrome Android: 107
- Edge: 107
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [XRView](https://developer.mozilla.org/docs/Web/API/XRView)

### WebXR

The `navigator.xr` API represents the browser's virtual reality or augmented reality system. You can use to request a WebXR session.

**Spec:**
- <https://immersive-web.github.io/webxr/>

**Limited Availability — Browser support:**
- Chrome: 79
- Chrome Android: 79
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [WebXR Device API](https://developer.mozilla.org/docs/Web/API/WebXR_Device_API)
