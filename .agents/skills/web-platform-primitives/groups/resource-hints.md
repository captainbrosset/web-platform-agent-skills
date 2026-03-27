# Resource hints

Web platform features about Resource hints

## Resource hints features

### `<link rel="dns-prefetch">`

The `rel="dns-prefetch"` attribute for the `<link>` HTML element is a hint to the browser that the page or user is likely to request resources from another domain, so the browser should preemptively resolve DNS for the `href` value's domain.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-dns-prefetch>

**Browser support:**
- Chrome: 46
- Chrome Android: 46
- Edge: 79
- Firefox: 127
- Firefox for Android: 127
- Safari: 5
- Safari on iOS: 26

**MDN:**
- [rel="dns-prefetch"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)

### `<link rel="preconnect">`

The `rel="preconnect"` attribute for the `<link>` HTML element is a hint to the browser that the page or user is likely to request resources from another origin, so the browser should preemptively start a connection to the `href` value's origin.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-preconnect>

**Browser support:**
- Chrome: 46
- Chrome Android: 46
- Edge: 79
- Firefox: 39
- Firefox for Android: 39
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [rel="preconnect"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/preconnect)

### `<link rel="prefetch">`

The `rel="prefetch"` attribute for the `<link>` HTML element is a hint to the browser that the user is likely to navigate to a resource, so the browser should preemptively fetch and cache the resource.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-prefetch>

**Browser support:**
- Chrome: 8
- Chrome Android: 18
- Edge: 12
- Firefox: 2
- Firefox for Android: 4
- Safari: —
- Safari on iOS: —

**MDN:**
- [rel="prefetch"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/prefetch)

### `<link rel="preload">`

The `rel="preload"` attribute for the `<link>` HTML element requests resources, such as images or style sheets, that the page needs soon, so the browser may prioritize them for loading before rendering begins.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-preload>

**Browser support:**
- Chrome: 50
- Chrome Android: 50
- Edge: 79
- Firefox: 85
- Firefox for Android: 85
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [rel="preload"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/preload)

### Fetch priority

The `fetch()` `priority` option and the `fetchpriority` HTML attribute give hints to the browser about which requests to do before other requests of the same type.

**Spec:**
- <https://fetch.spec.whatwg.org/#request-priority>
- <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attributes>

**Browser support:**
- Chrome: 103
- Chrome Android: 103
- Edge: 103
- Firefox: 132
- Firefox for Android: 132
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [HTML attribute: fetchpriority](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/fetchpriority)
- [`<script>`: The Script element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#fetchpriority)
- [`<link>`: The External Resource Link element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#fetchpriority)
- [`<img>`: The Image Embed element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#fetchpriority)
