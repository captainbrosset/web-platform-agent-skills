# Text fragments

This group was originally a feature, which has 3 parts:  1. Scrolling to a text fragment such as #:~:text=snippet.  2. Feature detection for this, document.fragmentDirective. This cannot be     relied upon due to https://webkit.org/b/273466. See also     https://github.com/WICG/scroll-to-text-fragment/issues/257.  3. The ::target-text pseudo-element for styling the highlight. TODO: Create a composite feature for text fragments as a whole. The original feature in https://github.com/web-platform-dx/web-features/pull/732 has a solid description to copy for that.

## Text fragments features

### ::target-text

The `::target-text` pseudo-element allows you to style text highlighted by a URL text fragment such as `#:~:text=snippet`.

**Spec:**
- <https://drafts.csswg.org/css-pseudo-4/#selectordef-target-text>

**Baseline Newly Available since 2024-12-11**

**MDN:**
- [::target-text](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/::target-text)

### Scroll to text fragment

Text fragments are URL fragments on the form `#:~:text=snippet` and link to a snippet of text within a page. The browser may scroll, highlight, or otherwise bring that text to the reader's attention.

**Spec:**
- <https://wicg.github.io/scroll-to-text-fragment/>

**Baseline Newly Available since 2024-10-01**

**MDN:**
- [Text fragments](https://developer.mozilla.org/docs/Web/URI/Reference/Fragment/Text_fragments)
