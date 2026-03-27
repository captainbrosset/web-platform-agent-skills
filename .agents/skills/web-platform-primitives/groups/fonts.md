# Fonts

Everything related to web fonts and font rendering control.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Font synthesis](font-synthesis.md)
- [Typographic font features](typographic-font-features.md)

## Fonts features

### COLRv1

COLRv1 is a font format that supports multi-color glyphs. COLRv1 extends COLRv0 to support gradients, transforms, and blending modes.

**Spec:**
- <https://www.iso.org/standard/87621.html>

**Limited Availability — Browser support:**
- Chrome: 98
- Chrome Android: 98
- Edge: 98
- Firefox: 107
- Firefox for Android: 107
- Safari: —
- Safari on iOS: —

**MDN:**
- [@font-face](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face)

### Font metric overrides

The `ascent-override`, `descent-override`, and `line-gap-override` descriptors adjust the display of a font declared in an `@font-face` statement. This can help make fallback fonts look the same size.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-metrics-override-desc>

**Limited Availability — Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 89
- Firefox for Android: 89
- Safari: —
- Safari on iOS: —

**MDN:**
- [@font-face](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face)

### font-palette animation

You can animate color fonts between two `font-palette` values.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-palette-prop>

**Limited Availability — Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [palette-mix()](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette/palette-mix)

### font-size-adjust

The `font-size-adjust` CSS property preserves apparent text size, regardless of the font used, by scaling fonts to the same size with respect to a specific metric, such as x-height. This can help make fallback fonts look the same size.

**Spec:**
- <https://drafts.csswg.org/css-fonts-5/#font-size-adjust-prop>

**Baseline Newly Available since 2024-07-25**

**MDN:**
- [font-size-adjust](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust)

### font-width

The `font-width` CSS property selects a font face from a font family based on width, either by a keyword such as `condensed` or a percentage.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-width-prop>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 18.4
- Safari on iOS: —

**MDN:**
- [font-width](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width)

### UI fonts

The `ui-serif`, `ui-sans-serif`, `ui-monospace` and `ui-rounded` values for the `font-family` CSS property use device-default user interface fonts for text.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#ui-serif-def>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [font-family](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family)
