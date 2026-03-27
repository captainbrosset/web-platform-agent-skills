# Fonts

Everything related to web fonts and font rendering control.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Font synthesis](font-synthesis.md)
- [Typographic font features](typographic-font-features.md)

## Fonts features

### @font-face

The `@font-face` CSS at-rule creates a custom `font-family` value. The at-rule's descriptors set the font's name, source, and various display settings.

**Spec:**
- <https://drafts.csswg.org/css-fonts-5/#font-face-rule>

**Browser support:**
- Chrome: 36
- Chrome Android: 36
- Edge: 14
- Firefox: 39
- Firefox for Android: 39
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [@font-face](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face)

### COLRv0

COLRv0 is a font format that supports multi-color glyphs. COLRv0 supports only solid colors.

**Spec:**
- <https://www.iso.org/standard/87621.html>

**Browser support:**
- Chrome: 53
- Chrome Android: 53
- Edge: 79
- Firefox: 31
- Firefox for Android: 31
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [@font-face](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face)

### COLRv1

COLRv1 is a font format that supports multi-color glyphs. COLRv1 extends COLRv0 to support gradients, transforms, and blending modes.

**Spec:**
- <https://www.iso.org/standard/87621.html>

**Browser support:**
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

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 89
- Firefox for Android: 89
- Safari: —
- Safari on iOS: —

**MDN:**
- [@font-face](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face)

### Font shorthand

The `font` CSS property shorthand sets multiple font properties, including style, weight, size, and font family.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-prop>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [font](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font)

### font-display

The `font-display` CSS descriptor sets whether to show a substitute font or nothing while a font face loads. The property manages what's known as a flash of unstyled text or flash of invisible text.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-display-desc>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 58
- Firefox for Android: 58
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [font-display](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-face/font-display)

### font-family

The `font-family` CSS property sets the desired font face for text, along with optional fallback font faces.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-family-prop>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [font-family](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family)

### font-optical-sizing

The `font-optical-sizing` CSS property sets whether text rendering is optimized for viewing at different sizes.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-def>

**Browser support:**
- Chrome: 79
- Chrome Android: 79
- Edge: 17
- Firefox: 62
- Firefox for Android: 62
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [font-optical-sizing](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing)

### font-palette

The `font-palette` CSS property selects a color palette from the font, optionally overriding individual colors in the `@font-palette-values` at-rule.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-palette-prop>
- <https://drafts.csswg.org/css-fonts-4/#font-palette-values>

**Browser support:**
- Chrome: 101
- Chrome Android: 101
- Edge: 101
- Firefox: 107
- Firefox for Android: 107
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [font-palette](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette)

### font-palette animation

You can animate color fonts between two `font-palette` values.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-palette-prop>

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [palette-mix()](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette/palette-mix)

### font-size

The `font-size` CSS property sets the text height.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-size-prop>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [font-size](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size)

### font-size-adjust

The `font-size-adjust` CSS property preserves apparent text size, regardless of the font used, by scaling fonts to the same size with respect to a specific metric, such as x-height. This can help make fallback fonts look the same size.

**Spec:**
- <https://drafts.csswg.org/css-fonts-5/#font-size-adjust-prop>

**Browser support:**
- Chrome: 127
- Chrome Android: 127
- Edge: 127
- Firefox: 118
- Firefox for Android: 118
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [font-size-adjust](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust)

### font-stretch

The `font-stretch` CSS property selects a font face from a font family based on width, either by a keyword such as `condensed` or a percentage.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-stretch-prop>

**Browser support:**
- Chrome: 62
- Chrome Android: 62
- Edge: 79
- Firefox: 62
- Firefox for Android: 62
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [font-stretch](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch)

### font-style

The `font-style` CSS property sets the text style, with `normal`, `italic`, and `oblique` options.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-style-prop>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [font-style](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style)

### font-variant-alternates

The `font-variant-alternates` CSS property, along with the `@font-feature-values` at-rule, chooses when to use a font's alternate glyphs.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-variant-alternates-prop>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 34
- Firefox for Android: 34
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [font-variant-alternates](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [@font-feature-values](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@font-feature-values)

### font-variation-settings

The `font-variation-settings` CSS property sets an "axis of variability" on a variable font, such as weight, optical size, or a custom axis defined by the typeface designer. When possible, use other CSS font properties, such as `font-weight: bold`. Also known as variable fonts.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-variation-settings-def>

**Browser support:**
- Chrome: 62
- Chrome Android: 62
- Edge: 17
- Firefox: 62
- Firefox for Android: 62
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [font-variation-settings](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings)

### font-weight

The `font-weight` CSS property controls the thickness of a font. It is set explicitly with the keyword `bold` or a number, or relative to the inherited thickness with the keywords `bolder` or `lighter`.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-weight-prop>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [font-weight](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight)

### font-width

The `font-width` CSS property selects a font face from a font family based on width, either by a keyword such as `condensed` or a percentage.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#font-width-prop>

**Browser support:**
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

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [font-family](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family)
