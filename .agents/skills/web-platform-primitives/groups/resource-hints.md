# Resource hints

Web platform features about Resource hints

## Resource hints features

### `<link rel="dns-prefetch">`

The `rel="dns-prefetch"` attribute for the `<link>` HTML element is a hint to the browser that the page or user is likely to request resources from another domain, so the browser should preemptively resolve DNS for the `href` value's domain.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-dns-prefetch>

**Baseline Newly Available since 2025-09-15**

**MDN:**
- [rel="dns-prefetch"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)

### `<link rel="prefetch">`

The `rel="prefetch"` attribute for the `<link>` HTML element is a hint to the browser that the user is likely to navigate to a resource, so the browser should preemptively fetch and cache the resource.

**Spec:**
- <https://html.spec.whatwg.org/multipage/links.html#link-type-prefetch>

**Limited Availability — Browser support:**
- Chrome: 8
- Chrome Android: 18
- Edge: 12
- Firefox: 2
- Firefox for Android: 4
- Safari: —
- Safari on iOS: —

**MDN:**
- [rel="prefetch"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/prefetch)

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
