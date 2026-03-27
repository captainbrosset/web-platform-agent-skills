# Images

Features relating to how images are displayed.

## See also

This group of web platform features also includes the following sub-categories, which might be relevant to your query:

- [Image scaling](image-scaling.md)

## Images features

### `<img sizes="auto" loading="lazy">`

The `sizes="auto"` attribute for the `<img>` HTML element sets the layout size for the image based on the computed layout size when choosing a source from the `srcset`. This attribute only applies to images with the `loading="lazy"` attribute.

**Spec:**
- <https://html.spec.whatwg.org/multipage/images.html#valdef-sizes-auto>

**Browser support:**
- Chrome: 126
- Chrome Android: 126
- Edge: 126
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [HTMLImageElement: sizes property](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/sizes)

### cross-fade()

The `cross-fade()` CSS function generates an image by mixing two images.

**Spec:**
- <https://drafts.csswg.org/css-images-4/#cross-fade-function>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 10
- Safari on iOS: 9.3

**MDN:**
- [cross-fade()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/cross-fade)

### image-orientation

The `image-orientation` CSS property corrects the rotation of an image using the image's metadata, such as EXIF.

**Spec:**
- <https://drafts.csswg.org/css-images-3/#the-image-orientation>

**Browser support:**
- Chrome: 81
- Chrome Android: 81
- Edge: 81
- Firefox: 26
- Firefox for Android: 26
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [image-orientation](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation)

### image()

The `image()` CSS function creates an image similar to `url()` but with additional functionality. It can create a solid color as an image, provide a fallback from an image URL to a solid color, or clip a sprite image using media fragments. Not to be confused with the `Image()` constructor.

**Spec:**
- <https://drafts.csswg.org/css-images-4/#image-notation>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [image()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/image/image)
