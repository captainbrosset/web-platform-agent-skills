# Media elements

Media elements are `<audio>` and `<video>`, but the `<track>` element is also included in this group.

## Media elements features

### Audio and video tracks

The `audioTracks` and `videoTracks` APIs for media elements switch audio and video tracks during playback.

**Spec:**
- <https://html.spec.whatwg.org/multipage/media.html#media-resources-with-multiple-media-tracks>

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
- Chrome: 62
- Chrome Android: 62
- Edge: 79
- Firefox: 149
- Firefox for Android: 149
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLMediaElement: captureStream() method](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/captureStream)

### controlslist

The `controlslist` attribute for `<audio>` or `<video>` hides parts of the browser's built-in controls. For example, `controlslist="nofullscreen"` removes the button to play the video in fullscreen.

**Spec:**
- <https://wicg.github.io/controls-list/>

**Limited Availability — Browser support:**
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

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 31
- Firefox for Android: 31
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [HTMLMediaElement: fastSeek() method](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/fastSeek)

### Media element pseudo-classes

The `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked` CSS pseudo-classes match `<audio>` and `<video>` elements based on their state.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#resource-pseudos>
- <https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes>

**Limited Availability — Browser support:**
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

**Baseline Newly Available since 2023-12-11**

**MDN:**
- [HTMLMediaElement: preservesPitch property](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preservesPitch)

### requestVideoFrameCallback()

The `requestVideoFrameCallback()` method for `<video>` schedules a function that runs with the next video frame. It is similar to `requestAnimationFrame()`, but for video.

**Spec:**
- <https://wicg.github.io/video-rvfc/>

**Baseline Newly Available since 2024-10-29**

**MDN:**
- [HTMLVideoElement: cancelVideoFrameCallback() method](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [HTMLVideoElement: requestVideoFrameCallback() method](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
