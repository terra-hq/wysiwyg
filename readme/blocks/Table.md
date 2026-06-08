# Table

Here are the styling options for a table (the `wp-block-table` block). Just for WP.

The markup is a `<figure class="wp-block-table">` wrapping a `<table>` (with an optional `<figcaption>`). Header cells are `<th>` inside `<thead>`; body cells are `<td>` inside `<tbody>`.

## Always-on behaviour

These rules are applied automatically so you never get doubled borders on the edges:

- The **last cell of each body row** never gets a right border.
- The **cells of the last body row** never get a bottom border.
- The **last header cell** never gets a right border.

Also:

- `margin-bottom` is applied to the **block wrapper** (`.wp-block-table` `<figure>`), never to the `<table>` element.
- Cell borders are **right** and **bottom** only (there are no left/top border options, by design, to avoid double lines between cells). The outer frame is the `table-border`.

## Editable options

### header-font-styles

Font styles for the header cells (`<th>`). Accepts **all** the text-related options listed [here](../properties/Font.md) (`color`, `font-family`, `font-size`, `bold-color`, `bold-font-weight`, `className`, etc.).

### body-font-styles

Font styles for the body cells (`<td>`). Accepts all the options listed [here](../properties/Font.md).

### caption

Font styles for the table caption (`<figcaption>`). Accepts all the options listed [here](../properties/Font.md).

### header-cells-padding

Padding of the header cells. The value must be a numerical value expressed in any unit.

### body-cells-padding

Padding of the body cells. The value must be a numerical value expressed in any unit.

### header-background

Background of the header row.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))
- Gradient (linear-gradient(90deg, map.get($color-options, i) 0%, map.get($color-options, h) 100%))

### body-background

Background of the body rows. Same possible values as `header-background`.

### odd-rows-background

Background of the **odd** rows of the body (`tbody tr:nth-child(odd)`). Same possible values as `header-background`.

### odd-rows-text-color

Text color of the **odd** rows of the body. Same color values as `header-background` (no gradient).

### table-border

Border of the `<table>` element (the outer frame). Use a CSS `border` shorthand.

Example value: `2px solid map.get($color-options, a)`.

### table-border-radius

Border-radius of the `<table>`. To make the radius visible, it switches the table to `border-collapse: separate` and clips the corners with `overflow: hidden`.

The value must be a numerical value expressed in any unit.

### header-border-right

Right border of the header cells, **except the last one** (`thead tr th:not(:last-child)`). Use a CSS `border` shorthand, e.g. `1px solid map.get($color-options, a)`.

### header-border-bottom

Bottom border of **all** the header cells (`thead tr th`). Use a CSS `border` shorthand.

### body-border-right

Right border of the body cells, **except the last cell of each row** (`tbody tr td:not(:last-child)`). Use a CSS `border` shorthand.

### body-border-bottom

Bottom border of the body cells, **except the cells of the last row** (`tbody tr:not(:last-child) td`). Use a CSS `border` shorthand.

### scroll-breakpoint

Enables horizontal scroll on the table below the given max-width. Under that viewport width the block wrapper (`.wp-block-table`) gets `overflow-x: auto` and the `<table>` keeps a `min-width` (the same value) so it overflows and scrolls. Above it, the table behaves normally.

The value must be a numerical value in pixels (px).

### margin-bottom

Margin-bottom of the table block (applied to the `.wp-block-table` wrapper, not the `<table>`).

The value must be a numerical value expressed in any unit.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $table-options: (
      // Font of the header / body / caption — accepts every Font.md option
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
        "padding-top": 8px,
        "text-align": center,
        "bold-font-weight": 800,
        "bold-color": red,
      ),
      "body-font-styles": (
        "className": f--font-a,
        "bold-font-weight": 800,
        "bold-color": red,
      ),
      "caption": (
        "className": f--font-f,
        "text-align": right,
      ),
      // Padding
      "header-cells-padding": $measure * 2,
      "body-cells-padding": $measure $measure * 2,
      // Backgrounds
      "header-background": map.get($color-options, a),
      "body-background": rgba(map.get($color-options, e), 0.3),
      "odd-rows-background": rgba(map.get($color-options, e), 0.5),
      "odd-rows-text-color": map.get($color-options, d),
      // Table frame
      "table-border": 2px solid map.get($color-options, a),
      "table-border-radius": $measure * 2,
      // Cell borders (right + bottom; edges excluded automatically)
      "header-border-right": 1px solid map.get($color-options, a),
      "header-border-bottom": 2px solid map.get($color-options, a),
      "body-border-right": 1px solid map.get($color-options, e),
      "body-border-bottom": 1px solid map.get($color-options, e),
      // Horizontal scroll on small screens
      "scroll-breakpoint": 700px,
      // Spacing of the whole block
      "margin-bottom": $measure * 4,
    )
  );
}
```
