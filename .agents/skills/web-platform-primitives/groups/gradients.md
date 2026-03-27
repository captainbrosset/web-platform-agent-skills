# Gradients

https://drafts.csswg.org/css-images-4/#gradients

## Gradients features

### Gradient interpolation

Gradient interpolation controls how the colors between gradient stops are calculated in CSS. For example, `linear-gradient(to right in oklch longer hue, red, red);` calculates in the `oklch` color space, with the hue going all the way around the hue circle from red back to red.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#interpolation-space>

**Baseline Newly Available since 2024-06-11**

**MDN:**
- [`<color-interpolation-method>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color-interpolation-method)
- [`<hue-interpolation-method>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/hue-interpolation-method)
