# Font Options

These properties are used to style the text across all blocks.

## Editable Variables

### color

This property set the text color.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### font-family

This property set the text font family.

The value can be a font-family or a list of them, for example: "font-family": "'Instrument Sans', Arial, sans-serif".

### font-size

This property set the size of the font.

The value must be a numerical value expressed in any unit.

### font-style

This property set the style of the font, if it's in italic, etc.

Values can include those accepted by the CSS 'font-style' property.

### font-weight

This property set the weight of the font.

Values can include those accepted by the CSS 'font-weight' property.

### letter-spacing

This property set the spacinc between each letters.

The value must be a numerical value expressed in any unit or those accepted by the CSS 'letter-spacing' property.

### line-height

This property set the height of the line.

The value must be a numerical value expressed in any unit or without unit.

### max-lines

This property set a maximum number of lines for the text. When we use it and the text exceed these lines, there'll be added "..." and the rest of text will not be shown.

The value must be a numerical value without unit.

### text-decoration

This property set if we want any decoration in the text.

Values can include those accepted by the CSS 'text-decoration' property.

### text-decoration-color

This property set the color of the text decoration. It'll only be notticeable if we set any text-decoration value.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### text-underline-position

This property set the position of the line if we set "text-decoration: undelrine".

Values can include those accepted by the CSS 'text-underline-position' property.

### className

This property is used to apply styles from another existing class in the project. That class may include the font-family, font-size, line-height, button styles, and more.

The value must be a class that exists and is imported in the stylesheet.

### margin-bottom

This property sets the margin-bottom of the styled text.

The value must be a numerical value expressed in any unit.

### margin-bottom-before-lists

This property sets the margin-bottom of the styled text if the next block is a list. It's normally used for paragraphs.

The value must be a numerical value expressed in any unit.

### padding-top

This property sets the padding-top of the styled text.

The value must be a numerical value expressed in any unit.

### text-align

Used to vertically align text.

The value for this property must be 'left,' 'center,' or 'right'.

### bold-font-weight

This property sets the weight of the font when we set it to bold in the backend.

Values can include those accepted by the CSS 'font-weight' property.

### bold-color

This property sets the color of the text when we set it to bold in the backend (the `<strong>` / `<b>` tags), independently of the regular text color.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $font-options: (
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
      "bold-color": red,
    )
  );
}
```
