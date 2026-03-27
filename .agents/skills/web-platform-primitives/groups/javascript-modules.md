# JavaScript modules

Web platform features about JavaScript modules

## JavaScript modules features

### JavaScript modules

JavaScript modules allow code to be organized into reusable units. Modules use `import` to load other modules and `export` to declare what is available to import from other modules. In HTML, modules are loaded with `<script type="module">`.

**Spec:**
- <https://html.spec.whatwg.org/multipage/webappapis.html#javascript-module-script>
- <https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-modules>

**Browser support:**
- Chrome: 61
- Chrome Android: 61
- Edge: 16
- Firefox: 60
- Firefox for Android: 60
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [`<script>` type attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script/type#module)

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
