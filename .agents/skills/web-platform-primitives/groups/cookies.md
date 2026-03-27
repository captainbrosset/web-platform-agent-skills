# Cookies

Web platform features about Cookies

## Cookies features

### Cookie store

The `CookieStore` API is an asynchronous and promise-based API for managing cookies. It does not rely on document and so is available to service workers as well.

**Spec:**
- <https://cookiestore.spec.whatwg.org/>

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Cookie Store API](https://developer.mozilla.org/docs/Web/API/Cookie_Store_API)

### cookieEnabled

The `navigator.cookieEnabled` property is a boolean for whether the browser accepts or ignores attempts to write cookie data.

**Spec:**
- <https://html.spec.whatwg.org/multipage/system-state.html#cookies>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [Navigator: cookieEnabled property](https://developer.mozilla.org/docs/Web/API/Navigator/cookieEnabled)

### Cookies

The `Set-Cookie` HTTP header stores limited amounts of data that persist across request and response, creating shared state between the browser and server.

**Spec:**
- <https://httpwg.org/specs/rfc6265.html>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [Set-Cookie header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Set-Cookie)
- [Cookie header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Cookie)

### Partitioned cookies

Partitioned cookies allow you to opt a cookie into partitioned storage, with a separate cookie jar per top-level site. Also known as Cookies Having Independent Partitioned State or CHIPS.

**Spec:**
- <https://cookiestore.spec.whatwg.org/>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Set-Cookie header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Set-Cookie)
