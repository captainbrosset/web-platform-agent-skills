# WebRTC

https://w3c.github.io/webrtc-pc/ and the many related specs.

## WebRTC features

### WebRTC

The WebRTC API establishes real-time communication channels directly between browsers. It is commonly used in video conferencing applications.

**Spec:**
- <https://w3c.github.io/webrtc-pc/>

**Browser support:**
- Chrome: 56
- Chrome Android: 56
- Edge: 79
- Firefox: 22
- Firefox for Android: 24
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [WebRTC API](https://developer.mozilla.org/docs/Web/API/WebRTC_API)

### WebRTC encoded transform

The WebRTC encoded transform API allows you to modify audio and video streams in WebRTC connections. For example, it can be used for visual effects or custom codecs.

**Spec:**
- <https://w3c.github.io/webrtc-encoded-transform/>

**Browser support:**
- Chrome: 141
- Chrome Android: 141
- Edge: 141
- Firefox: 117
- Firefox for Android: 117
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [Using WebRTC Encoded Transforms](https://developer.mozilla.org/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)

### WebRTC SCTP information

The `sctp` object on `RTCPeerConnection` represents the negotiated SCTP transport. SCTP (Stream Control Transmission Protocol) is the protocol that `RTCDataChannel` uses.

**Spec:**
- <https://w3c.github.io/webrtc-pc/#rtcsctptransport-interface>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 113
- Firefox for Android: 113
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [RTCPeerConnection: sctp property](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/sctp)

### WebRTC statistics

The `RTCPeerConnection.getStats()`, `RTCRtpSender.getStats()`, and `RTCRtpReceiver.getStats()` methods return detailed information about the status, performance, network, and media for a given WebRTC connection.

**Spec:**
- <https://w3c.github.io/webrtc-stats/>

**Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: 44
- Firefox for Android: 44
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [RTCPeerConnection: getStats() method](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getStats)
- [RTCRtpSender: getStats() method](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/getStats)
- [RTCRtpReceiver: getStats() method](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getStats)
