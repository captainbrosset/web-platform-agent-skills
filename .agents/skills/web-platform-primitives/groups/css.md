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

### @charset

The `@charset` CSS at-rule specifies the character encoding of an external style sheet.

**Spec:**
- <https://drafts.csswg.org/css2/#charset>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 1.5
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 4

**MDN:**
- [@charset](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@charset)

### @function

The `@function` CSS at-rule defines a custom function that takes CSS values or custom properties as arguments, and returns a CSS value. It can be based on conditional logic such as by using the `@media` at-rule.

**Spec:**
- <https://drafts.csswg.org/css-mixins-1/#function-rule>

**Browser support:**
- Chrome: 139
- Chrome Android: 139
- Edge: 139
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### @import

The `@import` CSS at-rule loads styles from another stylesheet.

**Spec:**
- <https://drafts.csswg.org/css-cascade-5/#at-import>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [@import](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@import)

### @namespace

The `@namespace` CSS rule sets a default namespace or namespace prefix. Namespace prefixes allow CSS selectors to distinguish elements with the same name but different document types, such as the HTML `<a>` element and the SVG `<a>` element.

**Spec:**
- <https://drafts.csswg.org/css-namespaces-3/#declaration>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [@namespace](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@namespace)

### @scope

The `@scope` CSS at-rule sets the scope for a group of rules.

**Spec:**
- <https://drafts.csswg.org/css-cascade-6/#scope-atrule>

**Browser support:**
- Chrome: 143
- Chrome Android: 143
- Edge: 143
- Firefox: 146
- Firefox for Android: 146
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [@scope](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@scope)

### @starting-style

The `@starting-style` CSS at-rule sets the starting values for properties that are transitioning when the target element's style is first updated.

**Spec:**
- <https://drafts.csswg.org/css-transitions-2/#defining-before-change-style>

**Browser support:**
- Chrome: 117
- Chrome Android: 117
- Edge: 117
- Firefox: 129
- Firefox for Android: 129
- Safari: 17.5
- Safari on iOS: 17.5

**MDN:**
- [@starting-style](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@starting-style)

### @supports

The `@supports` at-rule applies styles based on a browser's support for CSS features, such as a CSS property and value. Also known as feature queries.

**Spec:**
- <https://drafts.csswg.org/css-conditional-3/#at-supports>

**Browser support:**
- Chrome: 28
- Chrome Android: 28
- Edge: 12
- Firefox: 22
- Firefox for Android: 22
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [@supports](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@supports)

### abs() and sign()

The `abs()` and `sign()` CSS functions compute the absolute value or the sign of the input.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#sign-funcs>

**Browser support:**
- Chrome: 138
- Chrome Android: 138
- Edge: 138
- Firefox: 118
- Firefox for Android: 118
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [abs()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/abs)
- [sign()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sign)

### accent-color

The `accent-color` CSS property sets a color for checkboxes, radio buttons, and other form controls.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#widget-accent>

**Browser support:**
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

**Browser support:**
- Chrome: 77
- Chrome Android: 77
- Edge: 79
- Firefox: 128
- Firefox for Android: 128
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [content](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content)

### Alternative style sheets

The `rel="alternate stylesheet"` attribute for the `<link>` HTML element offers an alternative style option to users.

**Spec:**
- <https://drafts.csswg.org/cssom-1/#concept-css-style-sheet-alternate-flag>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 3
- Firefox for Android: 4
- Safari: —
- Safari on iOS: —

**MDN:**
- [rel="alternate stylesheet"](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)

### Animations (CSS)

The `animation` CSS property animates an element's style over time, using keyframes described in `@keyframes` rules.

**Spec:**
- <https://drafts.csswg.org/css-animations-2/>

**Browser support:**
- Chrome: 43
- Chrome Android: 43
- Edge: 12
- Firefox: 16
- Firefox for Android: 16
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [animation](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation)

### appearance

The `appearance` CSS property controls the appearance of form controls. Using `appearance: none` disables any default native appearance and allows the elements to be styled with CSS.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#appearance-switching>

**Browser support:**
- Chrome: 84
- Chrome Android: 84
- Edge: 84
- Firefox: 80
- Firefox for Android: 80
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [appearance](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance)

### aspect-ratio

The `aspect-ratio` CSS property controls the width-to-height ratio of elements. For `<img>` and `<video>` elements, the `width` and `height` attributes used together with `height: auto` control the aspect ratio while the image/video is loading.

**Spec:**
- <https://drafts.csswg.org/css-sizing-4/#aspect-ratio>

**Browser support:**
- Chrome: 88
- Chrome Android: 88
- Edge: 88
- Firefox: 89
- Firefox for Android: 89
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [aspect-ratio](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio)

### at-rule()

The `at-rule()` function, when used with `@supports`, checks if a CSS at-rule is supported. For example `@supports at-rule(@starting-style)` checks if the `@starting-style` at-rule is supported.

**Spec:**
- <https://drafts.csswg.org/css-conditional-5/#typedef-supports-at-rule-fn>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### attr()

The `attr()` CSS function, in the context of any property, returns the value of an attribute of an HTML element, with the option to return it as a specific type or unit. You can set a default value for missing or invalid attributes.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#attr-notation>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [attr()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/attr)

### attr() (content only)

The `attr()` CSS function, in `content` property declarations, sets a `::before` or `::after` pseudo-element's content to the value of the specified HTML attribute.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#attr-notation>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [attr()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/attr)

### backdrop-filter

The `backdrop-filter` CSS property applies graphical effects such as blurring or color shifting to the area behind an element.

**Spec:**
- <https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: 103
- Firefox for Android: 103
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [backdrop-filter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter)

### calc-size()

The `calc-size()` CSS function computes mathematical expressions that include `height` and `width` keyword values, for example `calc-size(fit-content, size / 2)`. Not to be confused with the `calc()` CSS function, which cannot use keyword values.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#calc-size>

**Browser support:**
- Chrome: 129
- Chrome Android: 129
- Edge: 129
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [calc-size()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/calc-size)

### calc()

The `calc()` CSS function computes mathematical expressions such a `calc(100%/3 - 1em)`.

**Spec:**
- <https://drafts.csswg.org/css-values-3/#calc-notation>

**Browser support:**
- Chrome: 26
- Chrome Android: 28
- Edge: 12
- Firefox: 16
- Firefox for Android: 16
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [calc()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/calc)

### calc() keywords

The `e`, `pi`, `infinity`, and `NaN` keywords represent well-defined constants accepted in CSS math functions such as `calc()`.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#calc-keywords>

**Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: 114
- Firefox for Android: 114
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [`<calc-keyword>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/calc-keyword)

### caret-color

The `caret-color` CSS property sets the color of the text insertion pointer in a text input.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#insertion-caret>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 79
- Firefox: 53
- Firefox for Android: 53
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [caret-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color)

### Cascade layers

The `@layer` CSS at-rule avoids specificity conflicts by providing priority levels for different groups of CSS rules, such as low-priority styles like resets, and high-priority styles like UI components.

**Spec:**
- <https://drafts.csswg.org/css-cascade-5/>

**Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 97
- Firefox for Android: 97
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [@layer](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@layer)

### Color

The `color` CSS property sets the primary foreground color of an element, which is used for text, the default border color, and text decorations.

**Spec:**
- <https://drafts.csswg.org/css-color-4/#the-color-property>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color)

### color-mix()

The `color-mix()` function mixes two colors in a given color space and by a given amount. Commonly, lighter or darker variations of a color are created by mixing with white or black.

**Spec:**
- <https://drafts.csswg.org/css-color-5/#color-mix>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 113
- Firefox for Android: 113
- Safari: 16.2
- Safari on iOS: 16.2

**MDN:**
- [color-mix()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/color-mix)

### color-scheme

The `color-scheme` CSS property sets which color schemes (light or dark) an element uses and may prevent automatic dark mode adjustments by the browser.

**Spec:**
- <https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop>

**Browser support:**
- Chrome: 98
- Chrome Android: 98
- Edge: 98
- Firefox: 96
- Firefox for Android: 96
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [color-scheme](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme)

### Content

The `content` CSS property sets the content inside of an element or pseudo-element, replacing the current value. It's often used with the `::before` and `::after` pseudo-elements to generate cosmetic content.

**Spec:**
- <https://drafts.csswg.org/css-content-3/#content-property>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [content](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content)

### content-visibility

The `content-visibility` CSS property delays rendering an element, including layout and painting, until it is needed.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#content-visibility>

**Browser support:**
- Chrome: 108
- Chrome Android: 108
- Edge: 108
- Firefox: 130
- Firefox for Android: 130
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [content-visibility](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility)

### CSS.supports()

The `CSS.supports()` static method returns whether the browser supports a CSS declaration (given by two arguments, a property and value) or an `@supports` at-rule condition string.

**Spec:**
- <https://drafts.csswg.org/css-conditional-3/#the-css-namespace>

**Browser support:**
- Chrome: 61
- Chrome Android: 61
- Edge: 79
- Firefox: 55
- Firefox for Android: 55
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [CSS: supports() static method](https://developer.mozilla.org/docs/Web/API/CSS/supports_static)

### Cursor styles

The `cursor` CSS property styles the pointer, allowing you to provide hints to the user on how to interact with the hovered element.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#cursor>

**Browser support:**
- Chrome: 68
- Chrome Android: 68
- Edge: 79
- Firefox: 27
- Firefox for Android: 95
- Safari: 11
- Safari on iOS: —

**MDN:**
- [cursor](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor)

### Custom properties

Custom properties are CSS properties prefixed with `--` that set values you can reuse with the `var()` function. For example, you can set a `--key-color` property to reuse as `border-color: var(--key-color)`. Also known as CSS variables.

**Spec:**
- <https://drafts.csswg.org/css-variables-1/>

**Browser support:**
- Chrome: 49
- Chrome Android: 49
- Edge: 15
- Firefox: 31
- Firefox for Android: 31
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [Custom properties (--*): CSS variables](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/--*)

### Display

The `display` CSS property sets the display behavior of an element's box within its layout and sets the layout behavior for its child elements.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#the-display-properties>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### display animation

You can animate elements between `display: none` and any other `display` value or animate between `content-visibility: hidden` and any other `content-visibility` value. This also applies to transitions.

**Spec:**
- <https://drafts.csswg.org/css-display-4/#display-animation>
- <https://drafts.csswg.org/css-contain-3/#content-visibility-animation>

**Browser support:**
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

### display: contents

The `display: contents` CSS declaration sets an element to display only its contents, not itself.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#box-generation>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### display: flow-root

The `display: flow-root` CSS declaration sets an element as the root element of a new flow layout for its children, preventing margin collapse with sibling elements.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#inner-model>

**Browser support:**
- Chrome: 58
- Chrome Android: 58
- Edge: 79
- Firefox: 53
- Firefox for Android: 53
- Safari: 13
- Safari on iOS: 13

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### display: list-item

The `display: list-item` CSS declaration renders an element with the box layout of a `<li>` HTML element.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#list-items>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<display-listitem>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/display-listitem)

### display: ruby

The `display: ruby` CSS declaration renders an element with the box layout of a `<ruby>` HTML element. Child elements may use equivalents to `<ruby>` internal elements such as `display: ruby-base` for `<rb>`.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#layout-specific-display>

**Browser support:**
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

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: ≤15
- Firefox: 3
- Firefox for Android: 4
- Safari: ≤4
- Safari on iOS: ≤3.2

**MDN:**
- [display](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display)

### field-sizing

The `field-sizing` CSS property allows form controls such as `<textarea>` to be sized based on their content.

**Spec:**
- <https://drafts.csswg.org/css-forms-1/#field-sizing>

**Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: —
- Firefox for Android: —
- Safari: 26.2
- Safari on iOS: 26.2

**MDN:**
- [field-sizing](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing)

### filter

The `filter` CSS property applies one or more graphic effects to an element. You can use filter functions, such as `blur()` and `drop-shadow()`, alone or combined to produce different effects. For instance, `filter: blur(2px)`.

**Spec:**
- <https://drafts.csswg.org/filter-effects-1/#propdef-filter>

**Browser support:**
- Chrome: 53
- Chrome Android: 53
- Edge: 12
- Firefox: 35
- Firefox for Android: 35
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [filter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter)

### filter()

The `filter()` CSS function applies one or more graphic effects to a CSS image, such as a background image. You can use functions, such as `blur()` and `drop-shadow()`, alone or combined to produce different effects. For instance, `background: filter(url(image.png), blur(2px))`.

**Spec:**
- <https://drafts.csswg.org/filter-effects-1/#FilterCSSImageValue>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 9.1
- Safari on iOS: 9.3

### float and clear

The `float` CSS property aligns an element to either side of its container, allowing text and inline elements to flow around it. The `clear` CSS property sets whether an element is moved below floating elements that proceed it.

**Spec:**
- <https://drafts.csswg.org/css2/#propdef-float>
- <https://drafts.csswg.org/css2/#propdef-clear>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [float](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float)
- [clear](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear)

### Forced colors

The `forced-colors` CSS @media rule detects when a user has chosen to use a forced colors mode, also known as high-contrast mode, and the `forced-color-adjust` CSS property sets whether forced colors apply to an element.

**Spec:**
- <https://drafts.csswg.org/mediaqueries-5/#forced-colors>
- <https://drafts.csswg.org/css-color-adjust-1/#forced-color-adjust-prop>

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 79
- Firefox: 89
- Firefox for Android: 89
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [forced-colors](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
- [forced-color-adjust](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust)

### Hyphenation

The `hyphens` CSS property controls when long words are broken by line wrapping. Although called `hyphens`, the property applies to word-splitting behavior across languages, such as customary spelling changes or the use of other characters. Support for non-English languages varies significantly.

**Spec:**
- <https://drafts.csswg.org/css-text-3/#hyphens-property>

**Browser support:**
- Chrome: 88
- Chrome Android: 55
- Edge: 88
- Firefox: 43
- Firefox for Android: 43
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [hyphens](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens)

### if()

The `if()` CSS function is an inline conditional value that returns a value based on a set of conditions.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#if-notation>

**Browser support:**
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

**Browser support:**
- Chrome: 113
- Chrome Android: 113
- Edge: 113
- Firefox: 89
- Firefox for Android: 89
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [image-set()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/image/image-set)

### initial-letter

The `initial-letter` CSS property sets the number of lines the first letter of an element occupies. You can use the property to make a raised capital or drop cap.

**Spec:**
- <https://drafts.csswg.org/css-inline-3/#sizing-drop-initials>

**Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [initial-letter](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter)

### Layout direction override

The `unicode-bidi` and `direction` CSS properties override the Unicode layout algorithm. They are intended for Document Type Definition (DTD) designers. For HTML documents, you should use the `dir` global HTML attribute and `<bdo>` HTML element instead.

**Spec:**
- <https://drafts.csswg.org/css-writing-modes-4/#direction>
- <https://drafts.csswg.org/css-writing-modes-4/#unicode-bidi>

**Browser support:**
- Chrome: 48
- Chrome Android: 48
- Edge: 79
- Firefox: 50
- Firefox for Android: 50
- Safari: 11
- Safari on iOS: 11

**MDN:**
- [unicode-bidi](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi)
- [direction](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction)

### light-dark()

The `light-dark()` CSS function accepts two colors and uses one depending on the current color scheme.

**Spec:**
- <https://drafts.csswg.org/css-color-5/#light-dark>

**Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: 120
- Firefox for Android: 120
- Safari: 17.5
- Safari on iOS: 17.5

**MDN:**
- [light-dark()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/light-dark)

### line-clamp

The `line-clamp` CSS property limits the text in a block container to a certain number of lines. The prefixed `-webkit-line-clamp` is widely supported but only works with `-webkit-box-orient: vertical` in combination with `display: -webkit-box` or `display: -webkit-inline-box`.

**Spec:**
- <https://drafts.csswg.org/css-overflow-4/#line-clamp>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [line-clamp](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp)

### linear() easing

The `linear()` easing function for animations and transitions interpolates linearly between the control points, and can be used to approximate complex easing functions, such as a bounce effect.

**Spec:**
- <https://drafts.csswg.org/css-easing-2/#the-linear-easing-function>

**Browser support:**
- Chrome: 113
- Chrome Android: 113
- Edge: 113
- Firefox: 112
- Firefox for Android: 112
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [`<easing-function>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/easing-function)

### Logical properties

CSS logical properties control borders, size, margin, and padding with directions and dimensions relative to the writing mode. For example, in a left to right, top to bottom writing mode, `block-end` refers to the bottom. Also known as flow relative.

**Spec:**
- <https://drafts.csswg.org/css-logical-1/>

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: 66
- Firefox for Android: 66
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [CSS logical properties and values](https://developer.mozilla.org/docs/Web/CSS/Guides/Logical_properties_and_values)

### margin-trim

The `margin-trim` CSS property removes the margins of child elements when they meet the edges of the container.

**Spec:**
- <https://drafts.csswg.org/css-box-4/#margin-trim>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [margin-trim](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim)

### min(), max(), and clamp()

The `min()` and `max()` CSS functions return the minimum or maximum of the arguments, while `clamp()` clamps a value to a given range.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#comp-func>

**Browser support:**
- Chrome: 79
- Chrome Android: 79
- Edge: 79
- Firefox: 75
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [min()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/min)
- [max()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/max)
- [clamp()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/clamp)

### Motion path

The `offset` CSS property animates an element along a defined motion path.

**Spec:**
- <https://drafts.csswg.org/motion-1/>

**Browser support:**
- Chrome: 55
- Chrome Android: 55
- Edge: 79
- Firefox: 72
- Firefox for Android: 79
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [offset](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset)

### Nesting

CSS nesting allows for shorter selectors, easier reading, and more modularity by nesting rules inside others.

**Spec:**
- <https://drafts.csswg.org/css-nesting-1/>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 117
- Firefox for Android: 117
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [& nesting selector](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/Nesting_selector)

### object-view-box

The `object-view-box` CSS property crops and zooms to an inset area of an image.

**Spec:**
- <https://drafts.csswg.org/css-images-5/#the-object-view-box>

**Browser support:**
- Chrome: 104
- Chrome Android: 104
- Edge: 104
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [object-view-box](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box)

### opacity

The `opacity` CSS property sets the transparency of an element.

**Spec:**
- <https://drafts.csswg.org/css-color-3/#transparency>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 2
- Safari on iOS: 1

**MDN:**
- [opacity](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity)

### overflow

The `overflow` CSS property sets the behavior for when content doesn't fit in an element.

**Spec:**
- <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>

**Browser support:**
- Chrome: 68
- Chrome Android: 68
- Edge: 79
- Firefox: 61
- Firefox for Android: 61
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [overflow](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow)

### overflow-clip-margin

The `overflow-clip-margin` CSS property sets how far overflow content may appear outside the bounds of an element before it's clipped by effects such as `overflow: clip`.

**Spec:**
- <https://drafts.csswg.org/css-overflow-4/#overflow-clip-margin>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [overflow-clip-margin](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin)

### overflow: clip

The `overflow: clip` CSS declaration clips an element's overflowing content to the box that's defined by the `overflow-clip-margin` property. Unlike `overflow: hidden`, it allows you to hide overflow on one axis while keeping overflow on the other axis visible.

**Spec:**
- <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>

**Browser support:**
- Chrome: 90
- Chrome Android: 90
- Edge: 90
- Firefox: 81
- Firefox for Android: 81
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [overflow](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow)

### overlay

The `overlay` CSS property, used as an `allow-discrete` CSS transition, prevents a top layer element, such as a popover or a `<dialog>`, from being removed from the top layer before it has finished animating. You can't set the value of the `overlay` property; only use it as transition property.

**Spec:**
- <https://drafts.csswg.org/css-position-4/#overlay>

**Browser support:**
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
- <https://svgwg.org/svg2-draft/painting.html#PaintOrder>

**Browser support:**
- Chrome: 123
- Chrome Android: 123
- Edge: 123
- Firefox: ≤66
- Firefox for Android: ≤66
- Safari: ≤12
- Safari on iOS: ≤12

**MDN:**
- [paint-order](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order)

### paint()

The `paint()` CSS function creates a custom image, drawn using a paint worklet, for an element's background or border.

**Spec:**
- <https://drafts.css-houdini.org/css-paint-api-1/>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [CSS Painting API](https://developer.mozilla.org/docs/Web/API/CSS_Painting_API)

### Physical properties

The physical CSS properties, `top`, `right`, `bottom`, and `left`, set the inset position of an element relative to the corresponding side of a container determined by the element's `position` property.

**Spec:**
- <https://drafts.csswg.org/css-position-3/#insets>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [top](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top)
- [right](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right)
- [bottom](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom)
- [left](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left)

### pointer-events

The `pointer-events` CSS property sets whether a user can interact with an element using a mouse, touch, or other pointing input device.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#pointer-events-control>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 3.6
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [pointer-events](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events)

### pow(), sqrt(), hypot(), log(), and exp()

The `pow()`, `sqrt()`, `hypot()`, `log()`, and `exp()` CSS functions compute various exponential functions.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#exponent-funcs>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 118
- Firefox for Android: 118
- Safari: 15.4
- Safari on iOS: 15.4

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

**Browser support:**
- Chrome: 138
- Chrome Android: 138
- Edge: 138
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [progress()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/progress)

### Quotes

The `quotes` CSS property sets the quotation marks inserted via the `content` CSS property or `<q>` element.

**Spec:**
- <https://drafts.csswg.org/css-content-3/#quotes>

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: 70
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [quotes](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes)

### random()

The `random()` CSS function chooses a random numeric value within a specified range. This allows for dynamic, randomized styling using CSS.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#random>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 26.2
- Safari on iOS: 26.2

### reading-flow

The `reading-flow` CSS property sets the order in which flex or grid elements are rendered to speech or reached via focus navigation. The `reading-order` property overrides this order.

**Spec:**
- <https://drafts.csswg.org/css-display-4/#reading-flow>

**Browser support:**
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

**Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: 128
- Firefox for Android: 128
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [Using relative colors](https://developer.mozilla.org/docs/Web/CSS/Guides/Colors/Using_relative_colors)

### resize (CSS property)

The `resize` CSS property sets whether an element can be resized by the user, and on which axes.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#resize>

**Browser support:**
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

**Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: 118
- Firefox for Android: 118
- Safari: 17.2
- Safari on iOS: 17.2

**MDN:**
- [mod()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/mod)
- [rem()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/rem)
- [round()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/round)

### sibling-count() and sibling-index()

The `sibling-count()` and `sibling-index()` CSS functions return integers that are useful to style elements based on their positions among siblings or on the number of siblings, for example as part of a `calc()` expression.

**Spec:**
- <https://drafts.csswg.org/css-values-5/#tree-counting>

**Browser support:**
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

### sin(), cos(), tan(), asin(), acos(), atan(), and atan2() (CSS)

The `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` CSS functions compute various trigonometric functions.

**Spec:**
- <https://drafts.csswg.org/css-values-4/#trig-funcs>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 108
- Firefox for Android: 108
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [sin()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/sin)
- [cos()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/cos)
- [tan()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/tan)
- [asin()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/asin)
- [acos()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/acos)
- [atan()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/atan)
- [atan2()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/atan2)

### speak

The `speak` CSS property sets whether or not text should be spoken.

**Spec:**
- <https://drafts.csswg.org/css-speech-1/#speaking-props-speak>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

### speak-as

The `speak-as` CSS property sets how any element's content is spoken. Not to be confused with the `speak-as` descriptor of `@counter-style` at-rules.

**Spec:**
- <https://drafts.csswg.org/css-speech-1/#speaking-props-speak-as>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [speak-as](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as)

### style (attribute)

The `style` global HTML attribute applies inline CSS styling declarations to individual elements.

**Spec:**
- <https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [HTML style global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/style)

### Text overflow

The `text-overflow` CSS property sets how hidden overflow content appears to users. The property can clip content, truncate content with an ellipsis (…), or truncate with a custom string.

**Spec:**
- <https://drafts.csswg.org/css-overflow-4/#text-overflow>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 7
- Firefox for Android: 7
- Safari: 1.3
- Safari on iOS: 1

**MDN:**
- [text-overflow](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow)

### Text stroke and fill  (compatibility prefixes)

The `-webkit-text-stroke-width` and `-webkit-text-stroke-color` CSS properties set the thickness and color of text outlines. The `-webkit-text-fill-color` sets the color within text character outlines. Both default to the text color.

**Spec:**
- <https://compat.spec.whatwg.org/#text-fill-and-stroking>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 15
- Firefox: 49
- Firefox for Android: 49
- Safari: 3
- Safari on iOS: 2

**MDN:**
- [-webkit-text-stroke](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-stroke)
- [-webkit-text-fill-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-text-fill-color)

### text-indent

The `text-indent` CSS property sets the size of the empty space (indentation) at the beginning of lines in a text.

**Spec:**
- <https://drafts.csswg.org/css-text-3/#text-indent-property>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [text-indent](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent)

### text-spacing-trim

The `text-spacing-trim` CSS property controls spacing around CJK characters, avoiding excessive whitespace when using full-width punctuation characters.

**Spec:**
- <https://drafts.csswg.org/css-text-4/#text-spacing-trim-property>

**Browser support:**
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

**Browser support:**
- Chrome: 115
- Chrome Android: 115
- Edge: 115
- Firefox: 70
- Firefox for Android: 79
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [Using the multi-keyword syntax with CSS display](https://developer.mozilla.org/docs/Web/CSS/Guides/Display/Multi-keyword_syntax)

### user-select

The `user-select` CSS property controls which elements can be selected by the user.

**Spec:**
- <https://drafts.csswg.org/css-ui-4/#content-selection>

**Browser support:**
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

**Browser support:**
- Chrome: 124
- Chrome Android: 124
- Edge: 124
- Firefox: 120
- Firefox for Android: 120
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [writing-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode)
- [direction](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction)

### vertical-align

The `vertical-align` CSS property sets the vertical alignment of inline, inline-block, and table cell elements. It has no effect on block-level elements.

**Spec:**
- <https://drafts.csswg.org/css2/#propdef-vertical-align>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [vertical-align](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align)

### visibility

The `visibility` CSS property sets whether an element is shown. Invisible elements still affect the document layout.

**Spec:**
- <https://drafts.csswg.org/css-display-3/#visibility>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1.3
- Safari on iOS: 1

**MDN:**
- [visibility](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility)

### will-change

The `will-change` CSS property gives hints to the browser about expected changes to an element's scroll position, contents, or style. These hints allow browsers to optimize for upcoming style changes.

**Spec:**
- <https://drafts.csswg.org/css-will-change-1/>

**Browser support:**
- Chrome: 36
- Chrome Android: 36
- Edge: 79
- Firefox: 36
- Firefox for Android: 36
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [will-change](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change)

### writing-mode

The `writing-mode` CSS property sets whether text is laid out horizontally or vertically, and left to right, or right to left.

**Spec:**
- <https://drafts.csswg.org/css-writing-modes-4/#block-flow>

**Browser support:**
- Chrome: 48
- Chrome Android: 48
- Edge: 12
- Firefox: 41
- Firefox for Android: 41
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [writing-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode)

### z-index

The `z-index` CSS property orders overlapping elements, with higher values appearing in front of or on top of lower values.

**Spec:**
- <https://drafts.csswg.org/css2/#z-index>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 3
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [z-index](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index)
