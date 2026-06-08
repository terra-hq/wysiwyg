# Video

Here are the styling options for a video (the `wp-block-video` and `wp-block-embed` blocks). Just for WP.

The styling options below apply to the `<iframe>` / `<video>` element, except `caption` (the `<figcaption>`) and `margin-bottom` (the block wrapper). These are the same shared media options as the [Image](./Image.md) block, **minus the `zoom-button-*` options**, which only apply to images (a video has no lightbox button).

## Editable options

### border-color

Border color of the video.

Possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### border-radius

Border-radius of the video. The value must be a numerical value expressed in any unit.

### border-style

Border style of the video. Values can include those accepted by the CSS `border-style` property.

### border-width

Border width of the video. The value must be a numerical value expressed in any unit.

### object-fit

How the video fills its box. Values can include those accepted by the CSS `object-fit` property.

### object-position

Position of the video inside its box. Values can include those accepted by the CSS `object-position` property.

### max-height

Maximum height of the video. The value must be a numerical value expressed in any unit.

### min-height

Minimum height of the video. The value must be a numerical value expressed in any unit.

### max-width

Maximum width of the video. The value must be a numerical value expressed in any unit.

### min-width

Minimum width of the video. The value must be a numerical value expressed in any unit.

### caption

Font styles for the video caption (`<figcaption>`). Accepts all the text-related options listed [here](../properties/Font.md).

### margin-bottom

This property sets the margin-bottom of the video block.

The value must be a numerical value expressed in any unit.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $video-options: (
      "border-color": red,
      "border-radius": 20px,
      "border-style": solid,
      "border-width": 2px,
      "object-fit": cover,
      "object-position": center,
      "max-height": 700px,
      "min-height": 0,
      "max-width": 100%,
      "min-width": 30px,
      "caption": (
        "className": f--font-f,
        "text-align": right,
      ),
      "margin-bottom": $measure * 5,
    )
  );
}
```
