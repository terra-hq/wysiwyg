# Quote

Here are the styling options for a quote.

## Editable options

### padding

This property sets the padding of the quote.

The value must be a numerical value expressed in any unit.

### margin-top

This property sets the margin-top of the quote.

The value must be a numerical value expressed in any unit.

### margin-bottom

This property sets the margin-bottom of the quote.

The value must be a numerical value expressed in any unit.

### border

The border property accepts the border styling options listed [here](../properties/Border.md).

### paragraph

The paragraph property accepts the text-related styling options listed [here](../properties/Font.md).

### cite

The cite property accepts the text-related styling options listed [here](../properties/Font.md).


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $quote-options: (
                "padding": $measure*5 0,
                "margin-top": $measure,
                "margin-bottom": $measure*5,
                "border": (
                    "border-color": red,
                    "border-radius": 0,
                    "border-style": solid,
                    "border-width": 2px 0,
                ),
                "paragraph": (
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
                ),
                "cite": (
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
                ),
            )
        );
    }
```