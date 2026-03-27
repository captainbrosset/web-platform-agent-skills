# Progressive web app

Progressive web apps is built with web technologies, but has capabilities similar to a platform-specific app. Also known as PWA.

## Progressive web app features

### `<install>`

The `<install>` HTML element represents a button that, upon activation, prompts the user to choose whether to install a progressive web app.

**Spec:**
- <https://github.com/WICG/install-element>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### `<meta name="application-title">`

The `name="application-title"` attribute for the `<meta>` HTML element sets an installed web application's title bar text.

**Spec:**
- <https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/DocumentSubtitle/explainer.md>

**Browser support:**
- Chrome: 134
- Chrome Android: 134
- Edge: 134
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [`<meta>` name attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta/name#other_names)

### Application shortcuts

The `shortcuts` web app manifest member registers common actions of an installed web app with the device. The device can present these actions to the user in contextually appropriate locations, such as jump lists on Windows or the app launcher on Android.

**Spec:**
- <https://w3c.github.io/manifest/#shortcuts-member>

**Browser support:**
- Chrome: 96
- Chrome Android: 84
- Edge: 96
- Firefox: —
- Firefox for Android: —
- Safari: 17.4
- Safari on iOS: —

**MDN:**
- [shortcuts](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)

### beforeinstallprompt

The `beforeinstallprompt` event fires when a Progressive Web App (PWA) is installable. You can cancel the event and later call `event.prompt()` to control when the installation prompt is shown. The `appinstalled` event fires when the PWA is successfully installed.

**Spec:**
- <https://wicg.github.io/manifest-incubations/#installation-events>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Window: beforeinstallprompt event](https://developer.mozilla.org/docs/Web/API/Window/beforeinstallprompt_event)

### File handlers

The `file_handlers` web app manifest member registers an installed web app as a handler for files with specific file extensions or MIME types.

**Spec:**
- <https://wicg.github.io/manifest-incubations/#file_handlers-member>

**Browser support:**
- Chrome: 102
- Chrome Android: —
- Edge: 102
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [file_handlers](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)

### Launch handler

The `launch_handler` web app manifest member, with the `client_mode` property, configure how web app launches behave when an instance of the app is already open. For example, you can choose to focus the existing app instance instead of launching a new one.

**Spec:**
- <https://wicg.github.io/web-app-launch/>

**Browser support:**
- Chrome: 110
- Chrome Android: —
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Launch Handler API](https://developer.mozilla.org/docs/Web/API/Launch_Handler_API)

### navigator.install()

The `navigator.install()` method triggers a request to install a progressive web app.

**Spec:**
- <https://github.com/w3c/manifest/pull/1175>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Protocol handlers

The `protocol_handlers` web app manifest member registers an installed web app as a handler for a specific protocol. When a user follows a link with the specified protocol, the installed app opens the link.

**Spec:**
- <https://wicg.github.io/manifest-incubations/#protocol_handlers-member>

**Browser support:**
- Chrome: 96
- Chrome Android: —
- Edge: 96
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [protocol_handlers](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/protocol_handlers)

### Related apps

The `related_applications` web app manifest member lists operating system-specific applications that are related to the current web app, such as an Android app that provides similar functionality. The `getInstalledRelatedApps()` method lists which of those are installed on the current device.

**Spec:**
- <https://wicg.github.io/get-installed-related-apps/spec/>

**Browser support:**
- Chrome: —
- Chrome Android: 84
- Edge: 85
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Navigator: getInstalledRelatedApps() method](https://developer.mozilla.org/docs/Web/API/Navigator/getInstalledRelatedApps)
- [prefer_related_applications](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications)
- [related_applications](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)

### Share targets

The `share_target` web app manifest member registers an installed web app as a handler for shared content. When a user shares content by using the device share dialog, the installed app can be listed as an option for handling the shared content.

**Spec:**
- <https://w3c.github.io/web-share-target/#share_target-member>

**Browser support:**
- Chrome: 89
- Chrome Android: 76
- Edge: 89
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [share_target](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)

### Web app manifest

A web app manifest file provides metadata about the site. The browser can use the metadata to install the site as a standalone application on the user's device. The metadata usually includes the app's name, icon, description, and ways in which the app wishes to integrate with the device.

**Spec:**
- <https://w3c.github.io/manifest/>

**Browser support:**
- Chrome: 53
- Chrome Android: 53
- Edge: 79
- Firefox: —
- Firefox for Android: 79
- Safari: 17
- Safari on iOS: 15.4

**MDN:**
- [Web application manifest](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Manifest)

### Web app manifest localization

The `_localized` suffixed members of the web app manifest set translated names, descriptions, icons, and shortcuts. The browser automatically selects resources based on the user's language and region settings.

**Spec:**
- <https://w3c.github.io/manifest/#localized-members>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Window Controls Overlay

The `display_override: ["window-controls-overlay"]` web application manifest member shows content in the title bar area of a progressive web app that is installed on a desktop device.

**Spec:**
- <https://wicg.github.io/window-controls-overlay/>

**Browser support:**
- Chrome: 105
- Chrome Android: —
- Edge: 105
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Window Controls Overlay API](https://developer.mozilla.org/docs/Web/API/Window_Controls_Overlay_API)
