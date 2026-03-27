# Messaging

Covers messaging APIs like BroadcastChannel, EventSource and more. The spec calls this group "Communications", but that seems overly general for the web features group.

## Messaging features

### BroadcastChannel

The `BroadcastChannel` API allows you to send messages between same-origin browsing contexts, such as between the same page loaded in multiple tabs.

**Spec:**
- <https://html.spec.whatwg.org/multipage/web-messaging.html#broadcasting-to-other-browsing-contexts>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: 38
- Firefox for Android: 38
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [Broadcast Channel API](https://developer.mozilla.org/docs/Web/API/Broadcast_Channel_API)

### Channel messaging

Channel messaging communicates one-to-one between browsing contexts on the same origin, such as between `<iframe>` elements or two documents using a shared worker.

**Spec:**
- <https://html.spec.whatwg.org/multipage/web-messaging.html#channel-messaging>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 41
- Firefox for Android: 41
- Safari: 5
- Safari on iOS: 4.2

**MDN:**
- [Channel Messaging API](https://developer.mozilla.org/docs/Web/API/Channel_Messaging_API)

### messageerror

The `messageerror` event fires on a target, such as a window or worker, when an incoming message cannot be deserialized. This event can fire for many types of messages, such as cross-document messages or broadcast channel messages.

**Spec:**
- <https://html.spec.whatwg.org/multipage/indices.html#event-messageerror>
- <https://w3c.github.io/ServiceWorker/#eventdef-serviceworkerglobalscope-messageerror>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 18
- Firefox: 57
- Firefox for Android: 57
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Window: messageerror event](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)
- [Worker: messageerror event](https://developer.mozilla.org/docs/Web/API/Worker/messageerror_event)

### postMessage

The `postMessage()` global method sends cross-origin messages to windows and workers, including popups and iframes. Also known as cross-document messaging.

**Spec:**
- <https://html.spec.whatwg.org/multipage/web-messaging.html#web-messaging>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 3
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [Window: postMessage() method](https://developer.mozilla.org/docs/Web/API/Window/postMessage)
- [Worker: postMessage() method](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)

### Server-sent events

The `EventSource` API creates a connection to a server and listens to a stream of events sent by the server.

**Spec:**
- <https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events>

**Browser support:**
- Chrome: 6
- Chrome Android: 18
- Edge: 79
- Firefox: 6
- Firefox for Android: 45
- Safari: 5
- Safari on iOS: 5

**MDN:**
- [Server-sent events](https://developer.mozilla.org/docs/Web/API/Server-sent_events)
