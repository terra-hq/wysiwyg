# Utilities

Here are the styling options for utilities.

## Editable options

### media-text-aligned-margin-x

This property sets the margin on X (left or right) of the media that is aligned with text.

The value must be a numerical value expressed in any unit.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $utilities-options: (
                "media-text-aligned-margin-x": 24px
            )
        );
    }
```