# JSON

Features for the JSON format itself and related features, such as the JSON JavaScript namespace and JSON import attributes.

## JSON features

### JSON

The `JSON` API provides static methods for parsing values from and converting values to JavaScript Object Notation (JSON), a serialization format for objects, arrays, numbers, strings, Boolean values, and null.

**Spec:**
- <https://tc39.es/ecma262/multipage/structured-data.html#sec-json-object>

**Browser support:**
- Chrome: 3
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 4

**MDN:**
- [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### JSON import attributes

Module `import … with { type: "json" }` statements load JSON data. Also known as JSON module scripts.

**Spec:**
- <https://html.spec.whatwg.org/multipage/webappapis.html#json-module-script>

**Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: 138
- Firefox for Android: 138
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [Import attributes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import/with)

### JSON source text access

To serialize and parse JSON in a lossless way, `JSON.stringify()` handles `rawJSON` values and `JSON.parse()`'s reviver callback takes a source context parameter.

**Spec:**
- <https://tc39.es/proposal-json-parse-with-source/#sec-json-object>

**Browser support:**
- Chrome: 114
- Chrome Android: 114
- Edge: 114
- Firefox: 135
- Firefox for Android: 135
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [JSON.stringify()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [JSON.isRawJSON()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON)
- [JSON.rawJSON()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON)
