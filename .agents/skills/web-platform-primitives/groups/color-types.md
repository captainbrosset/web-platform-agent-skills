# Color types

https://drafts.csswg.org/css-color/#introduction

## Color types features

### color-contrast()

The `color-contrast()` CSS function picks a color from a list that has the most contrast with another color.

**Spec:**
- <https://drafts.csswg.org/css-color-5/#contrast-color>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### color()

The `color()` function picks a color from a given color space. Wide gamut color spaces like `display-p3` allow showing more vibrant and saturated colors than the standard `srgb` color space.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#color-function>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 113
- Firefox for Android: 113
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [color()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/color)

### contrast-color()

The `contrast-color()` CSS function picks a color that has guaranteed contrast against a specified foreground or background color.

**Spec:**
- <https://drafts.csswg.org/css-color-6/#funcdef-contrast-color>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 146
- Firefox for Android: 146
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [contrast-color()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/contrast-color)

### currentColor

The `currentColor` CSS value allows you to reuse an element's computed text color for other properties.

**Spec:**
- <https://drafts.csswg.org/css-color-3/#currentcolor>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1.5
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [`<color>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value)

### HSL

The `hsl()` and `hsla()` CSS functions pick colors using hue, saturation, lightness, and alpha (transparency) channels.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#the-hsl-notation>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: 52
- Firefox for Android: 52
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [hsl()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/hsl)

### HWB

The `hwb()` CSS function picks colors using hue, whiteness, and blackness channels.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#the-hwb-notation>

**Browser support:**
- Chrome: 101
- Chrome Android: 101
- Edge: 101
- Firefox: 96
- Firefox for Android: 96
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [hwb()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/hwb)

### Lab and LCH

The CIE Lab color space expresses colors in terms of lightness and how red/green and blue/yellow a color is. LCH is a variant of Lab with polar coordinates. These color spaces can be used with the CSS `color()`, `lab()`, and `lch()` functions. Also known as CIELAB and CIELCH.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#cie-lab>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 113
- Firefox for Android: 113
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [lab()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/lab)
- [lch()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/lch)

### Named colors

Some CSS color values can be referenced by name, such as `red` or `limegreen`. They stand in for specific RGB color values.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#named-colors>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<named-color>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/named-color)

### Oklab and OkLCh

The Oklab color space expresses colors in terms of lightness and how red/green and blue/yellow a color is, aiming to match how humans perceive colors. OkLCh is a variant of Oklab with polar coordinates. These color spaces can be used with the CSS `oklab()` and `oklch()` functions.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#ok-lab>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 113
- Firefox for Android: 113
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [oklab()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklab)
- [oklch()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklch)

### RGB

The `rgb()`, `rgba()`, and hexadecimal (as in `#004488ff`) notations pick colors using red, green, blue, and alpha (transparency) channels.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#rgb-functions>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: 52
- Firefox for Android: 52
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [rgb()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/rgb)
- [`<hex-color>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/hex-color)

### System colors

The system color CSS keywords, such as `ButtonBorder` or `LinkText`, allow you to match default colors from the user agent.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#css-system-colors>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<system-color>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/system-color)
