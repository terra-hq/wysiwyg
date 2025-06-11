# WYSIWYG By Terra

This package offers a seamless solution to effortlessly style the WYSIWYG and Gutenberg editor fields in WordPress and Sanity. With user-friendly customization options, it provides a hassle-free way to enhance the visual aesthetics of these content editors, ensuring a polished and cohesive design for your web content.

## Installation

1. Download the TGZ File
2. Add the File to the Root of Your Project
3. Install the File using npm

```sh
  npm install terrahq-wysiwyg-0.0.13.tgz
```

## Import Mixins Globally

Import the mixing into the c--content file:

### For Wordpress

```scss
@use "@terrahq/wysiwyg/wordpress" as *;
```

### For Sanity

```scss
@use "@terrahq/wysiwyg/sanity" as *;
```

## How to Use

The c--content consists of two mixins. One is responsible for styling properties to ensure components look visually appealing, while the other provides options to customize blocks for each project. In both mixins, it is crucial to specify the platform for which they are intended to be used (wp or sanity).

Each block has its own set of options for customization. If you want to learn more about any specific block, click on it. The blocks that are styled include:

- [Headings](./readme/blocks/Headings.md)
- [Image](./readme/blocks/Image.md)
- [Links](./readme/blocks/Links.md)
- [Lists](./readme/blocks/Lists.md)
- [Paragraphs](./readme/blocks/Paragraphs.md)
- [Quote](./readme/blocks/Quote.md) (for Sanity, it doesn't have a cite option.)
- [Footnote](./readme/blocks/Footnote.md), this is a custom block (just for WP)
- [Highlighted](./readme/blocks/Highlighted.md), this is a custom block (just for WP)
- [Button](./readme/blocks/Button.md) (just for WP)
- [Columns](./readme/blocks/Columns.md) (just for WP)
- [Separator](./readme/blocks/Separator.md) (just for WP)
- [Table](./readme/blocks/Table.md) (just for WP)
- [Video](./readme/blocks/Video.md) (just for WP)
- [Utilities](./readme/blocks/Utilities.md) (just for WP)
- [Custom](./readme/properties/Custom.md)

### Block Compatibility Table

This table shows which blocks are compatible with Gutenberg (WordPress), classic WYSIWYG content (like ACF fields or raw HTML editors), and Sanity:

| Block         | Gutenberg (WP)      | Classic WYSIWYG WP      | Sanity               |
|---------------|---------------------|-----------------------|-----------------------|
| Headings      | ✅                  | ✅                    | ✅                    |
| Paragraphs    | ✅                  | ✅                    | ✅                    |
| Lists         | ✅                  | ✅                    | ✅                    |
| Links         | ✅                  | ✅                    | ✅                    |
| Images        | ✅ (with zoom)      | ✅ (no zoom, no cite) | ✅ (no zoom, no cite) |
| Quote         | ✅ (with cite)      | ✅ (no cite)          | ✅ (no cite)          |
| Footnote      | ✅                  | ❌                    | ❌                    |
| Highlighted   | ✅                  | ❌                    | ❌                    |
| Button        | ✅                  | ❌                    | ❌                    |
| Columns       | ✅                  | ❌                    | ❌                    |
| Separator     | ✅                  | ❌                    | ❌                    |
| Table         | ✅                  | ✅                    | ❌                    |
| Video         | ✅                  | ✅                    | ❌                    |
| Utilities     | ✅                  | ❌                    | ❌                    |
| Custom        | ✅                  | ✅                    | ✅                    |





### WP

#### HTML code

```html
<div class="c--content-a"></div>
```

#### SCSS code

```scss
.c--content-a {
  @include make-content();
  @include make-content-modifier(
    $headings-options: (
      // "h1": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*3,
      //   "padding-top": $measure*5,
      //   "text-align": center,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      "h2":
        (
          //   "className": f--font-a,
          //   "color": #638c1d,
          //   "font-family": arial,
          //   "font-size": 2rem,
          //   "font-style": italic,
          //   "font-weight": 400,
          //   "letter-spacing": 1px,
          //   "line-height": 1.5,
          //   "max-lines": 3,
          //   "text-decoration": underline,
          //   "text-decoration-color": #000000,
          //   "text-underline-position": under,
          "margin-bottom": $measure * 3,
          "padding-top": $measure * 5,
          //   "text-align": center,
          //   "margin-bottom-before-lists": 24px,
          //   "bold-font-weight": 800,
        ),
      "h3": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 3,
        "padding-top": $measure * 5,
        //   "text-align": center,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h4": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 2,
        "padding-top": $measure * 5,
        //   "text-align": center,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h5": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 2,
        "padding-top": $measure * 5,
        //   "text-align": center,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h6": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure,
        "padding-top": $measure * 5,
        //   "text-align": center,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
    ),
    $image-options: (
      // "border-color": red,
      // "border-radius": 20px,
      // "border-style": solid,
      // "border-width": 2px,
      // "object-fit": cover,
      // "max-height": 700px,
      // "min-height": 0,
      // "object-position": center,
      // "max-width": 100%,
      // "min-width": 30px,
      "margin-bottom": $measure * 5,
      "caption": (
        // "className": f--font-a,
        // "color": #638c1d,
        // "font-family": arial,
        // "font-size": 2rem,
        // "font-style": italic,
        // "font-weight": 400,
        // "letter-spacing": 1px,
        // "line-height": 1.5,
        // "max-lines": 3,
        // "text-decoration": underline,
        // "text-decoration-color": #000000,
        // "text-underline-position": under,
        // "margin-bottom": $measure*2,
        "padding-top": $measure * 2,
        "text-align": right,
        // "margin-bottom-before-lists": 24px,
        // "bold-font-weight": 800,
        // "zoom-button-background-color": red,
        // "zoom-button-bottom": 0px,
        // "zoom-button-right": 0px,
        // "zoom-button-border-radius": 0 0 8px 0,
      ),
    ),
    $link-options: (
      // "className": g--link-01 g--link-01--second,
    ),
    $lists-options: (
      // "number-font": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*2,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      // "first-number-width": 14px,
      // "first-level-number-color": map.get($color-options, d),
      // "first-level-artwork-width": 8px,
      // "first-level-artwork-top": 8px,
      // "first-level-artwork-image": '(../img/artwork.png)',
      // "first-level-artwork-background": map.get($color-options, d),
      // "first-level-artwork-border-radius": 50%,
      // "first-level-artwork-border-width": 1px,
      // "first-level-artwork-border-color": map.get($color-options, d),
      // "second-level-number-color": map.get($color-options, d),
      // "second-level-artwork-width": 8px,
      // "second-level-artwork-top": 8px,
      // "second-level-artwork-image": '(../img/artwork.png)',
      // "second-level-artwork-background": map.get($color-options, d),
      // "second-level-artwork-border-radius": 50%,
      // "second-level-artwork-border-width": 1px,
      // "second-level-artwork-border-color": map.get($color-options, d),
      // "third-level-number-color": map.get($color-options, d),
      // "third-level-artwork-width": 8px,
      // "third-level-artwork-top": 8px,
      // "third-level-artwork-image": '(../img/artwork.png)',
      // "third-level-artwork-background": map.get($color-options, d),
      // "third-level-artwork-border-radius": 50%,
      // "third-level-artwork-border-width": 1px,
      // "third-level-artwork-border-color": map.get($color-options, d),
      "margin-bottom": $measure * 4,
      "font-styles": (
        // "className": f--font-a,
        // "color": #638c1d,
        // "font-family": arial,
        // "font-size": 2rem,
        // "font-style": italic,
        // "font-weight": 400,
        // "letter-spacing": 1px,
        // "line-height": 1.5,
        // "max-lines": 3,
        // "text-decoration": underline,
        // "text-decoration-color": #000000,
        // "text-underline-position": under,
        "margin-bottom": $measure * 2,
        // "padding-top": $measure*2,
        // "text-align": right,
        // "margin-bottom-before-lists": 24px,
        // "bold-font-weight": 800,
      ),
    ),
    $paragraphs-options: (
      // "className": f--font-a,
      // "color": #638c1d,
      // "font-family": arial,
      // "font-size": 2rem,
      // "font-style": italic,
      // "font-weight": 400,
      // "letter-spacing": 1px,
      // "line-height": 1.5,
      // "max-lines": 3,
      // "text-decoration": underline,
      // "text-decoration-color": #000000,
      // "text-underline-position": under,
      "margin-bottom": $measure * 4,
      // "padding-top": $measure*2,
      // "text-align": right,
      "margin-bottom-before-lists": $measure * 3,
      // "bold-font-weight": 800,
    ),
    $quote-options: (
      "padding": $measure * 3 0,
      "margin-top": $measure * 5,
      "margin-bottom": $measure * 6,
      // "border": (
      //   "border-color": red,
      //   "border-radius": 0,
      //   "border-style": solid,
      //   "border-width": 2px 0,
      // ),
      // "paragraph": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*2,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      "cite":
        (
          // "className": f--font-a,
          // "color": #638c1d,
          // "font-family": arial,
          // "font-size": 2rem,
          // "font-style": italic,
          // "font-weight": 400,
          // "letter-spacing": 1px,
          // "line-height": 1.5,
          // "max-lines": 3,
          // "text-decoration": underline,
          // "text-decoration-color": #000000,
          // "text-underline-position": under,
          // "margin-bottom": $measure*2,
          "padding-top": $measure * 3,
          // "text-align": right,
          // "margin-bottom-before-lists": 24px,
          // "bold-font-weight": 800,
        ),
    ),
    $footnote-options: (
      // "className": f--font-a,
      // "color": #638c1d,
      // "font-family": arial,
      // "font-size": 2rem,
      // "font-style": italic,
      // "font-weight": 400,
      // "letter-spacing": 1px,
      // "line-height": 1.5,
      // "max-lines": 3,
      // "text-decoration": underline,
      // "text-decoration-color": #000000,
      // "text-underline-position": under,
      "margin-bottom": $measure * 2,
      // "padding-top": $measure*2,
      // "text-align": right,
      // "margin-bottom-before-lists": 24px,
      // "bold-font-weight": 800,
    ),
    $highlighted-options: (
      // "className": f--font-a,
      // "color": #638c1d,
      // "font-family": arial,
      // "font-size": 2rem,
      // "font-style": italic,
      // "font-weight": 400,
      // "letter-spacing": 1px,
      // "line-height": 1.5,
      // "max-lines": 3,
      // "text-decoration": underline,
      // "text-decoration-color": #000000,
      // "text-underline-position": under,
      "margin-bottom": $measure * 4,
      // "padding-top": $measure*2,
      // "text-align": right,
      // "margin-bottom-before-lists": 24px,
      // "bold-font-weight": 800,
    ),
    $btn-options: (
      // "className": g--btn-01,
      "margin-bottom": $measure * 4,
    ),
    $columns-options: (
      "breakpoint": $tablets,
      "margin-bottom": $measure * 4,
    ),
    $separator-options: (
      "margin": $measure * 6 auto,
      // "width": 60%,
      // "color": orange,
      // "height": 2px,
    ),
    $table-options: (
      "margin-bottom": $measure * 4,
      "header-cells-padding": $measure * 2,
      "body-cells-padding": $measure $measure * 2,
      // "header-font-styles": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*2,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      // "header-border": (
      //   "border-radius": 1px,
      //   "border-width": 1px,
      //   "border-style": solid,
      //   "border-color": map.get($color-options, a)
      // ),
      // "header-background": map.get($color-options, a),
      // "body-font-styles": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*2,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      // "body-border": (
      //   "border-radius": 1px,
      //   "border-width": 1px,
      //   "border-style": solid,
      //   "border-color": map.get($color-options, a)
      // ),
      // "body-background": map.get($color-options, a),
      // "odd-rows-background": map.get($color-options, c),
      // "odd-rows-text-color": map.get($color-options, d),
      // "caption": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      "padding-top": $measure * 2,
      "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),,,,,,,,,,,,,
    ),
    $video-options: (
      // "border-color": red,
      // "border-radius": 20px,
      // "border-style": solid,
      // "border-width": 2px,
      // "object-fit": cover,
      // "max-height": 700px,
      // "min-height": 0,
      // "object-position": center,
      // "max-width": 100%,
      // "min-width": 30px,
      "margin-bottom": $measure * 5,
      "caption": (
        // "className": f--font-a,
        // "color": #638c1d,
        // "font-family": arial,
        // "font-size": 2rem,
        // "font-style": italic,
        // "font-weight": 400,
        // "letter-spacing": 1px,
        // "line-height": 1.5,
        // "max-lines": 3,
        // "text-decoration": underline,
        // "text-decoration-color": #000000,
        // "text-underline-position": under,
        // "margin-bottom": $measure*2,
        "padding-top": $measure * 2,
        "text-align": right,
        // "margin-bottom-before-lists": 24px,
        // "bold-font-weight": 800,
      ),
    ),
    $utilities-options: (
      "media-text-aligned-margin-x": $measure * 5,
    )
  );
}

@include zoom-modal-image();
@include zoom-modal-image-modifier(
  $option: (
    // "zoom-modal-bg-overlay": red,
    // "zoom-close-btn-color": yellow,
  )
);
```

Now for WP, we have another option to add a zoom to the image, when you click a modal appears and the image have a button.
You have the option to change the zoom-button properties that you can find inside $image-options. You also have to add the zoom-modal-image mixin and the zoom-modal-image-modifier mixin OUTSIDE the .c--content-a class.

Example:

```scss
@include zoom-modal-image();
@include zoom-modal-image-modifier(
  $option: (
    // "zoom-modal-bg-overlay": red,
    // "zoom-close-btn-color": yellow,
  )
);
```

### Sanity

#### HTML code

```html
<div class="c--content-a"></div>
```

#### SCSS code

```scss
.c--content-a {
  @include make-content();
  @include make-content-modifier(
    $headings-options: (
      // "h1": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*2,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      "h2":
        (
          //   "className": f--font-a,
          //   "color": #638c1d,
          //   "font-family": arial,
          //   "font-size": 2rem,
          //   "font-style": italic,
          //   "font-weight": 400,
          //   "letter-spacing": 1px,
          //   "line-height": 1.5,
          //   "max-lines": 3,
          //   "text-decoration": underline,
          //   "text-decoration-color": #000000,
          //   "text-underline-position": under,
          "margin-bottom": $measure * 3,
          "padding-top": $measure * 5,
          //   "text-align": right,
          //   "margin-bottom-before-lists": 24px,
          //   "bold-font-weight": 800,
        ),
      "h3": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 3,
        "padding-top": $measure * 5,
        //   "text-align": right,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h4": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 2,
        "padding-top": $measure * 5,
        //   "text-align": right,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h5": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure * 2,
        "padding-top": $measure * 5,
        //   "text-align": right,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
      "h6": (
        //   "className": f--font-a,
        //   "color": #638c1d,
        //   "font-family": arial,
        //   "font-size": 2rem,
        //   "font-style": italic,
        //   "font-weight": 400,
        //   "letter-spacing": 1px,
        //   "line-height": 1.5,
        //   "max-lines": 3,
        //   "text-decoration": underline,
        //   "text-decoration-color": #000000,
        //   "text-underline-position": under,
        "margin-bottom": $measure,
        "padding-top": $measure * 5,
        //   "text-align": right,
        //   "margin-bottom-before-lists": 24px,
        //   "bold-font-weight": 800,
      ),
    ),
    $image-options: (
      // "border-color": red,
      // "border-radius": 20px,
      // "border-style": solid,
      // "border-width": 2px,
      // "object-fit": cover,
      // "max-height": 700px,
      // "min-height": 0,
      // "object-position": center,
      // "max-width": 100%,
      // "min-width": 30px,
      "margin-bottom": $measure * 5,
      "caption": (
        // "className": f--font-a,
        // "color": #638c1d,
        // "font-family": arial,
        // "font-size": 2rem,
        // "font-style": italic,
        // "font-weight": 400,
        // "letter-spacing": 1px,
        // "line-height": 1.5,
        // "max-lines": 3,
        // "text-decoration": underline,
        // "text-decoration-color": #000000,
        // "text-underline-position": under,
        // "margin-bottom": $measure*2,
        "padding-top": $measure * 2,
        "text-align": right,
        // "margin-bottom-before-lists": 24px,
        // "bold-font-weight": 800,
      ),
    ),
    $link-options: (
      // "className": g--link-01 g--link-01--second,
    ),
    $lists-options: (
      // "number-font": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*5,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
      // "first-number-width": 14px,
      // "first-level-number-color": map.get($color-options, d),
      // "first-level-artwork-width": 8px,
      // "first-level-artwork-top": 8px,
      // "first-level-artwork-image": '(../img/artwork.png)',
      // "first-level-artwork-background": map.get($color-options, d),
      // "first-level-artwork-border-radius": 50%,
      // "first-level-artwork-border-width": 1px,
      // "first-level-artwork-border-color": map.get($color-options, d),
      // "second-level-number-color": map.get($color-options, d),
      // "second-level-artwork-width": 8px,
      // "second-level-artwork-top": 8px,
      // "second-level-artwork-image": '(../img/artwork.png)',
      // "second-level-artwork-background": map.get($color-options, d),
      // "second-level-artwork-border-radius": 50%,
      // "second-level-artwork-border-width": 1px,
      // "second-level-artwork-border-color": map.get($color-options, d),
      // "third-level-number-color": map.get($color-options, d),
      // "third-level-artwork-width": 8px,
      // "third-level-artwork-top": 8px,
      // "third-level-artwork-image": '(../img/artwork.png)',
      // "third-level-artwork-background": map.get($color-options, d),
      // "third-level-artwork-border-radius": 50%,
      // "third-level-artwork-border-width": 1px,
      // "third-level-artwork-border-color": map.get($color-options, d),
      "margin-bottom": $measure * 4,
      "font-styles": (
        // "className": f--font-a,
        // "color": #638c1d,
        // "font-family": arial,
        // "font-size": 2rem,
        // "font-style": italic,
        // "font-weight": 400,
        // "letter-spacing": 1px,
        // "line-height": 1.5,
        // "max-lines": 3,
        // "text-decoration": underline,
        // "text-decoration-color": #000000,
        // "text-underline-position": under,
        "margin-bottom": $measure * 2,
        // "padding-top": $measure*5,
        // "text-align": right,
        // "margin-bottom-before-lists": 24px,
        // "bold-font-weight": 800,
      ),
    ),
    $paragraphs-options: (
      // "className": f--font-a,
      // "color": #638c1d,
      // "font-family": arial,
      // "font-size": 2rem,
      // "font-style": italic,
      // "font-weight": 400,
      // "letter-spacing": 1px,
      // "line-height": 1.5,
      // "max-lines": 3,
      // "text-decoration": underline,
      // "text-decoration-color": #000000,
      // "text-underline-position": under,
      "margin-bottom": $measure * 4,
      // "padding-top": $measure*5,
      // "text-align": right,
      "margin-bottom-before-lists": $measure * 3,
      // "bold-font-weight": 800,
    ),
    $quote-options: (
      "padding": $measure * 3 0,
      "margin-top": $measure * 5,
      "margin-bottom": $measure * 6,
      // "border": (
      //   "border-color": red,
      //   "border-radius": 0,
      //   "border-style": solid,
      //   "border-width": 2px 0,
      // ),
      // "paragraph": (
      //   "className": f--font-a,
      //   "color": #638c1d,
      //   "font-family": arial,
      //   "font-size": 2rem,
      //   "font-style": italic,
      //   "font-weight": 400,
      //   "letter-spacing": 1px,
      //   "line-height": 1.5,
      //   "max-lines": 3,
      //   "text-decoration": underline,
      //   "text-decoration-color": #000000,
      //   "text-underline-position": under,
      //   "margin-bottom": $measure*2,
      //   "padding-top": $measure*5,
      //   "text-align": right,
      //   "margin-bottom-before-lists": 24px,
      //   "bold-font-weight": 800,
      // ),
  );
}
```
