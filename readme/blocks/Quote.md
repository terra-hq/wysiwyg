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

### background-color

This property sets the background color of the quote.

The possible values include:

- Transparent (transparent)
- A color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### background-image

This property sets the background image of the quote.

The value accepts any valid CSS `background-image` value, for example:

- A url (url("/images/quote-bg.jpg"))
- A gradient (linear-gradient(...))
- A variable referencing any of the above options ($quote-bg)

You can pair it with the following properties to control how the image is rendered:

### background-size

This property sets the background-size of the quote (cover, contain, auto, 100% 100%, etc.).

### background-position

This property sets the background-position of the quote (center, top left, 50% 50%, etc.).

### background-repeat

This property sets the background-repeat of the quote (no-repeat, repeat, repeat-x, etc.).

### overlay

This property adds a color/gradient layer on top of the background image to keep the text readable.

It is rendered as a `::before` pseudo-element covering the quote, behind its content (the paragraph and cite are automatically raised above it). The layer inherits the quote's `border-radius`.

The value accepts any valid CSS `background` value, for example:

- A semi-transparent color (rgba(0, 0, 0, 0.55))
- A gradient (linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)))
- A variable referencing any of the above options ($quote-overlay)

Remember to pair it with a light text `color` in the `paragraph` / `cite` options so the text contrasts against the overlay.

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
                "background-image": url("/images/quote-bg.jpg"),
                "background-size": cover,
                "background-position": center,
                "background-repeat": no-repeat,
                "overlay": linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
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