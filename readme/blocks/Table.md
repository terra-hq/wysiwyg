# Table

Here are the styling options for a table.

## Editable options

### header-font-styles

This property sets the font styles for the table header.

The header-font-styles property accepts the text-related styling options listed [here](../properties/Font.md).

### header-cells-padding

This property sets the padding for the table header.

The value must be a numerical value expressed in any unit.

### header-border

This property sets the border for the table header.

The border property accepts the border styling options listed [here](../properties/Border.md).

### header-background

This property sets the background for the table header.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map-get($color-options, a))
- Gradient (linear-gradient(90deg, map-get($color-options, i) 0%, map-get($color-options, h) 100%))

### body-font-styles

This property sets the font styles for the table body.

The body-font-styles property accepts the text-related styling options listed [here](../properties/Font.md).

### body-cells-padding

This property sets the padding for the table body.

The value must be a numerical value expressed in any unit.

### body-border

This property sets the border for the table body.

The border property accepts the border styling options listed [here](../properties/Border.md).

### body-background

This property sets the background for the table body.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map-get($color-options, a))
- Gradient (linear-gradient(90deg, map-get($color-options, i) 0%, map-get($color-options, h) 100%))

### odd-rows-background

This property sets the background of the odd rows in the table body.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map-get($color-options, a))
- Gradient (linear-gradient(90deg, map-get($color-options, i) 0%, map-get($color-options, h) 100%))

### odd-rows-text-color

This property sets the color of the odd rows in the table body.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map-get($color-options, a))

### caption

This property sets the font styles for the table caption.

The caption property accepts the text-related styling options listed [here](../properties/Font.md).

### margin-bottom

This property sets the margin-bottom of the table.

The value must be a numerical value expressed in any unit.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $table-options: (
                "header-font-styles": (
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
                    "margin-bottom": 32px,
                    "margin-bottom-before-lists": 24px,
                    "padding-top": 8px,
                    "text-align": center,
                    "bold-font-weight": 800,
                ),
                "body-font-styles": (
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
                    "margin-bottom": 32px,
                    "margin-bottom-before-lists": 24px,
                    "padding-top": 8px,
                    "text-align": center,
                    "bold-font-weight": 800,
                ),
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
                    "margin-bottom": 32px,
                    "margin-bottom-before-lists": 24px,
                    "padding-top": 8px,
                    "text-align": center,
                    "bold-font-weight": 800,
                ),
                "margin-bottom": $measure*4,
                "header-cells-padding": $measure*2,
                "body-cells-padding": $measure $measure * 2,
                "header-border": (
                    "border-radius": 1px,
                    "border-width": 1px,
                    "border-style": solid,
                    "border-color": map-get($color-options, a)
                ),
                "header-background": map-get($color-options, a),
                "body-border": (
                    "border-radius": 1px,
                    "border-width": 1px,
                    "border-style": solid,
                    "border-color": map-get($color-options, a)
                ),
                "body-background": map-get($color-options, a),
                "odd-rows-background": map-get($color-options, c),
                "odd-rows-text-color": map-get($color-options, d),
            )
        );
    }
```