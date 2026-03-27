# Containment

https://drafts.csswg.org/css-contain/ (any level) and containment-specific things in other specs, like contain-intrinsic-size.

## Containment features

### contain

The `contain` CSS property sets limits to the scope of styles, layout, and paint rendering for speed and efficiency. The `none` keyword value disables containment, `strict` is equivalent to `contain: size layout style paint`, and `content` is equivalent to `contain: layout style paint`.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#contain-property>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 79
- Firefox: 69
- Firefox for Android: 79
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)

### contain-intrinsic-size

The `contain-intrinsic-size` CSS property sets the intrinsic size of an element. When using size containment, the browser will lay out the element as if it had a single child of this size.

**Spec:**
- <https://drafts.csswg.org/css-sizing-4/#intrinsic-size-override>

**Browser support:**
- Chrome: 83
- Chrome Android: 83
- Edge: 83
- Firefox: 107
- Firefox for Android: 107
- Safari: 17
- Safari on iOS: 17

**MDN:**
- [contain-intrinsic-size](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size)

### Inline-size containment

The `contain: inline-size` CSS declaration prevents the element's inline dimension from being set by the element's contents. This permits the browser to avoid slower layout calculations.

**Spec:**
- <https://drafts.csswg.org/css-contain-3/#containment-inline-size>

**Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: 101
- Firefox for Android: 101
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)

### Layout containment

The `contain: layout` CSS declaration isolates the inside of an element such that it cannot affect the layout of the rest of the page or be affected by the rest of the page. This permits the browser to avoid slower layout calculations.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#containment-layout>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 79
- Firefox: 69
- Firefox for Android: 79
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)

### Paint containment

The `contain: paint` CSS declaration prevents an element's descendants from being drawn outside the boundaries of the containing element, with any overflow clipped. This permits the browser to avoid slower painting calculations.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#containment-paint>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 79
- Firefox: 69
- Firefox for Android: 79
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)

### Size containment

The `contain: size` CSS declaration sets an element's dimensions exclusively by its `height` and `width` properties, ignoring its contents and descendants. This permits the browser to avoid slower layout calculations.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#containment-size>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 79
- Firefox: 69
- Firefox for Android: 79
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)

### Style containment

The `contain: style` CSS declaration permits the browser to avoid slower layout calculations by preventing modification to counter (`counter-increment` and `counter-set`) and quotation styles (`content` property quote values) beyond the element's descendants.

**Spec:**
- <https://drafts.csswg.org/css-contain-2/#containment-style>

**Browser support:**
- Chrome: 52
- Chrome Android: 52
- Edge: 79
- Firefox: 103
- Firefox for Android: 103
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [contain](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain)
