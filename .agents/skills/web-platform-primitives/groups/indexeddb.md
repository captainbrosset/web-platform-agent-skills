# IndexedDB

Group for the set of features related to storing data in IndexedDB.

## IndexedDB features

### IndexedDB getAllRecords()

The `getAllRecords()` method of `IDBObjectStore` and `IDBIndex` return records and their primary keys from an IndexedDB store or index. The records can be read in batches and in reverse order. The `getAllRecords()` methods speed up read operations on large datasets.

**Spec:**
- <https://w3c.github.io/IndexedDB/#dom-idbindex-getallrecords>
- <https://w3c.github.io/IndexedDB/#dom-idbobjectstore-getallrecords>

**Limited Availability — Browser support:**
- Chrome: 141
- Chrome Android: 141
- Edge: 141
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [IDBIndex: getAllRecords() method](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllRecords)
- [IDBObjectStore: getAllRecords() method](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAllRecords)
