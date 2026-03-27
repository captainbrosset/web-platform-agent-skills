# Performance

Features for measuring the Performance of Web applications.

## Performance features

### Back/forward cache blocking reasons

The `notRestoredReasons` property of a `PerformanceNavigationTiming` object explains why the current document was blocked from using the back/forward cache (also known as the bfcache) on navigation.

**Spec:**
- <https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface>

**Limited Availability — Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [bfcache](https://developer.mozilla.org/docs/Glossary/bfcache)
- [PerformanceNavigationTiming: notRestoredReasons property](https://developer.mozilla.org/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

### Element timing

The `element` performance entry and the `PerformanceElementTiming` API measures the time to render elements that have the `elementtiming` attribute.

**Spec:**
- <https://w3c.github.io/element-timing/>

**Limited Availability — Browser support:**
- Chrome: 77
- Chrome Android: 77
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Element: elementTiming property](https://developer.mozilla.org/docs/Web/API/Element/elementTiming)

### Event timing

The `event` and `first-input` performance entries and the `PerformanceEventTiming` API measures the latency of user input events, such as mouse clicks or keypresses. They're used to calculate Interaction to Next Paint (INP), a common metric for perceived responsiveness.

**Spec:**
- <https://w3c.github.io/event-timing/>

**Baseline Newly Available since 2025-12-12**

**MDN:**
- [PerformanceEventTiming](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming)

### Largest contentful paint (LCP)

The `largest-contentful-paint` performance entry and the `LargestContentfulPaint` API measures  the time it takes for the largest image or text to appear. Largest contentful paint (LCP) is a common metric for perceived loading times.

**Spec:**
- <https://w3c.github.io/largest-contentful-paint/>

**Baseline Newly Available since 2025-12-12**

**MDN:**
- [LargestContentfulPaint](https://developer.mozilla.org/docs/Web/API/LargestContentfulPaint)

### Layout instability

The `layout-shift` performance entry and `LayoutShift` API measures the layout stability of web pages based on movements of the elements on the page. They're used to calculate Cumulative Layout Shift (CLS), a common metric for perceived stability.

**Spec:**
- <https://wicg.github.io/layout-instability/>

**Limited Availability — Browser support:**
- Chrome: 84
- Chrome Android: 84
- Edge: 84
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [LayoutShift](https://developer.mozilla.org/docs/Web/API/LayoutShift)

### Long animation frames

The `long-animation-frame` performance event type and the `PerformanceLongAnimationFrameTiming` API provide information about rendering updates that take longer than 50 milliseconds. Also known as LoAFs.

**Spec:**
- <https://w3c.github.io/long-animation-frames/>

**Limited Availability — Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [PerformanceLongAnimationFrameTiming](https://developer.mozilla.org/docs/Web/API/PerformanceLongAnimationFrameTiming)

### Long tasks

The `longtask` performance event type and the `PerformanceLongTaskTiming` API provides information about tasks that occupy the UI thread for 50 milliseconds or more, a metric for input latency, delayed animations, and other sources of "jank."

**Spec:**
- <https://w3c.github.io/longtasks/>

**Limited Availability — Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [PerformanceLongTaskTiming](https://developer.mozilla.org/docs/Web/API/PerformanceLongTaskTiming)

### Memory measurement

The `measureUserAgentSpecificMemory()` method estimates the memory usage of a web application including all its iframes and workers.

**Spec:**
- <https://wicg.github.io/performance-measure-memory/>

**Limited Availability — Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Performance: measureUserAgentSpecificMemory() method](https://developer.mozilla.org/docs/Web/API/Performance/measureUserAgentSpecificMemory)

### Page visibility state

The `visibility-state` performance entry and the `VisibilityStateEntry` API measure the timing of page visibility state changes, such as when a tab is no longer visible or the user has switched to another app.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#the-visibilitystateentry-interface>

**Limited Availability — Browser support:**
- Chrome: 115
- Chrome Android: 115
- Edge: 115
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [VisibilityStateEntry](https://developer.mozilla.org/docs/Web/API/VisibilityStateEntry)
