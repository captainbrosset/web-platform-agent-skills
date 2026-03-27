# Gradients

https://drafts.csswg.org/css-images-4/#gradients

## Gradients features

### Conic gradients

The `conic-gradient()` and `repeating-conic-gradient()` CSS functions create backgrounds that progress between two or more colors around a center point.

**Spec:**
- <https://drafts.csswg.org/css-images-4/#conic-gradients>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 83
- Firefox for Android: 83
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [conic-gradient()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/gradient/conic-gradient)
- [repeating-conic-gradient()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient)

### Gradient interpolation

Gradient interpolation controls how the colors between gradient stops are calculated in CSS. For example, `linear-gradient(to right in oklch longer hue, red, red);` calculates in the `oklch` color space, with the hue going all the way around the hue circle from red back to red.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#interpolation-space>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 127
- Firefox for Android: 127
- Safari: 16.2
- Safari on iOS: 16.2

**MDN:**
- [`<color-interpolation-method>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color-interpolation-method)
- [`<hue-interpolation-method>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/hue-interpolation-method)

### Gradients

The `linear-gradient()` and `radial-gradient()` CSS functions and their repeating counterparts create backgrounds that progress smoothly between multiple colors.

**Spec:**
- <https://drafts.csswg.org/css-images-3/#gradients>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 12
- Firefox: 3.6
- Firefox for Android: 4
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [Using CSS gradients](https://developer.mozilla.org/docs/Web/CSS/Guides/Images/Using_gradients)
