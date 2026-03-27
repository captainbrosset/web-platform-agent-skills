# Forms

This group is for `<form>`, all form controls, and APIs or CSS features specific to them.

## Forms features

### :autofill

The `:autofill` pseudo-class matches `<input>` elements that have been filled in automatically by the browser.

**Spec:**
- <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-autofill>

**Browser support:**
- Chrome: 110
- Chrome Android: 110
- Edge: 110
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [:autofill](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:autofill)

### :indeterminate

The `:indeterminate` CSS pseudo-class selects any form element whose state is indeterminate, such as checkboxes that have been set to an indeterminate state with JavaScript, or radio buttons which are members of a group in which all radio buttons are unchecked.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#indeterminate>
- <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-indeterminate>

**Browser support:**
- Chrome: 39
- Chrome Android: 39
- Edge: 79
- Firefox: 51
- Firefox for Android: 51
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [:indeterminate](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:indeterminate)

### :read-only and :read-write

The `:read-only` and `:read-write` CSS pseudo-classes match elements that are read-only or read-write, respectively. For example, `:read-only` matches `<input>` and `<textarea>` elements with the `readonly` attribute.

**Spec:**
- <https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-only>
- <https://drafts.csswg.org/selectors-4/#rw-pseudos>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 13
- Firefox: 78
- Firefox for Android: 79
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [:read-only](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:read-only)
- [:read-write](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:read-write)

### `alpha` and `colorspace` attributes for ``<input type=color>``

The ability to control the opacity of a color picked using `<input type="color">` and determine the colorspace of the selected color.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#attr-input-alpha>

**Browser support:**
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

### `<button>`

The `<button>` HTML element represents a button that triggers some action, such as submitting a form or opening a dialog, styled as a labeled rectangular box by default.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<button>`: The Button element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button)

### `<datalist>`

The `<datalist>` element sets recommended values for an `<input>` element. Browsers may show a dropdown menu of all values or match values as the user types.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 12
- Firefox: 110
- Firefox for Android: —
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [`<datalist>`: The HTML Data List element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist)

### `<fieldset>` and `<legend>`

The `<fieldset>` and `<legend>` elements group several form control elements within a web form.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element>
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: ≤4
- Safari on iOS: ≤3.2

**MDN:**
- [`<fieldset>`: The Field Set element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset)
- [`<legend>`: The Field Set Legend element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend)

### `<form>`

The `<form>` element contains interactive controls for submitting information.

**Spec:**
- <https://html.spec.whatwg.org/multipage/forms.html#the-form-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 2

**MDN:**
- [`<form>`: The Form element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form)

### `<input type="button">`

The `<input type="button">` HTML element represents a button that triggers some action, such as submitting a form or opening a dialog, styled as a labeled rectangular box by default. Not to be confused with the `<button>` element, which contains HTML content.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#button-state-(type=button)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="button">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/button)

### `<input type="checkbox">`

The `<input type="checkbox">` HTML element represents a tickable box with two states, checked and unchecked.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 3.6
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [`<input type="checkbox">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/checkbox)

### `<input type="color">`

The `<input type="color">` HTML element shows a color picker from which users can choose a color value.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#color-state-(type=color)>

**Browser support:**
- Chrome: 20
- Chrome Android: 25
- Edge: 14
- Firefox: 29
- Firefox for Android: —
- Safari: 12.1
- Safari on iOS: 12.2

**MDN:**
- [`<input type="color">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/color)

### `<input type="file" multiple>`

The `<input type="file" multiple>` HTML element shows a file picker from which users can choose one or more files to upload with a form.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#attr-input-multiple>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 3.6
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3.2

**MDN:**
- [HTMLInputElement: multiple property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/multiple)
- [HTMLInputElement: webkitEntries property](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitEntries)
- [HTML attribute: multiple](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/multiple)

### `<input type="file" webkitdirectory>`

The `<input type="file" webkitdirectory>` HTML element shows a file picker from which users can choose a folder to upload with the form.

**Spec:**
- <https://wicg.github.io/entries-api/#html-forms>

**Browser support:**
- Chrome: 13
- Chrome Android: 132
- Edge: 13
- Firefox: 50
- Firefox for Android: 142
- Safari: 11.1
- Safari on iOS: 18.4

**MDN:**
- [File: webkitRelativePath property](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)

### `<input type="file">`

The `<input type="file">` HTML element shows a file picker from which users can choose a file to upload with the form.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#file-upload-state-(type=file)>

**Browser support:**
- Chrome: 2
- Chrome Android: 18
- Edge: 12
- Firefox: 3
- Firefox for Android: 4
- Safari: 4
- Safari on iOS: 3

**MDN:**
- [`<input type="file">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/file)

### `<input type="hidden">`

The `<input type="hidden">` HTML element represents a form field that is not shown visually but is still included in the form submission.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="hidden">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/hidden)

### `<input type="image">`

The `<input type="image">` HTML element is an image that can be used to submit a form, like the `<input type="submit">` element.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="image">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/image)

### `<input type="number">`

The `<input type="number">` HTML element represents numeric input data.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number)>

**Browser support:**
- Chrome: 7
- Chrome Android: 18
- Edge: 12
- Firefox: 29
- Firefox for Android: 29
- Safari: 5.1
- Safari on iOS: 5

**MDN:**
- [`<input type="number">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/number)

### `<input type="password">`

The `<input type="password">` HTML element represents a field for users to enter a password. The password is hidden from view, typically replaced by dots or asterisks.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#password-state-(type=password)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="password">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/password)

### `<input type="radio">`

The `<input type="radio">` HTML element represents one button in a group such that only one can be chosen at a time.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="radio">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/radio)

### `<input type="range">`

The `<input type="range">` element represents a slider for choosing an inexact value between a minimum and maximum value.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)>

**Browser support:**
- Chrome: 4
- Chrome Android: 57
- Edge: 12
- Firefox: 23
- Firefox for Android: 52
- Safari: 3.1
- Safari on iOS: 5

**MDN:**
- [`<input type="range">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/range)

### `<input type="reset">`

The `<input type="reset">` HTML element represents a button that sets all form fields to their initial values.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#reset-button-state-(type=reset)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="reset">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/reset)

### `<input type="search">`

The `<input type="search">` HTML element represents a text field for search queries.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)>

**Browser support:**
- Chrome: 5
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 4.2

**MDN:**
- [`<input type="search">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/search)

### `<input type="submit">`

The `<input type="submit">` HTML element represents a button that triggers an action on its associated `<form>`, such as sending the form data to a server.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#submit-button-state-(type=submit)>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input type="submit">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/submit)

### `<input>`

The `<input type="text">` HTML element allows the user to enter information into a form. By default, an `<input>` element is a text input.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#the-input-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<input>`: The HTML Input element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input)

### `<label>`

The `<label>` HTML element represents a caption for a form field.

**Spec:**
- <https://html.spec.whatwg.org/multipage/forms.html#the-label-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: ≤4
- Safari on iOS: ≤3.2

**MDN:**
- [`<label>`: The Label element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label)

### `<meter>`

The `<meter>` element represents a scalar value within a known range or a fractional value, typically shown as a progress bar.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element>

**Browser support:**
- Chrome: 6
- Chrome Android: 18
- Edge: 18
- Firefox: 56
- Firefox for Android: 56
- Safari: 6
- Safari on iOS: 10.3

**MDN:**
- [`<meter>`: The HTML Meter element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter)

### `<output>`

The `<output>` element represents the result of a calculation, user action, or form entry.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: ≤18
- Firefox: 4
- Firefox for Android: 4
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [`<output>`: The Output element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output)

### `<progress>`

The `<progress>` element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element>

**Browser support:**
- Chrome: 6
- Chrome Android: 18
- Edge: 12
- Firefox: 6
- Firefox for Android: 6
- Safari: 6
- Safari on iOS: 7

**MDN:**
- [`<progress>`: The Progress Indicator element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress)

### `<select>`

The `<select>` element provides a menu of options for a user to pick from, typically rendered as a dropdown list.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element>
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element>
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [`<select>`: The HTML Select element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select)

### `<textarea>`

The `<textarea>` element represents an editing control that allows users to enter multi-line, free-form, plain text.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: ≤4
- Safari on iOS: ≤3

**MDN:**
- [`<textarea>`: The Textarea element](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea)

### Constraint validation API

Methods that validate form controls before submission, such as `checkValidity()`, `reportValidity()` and `setCustomValidity()`.

**Spec:**
- <https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api>

**Browser support:**
- Chrome: 40
- Chrome Android: 40
- Edge: 18
- Firefox: 51
- Firefox for Android: 64
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [Using HTML form validation and the Constraint Validation API](https://developer.mozilla.org/docs/Web/HTML/Guides/Constraint_validation)

### Customizable `<select>`

The `<select>` element's appearance, including the button, selected option, picker dropdown, and options, can be customized using CSS.

**Spec:**
- <https://open-ui.org/components/customizableselect/>

**Browser support:**
- Chrome: 135
- Chrome Android: 135
- Edge: 135
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [Customizable select elements](https://developer.mozilla.org/docs/Learn_web_development/Extensions/Forms/Customizable_select)

### Date and time `<input>` types

The `<input type="date">` and `<input type="time">` HTML elements show date and time pickers.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#date-state-(type=date)>

**Browser support:**
- Chrome: 20
- Chrome Android: 25
- Edge: 12
- Firefox: 57
- Firefox for Android: 57
- Safari: 14.1
- Safari on iOS: 5

**MDN:**
- [`<input type="date">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/time)

### Email, telephone, and URL `<input>` types

The `<input type="email">`, `<input type="tel">`, and `<input type="url">` HTML elements represent email address, telephone number, and URL fields in a form.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)>
- <https://html.spec.whatwg.org/multipage/input.html#telephone-state-(type=tel)>
- <https://html.spec.whatwg.org/multipage/input.html#url-state-(type=url)>

**Browser support:**
- Chrome: 5
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 3

**MDN:**
- [`<input type="email">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/email)
- [`<input type="tel">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="url">`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input/url)

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

### Input selectors

The `:checked`, `:disabled`, and `:enabled` CSS pseudo-classes match form elements based on their state.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#checked>
- <https://drafts.csswg.org/selectors-4/#enableddisabled>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [:checked](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:checked)
- [:disabled](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:disabled)
- [:enabled](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:enabled)

### showPicker() for `<input>`

The `showPicker()` method for `<input>` elements shows the user interface for picking a value. For example, for `<input type="date">` it shows the interface for picking a date.

**Spec:**
- <https://html.spec.whatwg.org/multipage/input.html#dom-input-showpicker>

**Browser support:**
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

**Browser support:**
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

**Browser support:**
- Chrome: 124
- Chrome Android: 124
- Edge: 124
- Firefox: —
- Firefox for Android: —
- Safari: 18
- Safari on iOS: 18

**MDN:**
- [HTML writingsuggestions global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
