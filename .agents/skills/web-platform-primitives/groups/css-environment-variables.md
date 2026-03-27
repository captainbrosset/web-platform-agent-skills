# CSS environment variables

CSS environment variables expose system-specific values using the `env()` function.

## CSS environment variables features

### Safe area inset environment variables

The `safe-area-inset-` CSS environment variables represent a rectangle that cannot cut off content within a non-rectangular screen. For example, `top:\ env(safe-area-inset-top);` positions the top of an element below the notch on an iPhone.

**Spec:**
- <https://drafts.csswg.org/css-env-1/#safe-area-insets>

**Browser support:**
- Chrome: 69
- Chrome Android: 69
- Edge: 79
- Firefox: 65
- Firefox for Android: 65
- Safari: 11.1
- Safari on iOS: 11.3

**MDN:**
- [env()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/env)
