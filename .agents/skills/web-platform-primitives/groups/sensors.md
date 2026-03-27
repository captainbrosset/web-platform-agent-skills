# Sensors

Web platform features about Sensors

## Sensors features

### Accelerometer

The `Accelerometer`, `LinearAccelerationSensor` and `GravitySensor` APIs read the acceleration applied to a device in three dimensions, either including the effect of gravity, without its effect, or only its effect, respectively.

**Spec:**
- <https://w3c.github.io/accelerometer/>

**Browser support:**
- Chrome: 91
- Chrome Android: 91
- Edge: 91
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Accelerometer](https://developer.mozilla.org/docs/Web/API/Accelerometer)

### Ambient light sensor

The `AmbientLightSensor` API returns the current light level in lux of the ambient light level around the device.

**Spec:**
- <https://w3c.github.io/ambient-light/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [AmbientLightSensor](https://developer.mozilla.org/docs/Web/API/AmbientLightSensor)

### Device orientation events

The `DeviceMotion` and `DeviceOrientation` events report the movement and orientation of the browser's device in physical space. Note that coordinates can differ noticeably between platforms and devices.

**Spec:**
- <https://w3c.github.io/deviceorientation/>

**Browser support:**
- Chrome: 31
- Chrome Android: 31
- Edge: 12
- Firefox: 6
- Firefox for Android: 6
- Safari: 17
- Safari on iOS: 4.2

**MDN:**
- [Device orientation events](https://developer.mozilla.org/docs/Web/API/Device_orientation_events)

### Gyroscope

The `Gyroscope` API reads the angular velocity of a device in three dimensions.

**Spec:**
- <https://w3c.github.io/gyroscope/#gyroscope-interface>

**Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Gyroscope](https://developer.mozilla.org/docs/Web/API/Gyroscope)

### Magnetometer

The `Magnetometer` API reads magnetic field sensor data from the device's magnetometer.

**Spec:**
- <https://w3c.github.io/magnetometer/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Magnetometer](https://developer.mozilla.org/docs/Web/API/Magnetometer)

### Orientation Sensor

The `AbsoluteOrientationSensor` and `RelativeOrientationSensor` APIs describe the physical orientation of a device in three-dimensional space, either in relation to the Earth's coordinate system or in relation to the device's own orientation, respectively.

**Spec:**
- <https://w3c.github.io/orientation-sensor/#absoluteorientationsensor-interface>
- <https://w3c.github.io/orientation-sensor/#relativeorientationsensor-interface>

**Browser support:**
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

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —
