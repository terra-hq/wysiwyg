# Separator

Here are the styling options for a separator.

## Editable options

### margin

This property sets the margin of the separator.

The value must be a numerical value expressed in any unit.

### width

This property sets the width of the separator.

The value must be a numerical value expressed in any unit.

### height

This property sets the height of the separator.

The value must be a numerical value expressed in any unit.

### color

This property set the color of the separator.

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
    $separator-options: (
      "margin": $measure * 5 auto,
      "width": 60%,
      "color": orange,
      "height": 2px,
    )
  );
}
```
