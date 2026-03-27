# Ruby

Features related to ruby annotation

## Ruby features

### `<ruby>`

The `<ruby>` element produces small annotations that are rendered with its base text.

**Spec:**
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element>
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element>
- <https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element>

**Browser support:**
- Chrome: 5
- Chrome Android: 18
- Edge: 12
- Firefox: 38
- Firefox for Android: 38
- Safari: 5
- Safari on iOS: 4.2

**MDN:**
- [`<ruby>`: The Ruby Annotation element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby)

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

### ruby-align

The `ruby-align` CSS property sets the spacing and alignment of ruby annotation text when it does not fill its available space.

**Spec:**
- <https://drafts.csswg.org/css-ruby-1/#ruby-align-property>

**Browser support:**
- Chrome: 128
- Chrome Android: 128
- Edge: 128
- Firefox: 38
- Firefox for Android: 38
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [ruby-align](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align)

### ruby-overhang

The `ruby-overhang` CSS property sets whether ruby annotations may overlap adjacent text.

**Spec:**
- <https://drafts.csswg.org/css-ruby-1/#ruby-overhang>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [ruby-overhang](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang)

### ruby-position

The `ruby-position` CSS property sets the position of a ruby annotation in relation to its base text. Annotations can display over, under, or interleaved with the base text.

**Spec:**
- <https://drafts.csswg.org/css-ruby-1/#rubypos>

**Browser support:**
- Chrome: 84
- Chrome Android: 84
- Edge: 84
- Firefox: 38
- Firefox for Android: 38
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [ruby-position](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position)
