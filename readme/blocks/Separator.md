# Separator

Here are the styling options for a separator.

## Styles

The WordPress separator block has three styles, all handled automatically:

- **Default** (`wp-block-separator`) and **Wide** (`is-style-wide`) render as a line and share the same styling (the options below apply to both).
- **Dots** (`is-style-dots`) renders as three centered dots (•••) instead of a line. By default it uses the `color` option for the dots, and it ignores the line-only properties (`height`, `width`). Its appearance can be fine-tuned with the dots-only options below.

### dots-color

Color of the dots in `is-style-dots`. Overrides `color` for the dots only.

Possible values: same as `color`.

### dots-size

Size of the dots in `is-style-dots`.

The value must be a numerical value expressed in any unit.

### dots-spacing

Spacing between the dots in `is-style-dots`.

The value must be a numerical value expressed in any unit (e.g. `1.5em`).

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
