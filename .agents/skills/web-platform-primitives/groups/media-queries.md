# Media queries

CSS Media queries allow you to provide different styles based on the user's device and settings.

## Media queries features

### @supports (compatibility prefix)

The `@supports (-webkit-transform-3d)` CSS media query is a standardized compatibility alternative to `@supports (transform-style)`.

**Spec:**
- <https://compat.spec.whatwg.org/#css-media-queries-webkit-transform-3d>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 49
- Firefox for Android: 49
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [-webkit-transform-3d](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)

### color-gamut media query

The `color-gamut` media query sets styles based on the colors a device can display.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#color-gamut>

**Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: 110
- Firefox for Android: 110
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [color-gamut](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/color-gamut)

### Custom media queries

The `@custom-media` CSS at-rule names a media query, which you can reuse in multiple `@media` rules.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#custom-mq>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [@custom-media](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@custom-media)

### display-mode media query

The `display-mode` CSS media query sets styles based on whether the web page is in an ordinary `browser` tab mode or another mode, such as `fullscreen`, `standalone`, or `minimal-ui`.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#display-modes>

**Browser support:**
- Chrome: 47
- Chrome Android: —
- Edge: 79
- Firefox: —
- Firefox for Android: 116
- Safari: —
- Safari on iOS: —

**MDN:**
- [display-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/display-mode)

### dynamic-range media query

The `dynamic-range` CSS media query sets styles based on whether a device can display at least `standard` range colors or at least `high` range colors. Non-visual devices will match neither.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#dynamic-range>

**Browser support:**
- Chrome: 98
- Chrome Android: 98
- Edge: 98
- Firefox: 100
- Firefox for Android: 100
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [dynamic-range](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/dynamic-range)

### Interaction media queries

The `pointer`, `any-pointer`, `hover`, and `any-hover` CSS media queries set styles based on the presence of pointing devices and their ability to hover over elements. For example, most smartphones match the `(hover: none) and (pointer: coarse)` media query.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#mf-interaction>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 12
- Firefox: 64
- Firefox for Android: 64
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [@media](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media)

### inverted-colors media query

The `inverted-colors` CSS media query sets styles based on whether the user has inverted all colors, such as with mobile accessibility settings.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#inverted>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 9.1
- Safari on iOS: 10

**MDN:**
- [inverted-colors](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)

### Media queries

The `@media` CSS rule conditionally applies styles based on the output device type, its capabilities, and the user's preferences. Media queries are composed of an optional media type such as `screen` or `print`, and one or more mandatory media features, such as `prefers-reduced-animations`.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [@media](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media)

### Media query range syntax

The range syntax of CSS media queries allows you to use mathematical comparison operators such as `<`, `>`, `<=`, and `>=` to define a range of values for a media query. For example, `(400px < width < 1000px)` returns true if the viewport width is between 400px and 1000px.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-4/#mq-range-context>

**Browser support:**
- Chrome: 104
- Chrome Android: 104
- Edge: 104
- Firefox: 102
- Firefox for Android: 102
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [Using media queries](https://developer.mozilla.org/docs/Web/CSS/Guides/Media_queries/Using)

### Overflow media queries

The `overflow-block` and `overflow-inline` CSS media queries set styles based on the way a device displays content that's larger than the viewport or page area. For example, a laptop lets users scroll to reveal content, while a printer displays overflowing content on additional pages.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#mf-overflow-block>
- <https://drafts.csswg.org/mediaqueries-5/#mf-overflow-inline>

**Browser support:**
- Chrome: 113
- Chrome Android: 113
- Edge: 113
- Firefox: 66
- Firefox for Android: 66
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [overflow-block](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/overflow-block)
- [overflow-inline](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/overflow-inline)

### prefers-color-scheme media query

The `prefers-color-scheme` CSS media query sets styles based on the requested color scheme, light or dark.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 67
- Firefox for Android: 67
- Safari: 12.1
- Safari on iOS: 13

**MDN:**
- [prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)

### prefers-contrast media query

The `prefers-contrast` CSS media query sets styles based on whether the user prefers more or less contrast, the difference between foreground and background colors.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-contrast>

**Browser support:**
- Chrome: 96
- Chrome Android: 96
- Edge: 96
- Firefox: 101
- Firefox for Android: 101
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [prefers-contrast](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)

### prefers-reduced-data media query

The `prefers-reduced-data` CSS media query detects whether the user has a preference for using less network traffic. For example, you can use this media query to avoid loading large font files and use a system font instead.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [prefers-reduced-data](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-data)

### prefers-reduced-motion media query

The `prefers-reduced-motion` CSS media query sets styles based on whether the user prefers to minimize the amount of non-essential animations on the device, such as scrolling, panning, zooming, and strobing.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion>

**Browser support:**
- Chrome: 74
- Chrome Android: 74
- Edge: 79
- Firefox: 63
- Firefox for Android: 64
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [prefers-reduced-motion](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)

### prefers-reduced-transparency media query

The `prefers-reduced-transparency` CSS media query sets styles based on whether the user prefers to reduce the amount of transparent effects on their device, for example to improve contrast and legibility.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [prefers-reduced-transparency](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)

### resolution media query

The `resolution` CSS media query sets styles based on the pixel density, or how many pixels a device uses to display a single CSS pixel.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#resolution>

**Browser support:**
- Chrome: 68
- Chrome Android: 68
- Edge: 79
- Firefox: 62
- Firefox for Android: 62
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [`<resolution>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/resolution)
- [resolution](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/resolution)

### resolution media query (compatibility prefixes)

The `-webkit-device-pixel-ratio`, `-webkit-min-device-pixel-ratio`, and `-webkit-max-device-pixel-ratio` CSS media queries are standardized compatibility alternatives to `resolution` media queries.

**Spec:**
- <https://compat.spec.whatwg.org/#css-media-queries-webkit-device-pixel-ratio>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 63
- Firefox for Android: 63
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [-webkit-device-pixel-ratio](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio)

### scripting media query

The `scripting` CSS media query sets styles based on whether scripting such as JavaScript is available. Values are `enabled` if scripting is available, `initial-only` if scripting is only available on page load (for example, printed content), or `none`.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#scripting>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 113
- Firefox for Android: 113
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [scripting](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/scripting)

### Update frequency media query

The `update` CSS media query sets styles based on whether and how fast the user's device can modify display after it has been rendered. For example, you can avoid animations on devices that aren't fast enough to display them smoothly.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#update>

**Browser support:**
- Chrome: 113
- Chrome Android: 113
- Edge: 113
- Firefox: 102
- Firefox for Android: 102
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [update](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/update)

### video-dynamic-range media query

The `video-dynamic-range` CSS media query sets styles based on whether a device can display video with at least `standard` range colors or at least `high` range colors. Non-visual devices will match neither.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#dynamic-range>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 100
- Firefox for Android: 100
- Safari: —
- Safari on iOS: —

**MDN:**
- [video-dynamic-range](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range)
