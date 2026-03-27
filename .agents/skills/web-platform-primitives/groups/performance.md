# Performance

Features for measuring the Performance of Web applications.

## Performance features

### Back/forward cache blocking reasons

The `notRestoredReasons` property of a `PerformanceNavigationTiming` object explains why the current document was blocked from using the back/forward cache (also known as the bfcache) on navigation.

**Spec:**
- <https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-notrestoredreasons-interface>

**Browser support:**
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

**Browser support:**
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

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 89
- Firefox for Android: 89
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [PerformanceEventTiming](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming)

### Largest contentful paint (LCP)

The `largest-contentful-paint` performance entry and the `LargestContentfulPaint` API measures  the time it takes for the largest image or text to appear. Largest contentful paint (LCP) is a common metric for perceived loading times.

**Spec:**
- <https://w3c.github.io/largest-contentful-paint/>

**Browser support:**
- Chrome: 77
- Chrome Android: 77
- Edge: 79
- Firefox: 122
- Firefox for Android: 122
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [LargestContentfulPaint](https://developer.mozilla.org/docs/Web/API/LargestContentfulPaint)

### Layout instability

The `layout-shift` performance entry and `LayoutShift` API measures the layout stability of web pages based on movements of the elements on the page. They're used to calculate Cumulative Layout Shift (CLS), a common metric for perceived stability.

**Spec:**
- <https://wicg.github.io/layout-instability/>

**Browser support:**
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

**Browser support:**
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

**Browser support:**
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

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Performance: measureUserAgentSpecificMemory() method](https://developer.mozilla.org/docs/Web/API/Performance/measureUserAgentSpecificMemory)

### Navigation timing

The `navigation` performance entry and the `PerformanceNavigationTiming` API measures navigation events, such as loading time or the number of redirects.

**Spec:**
- <https://w3c.github.io/navigation-timing/>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 12
- Firefox: 58
- Firefox for Android: 58
- Safari: 15
- Safari on iOS: 15.1

**MDN:**
- [Navigation timing](https://developer.mozilla.org/docs/Web/API/Performance_API/Navigation_timing)

### Page visibility state

The `visibility-state` performance entry and the `VisibilityStateEntry` API measure the timing of page visibility state changes, such as when a tab is no longer visible or the user has switched to another app.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#the-visibilitystateentry-interface>

**Browser support:**
- Chrome: 115
- Chrome Android: 115
- Edge: 115
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [VisibilityStateEntry](https://developer.mozilla.org/docs/Web/API/VisibilityStateEntry)

### Paint timing

The `paint` performance entry and the `PerformancePaintTiming` API measures the duration of "paint" (also called "render") operations as a page loads. The API measures the time to First Paint (FP) and First Contentful Paint (FCP), common metrics for perceived loading times.

**Spec:**
- <https://w3c.github.io/paint-timing/>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 84
- Firefox for Android: 84
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [PerformancePaintTiming](https://developer.mozilla.org/docs/Web/API/PerformancePaintTiming)

### Performance

The `performance` global object and the `PerformanceObserver` API provide access to performance-related information for the current execution context.

**Spec:**
- <https://w3c.github.io/hr-time/>
- <https://w3c.github.io/performance-timeline/>
- <https://w3c.github.io/user-timing/#extensions-performance-interface>

**Browser support:**
- Chrome: 6
- Chrome Android: 18
- Edge: 12
- Firefox: 7
- Firefox for Android: 7
- Safari: 8
- Safari on iOS: 9

**MDN:**
- [Performance APIs](https://developer.mozilla.org/docs/Web/API/Performance_API)

### PerformanceTiming and PerformanceNavigation

The `window.performance.timing` and `window.performance.navigation` APIs report performance timing information for events that occur during the loading and use of the current page.

**Spec:**
- <https://w3c.github.io/navigation-timing/#obsolete>

**Browser support:**
- Chrome: 56
- Chrome Android: 56
- Edge: 18
- Firefox: 56
- Firefox for Android: 56
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Performance: timing property](https://developer.mozilla.org/docs/Web/API/Performance/timing)
- [Performance: navigation property](https://developer.mozilla.org/docs/Web/API/Performance/navigation)

### Resource size

The `decodedBodySize`, `encodedBodySize`, and `transferSize` properties of the `PerformanceResourceTiming` API reports the size of resources loaded.

**Spec:**
- <https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-decodedbodysize>
- <https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-encodedbodysize>
- <https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-transfersize>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 17
- Firefox: 45
- Firefox for Android: 45
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [PerformanceResourceTiming: decodedBodySize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/decodedBodySize)
- [PerformanceResourceTiming: encodedBodySize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
- [PerformanceResourceTiming: transferSize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/transferSize)

### Resource timing

`PerformanceResourceTiming` entries report when network events happen while loading a resource, such as when connections start and end. You can use this information to measure loading times.

**Spec:**
- <https://w3c.github.io/resource-timing/>

**Browser support:**
- Chrome: 29
- Chrome Android: 29
- Edge: 12
- Firefox: 35
- Firefox for Android: 35
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [PerformanceResourceTiming: decodedBodySize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/decodedBodySize)
- [PerformanceResourceTiming: encodedBodySize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
- [PerformanceResourceTiming: transferSize property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/transferSize)

### Server timing

The `serverTiming` property of the `PerformanceResourceTiming` API contains server timing information about network requests.

**Spec:**
- <https://w3c.github.io/server-timing/>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: 61
- Firefox for Android: 61
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [PerformanceResourceTiming: serverTiming property](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/serverTiming)
