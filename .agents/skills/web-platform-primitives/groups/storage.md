# Storage

Group for the set of features related to storage of data. Currently this group contains all storage related features that have been developed. However, there are still many to add, so it's possible this eventually gets sub-groups or another approach for more specific categorization.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [IndexedDB](indexeddb.md)

## Storage features

### localStorage and sessionStorage

The `localStorage` and `sessionStorage` APIs store data as key-value pairs. While `localStorage` persists across sessions, `sessionStorage` data is discarded when the page is closed.

**Spec:**
- <https://storage.spec.whatwg.org/>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 6
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API)

### Non-cookie storage access

Non-cookie storage access extends the `requestStorageAccess()` API to let content in cross-site iframes request access to first-party data beyond cookies.

**Spec:**
- <https://privacycg.github.io/saa-non-cookie-storage/>

**Browser support:**
- Chrome: 125
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Document: requestStorageAccess() method](https://developer.mozilla.org/docs/Web/API/Document/requestStorageAccess)

### Storage access

The `document.requestStorageAccess()` method allows content in iframes to request storing and reading cookies and other site data, while the `document.hasStorageAccess()` method checks if such access is granted.

**Spec:**
- <https://privacycg.github.io/storage-access/>

**Browser support:**
- Chrome: 119
- Chrome Android: 120
- Edge: 85
- Firefox: 65
- Firefox for Android: 65
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [Storage Access API](https://developer.mozilla.org/docs/Web/API/Storage_Access_API)

### Storage buckets

The `navigator.storageBuckets` API allows you to organize locally stored data into groups called storage buckets. Each bucket can have different settings, allowing the browser to manage and delete buckets independently rather than applying the same treatment to all.

**Spec:**
- <https://wicg.github.io/storage-buckets/>

**Browser support:**
- Chrome: 122
- Chrome Android: 122
- Edge: 122
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Storage manager

The `navigator.storage` API provides information about the availability and persistence of the data that a site stores on the device, by using APIs such as the Cache API or the IndexedDB API.

**Spec:**
- <https://storage.spec.whatwg.org/>

**Browser support:**
- Chrome: 61
- Chrome Android: 61
- Edge: 79
- Firefox: 57
- Firefox for Android: 57
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [Storage API](https://developer.mozilla.org/docs/Web/API/Storage_API)
