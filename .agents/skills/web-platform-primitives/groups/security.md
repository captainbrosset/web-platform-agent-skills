# Security

Features related to web application security See also SWAG CG https://github.com/w3c-cg/swag/issues/2

## Security features

### Credentialless iframes

The `credentialless` attribute for the `<iframe>` HTML element loads third-party content in an ephemeral context and does not send any credentials such as cookies. When using cross-origin isolation, this allows you to embed content that does not send `Cross-Origin-Embedder-Policy` headers.

**Spec:**
- <https://wicg.github.io/anonymous-iframe/>

**Limited Availability — Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [IFrame credentialless](https://developer.mozilla.org/docs/Web/HTTP/Guides/IFrame_credentialless)

### Trusted types

Trusted types allow you to lock down insecure parts of the DOM API and prevent client-side cross-site scripting (XSS) attacks.

**Spec:**
- <https://w3c.github.io/trusted-types/dist/spec/>

**Baseline Newly Available since 2026-02-24**

**MDN:**
- [Trusted Types API](https://developer.mozilla.org/docs/Web/API/Trusted_Types_API)

### User activation

The `navigator.userActivation` API reveals whether the user has interacted with the page through an "activation" gesture such as a click, tap, or key press. User activation gated APIs (such as the fullscreen API) fail without user interaction, and this API allows you to predict such a failure.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#the-useractivation-interface>

**Baseline Newly Available since 2023-11-21**

**MDN:**
- [Navigator: userActivation property](https://developer.mozilla.org/docs/Web/API/Navigator/userActivation)
