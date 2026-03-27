# CSS object models

The CSS Object Model (CSSOM) and CSS Typed Object Model allow authors to programmatically interact with CSS with JavaScript.

## CSS object models features

### CSS typed object model

The `CSSStyleValue` and its subclasses represent CSS values as distinct types instead of only strings. Also known as typed OM.

**Spec:**
- <https://drafts.css-houdini.org/css-typed-om-1/>

**Limited Availability — Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CSS Typed Object Model API](https://developer.mozilla.org/docs/Web/API/CSS_Typed_OM_API)

### Numeric factory functions

The numeric factory functions, such as `CSS.px()` or `CSS.kHz()`, return a `CSSUnitValue` representing a CSS number value (as in `12px` or `440kHz`).

**Spec:**
- <https://drafts.css-houdini.org/css-typed-om-1/#numeric-factory>

**Limited Availability — Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CSS numeric factory functions](https://developer.mozilla.org/docs/Web/API/CSS/factory_functions_static)
