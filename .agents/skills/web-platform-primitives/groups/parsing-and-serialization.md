# Parsing and serialization

Caniuse lumps all parsing/serialization of html and xml into one feature. For Web Features, they are separate features in a group.

## Parsing and serialization features

### DOMParser

The `DOMParser` API parses XML or HTML source code from a string into a DOM Document.

**Spec:**
- <https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#the-domparser-interface>

**Browser support:**
- Chrome: 31
- Chrome Android: 31
- Edge: 12
- Firefox: 12
- Firefox for Android: 14
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [DOMParser](https://developer.mozilla.org/docs/Web/API/DOMParser)

### XMLSerializer

The `XMLSerializer` API provides the `serializeToString()` method to construct an XML string representing a DOM tree.

**Spec:**
- <https://w3c.github.io/DOM-Parsing/#the-xmlserializer-interface>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [XMLSerializer](https://developer.mozilla.org/docs/Web/API/XMLSerializer)
