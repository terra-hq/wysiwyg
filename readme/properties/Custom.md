# Custom Options
This option is used when the content does not offer the specific functionality you are looking for. It serves as a way to add custom CSS code or set the same styles as another class existing in the project to the content or any of its elements.

## Full-Content Styles
If you wish to apply styles to the content, specify 'parent' as the target element and add the desired CSS property along with its value. To apply the same styles as an existing class in the project, use 'class' as the property.

Here's an example of styling the content:

```scss
    .c--content-X {
        @include make-content-modifier(
            $custom-options: (
                "parent": (
                    "class": f--background-b,
                    "width": 80%,
                ),
            )
        );
    }
```

## Block Styles
If you wish to apply styles to a block inside the content, specify its class as the target element and add the desired CSS property along with its value. To apply the same styles as an existing class in the project, use 'class' as the property.

Here's an example of styling a block inside the content:

```scss
    .c--content-X {
        @include make-content-modifier(
            $custom-options: (
                "figure.wp-block-image": (
                    "class": f--background-a,
                    "max-width": 300px,
                ),
            )
        );
    }
```

## SCSS
```scss
    .c--content-X {
        @include make-content-modifier(
            $custom-options: (
                "parent": (
                    "border": 4px solid #000000,
                ),
                "figure.wp-block-image": (
                    "class": f--color-b,
                ),
            )
        );
    }
```