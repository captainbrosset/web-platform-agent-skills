# IndexedDB

Group for the set of features related to storing data in IndexedDB.

## IndexedDB features

### IndexedDB

The IndexedDB API is a local storage transactional object database.

**Spec:**
- <https://w3c.github.io/IndexedDB/>

**Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: 51
- Firefox for Android: 51
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [IndexedDB API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)

### IndexedDB getAllRecords()

The `getAllRecords()` method of `IDBObjectStore` and `IDBIndex` return records and their primary keys from an IndexedDB store or index. The records can be read in batches and in reverse order. The `getAllRecords()` methods speed up read operations on large datasets.

**Spec:**
- <https://w3c.github.io/IndexedDB/#dom-idbindex-getallrecords>
- <https://w3c.github.io/IndexedDB/#dom-idbobjectstore-getallrecords>

**Browser support:**
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
