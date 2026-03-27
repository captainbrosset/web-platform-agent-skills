# Color types

https://drafts.csswg.org/css-color/#introduction

## Color types features

### color()

The `color()` function picks a color from a given color space. Wide gamut color spaces like `display-p3` allow showing more vibrant and saturated colors than the standard `srgb` color space.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#color-function>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [color()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/color)

### contrast-color()

The `contrast-color()` CSS function picks a color that has guaranteed contrast against a specified foreground or background color.

**Spec:**
- <https://drafts.csswg.org/css-color-6/#funcdef-contrast-color>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 146
- Firefox for Android: 146
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [contrast-color()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/contrast-color)

### Lab and LCH

The CIE Lab color space expresses colors in terms of lightness and how red/green and blue/yellow a color is. LCH is a variant of Lab with polar coordinates. These color spaces can be used with the CSS `color()`, `lab()`, and `lch()` functions. Also known as CIELAB and CIELCH.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#cie-lab>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [lab()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/lab)
- [lch()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/lch)

### Oklab and OkLCh

The Oklab color space expresses colors in terms of lightness and how red/green and blue/yellow a color is, aiming to match how humans perceive colors. OkLCh is a variant of Oklab with polar coordinates. These color spaces can be used with the CSS `oklab()` and `oklch()` functions.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#ok-lab>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [oklab()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklab)
- [oklch()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklch)
