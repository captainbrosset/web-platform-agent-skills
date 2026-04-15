# Custom elements

https://html.spec.whatwg.org/multipage/custom-elements.html

## Custom elements features

### :state()

The `:state()` CSS pseudo-class matches custom elements based on their custom state, set through the `ElementInternals.states` API.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-state-pseudo-class>

**Baseline Newly Available since 2024-05-17**

**MDN:**
- [:state()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:state)

### Customized built-in elements

Customized built-in elements are HTML elements that extend built-in elements using the `is` attribute, to add new behaviors that you define.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element>

**Limited Availability — Browser support:**
- Chrome: 67
- Chrome Android: 67
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: —
- Safari on iOS: —

**MDN:**
- [`is` HTML global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/is)

### Scoped custom element registries

The `CustomElementRegistry()` constructor creates a new custom element registry that's separate from the global `window.customElements` registry. Creating more than one registry is useful for multiple custom elements that have the same tag name to coexist.

**Spec:**
- <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-api>
- <https://dom.spec.whatwg.org/#element-custom-element-registry>

**Limited Availability — Browser support:**
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
