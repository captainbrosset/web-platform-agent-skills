# XML

Group comprises XML features such as parsing/serializing, querying and more. It does not include XMLHTTPRequest, since it's not specific to XML.

## XML features

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

### XPath

The `document.evaluate()` method selects elements in an HTML or XML document based on an expression of XPath, a domain specific language for querying XML documents. Also known as XML Path Language.

**Spec:**
- <https://dom.spec.whatwg.org/#xpath>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [XPath](https://developer.mozilla.org/docs/Web/XML/XPath)

### XSLT

The `XSLTProcessor` API transforms XML documents into new XML or HTML documents, using XSLT stylesheets. You can use XSLT to convert data between different XML schemas or to convert XML data into web pages or PDF documents. Also known as Extensible Stylesheet Language Transformations.

**Spec:**
- <https://dom.spec.whatwg.org/#xslt>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [XSLTProcessor](https://developer.mozilla.org/docs/Web/API/XSLTProcessor)
