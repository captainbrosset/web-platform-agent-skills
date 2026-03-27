# Credential management

Scope: anything accessed via `navigator.credentials`

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [WebAuthn](webauthn.md)

## Credential management features

### Federated credential management

The `IdentityCredential` API delegates authentication to a third-party identity provider, instead of using third-party cookies. Also known as FedCM.

**Spec:**
- <https://w3c-fedid.github.io/FedCM/>

**Limited Availability — Browser support:**
- Chrome: 116
- Chrome Android: 116
- Edge: 116
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [IdentityCredential](https://developer.mozilla.org/docs/Web/API/IdentityCredential)

### Federated credentials

The `FederatedCredential` API represents the details required to authenticate a user using a third-party identity provider. Not to be confused with federated credential management (FedCM).

**Spec:**
- <https://w3c.github.io/webappsec-credential-management/#federated>

**Limited Availability — Browser support:**
- Chrome: 51
- Chrome Android: 51
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [FederatedCredential](https://developer.mozilla.org/docs/Web/API/FederatedCredential)

### Password credentials

The `PasswordCredential` API represents a username and password.

**Spec:**
- <https://w3c.github.io/webappsec-credential-management/#passwords>

**Limited Availability — Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [PasswordCredential](https://developer.mozilla.org/docs/Web/API/PasswordCredential)

### WebOTP

The `OTPCredential` API represents a one-time-password (OTP).

**Spec:**
- <https://wicg.github.io/web-otp/>

**Limited Availability — Browser support:**
- Chrome: 93
- Chrome Android: 84
- Edge: 93
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [WebOTP API](https://developer.mozilla.org/docs/Web/API/WebOTP_API)
