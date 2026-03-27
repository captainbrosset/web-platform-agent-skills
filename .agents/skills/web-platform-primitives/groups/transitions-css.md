# Transitions (CSS)

Features related to transitions of an element's CSS properties

## Transitions (CSS) features

### cubic-bezier() easing

The `cubic-bezier()` CSS easing function interpolates along a smooth curve, creating animations and transitions with continuous changes in speed. The `ease`, `ease-in`, `ease-out`, and `ease-in-out` keyword values are presets for common Bézier curves.

**Spec:**
- <https://drafts.csswg.org/css-easing-2/#cubic-bezier-easing-functions>

**Browser support:**
- Chrome: 16
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 6
- Safari on iOS: 6

**MDN:**
- [`<easing-function>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/easing-function)

### interpolate-size

The `interpolate-size` CSS property sets whether animations and transitions interpolate between a numeric value and a keyword value, such as from a fixed length to `auto` or `fit-content`.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#interpolate-size>

**Browser support:**
- Chrome: 129
- Chrome Android: 129
- Edge: 129
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [interpolate-size](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size)

### steps() easing

The `steps()` CSS easing function divides an animation or transition into equidistant intervals, jumping from value to value. The `step-start` and `step-end` keyword values are presets with a single interval.

**Spec:**
- <https://drafts.csswg.org/css-easing-2/#step-easing-functions>

**Browser support:**
- Chrome: 77
- Chrome Android: 77
- Edge: 79
- Firefox: 65
- Firefox for Android: 65
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [`<easing-function>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/easing-function)

### transition-behavior

The `transition-behavior: allow-discrete` CSS declaration allows transitions for properties whose animation behavior is discrete. Such properties can't be interpolated and swap from their start value to the end value at 50%.

**Spec:**
- <https://drafts.csswg.org/css-transitions-2/#transition-behavior-property>

**Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: 129
- Firefox for Android: 129
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [transition-behavior](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior)

### Transitions (CSS)

The `transition` shorthand CSS property sets how changes to an element's styles may occur over time. Transitions can be applied to specific CSS properties, all properties, or none.

**Spec:**
- <https://drafts.csswg.org/css-transitions-2/>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 12
- Firefox: 16
- Firefox for Android: 16
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [Using CSS transitions](https://developer.mozilla.org/docs/Web/CSS/Guides/Transitions/Using)
