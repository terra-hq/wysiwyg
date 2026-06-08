# Button

Here are the styling options for a button (the `wp-block-button` block). Just for WP.

## Editable options

### className

This property applies styles from an existing class in the project to **every** button (the `.wp-block-button__link`). That class may include button styles.

The value must be a class (or a space-separated list of classes) that exists and is imported in the stylesheet.

### even-className

This property applies a class to the **even** buttons only (`:nth-child(even)`), on top of `className`. It's useful to alternate styles: the odd buttons keep just `className`, and the even ones get `className` + `even-className`.

The value must be a class (or a space-separated list of classes) that exists and is imported in the stylesheet.

### margin-bottom

This property sets the margin-bottom of the buttons block.

The value must be a numerical value expressed in any unit.

### column-gap

This property sets the horizontal gap between buttons. Using it (or `row-gap`) turns the buttons container into a flex layout (`display: flex; flex-wrap: wrap`).

The value must be a numerical value expressed in any unit.

### row-gap

This property sets the vertical gap between buttons when they wrap onto multiple rows. Using it (or `column-gap`) turns the buttons container into a flex layout.

The value must be a numerical value expressed in any unit.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $btn-options: (
      "className": g--btn-01,
      "even-className": g--btn-01--second,
      "margin-bottom": $measure * 4,
      "column-gap": $measure * 2,
      "row-gap": $measure,
    )
  );
}
```
