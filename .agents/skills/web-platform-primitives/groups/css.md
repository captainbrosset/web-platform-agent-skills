# CSS

This group is intended for everything that can be done with CSS syntax and its associated APIs. Almost all such features are defined by the CSSWG, but there are exceptions: https://compat.spec.whatwg.org/#css-compat-section Additionally, not every deliverable of the CSSWG is a CSS feature: https://drafts.csswg.org/geometry/

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Background](background.md)
- [Blend mode](blend-mode.md)
- [Borders and outlines](borders-and-outlines.md)
- [Color types](color-types.md)
- [Container queries](container-queries.md)
- [Containment](containment.md)
- [Counters](counters.md)
- [CSS environment variables](css-environment-variables.md)
- [CSS object models](css-object-models.md)
- [Explicit defaults](explicit-defaults.md)
- [Fonts](fonts.md)
- [Gradients](gradients.md)
- [Layout](layout.md)
- [Lists](lists.md)
- [Media queries](media-queries.md)
- [Selectors](selectors.md)
- [Text](text.md)
- [Transforms](transforms.md)
- [Transitions (CSS)](transitions-css.md)
- [Units](units.md)
- [White space](white-space.md)

## CSS features

### @function

The `@function` CSS at-rule defines a custom function that takes CSS values or custom properties as arguments, and returns a CSS value. It can be based on conditional logic such as by using the `@media` at-rule.

**Spec:**
- <https://drafts.csswg.org/css-mixins-1/#function-rule>

**Limited Availability — Browser support:**
- Chrome: 139
- Chrome Android: 139
- Edge: 139
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### @scope

The `@scope` CSS at-rule sets the scope for a group of rules.

**Spec:**
- <https://drafts.csswg.org/css-cascade-6/#scope-atrule>

**Baseline Newly Available since 2025-12-12**

**MDN:**
- [@scope](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@scope)

### @starting-style

The `@starting-style` CSS at-rule sets the starting values for properties that are transitioning when the target element's style is first updated.

**Spec:**
- <https://drafts.csswg.org/css-transitions-2/#defining-before-change-style>

**Baseline Newly Available since 2024-08-06**

**MDN:**
- [@starting-style](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@starting-style)

### abs() and sign()

The `abs()` and `sign()` CSS functions compute the absolute value or the sign of the input.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#sign-funcs>

**Baseline Newly Available since 2025-06-26**

**MDN:**
- [abs()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/abs)
- [sign()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sign)

### accent-color

The `accent-color` CSS property sets a color for checkboxes, radio buttons, and other form controls.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#widget-accent>

**Limited Availability — Browser support:**
- Chrome: 93
- Chrome Android: —
- Edge: 93
- Firefox: 92
- Firefox for Android: 92
- Safari: —
- Safari on iOS: —

**MDN:**
- [accent-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color)

### Alt text for generated content

The `/` notation in `content` CSS property values adds alternative text to generated content. For example, the `content: url('upvote-icon.svg') / 'Upvote'` declaration adds accessible 'Upvote' text to the SVG icon. Also known as alternate text.

**Spec:**
- <https://drafts.csswg.org/css-content-3/#alt>

**Baseline Newly Available since 2024-07-09**

**MDN:**
- [content](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content)

### Alternative style sheets

The `rel="alternate stylesheet"` attribute for the `<link>` HTML element offers an alternative style option to users.

**Spec:**
- <https://drafts.csswg.org/cssom-1/#concept-css-style-sheet-alternate-flag>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 3
- Firefox for Android: 4
- Safari: —
- Safari on iOS: —

**MDN:**
- [rel="alternate stylesheet"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)

### backdrop-filter

The `backdrop-filter` CSS property applies graphical effects such as blurring or color shifting to the area behind an element.

**Spec:**
- <https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty>

**Baseline Newly Available since 2024-09-16**

**MDN:**
- [backdrop-filter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter)

### calc-size()

The `calc-size()` CSS function computes mathematical expressions that include `height` and `width` keyword values, for example `calc-size(fit-content, size / 2)`. Not to be confused with the `calc()` CSS function, which cannot use keyword values.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#calc-size>

**Limited Availability — Browser support:**
- Chrome: 129
- Chrome Android: 129
- Edge: 129
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [calc-size()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/calc-size)

### calc() keywords

The `e`, `pi`, `infinity`, and `NaN` keywords represent well-defined constants accepted in CSS math functions such as `calc()`.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#calc-keywords>

**Baseline Widely Available since 2025-12-06**

**MDN:**
- [`<calc-keyword>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/calc-keyword)

### color-mix()

The `color-mix()` function mixes two colors in a given color space and by a given amount. Commonly, lighter or darker variations of a color are created by mixing with white or black.

**Spec:**
- <https://drafts.csswg.org/css-color-5/#color-mix>

**Baseline Widely Available since 2025-11-09**

**MDN:**
- [color-mix()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/color-mix)

### content-visibility

The `content-visibility` CSS property delays rendering an element, including layout and painting, until it is needed.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#content-visibility>

**Baseline Newly Available since 2025-09-15**

**MDN:**
- [content-visibility](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility)

### Cursor styles

The `cursor` CSS property styles the pointer, allowing you to provide hints to the user on how to interact with the hovered element.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#cursor>

**Limited Availability — Browser support:**
- Chrome: 68
- Chrome Android: 68
- Edge: 79
- Firefox: 27
- Firefox for Android: 95
- Safari: 11
- Safari on iOS: —

**MDN:**
- [cursor](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor)

### display animation

You can animate elements between `display: none` and any other `display` value or animate between `content-visibility: hidden` and any other `content-visibility` value. This also applies to transitions.

**Spec:**
- <https://drafts.csswg.org/css-display-4/#display-animation>
- <https://drafts.csswg.org/css-contain-3/#content-visibility-animation>

**Limited Availability — Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: —
- Firefox for Android: —
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)
- [content-visibility](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility)

### display: ruby

The `display: ruby` CSS declaration renders an element with the box layout of a `<ruby>` HTML element. Child elements may use equivalents to `<ruby>` internal elements such as `display: ruby-base` for `<rb>`.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#layout-specific-display>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 88
- Firefox for Android: 88
- Safari: —
- Safari on iOS: —

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### display: table

The `display: table` CSS declaration renders an element with the box layout of a `<table>` HTML element. Child elements may use equivalents to `<table>` internal elements such as `display: table-row` for `<tr>`.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#layout-specific-display>

**Baseline Widely Available since ≤2019-10-05**

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### dynamic-range-limit

The `dynamic-range-limit` CSS property controls the peak luminance of high dynamic range content. You can use this to coordinate the apparent brightness of HDR and SDR content.

**Spec:**
- <https://drafts.csswg.org/css-color-hdr-1/#controlling-dynamic-range>

**Limited Availability — Browser support:**
- Chrome: 136
- Chrome Android: 136
- Edge: 136
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [dynamic-range-limit](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dynamic-range-limit)
- [dynamic-range-limit-mix()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/dynamic-range-limit-mix)

### field-sizing

The `field-sizing` CSS property allows form controls such as `<textarea>` to be sized based on their content.

**Spec:**
- <https://drafts.csswg.org/css-forms-1/#field-sizing>

**Limited Availability — Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: —
- Firefox for Android: —
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [field-sizing](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing)

### filter()

The `filter()` CSS function applies one or more graphic effects to a CSS image, such as a background image. You can use functions, such as `blur()` and `drop-shadow()`, alone or combined to produce different effects. For instance, `background: filter(url(image.png), blur(2px))`.

**Spec:**
- <https://drafts.csswg.org/filter-effects-1/#FilterCSSImageValue>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 9.1
- Safari on iOS: 9.3

### Hyphenation

The `hyphens` CSS property controls when long words are broken by line wrapping. Although called `hyphens`, the property applies to word-splitting behavior across languages, such as customary spelling changes or the use of other characters. Support for non-English languages varies significantly.

**Spec:**
- <https://drafts.csswg.org/css-text-3/#hyphens-property>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [hyphens](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens)

### if()

The `if()` CSS function is an inline conditional value that returns a value based on a set of conditions.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#if-notation>

**Limited Availability — Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [if()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/if)

### image-set()

The `image-set()` CSS function provides a set of images at different resolutions or pixel densities, which the browser can pick from, depending on the device capabilities.

**Spec:**
- <https://drafts.csswg.org/css-images-4/#image-set-notation>

**Baseline Widely Available since 2026-03-18**

**MDN:**
- [image-set()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/image/image-set)

### initial-letter

The `initial-letter` CSS property sets the number of lines the first letter of an element occupies. You can use the property to make a raised capital or drop cap.

**Spec:**
- <https://drafts.csswg.org/css-inline-3/#sizing-drop-initials>

**Limited Availability — Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [initial-letter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter)

### light-dark()

The `light-dark()` CSS function accepts two colors and uses one depending on the current color scheme.

**Spec:**
- <https://drafts.csswg.org/css-color-5/#light-dark>

**Baseline Newly Available since 2024-05-13**

**MDN:**
- [light-dark()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/light-dark)

### linear() easing

The `linear()` easing function for animations and transitions interpolates linearly between the control points, and can be used to approximate complex easing functions, such as a bounce effect.

**Spec:**
- <https://drafts.csswg.org/css-easing-2/#the-linear-easing-function>

**Baseline Newly Available since 2023-12-11**

**MDN:**
- [`<easing-function>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/easing-function)

### margin-trim

The `margin-trim` CSS property removes the margins of child elements when they meet the edges of the container.

**Spec:**
- <https://drafts.csswg.org/css-box-4/#margin-trim>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [margin-trim](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim)

### Math font family

The `font-family: math` CSS declaration uses the browser default font face for displaying mathematical expressions.

**Spec:**
- <https://drafts.csswg.org/css-fonts-4/#math-def>

**Baseline Newly Available since 2026-03-24**

**MDN:**
- [font-family](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family)

### Nesting

CSS nesting allows for shorter selectors, easier reading, and more modularity by nesting rules inside others.

**Spec:**
- <https://drafts.csswg.org/css-nesting-1/>

**Baseline Newly Available since 2023-12-11**

**MDN:**
- [& nesting selector](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/Nesting_selector)

### object-view-box

The `object-view-box` CSS property crops and zooms to an inset area of an image.

**Spec:**
- <https://drafts.csswg.org/css-images-5/#the-object-view-box>

**Limited Availability — Browser support:**
- Chrome: 104
- Chrome Android: 104
- Edge: 104
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [object-view-box](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box)

### overflow-clip-margin

The `overflow-clip-margin` CSS property sets how far overflow content may appear outside the bounds of an element before it's clipped by effects such as `overflow: clip`.

**Spec:**
- <https://drafts.csswg.org/css-overflow-4/#overflow-clip-margin>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 148
- Firefox for Android: 148
- Safari: —
- Safari on iOS: —

**MDN:**
- [overflow-clip-margin](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin)

### overlay

The `overlay` CSS property, used as an `allow-discrete` CSS transition, prevents a top layer element, such as a popover or a `<dialog>`, from being removed from the top layer before it has finished animating. You can't set the value of the `overlay` property; only use it as transition property.

**Spec:**
- <https://drafts.csswg.org/css-position-4/#overlay>

**Limited Availability — Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [overlay](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay)

### paint-order

The `paint-order` CSS property sets the z-order of strokes, fills, and (in SVG content) markers. For example, `paint-order: markers stroke fill;` draws the markers, then stroke on top of markers, then fill on top of both markers and stroke.

**Spec:**
- <https://w3c.github.io/svgwg/svg2-draft/painting.html#PaintOrder>

**Baseline Newly Available since 2024-03-22**

**MDN:**
- [paint-order](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order)

### paint()

The `paint()` CSS function creates a custom image, drawn using a paint worklet, for an element's background or border.

**Spec:**
- <https://drafts.css-houdini.org/css-paint-api-1/>

**Limited Availability — Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [CSS Painting API](https://developer.mozilla.org/docs/Web/API/CSS_Painting_API)

### pow(), sqrt(), hypot(), log(), and exp()

The `pow()`, `sqrt()`, `hypot()`, `log()`, and `exp()` CSS functions compute various exponential functions.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#exponent-funcs>

**Baseline Newly Available since 2023-12-07**

**MDN:**
- [pow()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/pow)
- [sqrt()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sqrt)
- [hypot()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/hypot)
- [log()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/log)
- [exp()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/exp)

### progress()

The `progress()` CSS function returns a ratio for the relative position of one value between two other values, clamped between 0 and 1. You can use it to interpolate a value for other calculations.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#progress>

**Limited Availability — Browser support:**
- Chrome: 138
- Chrome Android: 138
- Edge: 138
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [progress()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/progress)

### random()

The `random()` CSS function chooses a random numeric value within a specified range. This allows for dynamic, randomized styling using CSS.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#random>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [random()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/random)

### reading-flow

The `reading-flow` CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation. The `reading-order` property overrides this order.

**Spec:**
- <https://drafts.csswg.org/css-display-4/#reading-flow>

**Limited Availability — Browser support:**
- Chrome: 137
- Chrome Android: 137
- Edge: 137
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [reading-flow](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/reading-flow)

### Relative colors

The `from` keyword for color functions (`color()`, `hsl()`, `oklch()`, etc.) creates a new color based on a given color by modifying the values of the input color. Also known as relative color syntax (RCS).

**Spec:**
- <https://drafts.csswg.org/css-color-5/#relative-colors>

**Baseline Newly Available since 2024-09-16**

**MDN:**
- [Using relative colors](https://developer.mozilla.org/docs/Web/CSS/Guides/Colors/Using_relative_colors)

### resize (CSS property)

The `resize` CSS property sets whether an element can be resized by the user, and on which axes.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#resize>

**Limited Availability — Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 79
- Firefox: 5
- Firefox for Android: —
- Safari: 4
- Safari on iOS: —

**MDN:**
- [resize](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize)

### round(), mod(), and rem()

The `round()`, `mod()`, and `rem()` CSS functions compute rounded values and the remainder after division.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#round-func>

**Baseline Newly Available since 2024-05-17**

**MDN:**
- [mod()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/mod)
- [rem()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/rem)
- [round()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/round)

### sibling-count() and sibling-index()

The `sibling-count()` and `sibling-index()` CSS functions return integers that are useful to style elements based on their positions among siblings or on the number of siblings, for example as part of a `calc()` expression.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#tree-counting>

**Limited Availability — Browser support:**
- Chrome: 138
- Chrome Android: 138
- Edge: 138
- Firefox: —
- Firefox for Android: —
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [sibling-count()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sibling-count)
- [sibling-index()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sibling-index)

### speak-as

The `speak-as` CSS property sets how any element's content is spoken. Not to be confused with the `speak-as` descriptor of `@counter-style` at-rules.

**Spec:**
- <https://drafts.csswg.org/css-speech-1/#speaking-props-speak-as>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [speak-as](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as)

### text-spacing-trim

The `text-spacing-trim` CSS property controls spacing around CJK characters, avoiding excessive whitespace when using full-width punctuation characters.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#text-spacing-trim-property>

**Limited Availability — Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [text-spacing-trim](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim)

### Two-value display property

The `display` CSS property accepts multiple keyword values, such as `inline flex` or `block flow`, to explicitly set an element's inner and outer layout mode. Also known as 2-value, multi-keyword, or multiple value syntax.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#the-display-properties>

**Baseline Widely Available since 2026-01-21**

**MDN:**
- [Using the multi-keyword syntax with CSS display](https://developer.mozilla.org/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### user-select

The `user-select` CSS property controls which elements can be selected by the user.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#content-selection>

**Limited Availability — Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: 69
- Firefox for Android: 79
- Safari: —
- Safari on iOS: —

**MDN:**
- [user-select](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select)

### Vertical form controls

The `writing-mode` CSS property orients form elements (such as radio buttons, progress bars, or select menus) vertically when the writing mode is `vertical-lr` or `vertical-rl`. The `direction` CSS property sets whether inputs flow from top to bottom or bottom to top.

**Spec:**
- <https://drafts.csswg.org/css-writing-modes-4/#vertical-modes>

**Baseline Newly Available since 2024-04-18**

**MDN:**
- [writing-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode)
- [direction](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction)
