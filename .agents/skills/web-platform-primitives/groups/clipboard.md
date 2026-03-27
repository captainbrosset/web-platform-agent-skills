# Clipboard

Web platform features about Clipboard

## Clipboard features

### Async clipboard

The `navigator.clipboard` API asynchronously reads and writes to the system clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#async-clipboard-api>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 127
- Firefox for Android: 127
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [Clipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard_API)

### Clipboard events

The `"copy"`, `"cut"`, and `"paste"` events fire on elements when the user starts an action with the clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 12
- Firefox: 22
- Firefox for Android: 22
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Element: copy event](https://developer.mozilla.org/docs/Web/API/Element/copy_event)
- [Element: cut event](https://developer.mozilla.org/docs/Web/API/Element/cut_event)
- [Element: paste event](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

### clipboardchange

The `clipboardchange` event for `navigator.clipboard` fires when the user modifies the clipboard's contents.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#clipboard-event-clipboardchange>

**Browser support:**
- Chrome: 144
- Chrome Android: 144
- Edge: 144
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [ClipboardChangeEvent](https://developer.mozilla.org/docs/Web/API/ClipboardChangeEvent)
- [ClipboardChangeEvent: ClipboardChangeEvent() constructor](https://developer.mozilla.org/docs/Web/API/ClipboardChangeEvent/ClipboardChangeEvent)
- [ClipboardChangeEvent: changeId property](https://developer.mozilla.org/docs/Web/API/ClipboardChangeEvent/changeId)
- [ClipboardChangeEvent: types property](https://developer.mozilla.org/docs/Web/API/ClipboardChangeEvent/types)

### ClipboardItem.supports()

The `ClipboardItem.supports()` static method checks if the browser supports writing data types such as "image/svg+xml" or other custom formats to the system clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#dom-clipboarditem-supports>

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: 127
- Firefox for Android: 127
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [ClipboardItem: supports() static method](https://developer.mozilla.org/docs/Web/API/ClipboardItem/supports_static)

### Custom formats for clipboard items

The `web ` prefix for `ClipboardItem` data types (also known as MIME types) allows reading and writing ununsanitized custom data from the device clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#optional-data-types-x>

**Browser support:**
- Chrome: 104
- Chrome Android: 104
- Edge: 104
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [ClipboardItem](https://developer.mozilla.org/docs/Web/API/ClipboardItem)
- [ClipboardItem: supports() static method](https://developer.mozilla.org/docs/Web/API/ClipboardItem/supports_static#type)

### Read unsanitized clipboard data

The optional `formats.unsanitized` parameter of the `navigator.clipboard.read()` method reads unsanitized `text/html` data from the system clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#dom-clipboardunsanitizedformats-unsanitized>

**Browser support:**
- Chrome: 122
- Chrome Android: 122
- Edge: 122
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Clipboard: read() method](https://developer.mozilla.org/docs/Web/API/Clipboard/read#unsanitized)

### SVG clipboard items

The `image/svg+xml` data type (also known as the MIME type) for `ClipboardItem` objects represents SVG data written to or read from the clipboard.

**Spec:**
- <https://w3c.github.io/clipboard-apis/#optional-data-types-x>

**Browser support:**
- Chrome: 124
- Chrome Android: 124
- Edge: 124
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [ClipboardItem](https://developer.mozilla.org/docs/Web/API/ClipboardItem)
