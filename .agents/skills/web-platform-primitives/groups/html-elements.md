# HTML elements

Web platform features about HTML elements

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Landmark elements](landmark-elements.md)

## HTML elements features

### `alpha` and `colorspace` attributes for ``<input type=color>``

The ability to control the opacity of a color picked using `<input type="color">` and determine the colorspace of the selected color.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#attr-input-alpha>

**Limited Availability — Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [HTMLInputElement: alpha property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/alpha)
- [HTMLInputElement: colorSpace property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/colorSpace)
- [`<input type="color">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/color)

### `<dialog closedby>`

The `closedby` HTML attribute for `<dialog>` sets which user actions close a dialog. For example, `closedby="any"` allows the dialog to be closed by clicking outside of it.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby>

**Limited Availability — Browser support:**
- Chrome: 134
- Chrome Android: 134
- Edge: 134
- Firefox: 141
- Firefox for Android: 141
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLDialogElement: closedBy property](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/closedBy)

### `<input type="color">`

The `<input type="color">` HTML element shows a color picker from which users can choose a color value.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#color-state-(type=color)>

**Limited Availability — Browser support:**
- Chrome: 20
- Chrome Android: 25
- Edge: 14
- Firefox: 29
- Firefox for Android: —
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [`<input type="color">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/color)

### `<output>`

The `<output>` element represents the result of a calculation, user action, or form entry.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element>

**Baseline Widely Available since ≤2021-04-02**

**MDN:**
- [`<output>`: The Output element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output)

### `<search>`

The `<search>` HTML element is a container that represents the parts of the web page with search functionality.

**Spec:**
- <https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element>

**Baseline Newly Available since 2023-10-13**

**MDN:**
- [`<search>`: The generic search element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search)

### Customizable `<select>`

The `<select>` element's appearance, including the button, selected option, picker dropdown, and options, can be customized using CSS.

**Spec:**
- <https://open-ui.org/components/customizableselect/>

**Limited Availability — Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Customizable select elements](https://developer.mozilla.org/docs/Learn_web_development/Extensions/Forms/Customizable_select)

### dialog.requestClose()

The `requestClose()` method of a `<dialog>` HTML element closes the dialog, firing a `cancel` event first, which listeners can use to prevent the dialog from closing. This differs from the `close()` method, which only fires the non-cancelable `close` event.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-requestclose>

**Baseline Newly Available since 2025-05-27**

**MDN:**
- [HTMLDialogElement: requestClose() method](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/requestClose)

### Mutually exclusive `<details>` elements

Multiple `<details>` elements which use the same `name` attribute are mutually exclusive. When one member of the group is opened, all other members are closed.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-details-name>

**Baseline Newly Available since 2024-09-03**

**MDN:**
- [HTMLDetailsElement: open property](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open)
