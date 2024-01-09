# Columns

Here are the styling options for columns.

## Editable options

### breakpoint

This value indicates the breakpoint at which the columns transitions to a single column.

The value for this property must be a numerical value in pixels (px).

### margin-bottom

This property sets the margin-bottom of the button.

The value must be a numerical value expressed in any unit.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $columns-options: (
                "breakpoint": $tablets,
                "margin-bottom": $measure*4,
            )
        );
    }
```