# Image

Here are the styling options for an image.

## Editable options

### border-color

This property is used to set the border color.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### border-radius

Sets the border-radius for the component.

The value must be a numerical value expressed in any unit.

### border-style

Sets the style of the border for the component.

Values can include those accepted by the CSS 'border-style' property, such as 'solid,' 'dotted,' 'double,' and so on.

### border-width

Sets the border-width for the component.

The value must be a numerical value expressed in any unit.

### object-fit

This property is used to specify how a media element should fit within its container. It becomes particularly useful when the container's size doesn't match the native dimensions of the contained element.

Values can include those accepted by the CSS 'object-fit' property.

### object-position

This property is used in conjunction with object-fit and determines the reference point or position of the content within its container when adjusting using object-fit.

Its value can be any of the positions accepted by the CSS 'object-position' property, such as 'left center,' 'bottom,' and so on.

### max-height

Sets a maximum height for the media item.

The value must be a numerical value expressed in any unit.

### min-height

Sets a minimum height for the media item.

The value must be a numerical value expressed in any unit.

### max-width

Sets a maximum width for the media item.

The value must be a numerical value expressed in any unit.

### min-width

Sets a minimum width for the media item.

The value must be a numerical value expressed in any unit.

### margin-bottom

This property sets the margin-bottom of the image.

The value must be a numerical value expressed in any unit.

### caption

The caption property accepts the text-related styling options listed [here](../properties/Font.md).

#### zoom-button-background-color (just for gutenberg)

This property sets the background color of the zoom image button.
#### zoom-button-bottom (just for gutenberg)

This property sets the bottom position of the zoom image button.

#### zoom-button-right (just for gutenberg)

This property sets the right position of the zoom image button.

#### zoom-button-border-radius (just for gutenberg)
 
This property sets the border-radius of the zoom image button.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $image-options: (
      "border-color": red,
      "border-radius": 20px,
      "border-style": solid,
      "border-width": 2px,
      "object-fit": cover,
      "max-height": 700px,
      "min-height": 0,
      "object-position": center,
      "max-width": 100%,
      "min-width": 30px,
      "margin-bottom": $measure * 7,
      "zoom-button-background-color": red,
      "zoom-button-bottom": 0px,
      "zoom-button-right": 0px,
      "zoom-button-border-radius": 0 0 8px 0,
      "caption": (
        "color": #638c1d,
        "font-family": arial,
        "font-size": 2rem,
        "font-style": italic,
        "font-weight": 400,
        "letter-spacing": 1px,
        "line-height": 1.5,
        "max-lines": 3,
        "text-decoration": underline,
        "text-decoration-color": #000000,
        "text-underline-position": under,
        "className": f--font-a,
        "margin-bottom": $measure * 5,
        "margin-bottom-before-lists": 24px,
        "padding-top": $measure * 2,
        "text-align": right,
        "bold-font-weight": 800,
      ),
    )
  );
}
```
