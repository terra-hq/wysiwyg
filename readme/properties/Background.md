# Background Options

These properties are used to style the background of the blocks: a background color, a background image (with its size/position/repeat) and an optional `overlay` layer painted on top of the image to keep the content readable.

## Editable Variables

### background-color

Sets the background color of the block.

Possible values include:

- Transparent (transparent)
- Color name (red)
- Hexadecimal color (#ffffff)
- RGB color (rgb(255, 255, 255))
- RGBA color (rgba(255, 255, 255, .5))
- A variable referencing any of the above options ($color-a)
- A color within a variable map (map.get($color-options, a))

### background-image

Sets the background image of the block.

The value accepts any valid CSS `background-image` value, for example:

- A url (url("/images/bg.jpg"))
- A gradient (linear-gradient(...))
- A variable referencing any of the above options ($bg)

### background-size

Sets the background-size of the block (cover, contain, auto, 100% 100%, etc.).

### background-position

Sets the background-position of the block (center, top left, 50% 50%, etc.).

### background-repeat

Sets the background-repeat of the block (no-repeat, repeat, repeat-x, etc.).

### overlay

Adds a color/gradient layer on top of the background image to keep the content readable.

It is rendered as a `::before` pseudo-element covering the block, behind its content (the block's direct children are automatically raised above it). The layer inherits the block's `border-radius`.

The value accepts any valid CSS `background` value, for example:

- A semi-transparent color (rgba(0, 0, 0, 0.55))
- A gradient (linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)))
- A variable referencing any of the above options ($overlay)

When you use an `overlay`, remember to set a light text `color` on the block's content so it contrasts against the layer.

## SCSS

```scss
.c--content-X {
  @include make-content-modifier(
    $quote-options: (
      "background": (
        "background-color": #1a1a1a,
        "background-image": url("/images/bg.jpg"),
        "background-size": cover,
        "background-position": center,
        "background-repeat": no-repeat,
        "overlay": linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      ),
    )
  );
}
```
