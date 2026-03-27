# Sensors

Web platform features about Sensors

## Sensors features

### Accelerometer

The `Accelerometer`, `LinearAccelerationSensor` and `GravitySensor` APIs read the acceleration applied to a device in three dimensions, either including the effect of gravity, without its effect, or only its effect, respectively.

**Spec:**
- <https://w3c.github.io/accelerometer/>

**Limited Availability — Browser support:**
- Chrome: 91
- Chrome Android: 91
- Edge: 91
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Accelerometer](https://developer.mozilla.org/docs/Web/API/Accelerometer)

### Device orientation events

The `DeviceMotion` and `DeviceOrientation` events report the movement and orientation of the browser's device in physical space. Note that coordinates can differ noticeably between platforms and devices.

**Spec:**
- <https://w3c.github.io/deviceorientation/>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [Device orientation events](https://developer.mozilla.org/docs/Web/API/Device_orientation_events)

### Gyroscope

The `Gyroscope` API reads the angular velocity of a device in three dimensions.

**Spec:**
- <https://w3c.github.io/gyroscope/#gyroscope-interface>

**Limited Availability — Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Gyroscope](https://developer.mozilla.org/docs/Web/API/Gyroscope)

### Orientation Sensor

The `AbsoluteOrientationSensor` and `RelativeOrientationSensor` APIs describe the physical orientation of a device in three-dimensional space, either in relation to the Earth's coordinate system or in relation to the device's own orientation, respectively.

**Spec:**
- <https://w3c.github.io/orientation-sensor/#absoluteorientationsensor-interface>
- <https://w3c.github.io/orientation-sensor/#relativeorientationsensor-interface>

**Limited Availability — Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [OrientationSensor](https://developer.mozilla.org/docs/Web/API/OrientationSensor)

### Virtual sensors

The `CreateVirtualSensor` WebDriver command creates a virtual sensor for testing applications that use sensor APIs, without the need for real device sensors.

**Spec:**
- <https://w3c.github.io/sensors/#automation>

**Limited Availability — Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
