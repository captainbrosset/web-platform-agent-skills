# Fetch

The Fetch API and its various features, and related APIs.

## Fetch features

### Fetch form data

The `Request.formData()` and `Response.formData()` methods read a request or response body and return a `FormData` promise. You can use it to access the fields of a form submission.

**Spec:**
- <https://fetch.spec.whatwg.org/#body-mixin>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 39
- Firefox for Android: 39
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [Request: formData() method](https://developer.mozilla.org/docs/Web/API/Request/formData)
- [Response: formData() method](https://developer.mozilla.org/docs/Web/API/Response/formData)

### Fetch metadata request headers

The `Sec-Fetch-Dest`, `Sec-Fetch-Mode`, `Sec-Fetch-Site`, and `Sec-Fetch-User` HTTP headers provide extra information about the way a request was made, to help servers reject certain kinds of malicious requests.

**Spec:**
- <https://w3c.github.io/webappsec-fetch-metadata/>

**Limited Availability — Browser support:**
- Chrome: 80
- Chrome Android: 80
- Edge: 80
- Firefox: 90
- Firefox for Android: 90
- Safari: —
- Safari on iOS: —

**MDN:**
- [Sec-Fetch-Dest header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest)
- [Sec-Fetch-Mode header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Mode)
- [Sec-Fetch-Site header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Site)
- [Sec-Fetch-User header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Sec-Fetch-User)

### Fetch priority

The `fetch()` `priority` option and the `fetchpriority` HTML attribute give hints to the browser about which requests to do before other requests of the same type.

**Spec:**
- <https://fetch.spec.whatwg.org/#request-priority>
- <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attributes>

**Baseline Newly Available since 2024-10-29**

**MDN:**
- [HTML attribute: fetchpriority](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/fetchpriority)
- [`<script>`: The Script element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#fetchpriority)
- [`<link>`: The External Resource Link element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#fetchpriority)
- [`<img>`: The Image Embed element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#fetchpriority)

### Fetch upload streams

A `fetch()` request uploads a stream of data to the server when a request's `body` property is a `ReadableStream` object.

**Spec:**
- <https://fetch.spec.whatwg.org/#concept-body-stream>

**Limited Availability — Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: —
- Firefox for Android: —
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Request: body property](https://developer.mozilla.org/docs/Web/API/Request/body)

### fetchLater

The `fetchLater()` method requests a deferred fetch sent at an unknown time. The browser chooses a reliable time to send the request, ideally when the document is unloaded, and ignores the response. This API is useful for sending beacons to a server without expecting a particular response.

**Spec:**
- <https://fetch.spec.whatwg.org/#dom-window-fetchlater>

**Limited Availability — Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API)
