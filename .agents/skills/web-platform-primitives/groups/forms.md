# Forms

This group is for `<form>`, all form controls, and APIs or CSS features specific to them.

## Forms features

### :autofill

The `:autofill` pseudo-class matches `<input>` elements that have been filled in automatically by the browser.

**Spec:**
- <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-autofill>

**Limited Availability — Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [:autofill](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:autofill)

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

### `<datalist>`

The `<datalist>` element sets recommended values for an `<input>` element. Browsers may show a dropdown menu of all values or match values as the user types.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element>

**Limited Availability — Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 12
- Firefox: 110
- Firefox for Android: —
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [`<datalist>`: The HTML Data List element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist)

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

### `<input type="file" webkitdirectory>`

The `<input type="file" webkitdirectory>` HTML element shows a file picker from which users can choose a folder to upload with the form.

**Spec:**
- <https://wicg.github.io/entries-api/#html-forms>

**Baseline Newly Available since 2025-08-19**

**MDN:**
- [File: webkitRelativePath property](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)

### `<output>`

The `<output>` element represents the result of a calculation, user action, or form entry.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element>

**Baseline Widely Available since ≤2021-04-02**

**MDN:**
- [`<output>`: The Output element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output)

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

### showPicker() for `<input>`

The `showPicker()` method for `<input>` elements shows the user interface for picking a value. For example, for `<input type="date">` it shows the interface for picking a date.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#dom-input-showpicker>

**Limited Availability — Browser support:**
- Chrome: 99
- Chrome Android: 99
- Edge: 99
- Firefox: 101
- Firefox for Android: 101
- Safari: 17.4
- Safari on iOS: —

**MDN:**
- [HTMLInputElement: showPicker() method](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/showPicker)

### showPicker() for `<select>`

The `showPicker()` method for `<select>` elements shows the dropdown menu or other user interface for picking one of the options.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#dom-select-showpicker>

**Limited Availability — Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: 122
- Firefox for Android: 122
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLSelectElement: showPicker() method](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/showPicker)

### writingsuggestions

The `writingsuggestions` HTML attribute turns on or off a browser's writing suggestions. Writing suggestions vary by browser. For example, if turned on then a browser might show inline text completions accepted by pressing Tab.

**Spec:**
- <https://html.spec.whatwg.org/multipage/interaction.html#writing-suggestions>

**Limited Availability — Browser support:**
- Chrome: 124
- Chrome Android: 124
- Edge: 124
- Firefox: —
- Firefox for Android: —
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [HTML writingsuggestions global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
