# Payments

Web platform features about Payments

## Payments features

### Payment handler

The payment handler API registers a web application as a payment handler and responds to payment requests in the browser's user interface, rather than redirecting users to a separate site to complete a payment.

**Spec:**
- <https://w3c.github.io/web-based-payment-handler/>

**Limited Availability — Browser support:**
- Chrome: 70
- Chrome Android: 70
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Web-based Payment Handler API](https://developer.mozilla.org/docs/Web/API/Web-Based_Payment_Handler_API)

### Payment request

The `PaymentRequest` API prompts the user to make a payment through the browser's user interface.

**Spec:**
- <https://w3c.github.io/payment-request/>

**Limited Availability — Browser support:**
- Chrome: 60
- Chrome Android: 53
- Edge: 15
- Firefox: —
- Firefox for Android: —
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API)

### Secure payment confirmation

The `payment` extension of a web authentication credential allows a relying party (such as a bank) to create a credential that can be queried by any merchant origin as part of an online checkout that uses the Payment Request API's `secure-payment-confirmation` payment method. Also known as SPC.

**Spec:**
- <https://w3c.github.io/secure-payment-confirmation/>

**Limited Availability — Browser support:**
- Chrome: 139
- Chrome Android: 139
- Edge: 139
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Web Authentication extensions](https://developer.mozilla.org/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment)
- [PaymentRequest: securePaymentConfirmationAvailability() static method](https://developer.mozilla.org/docs/Web/API/PaymentRequest/securePaymentConfirmationAvailability_static)
