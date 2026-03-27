# Explicit defaults

https://drafts.csswg.org/css-cascade/

## Explicit defaults features

### all

The `all` CSS property is a shorthand for all CSS properties, except for `direction` and `unicode-bidi`. It accepts only the keywords for explicit defaulting (such as `initial` and `inherit`), since they are the only values supported on all CSS properties.

**Spec:**
- <https://drafts.csswg.org/css-cascade-6/>

**Browser support:**
- Chrome: 37
- Chrome Android: 37
- Edge: 79
- Firefox: 27
- Firefox for Android: 27
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [all](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all)

### inherit

The `inherit` keyword resets any CSS property to the computed value of that property from the parent element.

**Spec:**
- <https://drafts.csswg.org/css-cascade-3/#inherit>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [inherit](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/inherit)

### initial

The `initial` keyword resets any CSS property to its initial value as defined by the specification. For example, the `initial` value of the `display` property is `inline`, regardless of the element being styled. Not to be confused with `revert`, which resets to the user or browser default style.

**Spec:**
- <https://drafts.csswg.org/css-cascade-3/#initial>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 13
- Firefox: 19
- Firefox for Android: 19
- Safari: 1.2
- Safari on iOS: 1

**MDN:**
- [initial](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/initial)

### revert

The `revert` CSS keyword resets any property to its previous default, provided by either the user or browser stylesheets. For example, setting `display: revert` on a `<div>` will likely result in `display: block`, the browser default style. This is often confused with `initial`.

**Spec:**
- <https://drafts.csswg.org/css-cascade-4/#default>

**Browser support:**
- Chrome: 84
- Chrome Android: 84
- Edge: 84
- Firefox: 67
- Firefox for Android: 67
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [revert](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/revert)

### unset

The `unset` keyword resets any CSS property, removing any values previously set by the author, user, or browser. Inherited properties (like `color`) reset to the parent element's computed value. Non-inherited properties (like `display`) reset to the specified initial value (`inline`).

**Spec:**
- <https://drafts.csswg.org/css-cascade-3/#inherit-initial>

**Browser support:**
- Chrome: 41
- Chrome Android: 41
- Edge: 13
- Firefox: 27
- Firefox for Android: 27
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [unset](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/unset)
