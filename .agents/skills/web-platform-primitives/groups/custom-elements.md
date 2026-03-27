# Custom elements

https://html.spec.whatwg.org/multipage/custom-elements.html

## Custom elements features

### :state()

The `:state()` CSS pseudo-class matches custom elements based on their custom state, set through the `ElementInternals.states` API.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-state-pseudo-class>

**Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: 126
- Firefox for Android: 126
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [:state()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:state)

### Autonomous custom elements

Autonomous custom elements are HTML elements with a hyphenated tag name (like `<example-element>`) that have behaviors you define.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Window: customElements property](https://developer.mozilla.org/docs/Web/API/Window/customElements)

### Customized built-in elements

Customized built-in elements are HTML elements that extend built-in elements using the `is` attribute, to add new behaviors that you define.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element>

**Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTML is global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/is)

### Form-associated custom elements

Custom elements may act like built-in form elements, via the the `attachInternals()` method of `HTMLElement` and the `ElementInternals` API.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements>

**Browser support:**
- Chrome: 77
- Chrome Android: 77
- Edge: 79
- Firefox: 98
- Firefox for Android: 98
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [HTMLElement: attachInternals() method](https://developer.mozilla.org/docs/Web/API/HTMLElement/attachInternals)
- [ElementInternals](https://developer.mozilla.org/docs/Web/API/ElementInternals)

### Scoped custom element registries

The `CustomElementRegistry()` constructor creates a new custom element registry that's separate from the global `window.customElements` registry. Creating more than one registry is useful for multiple custom elements that have the same tag name to coexist.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-api>
- <https://dom.spec.whatwg.org/#element-custom-element-registry>

**Browser support:**
- Chrome: 146
- Chrome Android: 146
- Edge: 146
- Firefox: —
- Firefox for Android: —
- Safari: 26
- Safari on iOS: 26

**MDN:**
- [CustomElementRegistry: CustomElementRegistry() constructor](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/CustomElementRegistry)
- [CustomElementRegistry: initialize() method](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/initialize)
