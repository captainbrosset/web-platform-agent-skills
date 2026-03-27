# Media elements

Media elements are `<audio>` and `<video>`, but the `<track>` element is also included in this group.

## Media elements features

### `<audio>`

The `<audio>` element plays sound such as audio effects or music, optionally with controls provided by the browser.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#audio>

**Browser support:**
- Chrome: 3
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 3

**MDN:**
- [`<audio>`: The Embed Audio element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio)

### `<source>`

The `<source>` element sets a media resource for the `<picture>`, `<video>`, and `<audio>` elements.

**Spec:**
- <https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element>

**Browser support:**
- Chrome: 3
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [`<source>`: The Media or Image Source element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source)

### `<video>`

The `<video>` element plays videos or movies, optionally with controls provided by the browser.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#video>

**Browser support:**
- Chrome: 3
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 3

**MDN:**
- [`<video>`: The Video Embed element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video)

### Audio and video tracks

The `audioTracks` and `videoTracks` APIs for media elements switch audio and video tracks during playback.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#media-resources-with-multiple-media-tracks>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [HTMLMediaElement: audioTracks property](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/audioTracks)
- [HTMLMediaElement: videoTracks property](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/videoTracks)

### captureStream() for `<audio>` and `<video>`

The `captureStream()` method for `<audio>` and `<video>` elements returns a `MediaStream` for the media element's content. You can use this to record media or send it elsewhere, such as a canvas or WebRTC connection.

**Spec:**
- <https://w3c.github.io/mediacapture-fromelement/#html-media-element-media-capture-extensions>

**Browser support:**
- Chrome: 62
- Chrome Android: 62
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLMediaElement: captureStream() method](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/captureStream)

### controlslist

The `controlslist` attribute for `<audio>` or `<video>` hides parts of the browser's built-in controls. For example, `controlslist="nofullscreen"` removes the button to play the video in fullscreen.

**Spec:**
- <https://wicg.github.io/controls-list/>

**Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLMediaElement: controlsList property](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/controlsList)

### fastSeek()

The `fastSeek()` method seeks an `<audio>` or `<video>` element as fast as possible, by seeking to a keyframe instead of exactly the requested time.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#dom-media-fastseek-dev>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 31
- Firefox for Android: 31
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [HTMLMediaElement: fastSeek() method](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/fastSeek)

### Lazy-loading media

The `loading="lazy"` attribute for `<video>` and `<audio>` elements defers loading the media resource until the element is near the viewport. This matches the lazy-loading behavior for `<img>` and `<iframe>` elements.

**Spec:**
- <https://github.com/whatwg/html/pull/11980>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### Media element pseudo-classes

The `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked` CSS pseudo-classes match `<audio>` and `<video>` elements based on their state.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#resource-pseudos>
- <https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [:paused](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:paused)
- [:playing](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:playing)

### preservesPitch

The `preservesPitch` property for `<audio>` or `<video>` adjusts the pitch of audio to sound more natural when the playback rate is faster or slower than the default.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#dom-media-preservespitch-dev>

**Browser support:**
- Chrome: 86
- Chrome Android: 86
- Edge: 86
- Firefox: 101
- Firefox for Android: 101
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [HTMLMediaElement: preservesPitch property](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preservesPitch)

### requestVideoFrameCallback()

The `requestVideoFrameCallback()` method for `<video>` schedules a function that runs with the next video frame. It is similar to `requestAnimationFrame()`, but for video.

**Spec:**
- <https://wicg.github.io/video-rvfc/>

**Browser support:**
- Chrome: 83
- Chrome Android: 83
- Edge: 83
- Firefox: 132
- Firefox for Android: 132
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [HTMLVideoElement: cancelVideoFrameCallback() method](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [HTMLVideoElement: requestVideoFrameCallback() method](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)

### Text tracks

The `<track>` element is used as a child of the media elements that lets you specify a timed text track to be displayed in parallel with the media element.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#timed-text-tracks>

**Browser support:**
- Chrome: 23
- Chrome Android: 25
- Edge: 12
- Firefox: 31
- Firefox for Android: 31
- Safari: 6
- Safari on iOS: 6

**MDN:**
- [`<track>`: The Embed Text Track element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track)
