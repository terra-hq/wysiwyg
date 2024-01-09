# Border Options
These properties are used to style the border of the blocks. If you want different styles for each border, you can achieve that by adding multiple values separated by spaces.

## Editable Variables

### border-color
This property is used to set the border color.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map-get($color-options, a))

### border-radius
Sets the border-radius for the component.

The value must be a numerical value expressed in any unit.

### border-style
Sets the style of the border for the component.

Values can include those accepted by the CSS 'border-style' property, such as 'solid,' 'dotted,' 'double,' and so on.

### border-width
Sets the border-width for the component.

The value must be a numerical value expressed in any unit.

## SCSS
```scss
    .c--content-X {
        @include make-content-modifier(
            $border-options: (
                "border-color": #f3f3f3,
                "border-radius": $g-measure*4,
                "border-width": 2px,
                "border-style": solid,
            ),
        );
    }
```