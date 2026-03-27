# WebAuthn

Features related to https://w3c.github.io/webauthn/ (a public key-based credentials API)

## WebAuthn features

### Web authentication easy public key access

The `getAuthenticatorData()`, `getPublicKey()`, and `getPublicKeyAlgorithm()` methods of `AuthenticatorAttestationResponse` access credential data inside `attestationObject` without the need to parse it.

**Spec:**
- <https://w3c.github.io/webauthn/#sctn-public-key-easy>

**Baseline Newly Available since 2023-10-24**

**MDN:**
- [AuthenticatorAttestationResponse](https://developer.mozilla.org/docs/Web/API/AuthenticatorAttestationResponse)

### Web authentication signal methods

The `signalUnknownCredential()`, `signalAllAcceptedCredentials()`, and `signalCurrentUserDetails()` methods of `PublicKeyCredential` inform authenticators of the state of public key credentials, so that incorrect or revoked credentials may be updated, removed, or hidden.

**Spec:**
- <https://w3c.github.io/webauthn/#sctn-signal-methods>

**Limited Availability — Browser support:**
- Chrome: 132
- Chrome Android: 132
- Edge: 132
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [PublicKeyCredential: signalAllAcceptedCredentials() static method](https://developer.mozilla.org/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [PublicKeyCredential: signalCurrentUserDetails() static method](https://developer.mozilla.org/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [PublicKeyCredential: signalUnknownCredential() static method](https://developer.mozilla.org/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
