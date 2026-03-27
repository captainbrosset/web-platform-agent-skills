# File system access

Web platform features about File system access

## File system access features

### `<input type="file" multiple>`

The `<input type="file" multiple>` HTML element shows a file picker from which users can choose one or more files to upload with a form.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#attr-input-multiple>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 3.6
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [HTMLInputElement: multiple property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/multiple)
- [HTMLInputElement: webkitEntries property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitEntries)
- [HTML attribute: multiple](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/multiple)

### `<input type="file" webkitdirectory>`

The `<input type="file" webkitdirectory>` HTML element shows a file picker from which users can choose a folder to upload with the form.

**Spec:**
- <https://wicg.github.io/entries-api/#html-forms>

**Browser support:**
- Chrome: 13
- Chrome Android: 132
- Edge: 13
- Firefox: 50
- Firefox for Android: 142
- Safari: 11.1
- Safari on iOS: 18.4

**MDN:**
- [File: webkitRelativePath property](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)

### File system access

The `showOpenFilePicker()`, `showDirectoryPicker()`, and `showSaveFilePicker()` methods request access to files and directories on the user's device and returns a handle for reading and writing to them.

**Spec:**
- <https://wicg.github.io/file-system-access/>

**Browser support:**
- Chrome: 86
- Chrome Android: 132
- Edge: 86
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Window: showOpenFilePicker() method](https://developer.mozilla.org/docs/Web/API/Window/showOpenFilePicker)
- [Window: showDirectoryPicker() method](https://developer.mozilla.org/docs/Web/API/Window/showDirectoryPicker)
- [Window: showSaveFilePicker() method](https://developer.mozilla.org/docs/Web/API/Window/showSaveFilePicker)
- [File System API](https://developer.mozilla.org/docs/Web/API/File_System_API)

### Origin private file system

The `navigator.storage.getDirectory()` method returns a `FileSystemDirectoryHandle` that is restricted to a specific origin and invisible to the user's actual file system for faster file-based applications, such as SQLite databases.

**Spec:**
- <https://fs.spec.whatwg.org/#origin-private-file-system>

**Browser support:**
- Chrome: 108
- Chrome Android: 109
- Edge: 108
- Firefox: 111
- Firefox for Android: 111
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Origin private file system](https://developer.mozilla.org/docs/Web/API/File_System_API/Origin_private_file_system)
