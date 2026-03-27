# WebRTC

https://w3c.github.io/webrtc-pc/ and the many related specs.

## WebRTC features

### WebRTC encoded transform

The WebRTC encoded transform API allows you to modify audio and video streams in WebRTC connections. For example, it can be used for visual effects or custom codecs.

**Spec:**
- <https://w3c.github.io/webrtc-encoded-transform/>

**Baseline Newly Available since 2025-10-03**

**MDN:**
- [Using WebRTC Encoded Transforms](https://developer.mozilla.org/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)

### WebRTC SCTP information

The `sctp` object on `RTCPeerConnection` represents the negotiated SCTP transport. SCTP (Stream Control Transmission Protocol) is the protocol that `RTCDataChannel` uses.

**Spec:**
- <https://w3c.github.io/webrtc-pc/#rtcsctptransport-interface>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [RTCPeerConnection: sctp property](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/sctp)
