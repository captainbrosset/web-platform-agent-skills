# Gamepad

Web platform features about Gamepad

## Gamepad features

### Gamepad

The `navigator.getGamepads()` API accesses and responds to signals from game controllers.

**Spec:**
- <https://w3c.github.io/gamepad/>

**Browser support:**
- Chrome: 35
- Chrome Android: 35
- Edge: 12
- Firefox: 29
- Firefox for Android: 32
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Gamepad API](https://developer.mozilla.org/docs/Web/API/Gamepad_API)

### Gamepad haptic feedback

The `gamepad.vibrationActuator` property represents a gamepad's haptics hardware, which allows you to control the vibration motors in a gamepad.

**Spec:**
- <https://w3c.github.io/gamepad/#gamepadhapticactuator-interface>

**Browser support:**
- Chrome: 68
- Chrome Android: 68
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: —

**MDN:**
- [Gamepad: hapticActuators property](https://developer.mozilla.org/docs/Web/API/Gamepad/hapticActuators)
- [Gamepad: vibrationActuator property](https://developer.mozilla.org/docs/Web/API/Gamepad/vibrationActuator)

### Gamepad touch buttons

The `touched` property of a `GamepadButton` object indicates whether a button capable of detecting touch is currently touched.

**Spec:**
- <https://w3c.github.io/gamepad/#dom-gamepadbutton-touched>

**Browser support:**
- Chrome: 73
- Chrome Android: 73
- Edge: 15
- Firefox: 55
- Firefox for Android: 55
- Safari: —
- Safari on iOS: —

**MDN:**
- [GamepadButton: touched property](https://developer.mozilla.org/docs/Web/API/GamepadButton/touched)

### Gamepad VR hands and poses

The `hand` and `pose` properties of a `Gamepad` object represent the position in space and the hand that WebVR controllers are held in.

**Spec:**
- <https://w3c.github.io/gamepad/extensions.html>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 55
- Firefox for Android: 55
- Safari: —
- Safari on iOS: —

**MDN:**
- [Gamepad: hand property](https://developer.mozilla.org/docs/Web/API/Gamepad/hand)
- [Gamepad: pose property](https://developer.mozilla.org/docs/Web/API/Gamepad/pose)
