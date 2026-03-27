# Media queries

CSS Media queries allow you to provide different styles based on the user's device and settings.

## Media queries features

### display-mode media query

The `display-mode` CSS media query sets styles based on whether the web page is in an ordinary `browser` tab mode or another mode, such as `fullscreen`, `standalone`, or `minimal-ui`.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#display-modes>

**Limited Availability — Browser support:**
- Chrome: 47
- Chrome Android: —
- Edge: 79
- Firefox: —
- Firefox for Android: 116
- Safari: —
- Safari on iOS: —

**MDN:**
- [display-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/display-mode)

### inverted-colors media query

The `inverted-colors` CSS media query sets styles based on whether the user has inverted all colors, such as with mobile accessibility settings.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#inverted>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 9.1
- Safari on iOS: 10

**MDN:**
- [inverted-colors](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)

### Overflow media queries

The `overflow-block` and `overflow-inline` CSS media queries set styles based on the way a device displays content that's larger than the viewport or page area. For example, a laptop lets users scroll to reveal content, while a printer displays overflowing content on additional pages.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#mf-overflow-block>
- <https://drafts.csswg.org/mediaqueries-5/#mf-overflow-inline>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [overflow-block](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/overflow-block)
- [overflow-inline](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/overflow-inline)

### prefers-reduced-transparency media query

The `prefers-reduced-transparency` CSS media query sets styles based on whether the user prefers to reduce the amount of transparent effects on their device, for example to improve contrast and legibility.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency>

**Limited Availability — Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [prefers-reduced-transparency](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)

### scripting media query

The `scripting` CSS media query sets styles based on whether scripting such as JavaScript is available. Values are `enabled` if scripting is available, `initial-only` if scripting is only available on page load (for example, printed content), or `none`.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#scripting>

**Baseline Newly Available since 2023-12-07**

**MDN:**
- [scripting](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/scripting)

### Update frequency media query

The `update` CSS media query sets styles based on whether and how fast the user's device can modify display after it has been rendered. For example, you can avoid animations on devices that aren't fast enough to display them smoothly.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#update>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [update](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/update)

### video-dynamic-range media query

The `video-dynamic-range` CSS media query sets styles based on whether a device can display video with at least `standard` range colors or at least `high` range colors. Non-visual devices will match neither.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#dynamic-range>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 100
- Firefox for Android: 100
- Safari: —
- Safari on iOS: —

**MDN:**
- [video-dynamic-range](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/video-dynamic-range)
