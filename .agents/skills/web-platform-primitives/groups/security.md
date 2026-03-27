# Security

Features related to web application security See also SWAG CG https://github.com/w3c-cg/swag/issues/2

## Security features

### Content Security Policy (CSP)

Content Security Policy (CSP) helps to mitigate certain security threats, including cross-site scripting (XSS) and clickjacking attacks. It consists of a set of directives from a website to a browser, which instruct the browser to restrict the things that the site is allowed to do.

**Spec:**
- <https://w3c.github.io/webappsec-csp/>

**Browser support:**
- Chrome: 25
- Chrome Android: 25
- Edge: 14
- Firefox: 23
- Firefox for Android: 23
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/Guides/CSP)

### CORS

Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Also known as CORS.

**Spec:**
- <https://fetch.spec.whatwg.org/#http-cors-protocol>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/Guides/CORS)

### Credentialless iframes

The `credentialless` attribute for the `<iframe>` HTML element loads third-party content in an ephemeral context and does not send any credentials such as cookies. When using cross-origin isolation, this allows you to embed content that does not send `Cross-Origin-Embedder-Policy` headers.

**Spec:**
- <https://wicg.github.io/anonymous-iframe/>

**Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [IFrame credentialless](https://developer.mozilla.org/docs/Web/HTTP/Guides/IFrame_credentialless)

### HTTP Strict Transport Security

The `Strict-Transport-Security` HTTP response header informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS. Also known as HSTS.

**Spec:**
- <https://www.rfc-editor.org/rfc/rfc6797>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [Strict-Transport-Security header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)

### Mixed content handling

When a document is loaded over HTTPS, browsers ensure that none of the document's resources are loaded over an insecure protocol. Instead, resources that the document attempts to load over an insecure protocol are either loaded over HTTPS or are blocked.

**Spec:**
- <https://w3c.github.io/webappsec-mixed-content/>

**Browser support:**
- Chrome: ≤79
- Chrome Android: ≤79
- Edge: 79
- Firefox: ≤23
- Firefox for Android: ≤23
- Safari: ≤9.1
- Safari on iOS: ≤9.3

**MDN:**
- [Mixed content](https://developer.mozilla.org/docs/Web/Security/Defenses/Mixed_content)

### Permissions

The `navigator.permissions` API checks whether a permission, such as access to geolocation data, has been granted.

**Spec:**
- <https://w3c.github.io/permissions/>
- <https://wicg.github.io/permissions-request/#dom-permissions-request>

**Browser support:**
- Chrome: 44
- Chrome Android: 44
- Edge: 79
- Firefox: 46
- Firefox for Android: 46
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [Permissions API](https://developer.mozilla.org/docs/Web/API/Permissions_API)

### Trusted types

Trusted types allow you to lock down insecure parts of the DOM API and prevent client-side cross-site scripting (XSS) attacks.

**Spec:**
- <https://w3c.github.io/trusted-types/dist/spec/>

**Browser support:**
- Chrome: 83
- Chrome Android: 83
- Edge: 83
- Firefox: 148
- Firefox for Android: 148
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [Trusted Types API](https://developer.mozilla.org/docs/Web/API/Trusted_Types_API)

### Upgrade insecure requests

The `Upgrade-Insecure-Requests` HTTP request header tells the server that the response should redirect to a secure (HTTPS) resource.

**Spec:**
- <https://w3c.github.io/webappsec-upgrade-insecure-requests/>

**Browser support:**
- Chrome: 44
- Chrome Android: 44
- Edge: 17
- Firefox: 48
- Firefox for Android: 48
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Upgrade-Insecure-Requests header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests)

### User activation

The `navigator.userActivation` API reveals whether the user has interacted with the page through an "activation" gesture such as a click, tap, or key press. User activation gated APIs (such as the fullscreen API) fail without user interaction, and this API allows you to predict such a failure.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#the-useractivation-interface>

**Browser support:**
- Chrome: 72
- Chrome Android: 72
- Edge: 79
- Firefox: 120
- Firefox for Android: 120
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Navigator: userActivation property](https://developer.mozilla.org/docs/Web/API/Navigator/userActivation)

### Web Cryptography

The Web Cryptography API performs low-level cryptographic operations, such as encryption, decryption, and signature verification. Also known as the Web Crypto API.

**Spec:**
- <https://w3c.github.io/webcrypto/>
- <https://wicg.github.io/webcrypto-secure-curves/>

**Browser support:**
- Chrome: 37
- Chrome Android: 37
- Edge: 12
- Firefox: 34
- Firefox for Android: 34
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [Web Crypto API](https://developer.mozilla.org/docs/Web/API/Web_Crypto_API)
