# Workers

https://html.spec.whatwg.org/multipage/workers.html and specific worker types like shared workers, service workers, etc.

## Workers features

### JavaScript modules in service workers

The `navigator.serviceWorker.register()` method accepts `{ type: "module" }` to load scripts that use `import` and `export`. Also known as ECMAScript modules or ESM in service workers.

**Spec:**
- <https://w3c.github.io/ServiceWorker/#dom-registrationoptions-type>

**Baseline Newly Available since 2026-01-13**

**MDN:**
- [ServiceWorkerContainer: register() method](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/register#module)

### JavaScript modules in shared workers

The `SharedWorker()` constructor accepts `{ type: "module" }` to load scripts that use `import` and `export`. Also known as ECMAScript modules or ESM in shared workers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworker-interface:dom-sharedworker-2>

**Limited Availability — Browser support:**
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

**Baseline Widely Available since 2025-12-06**

**MDN:**
- [Worker: Worker() constructor](https://developer.mozilla.org/docs/Web/API/Worker/Worker#type)

### Shared worker

The `SharedWorker()` constructor runs a script in its own thread, which can send and receive messages with other scripts running at the same origin.

**Spec:**
- <https://html.spec.whatwg.org/multipage/workers.html#shared-workers-introduction>

**Limited Availability — Browser support:**
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
