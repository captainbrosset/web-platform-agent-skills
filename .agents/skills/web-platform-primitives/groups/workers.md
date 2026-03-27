# Workers

https://html.spec.whatwg.org/multipage/workers.html and specific worker types like shared workers, service workers, etc.

## Workers features

### Dedicated workers

The `Worker()` constructor runs a script in its own thread, which can send and receive messages with the script that created it. Also known as web workers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#workers>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 5

**MDN:**
- [DedicatedWorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope)
- [DedicatedWorkerGlobalScope: close() method](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
- [DedicatedWorkerGlobalScope: name property](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
- [Worker](https://developer.mozilla.org/docs/Web/API/Worker)
- [Worker: Worker() constructor](https://developer.mozilla.org/docs/Web/API/Worker/Worker)
- [Worker: error event](https://developer.mozilla.org/docs/Web/API/Worker/error_event)
- [Worker: terminate() method](https://developer.mozilla.org/docs/Web/API/Worker/terminate)
- [WorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope)
- [WorkerGlobalScope: error event](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event)
- [WorkerGlobalScope: importScripts() method](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
- [WorkerGlobalScope: location property](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
- [WorkerGlobalScope: navigator property](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
- [WorkerGlobalScope: rejectionhandled event](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
- [WorkerGlobalScope: self property](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
- [WorkerGlobalScope: unhandledrejection event](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
- [WorkerLocation](https://developer.mozilla.org/docs/Web/API/WorkerLocation)
- [WorkerLocation: hash property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hash)
- [WorkerLocation: host property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/host)
- [WorkerLocation: hostname property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hostname)
- [WorkerLocation: href property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/href)
- [WorkerLocation: origin property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/origin)
- [WorkerLocation: pathname property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/pathname)
- [WorkerLocation: port property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/port)
- [WorkerLocation: protocol property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/protocol)
- [WorkerLocation: search property](https://developer.mozilla.org/docs/Web/API/WorkerLocation/search)
- [WorkerLocation: toString() method](https://developer.mozilla.org/docs/Web/API/WorkerLocation/toString)
- [WorkerNavigator](https://developer.mozilla.org/docs/Web/API/WorkerNavigator)

### JavaScript modules in service workers

The `navigator.serviceWorker.register()` method accepts `{ type: "module" }` to load scripts that use `import` and `export`. Also known as ECMAScript modules or ESM in service workers.

**Spec:**
- <https://w3c.github.io/ServiceWorker/#dom-registrationoptions-type>

**Browser support:**
- Chrome: 91
- Chrome Android: 91
- Edge: 91
- Firefox: 147
- Firefox for Android: 147
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [ServiceWorkerContainer: register() method](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/register#module)

### JavaScript modules in shared workers

The `SharedWorker()` constructor accepts `{ type: "module" }` to load scripts that use `import` and `export`. Also known as ECMAScript modules or ESM in shared workers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworker-interface:dom-sharedworker-2>

**Browser support:**
- Chrome: 80
- Chrome Android: —
- Edge: 80
- Firefox: 114
- Firefox for Android: 114
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [SharedWorker](https://developer.mozilla.org/docs/Web/API/SharedWorker)

### JavaScript modules in workers

The `Worker()` constructor accepts `{ type: "module" }` to load scripts that use `import` and `export`. Also known as ECMAScript modules or ESM in workers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#dom-worker-dev>

**Browser support:**
- Chrome: 80
- Chrome Android: 80
- Edge: 80
- Firefox: 114
- Firefox for Android: 114
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [Worker: Worker() constructor](https://developer.mozilla.org/docs/Web/API/Worker/Worker#type)

### requestAnimationFrame() in workers

The `requestAnimationFrame()` method in workers schedules a function that runs before the next repaint. Together with offscreen canvas, you can animate content from a worker.

**Spec:**
- <https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 99
- Firefox for Android: 99
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [DedicatedWorkerGlobalScope: cancelAnimationFrame() method](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
- [DedicatedWorkerGlobalScope: requestAnimationFrame() method](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

### Service workers

The service worker of a website is a script that runs in its own thread and which acts as local proxy that intercepts network requests from the website. Use a service worker to implement advanced caching strategies, offline support, background tasks, or push notification support on your website.

**Spec:**
- <https://w3c.github.io/ServiceWorker/>

**Browser support:**
- Chrome: 45
- Chrome Android: 45
- Edge: 17
- Firefox: 44
- Firefox for Android: 44
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)

### Shared worker

The `SharedWorker()` constructor runs a script in its own thread, which can send and receive messages with other scripts running at the same origin.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#shared-workers-introduction>

**Browser support:**
- Chrome: 5
- Chrome Android: —
- Edge: 79
- Firefox: 29
- Firefox for Android: 33
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [SharedWorker](https://developer.mozilla.org/docs/Web/API/SharedWorker)
- [SharedWorker: SharedWorker() constructor](https://developer.mozilla.org/docs/Web/API/SharedWorker/SharedWorker)
- [SharedWorker: error event](https://developer.mozilla.org/docs/Web/API/SharedWorker/error_event)
- [SharedWorker: port property](https://developer.mozilla.org/docs/Web/API/SharedWorker/port)
- [SharedWorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope)
- [SharedWorkerGlobalScope: close() method](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
- [SharedWorkerGlobalScope: connect event](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event)
- [SharedWorkerGlobalScope: name property](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/name)
