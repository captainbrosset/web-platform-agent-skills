# Worklets

https://html.spec.whatwg.org/multipage/worklets.html and specific worklet types like audio worklets, paint worklets, etc.

## Worklets features

### AudioWorklet

The `AudioWorklet` API runs module code in a separate thread, specifically for non-blocking, low latency audio processing.

**Spec:**
- <https://webaudio.github.io/web-audio-api/#AudioWorklet>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: 76
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [AudioWorklet](https://developer.mozilla.org/docs/Web/API/AudioWorklet)

### paint()

The `paint()` CSS function creates a custom image, drawn using a paint worklet, for an element's background or border.

**Spec:**
- <https://drafts.css-houdini.org/css-paint-api-1/>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [CSS Painting API](https://developer.mozilla.org/docs/Web/API/CSS_Painting_API)

### Shared storage

The `sharedStorage` API stores data to a shared space where the data can then be processed without the ability to track users across the different sites they visit. A common use case is measuring the reach of third-party ads without using user-tracking cookies.

**Spec:**
- <https://wicg.github.io/shared-storage/>

**Browser support:**
- Chrome: 126
- Chrome Android: 126
- Edge: 126
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Shared Storage API](https://developer.mozilla.org/docs/Web/API/Shared_Storage_API)
