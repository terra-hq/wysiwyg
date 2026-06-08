# Link

Here are the styling options for a link.

The link styles are applied to text links only. Anchors that **wrap an image** (e.g. a linked image) and the **button block link** (`.wp-block-button__link`) are excluded, so they don't inherit the link styles (color, underline, hover, etc.).

## Editable options

### className

This property is used to apply styles from another existing class in the project. That class may include button styles.

The value must be a class that exists and is imported in the stylesheet.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $link-options: (
                "className": g--link-01 g--link-01--second,
            )
        );
    }
```