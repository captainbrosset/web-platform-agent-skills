# View transitions

Features for managing transitions of properties, elements, and documents

## View transitions features

### Active view transition

The `:active-view-transition` CSS pseudo-class matches the root element when a view transition is active. The `:active-view-transition-type()` CSS pseudo-class matches only when the active view transition was started with the specified type.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-2/#the-active-view-transition-pseudo>

**Baseline Newly Available since 2026-01-13**

**MDN:**
- [:active-view-transition](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:active-view-transition)

### Cross-document view transitions

The `@view-transition` CSS rule sets whether a document opts-in to transitions between documents in a multi-page application. Both the old and new document must opt-in for a transition to be triggered.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-2/#cross-doc-opt-in>

**Limited Availability — Browser support:**
- Chrome: 126
- Chrome Android: 126
- Edge: 126
- Firefox: —
- Firefox for Android: —
- Safari: 18.2
- Safari on iOS: 18.2

**MDN:**
- [@view-transition](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@view-transition)

### View transitions

View transitions allow you to create animated visual transitions between different states of a document.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-1/>

**Baseline Newly Available since 2025-10-14**

**MDN:**
- [View Transition API](https://developer.mozilla.org/docs/Web/API/View_Transition_API)

### view-transition-class

The `view-transition-class` CSS property sets a name that can be used to apply styles to multiple named view transition pseudo-elements.

**Spec:**
- <https://drafts.csswg.org/css-view-transitions-2/#propdef-view-transition-class>

**Baseline Newly Available since 2025-10-14**

**MDN:**
- [view-transition-class](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class)
