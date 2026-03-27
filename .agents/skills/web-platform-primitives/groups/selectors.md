# Selectors

CSS features that allow selecting elements in the DOM.

## Selectors features

### ::backdrop

The `::backdrop` CSS pseudo-element is a box underneath an element in the top layer, such as a `<dialog>`. It can be used to create obscuring effects distinguishing a modal element from the elements underneath.

**Spec:**
- <https://drafts.csswg.org/css-position-4/#backdrop>

**Browser support:**
- Chrome: 37
- Chrome Android: 37
- Edge: 79
- Firefox: 47
- Firefox for Android: 47
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [::backdrop](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::backdrop)

### ::details-content

The `::details-content` pseudo-element selects the expandable content of a `<details>` element, excluding the `<summary>`.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#details-content-pseudo>

**Browser support:**
- Chrome: 131
- Chrome Android: 131
- Edge: 131
- Firefox: 143
- Firefox for Android: 143
- Safari: 18.4
- Safari on iOS: 18.4

**MDN:**
- [::details-content](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::details-content)

### ::file-selector-button

The `::file-selector-button` CSS pseudo-element selects the button of a `<input type="file">` element.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#file-selector-button-pseudo>

**Browser support:**
- Chrome: 89
- Chrome Android: 89
- Edge: 89
- Firefox: 82
- Firefox for Android: 82
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [::file-selector-button](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::file-selector-button)

### ::first-letter

The `::first-letter` CSS pseudo-element selects the first letter in an element for styling.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [::first-letter](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::first-letter)

### ::first-line

The `::first-line` CSS pseudo-element selects the first line of text in an element for styling.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#first-line-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [::first-line](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::first-line)

### ::placeholder

The `::placeholder` CSS pseudo-element selects help text in `<input>` and `<textarea>` elements when no value is set.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#placeholder-pseudo>

**Browser support:**
- Chrome: 57
- Chrome Android: 57
- Edge: 79
- Firefox: 51
- Firefox for Android: 51
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [::placeholder](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::placeholder)

### ::selection

The `::selection` CSS pseudo-element selects text a user has highlighted.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-selection>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 62
- Firefox for Android: 62
- Safari: 1.1
- Safari on iOS: —

**MDN:**
- [::selection](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::selection)

### ::spelling-error and ::grammar-error

The `::spelling-error` and `::grammar-error` CSS pseudo-elements match text that is highlighted as misspelled and grammatically incorrect, respectively.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-spelling-error>
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-grammar-error>

**Browser support:**
- Chrome: 121
- Chrome Android: 121
- Edge: 121
- Firefox: —
- Firefox for Android: —
- Safari: 17.4
- Safari on iOS: 17.4

**MDN:**
- [::grammar-error](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::grammar-error)
- [::spelling-error](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::spelling-error)

### :default

The `:default` CSS pseudo-class matches the default element in a group of related form controls, such as checkboxes and radio buttons with the `checked` attribute.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-default-pseudo>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: 79
- Firefox: 4
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 5

**MDN:**
- [:default](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:default)

### :dir()

The `:dir()` CSS functional pseudo-class matches elements by text direction, either right to left (`rtl`) or left to right (`ltr`).

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-dir-pseudo>

**Browser support:**
- Chrome: 120
- Chrome Android: 120
- Edge: 120
- Firefox: 49
- Firefox for Android: 49
- Safari: 16.4
- Safari on iOS: 16.4

**MDN:**
- [:dir()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:dir)

### :empty

The `:empty` CSS pseudo-class matches elements without child elements.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-empty-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [:empty](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:empty)

### :focus-visible

The `:focus-visible` CSS pseudo-class selects elements that match the `:focus` pseudo-class and meets the browser's criteria for visually emphasizing focused elements.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo>

**Browser support:**
- Chrome: 86
- Chrome Android: 86
- Edge: 86
- Firefox: 85
- Firefox for Android: 85
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [:focus-visible](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:focus-visible)

### :focus-within

The `:focus-within` CSS pseudo-class matches an element if the element or any of its children are focused.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 79
- Firefox: 52
- Firefox for Android: 52
- Safari: 10.1
- Safari on iOS: 10.3

**MDN:**
- [:focus-within](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:focus-within)

### :has-slotted

The `:has-slotted` CSS pseudo-class matches `<slot>` elements where the fallback content is not shown. The pseudo-class matches any slotted content, including white space, text nodes, or elements.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#the-has-slotted-pseudo>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:has-slotted](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has-slotted)

### :has()

The `:has()` CSS functional pseudo-class matches an element if any of the selectors passed as parameters would match at least one element.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#relational>

**Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: 121
- Firefox for Android: 121
- Safari: 15.4
- Safari on iOS: 15.4

**MDN:**
- [:has()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has)

### :is()

The `:is()` CSS functional pseudo-class takes a selector list as its argument, and matches any element that can be selected by one of the selectors in that list.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#matches>

**Browser support:**
- Chrome: 88
- Chrome Android: 88
- Edge: 88
- Firefox: 82
- Firefox for Android: 82
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [:is()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:is)

### :lang()

The `:lang()` CSS functional pseudo-class matches elements based on their content language.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-lang-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [:lang()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:lang)

### :modal

The `:modal` pseudo-class selects elements that put other elements into a non-interactive state, such as a fullscreen element or a `<dialog>` element used with `showModal()`.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#modal-state>

**Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: 103
- Firefox for Android: 103
- Safari: 15.6
- Safari on iOS: 15.6

**MDN:**
- [:modal](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:modal)

### :not()

The `:not()` functional pseudo-class matches elements that do not match the selectors in its argument.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#negation>

**Browser support:**
- Chrome: 88
- Chrome Android: 88
- Edge: 88
- Firefox: 84
- Firefox for Android: 84
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [:not()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:not)

### :nth-child()

The `:nth-child()` and `:nth-last-child()` CSS functional pseudo-classes match elements based on their index within a list of elements. The `:first-child` and `:last-child` pseudo-classes match the first and last element in a list, and the `:only-child` pseudo-class matches an element with no siblings.

**Spec:**
- <https://drafts.csswg.org/selectors-3/#nth-child-pseudo>
- <https://drafts.csswg.org/selectors-3/#nth-last-child-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [:nth-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-child)
- [:nth-last-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-last-child)

### :nth-child() of `<selector>`

The `of` syntax for the `:nth-child()` and `:nth-last-child()` CSS functional pseudo-classes match elements by the relative position of elements, counted from the first or last sibling matching a selector list.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-nth-child-pseudo>
- <https://drafts.csswg.org/selectors-4/#the-nth-last-child-pseudo>

**Browser support:**
- Chrome: 111
- Chrome Android: 111
- Edge: 111
- Firefox: 113
- Firefox for Android: 113
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [:nth-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-child)
- [:nth-last-child()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-last-child)

### :nth-of-type() pseudo-classes

The `:nth-of-type()` and `:nth-last-of-type()` CSS functional pseudo-classes match elements based on their position among siblings of the same type. The `:first-of-type`, `:last-of-type`, and `:only-of-type` pseudo-classes match the first, last, and only elements of its type.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#typed-child-index>

**Browser support:**
- Chrome: 4
- Chrome Android: 18
- Edge: 12
- Firefox: 3.5
- Firefox for Android: 4
- Safari: 3.1
- Safari on iOS: 2

**MDN:**
- [:nth-of-type()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-of-type)
- [:nth-last-of-type()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:nth-last-of-type)

### :open

The `:open` CSS pseudo-class matches elements that have open states, like `<details>`, `<dialog>`, or `<select>`, based on their state.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#open-state>

**Browser support:**
- Chrome: 133
- Chrome Android: 133
- Edge: 133
- Firefox: 136
- Firefox for Android: 136
- Safari: —
- Safari on iOS: —

**MDN:**
- [:open](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:open)

### :placeholder-shown

The `:placeholder-shown` CSS pseudo-element selects `<input>` and `<textarea>` elements when no value is set and the element's `placeholder` attribute is not empty. Not to be confused with `::placeholder`, which selects the placeholder text itself.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#placeholder>

**Browser support:**
- Chrome: 47
- Chrome Android: 47
- Edge: 79
- Firefox: 51
- Firefox for Android: 51
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [:placeholder-shown](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:placeholder-shown)

### :root

The `:root` pseudo-class matches the root element of the document, usually the `<html>` element.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-root-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [:root](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:root)

### :scope (pseudo-class)

The `:scope` CSS pseudo-class matches the scoping root, for instance the element that `querySelector()` is called on, or the root of a DOM subtree specified with `@scope`.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-scope-pseudo>

**Browser support:**
- Chrome: 27
- Chrome Android: 27
- Edge: 79
- Firefox: 32
- Firefox for Android: 32
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [:scope](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:scope)

### :target

The `:target` CSS pseudo-class matches the element with an ID matching the URL fragment.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-target-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1.3
- Safari on iOS: 2

**MDN:**
- [:target](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:target)

### :user-valid and :user-invalid

The `:user-valid` and `:user-invalid` pseudo-classes match form controls that have been marked as valid or invalid based on their validation constraints.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#user-pseudos>

**Browser support:**
- Chrome: 119
- Chrome Android: 119
- Edge: 119
- Firefox: 88
- Firefox for Android: 88
- Safari: 16.5
- Safari on iOS: 16.5

**MDN:**
- [:user-invalid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:user-invalid)
- [:user-valid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:user-valid)

### :where()

The `:where()` CSS functional pseudo-class takes a selector list as its argument, and matches any element that can be selected by one of the selectors in that list. It is functionally equivalent to the selectors in the list, but doesn't affect the CSS rule specificity.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#zero-matches>

**Browser support:**
- Chrome: 88
- Chrome Android: 88
- Edge: 88
- Firefox: 82
- Firefox for Android: 82
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [:where()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:where)

### @namespace

The `@namespace` CSS rule sets a default namespace or namespace prefix. Namespace prefixes allow CSS selectors to distinguish elements with the same name but different document types, such as the HTML `<a>` element and the SVG `<a>` element.

**Spec:**
- <https://drafts.csswg.org/css-namespaces-3/#declaration>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 1
- Safari on iOS: 1

**MDN:**
- [@namespace](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@namespace)

### Active view transition

The `:active-view-transition` CSS pseudo-class matches the root element when a view transition is active. The `:active-view-transition-type()` CSS pseudo-class matches only when the active view transition was started with the specified type.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-2/#the-active-view-transition-pseudo>

**Browser support:**
- Chrome: 125
- Chrome Android: 125
- Edge: 125
- Firefox: 147
- Firefox for Android: 147
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [:active-view-transition](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:active-view-transition)

### Case-insensitive attribute selector

The `i` identifier in a CSS attribute selector matches attribute values case-insensitively in document languages like XML where attribute values are case-sensitive.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#attribute-case>

**Browser support:**
- Chrome: 49
- Chrome Android: 49
- Edge: 79
- Firefox: 47
- Firefox for Android: 47
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [Attribute selectors](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/Attribute_selectors)

### Case-sensitive attribute selector

The `s` identifier in a CSS attribute selector matches attribute values case-sensitively in document languages like HTML where attribute values are case-insensitive.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#attribute-case>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: 66
- Firefox for Android: 66
- Safari: —
- Safari on iOS: —

**MDN:**
- [Attribute selectors](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/Attribute_selectors)

### Form validity pseudo-classes

The form validity CSS pseudo-classes match `<form>` elements based on the constraints of a form field, such as validity (`:valid`, `:invalid`, `:in-range`, `:out-of-range`) and necessity (`:optional` or `:required`).

**Spec:**
- <https://drafts.csswg.org/selectors-4/#ui-validity>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: 12
- Firefox: 4
- Firefox for Android: 4
- Safari: 5
- Safari on iOS: 5

**MDN:**
- [:valid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:valid)
- [:invalid](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:invalid)
- [:in-range](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:in-range)
- [:out-of-range](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:out-of-range)
- [:optional](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:optional)
- [:required](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:required)

### Heading pseudo-classes

The `:heading` and `:heading()` CSS pseudo-classes match headings of varying levels. The `:heading` pseudo-class matches any heading (`<h1>` through `<h6>`). The `:heading()` selector matches any of the given levels. For example, `:heading(1, 2)` matches headings level 1 and 2.

**Spec:**
- <https://drafts.csswg.org/selectors-5/#headings>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [:heading](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:heading)

### Host

The `:host` CSS pseudo-class selects the containing element of the shadow tree in which it is used. The `:host()` CSS pseudo-class selects the that element only if it matches the provided selector.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#host-selector>

**Browser support:**
- Chrome: 54
- Chrome Android: 54
- Edge: 79
- Firefox: 63
- Firefox for Android: 63
- Safari: 10
- Safari on iOS: 10

**MDN:**
- [:host](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:host)
- [:host()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:host_function)

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

### Link selectors

The `:link` CSS pseudo-class matches unvisited links, `:visited` matches visited links, and `:any-link` matches both.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#location>

**Browser support:**
- Chrome: 65
- Chrome Android: 65
- Edge: 79
- Firefox: 50
- Firefox for Android: 50
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [:link](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:link)
- [:visited](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:visited)
- [:any-link](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:any-link)

### Page selectors

The `:first`, `:left`, and `:right` pseudo-classes select pages based on their position in sequence after pagination.

**Spec:**
- <https://drafts.csswg.org/css-page-3/#page-selectors>

**Browser support:**
- Chrome: 18
- Chrome Android: 18
- Edge: 12
- Firefox: —
- Firefox for Android: —
- Safari: 6
- Safari on iOS: 6

**MDN:**
- [:first](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:first)
- [:left](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:left)
- [:right](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:right)

### Selectors (core)

CSS selectors match elements based on their type, attributes, and relationship to other elements. They define the specific elements to which a block of styles will be applied. This feature represents the oldest selectors of CSS.

**Spec:**
- <https://drafts.csswg.org/selectors-4/>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 3
- Safari on iOS: 1

**MDN:**
- [CSS selectors](https://developer.mozilla.org/docs/Web/CSS/Guides/Selectors)

### Shadow parts

The `part` and `exportparts` HTML attributes expose elements of a shadow DOM as named parts, which can be selected by the `::part()` CSS pseudo-element for styling.

**Spec:**
- <https://drafts.csswg.org/css-shadow-1/#exposing>

**Browser support:**
- Chrome: 73
- Chrome Android: 73
- Edge: 79
- Firefox: 72
- Firefox for Android: 79
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [HTML part global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/part)
- [HTML exportparts global attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/exportparts)
- [::part()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::part)

### text-decoration in ::selection

The `text-decoration` CSS property in a `::selection` rule sets the underline and other text decoration styles on the text a user has highlighted.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#highlight-styling>

**Browser support:**
- Chrome: 105
- Chrome Android: 105
- Edge: 105
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [::selection](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::selection)

### Time-relative pseudo-selectors

The `:past` and `:future` CSS pseudo-classes match prior or upcoming text track cues during media playback.

**Spec:**
- <https://w3c.github.io/webvtt/#the-past-and-future-pseudo-classes>

**Browser support:**
- Chrome: 23
- Chrome Android: 25
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [:future](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:future)
- [:past](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:past)

### User action pseudo-classes

The `:active`, `:focus`, and `:hover` CSS pseudo-classes match elements based on how users are interacting with them.

**Spec:**
- <https://drafts.csswg.org/selectors-4/#the-hover-pseudo>
- <https://drafts.csswg.org/selectors-4/#the-active-pseudo>
- <https://drafts.csswg.org/selectors-4/#the-focus-pseudo>

**Browser support:**
- Chrome: 1
- Chrome Android: 18
- Edge: 12
- Firefox: 1
- Firefox for Android: 4
- Safari: 2
- Safari on iOS: 1

**MDN:**
- [:active](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:active)
- [:focus](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:focus)
- [:hover](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:hover)
