# Media Options

These are the shared options used by the media blocks: [Image](../blocks/Image.md) and [Video](../blocks/Video.md). They style the media element (`<img>`, `<iframe>`, `<video>`), its caption and its spacing.

## Editable options

### border-color / border-radius / border-style / border-width

Border of the media element. They accept the [Border](./Border.md) values (color, radius, style, width).

### object-fit

How the media fills its box. Values can include those accepted by the CSS `object-fit` property.

### object-position

Position of the media inside its box. Values can include those accepted by the CSS `object-position` property.

### max-height / min-height / max-width / min-width

Size constraints of the media element. The value must be a numerical value expressed in any unit.

### caption

Font styles for the media caption (`<figcaption>`). Accepts all the text-related options listed in [Font](./Font.md).

### margin-bottom

Margin-bottom of the media block. The value must be a numerical value expressed in any unit.

### zoom-button-background-color / zoom-button-bottom / zoom-button-right / zoom-button-border-radius

**Image only (Gutenberg).** Style the lightbox/zoom trigger button shown over an image. They have no effect on videos (a video has no zoom button). See [Image](../blocks/Image.md) for details.
