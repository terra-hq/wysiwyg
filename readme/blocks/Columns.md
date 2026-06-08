# Columns

Here are the styling options for columns (the `wp-block-columns` block). Just for WP.

By default the columns are **equal width** (each column shares the available space evenly). A column that carries its own width (WordPress adds an inline `flex-basis`) keeps that width.

## Editable options

### breakpoint

This value indicates the breakpoint at which the columns transition to a single column (they stack).

The value for this property must be a numerical value in pixels (px).

### column-gap

This property sets the horizontal gap between columns.

The value must be a numerical value expressed in any unit.

### row-gap

This property sets the vertical gap between columns when they wrap or stack.

The value must be a numerical value expressed in any unit.

### margin-bottom

This property sets the margin-bottom of the columns block.

The value must be a numerical value expressed in any unit.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $columns-options: (
      "breakpoint": $tablets,
      "column-gap": $measure * 4,
      "row-gap": $measure * 4,
      "margin-bottom": $measure * 4,
    )
  );
}
```
