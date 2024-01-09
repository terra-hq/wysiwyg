# Button

Here are the styling options for a button.

## Editable options

### className

This property is used to apply styles from another existing class in the project. That class may include button styles.

The value must be a class that exists and is imported in the stylesheet.

### margin-bottom

This property sets the margin-bottom of the button.

The value must be a numerical value expressed in any unit.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $btn-options: (
                "className": g--btn-01,
                "margin-bottom": $measure*4,
            )
        );
    }
```