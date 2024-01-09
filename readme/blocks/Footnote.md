# Footnote

Here are the styling options for footnote.

## Editable options

The footnote block has only the text-related styling options listed [here](../properties/Font.md).

## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $footnote-options: (
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
            )
        );
    }
```