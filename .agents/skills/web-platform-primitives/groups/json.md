# JSON

Features for the JSON format itself and related features, such as the JSON JavaScript namespace and JSON import attributes.

## JSON features

### JSON import attributes

Module `import … with { type: "json" }` statements load JSON data. Also known as JSON module scripts.

**Spec:**
- <https://html.spec.whatwg.org/multipage/webappapis.html#json-module-script>

**Baseline Newly Available since 2025-04-29**

**MDN:**
- [Import attributes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import/with)

### JSON source text access

To serialize and parse JSON in a lossless way, `JSON.stringify()` handles `rawJSON` values and `JSON.parse()`'s reviver callback takes a source context parameter.

**Spec:**
- <https://tc39.es/proposal-json-parse-with-source/#sec-json-object>

**Baseline Newly Available since 2025-03-31**

**MDN:**
- [JSON.stringify()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [JSON.isRawJSON()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON)
- [JSON.rawJSON()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON)
