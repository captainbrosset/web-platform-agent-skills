# CSS object models

The CSS Object Model (CSSOM) and CSS Typed Object Model allow authors to programmatically interact with CSS with JavaScript.

## CSS object models features

### CSS object model

The CSS object model API reads, creates, and modifies CSS stylesheets and inline styles. Also known as CSSOM.

**Spec:**
- <https://drafts.csswg.org/cssom-1/#css-object-model>

**Browser support:**
- Chrome: 28
- Chrome Android: 28
- Edge: 12
- Firefox: 22
- Firefox for Android: 22
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [CSS Object Model (CSSOM)](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model)

### CSS object model (DOM level 2)

The DOM level 2 style specification defined interfaces to access and modify CSS styles, such as `CSSValue` and `CSSPrimitiveValue`, that were later excluded from the CSS object model.

**Spec:**
- <https://www.w3.org/TR/DOM-Level-2-Style/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [CSSPrimitiveValue](https://developer.mozilla.org/docs/Web/API/CSSPrimitiveValue)
- [CSSValue](https://developer.mozilla.org/docs/Web/API/CSSValue)
- [CSSValueList](https://developer.mozilla.org/docs/Web/API/CSSValueList)

### CSS typed object model

The `CSSStyleValue` and its subclasses represent CSS values as distinct types instead of only strings. Also known as typed OM.

**Spec:**
- <https://drafts.css-houdini.org/css-typed-om-1/>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CSS Typed Object Model API](https://developer.mozilla.org/docs/Web/API/CSS_Typed_OM_API)

### CSS.escape()

The `CSS.escape()` static method escapes a string so that it can be used in a valid CSS selector.

**Spec:**
- <https://drafts.csswg.org/cssom-1/#the-css.escape()-method>

**Browser support:**
- Chrome: 46
- Chrome Android: 46
- Edge: 79
- Firefox: 31
- Firefox for Android: 31
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [CSS: escape() static method](https://developer.mozilla.org/docs/Web/API/CSS/escape_static)

### getComputedStyle()

The `getComputedStyle()` global method returns an `CSSStyleDeclaration` object that represents all CSS declarations applied to a given element.

**Spec:**
- <https://drafts.csswg.org/cssom-1/#extensions-to-the-window-interface>

**Browser support:**
- Chrome: 11
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 5.1
- Safari on iOS: 5

**MDN:**
- [Window: getComputedStyle() method](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

### Numeric factory functions

The numeric factory functions, such as `CSS.px()` or `CSS.kHz()`, return a `CSSUnitValue` representing a CSS number value (as in `12px` or `440kHz`).

**Spec:**
- <https://drafts.css-houdini.org/css-typed-om-1/#numeric-factory>

**Browser support:**
- Chrome: 66
- Chrome Android: 66
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [CSS numeric factory functions](https://developer.mozilla.org/docs/Web/API/CSS/factory_functions_static)
