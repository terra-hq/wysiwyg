# WYSIWYG By Terra

This package offers a seamless solution to effortlessly style the WYSIWYG and Gutenberg editor fields in WordPress and Sanity. With user-friendly customization options, it provides a hassle-free way to enhance the visual aesthetics of these content editors, ensuring a polished and cohesive design for your web content.

## Installation

```sh
npm install @terrahq/wysiwyg
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

| Block       | Gutenberg (WP) | Classic WYSIWYG WP    | Sanity                |
| ----------- | -------------- | --------------------- | --------------------- |
| Headings    | ✅             | ✅                    | ✅                    |
| Paragraphs  | ✅             | ✅                    | ✅                    |
| Lists       | ✅             | ✅                    | ✅                    |
| Links       | ✅             | ✅                    | ✅                    |
| Images      | ✅ (with zoom) | ✅ (no zoom, no cite) | ✅ (no zoom, no cite) |
| Quote       | ✅ (with cite) | ✅ (no cite)          | ✅ (no cite)          |
| Footnote    | ✅             | ❌                    | ❌                    |
| Highlighted | ✅             | ❌                    | ❌                    |
| Button      | ✅             | ❌                    | ❌                    |
| Columns     | ✅             | ❌                    | ❌                    |
| Separator   | ✅             | ❌                    | ❌                    |
| Table       | ✅             | ✅                    | ❌                    |
| Video       | ✅             | ✅                    | ❌                    |
| Utilities   | ✅             | ❌                    | ❌                    |
| Custom      | ✅             | ✅                    | ✅                    |

### WP

#### HTML code

```html
<div class="c--content-a"></div>
```

#### SCSS code

```SCSS
.c--content-a {
	&--wp {
		@include make-content();
		@include make-content-modifier(
			$btn-options: (
				//"className": c--btn-a c--btn-a--second,
				//"even-className": c--btn-a,
				//"margin-bottom": $measure * 3,
				//"column-gap": $measure * 2,
				//"row-gap": $measure,
			),
			$columns-options: (
				//"breakpoint": $tablets,
				//"column-gap": $measure * 4,
				//"margin-bottom": $measure * 3,
				//"row-gap": $measure * 4,
			),
			$footnote-options: (
				//"className": f--font-f,
				//"color": map.get($color-options, h),
				//"bold-color": red,
				//"bold-font-weight": 600,
				//"font-weight": 300,
				//"font-style": italic,
				//"margin-bottom": $measure * 3,
				//"margin-bottom-before-lists": $measure * 2,
				//"max-lines": 1,
				//"padding-top": $measure*9,
				//"text-align": left,
				//"text-decoration": underline,
				//"text-decoration-color": map.get($color-options, g),
				//"text-underline-position": above,
			),
			$headings-options: (
				"h1": (
					//"bold-color": red,
					//"bold-font-weight": 600,
					//"className": f--font-a,
					//"color": orange,
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"h2": (
					//"bold-color": map.get($color-options, e),
					//"bold-font-weight": 600,
					//"className": f--font-a,
					//"color": map.get($color-options, h),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"h3": (
					//"bold-color": map.get($color-options, e),
					//"bold-font-weight": 600,
					//"className": f--font-b,
					//"color": map.get($color-options, h),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"h4": (
					//"bold-color": map.get($color-options, f),
					//"bold-font-weight": 600,
					//"className": f--font-c,
					//"color": map.get($color-options, i),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"h5": (
					//"bold-color": map.get($color-options, f),
					//"bold-font-weight": 600,
					//"className": f--font-d,
					//"color": map.get($color-options, i),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"h6": (
					//"bold-color": map.get($color-options, h),
					//"bold-font-weight": 600,
					//"className": f--font-e,
					//"color": map.get($color-options, g),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					
					//"padding-top": $measure * 2,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
			),
			$highlighted-options: (
				//"bold-color": map.get($color-options, i),
				//"bold-font-weight": 600,
				//"className": f--font-d f--color-a,
				//"color": red,
				//"font-style": italic,
				//"font-weight": 400,
				//"margin-bottom": $measure * 3,
				//"margin-bottom-before-lists": $measure * 2,
				//"padding-top": $measure,
				//"text-align": center,
				//"text-decoration": none,
				//"text-decoration-color": #000000,
				//"text-underline-position": under,
			),
			$image-options: (
				//"border-color": red,
				//"border-radius": $measure*2,
				//"border-style": solid,
				//"border-width": 2px,
				"caption": (
					//"bold-color": map.get($color-options, f),
					//"bold-font-weight": 600,
					//"className": f--font-f,
					//"color": red,
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure*2,
					//"text-align": right,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				//"margin-bottom": $measure * 3,
				//"max-height": 700px,
				//"max-width": 100%,
				//"min-height": 0,
				//"min-width": 30px,
				//"object-fit": cover,
				//"object-position": center,
				//"zoom-button-background-color": map.get($color-options, f),
				//"zoom-button-border-radius": 4px,
				//"zoom-button-bottom": 16px,
				//"zoom-button-right": 16px,
			),
			$link-options: (
				//"className": c--link-a,
			),
			$lists-options: (
				//"first-level-artwork-background": map.get($color-options, i),
				//"first-level-artwork-border-color": map.get($color-options, f),
				//"first-level-artwork-border-radius": 50%,
				//"first-level-artwork-border-width": 2px,
				//"first-level-artwork-image": null,
				//"first-level-artwork-top": 6px,
				//"first-level-artwork-width": 10px,
				//"first-level-number-color": map.get($color-options, f),
				//"first-number-width": 14px,
				"font-styles": (
				  	//"bold-color":  map.get($color-options, f),
					//"bold-font-weight": 600,
					//"className": f--font-e f--color-a,
					//"color": red,
					//"font-style": italic,
					//"font-weight": 400,
				  	//"margin-bottom": $measure,
				  	//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"number-font": (
					//"bold-color": red,
					//"bold-font-weight": 600,
					//"className": f--font-e,
					//"color": red,
					//"font-style": italic,
					//"font-weight": 600,
					//"margin-bottom": $measure,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure,
					//"text-align": left,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				//"second-level-artwork-background": null,
				//"second-level-artwork-border-color": transparent,
				//"second-level-artwork-border-radius": null,
				//"second-level-artwork-border-width": null,
				//"second-level-artwork-image": null,
				//"second-level-artwork-top": null,
				//"second-level-artwork-width": null,
				//"second-level-number-color": map.get($color-options, g),
				//"third-level-artwork-background": map.get($color-options, f),
				//"third-level-artwork-border-color": null,
				//"third-level-artwork-border-radius": null,
				//"third-level-artwork-border-width": 2px,
				//"third-level-artwork-image": null,
				//"third-level-artwork-top": 8px,
				//"third-level-artwork-width": 8px,
				//"third-level-number-color": map.get($color-options, f),
				//"margin-bottom": $measure * 3,
				//"nested-list-spacing": $measure,
			),
			$paragraphs-options: (
				//"bold-color": map.get($color-options, e),
				//"bold-font-weight": 600,
				//"className": f--font-e f--color-a,
				//"color": red,
				//"font-style": italic,
				//"font-weight": 400,
				//"margin-bottom": $measure * 3,
				//"margin-bottom-before-lists": $measure * 2,
				//"padding-top": $measure,
				//"text-align": left,
				//"text-decoration": none,
				//"text-decoration-color": #000000,
				//"text-underline-position": under,
			),
			$quote-options: (
				//"background-color": color.adjust(map.get($color-options, e), $lightness: 50%),
				//"background-image": url("/images/quote-bg.jpg"),
                //"background-size": cover,
                //"background-position": center,
                //"background-repeat": no-repeat,
                //"overlay": linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
				//"margin-bottom": $measure * 5,
				//"margin-top": $measure,
				//"padding": $measure * 5,
				"border": (
				  	//"border-color": color.adjust(map.get($color-options, e), $lightness: 45%),
				  	//"border-radius": $measure*2,
				  	//"border-style": solid,
				  	//"border-width": 2px 0,
				),
				"cite": (
					//"bold-color": red,
					//"bold-font-weight": 600,
					//"className": f--font-f,
					//"color": map.get($color-options, e),
					//"font-weight": 400,
					//"font-style": italic,
					//"margin-bottom": $measure * 3,
					//"padding-top": $measure * 2,
					//"text-align": right,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"paragraph": (
					//"bold-color": red,
					//"bold-font-weight": 600,
					//"className": f--font-d,
					//"color": color.adjust(map.get($color-options, e), $lightness: -20%),
					//"font-style": italic,
					//"font-weight": 400,
					//"margin-bottom": $measure * 3,
					//"padding-top": $measure,
					//"text-align": right,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
			),
			$separator-options: (
				//"color": color.adjust(map.get($color-options, e), $lightness: -10%),
				//"height": 7px,
				//"margin": $measure * 10 0,
				//"width": 100%,
				//"dots-color": map.get($color-options, h),
				//"dots-size": 8rem,
				//"dots-spacing": 1em,
			),
			$table-options: (
				//"body-background": rgba(map.get($color-options, e), 0.3),
				//"body-border-right": 1px solid map.get($color-options, e),
				//"body-border-bottom": 1px solid map.get($color-options, e),
				//"table-border": 3px solid map.get($color-options, e),
				//"table-border-radius": $measure * 2,
				//"scroll-breakpoint": 700px,
				//"body-cells-padding": $measure $measure * 2,
				//"odd-rows-background": rgba(map.get($color-options, e), 0.5),
				//"odd-rows-text-color": map.get($color-options, i),
				"body-font-styles": (
				//"bold-color": map.get($color-options, h),
				//"bold-font-weight": 600,
				//"className": f--font-d,
				//"color": red,
				//"font-style": italic,
				//"font-weight": 600,
				//"margin-bottom": $measure * 3,
				//"margin-bottom-before-lists": $measure * 2,
				//"padding-top": $measure,
				//"text-align": right,
				//"text-decoration": none,
				//"text-decoration-color": #000000,
				//"text-underline-position": under,
				),
				//"header-background": rgba(map.get($color-options, e), 0.1),
				//"header-border-right": 1px solid map.get($color-options, e),
				//"header-border-bottom": 2px solid map.get($color-options, e),
				//"header-cells-padding": $measure * 2,
				"header-font-styles": (
					//"bold-color": red,
					//"bold-font-weight": 600,
				  	//"className": f--font-d,
				  	//"color": map.get($color-options, e),
					//"font-style": italic,
				  	//"font-weight": 600,
					//"margin-bottom": $measure * 3,
					//"margin-bottom-before-lists": $measure * 2,
					//"padding-top": $measure,
				  	//"text-align": center,
					//"text-decoration": none,
					//"text-decoration-color": #000000,
					//"text-underline-position": under,
				),
				"caption": (
				//"bold-color": map.get($color-options, h),
				//  "bold-font-weight": 600,
				//"className": f--font-f,
				// 	"color": map.get($color-options, a),
				//  "font-style": italic,
				//  "font-weight": 600,
				//  "margin-bottom": $measure,
				//  "margin-bottom-before-lists": $measure * 2,
				//"padding-top": $measure,
				//  "text-align": right,
				//  "text-decoration": none,
				//  "text-decoration-color": #000000,
				//  "text-underline-position": under,
				),
				//"margin-bottom": $measure * 4,

			),
			$utilities-options: (
				//"media-text-aligned-margin-x": 32px,
			),
			$video-options: (
				//"border-color": map.get($color-options, e),
				//"border-radius": $measure*2,
				//"border-style": solid,
				//"border-width": 4px,
				"caption": (
				//"bold-color": map.get($color-options, e),
				//"bold-font-weight": 600,
				//"className": f--font-f,
				//"color": red,
				//"font-style": italic,
				//"font-weight": 400,
				//"margin-bottom": $measure * 3,
				//"margin-bottom-before-lists": $measure * 2,
				
				//"padding-top": $measure*1.5,
				//"text-align": right,
				//"text-decoration": none,
				//"text-decoration-color": #000000,
				//"text-underline-position": under,
				),
				//"margin-bottom": $measure * 3,
				//"max-height": 700px,
				//"max-width": 100%,
				//"min-height": 0,
				//"min-width": 30px,
				//"object-fit": cover,
				//"object-position": center,
			),
			$custom-options: (
				//".mi-selector": (
				//"class": f--font-e f--color-f,
				//"color": red,
				// ),
				//"parent": (
				// 	"background": map.get($color-options, i),
				// 	"padding": $measure * 2,
				// ),
			),
		);
	}
}
```

Now for WP (implemented on WordPress 6.4), we have another option to add a zoom to the image, when you click a modal appears and the image have a button.
You have the option to change the zoom-button properties that you can find inside $image-options. You also have to add the zoom-modal-image mixin and the zoom-modal-image-modifier mixin OUTSIDE the .c--content-a class.

Example:

```scss
@include zoom-modal-image();
@include zoom-modal-image-modifier(
  $option: (
    //"zoom-modal-bg-overlay": red,
     //"zoom-close-btn-color": yellow,
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
		"h1": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure*2,
			//"padding-top": $measure*2,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
		),
      "h2": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure * 3,
			//"padding-top": $measure * 5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
        ),
		"h3": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure * 3,
			//"padding-top": $measure * 5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
		),
		"h4": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure * 2,
			//"padding-top": $measure * 5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
		),
		"h5": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure * 2,
			//"padding-top": $measure * 5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
		),
		"h6": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure,
			//"padding-top": $measure * 5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
		),
    ),
    $image-options: (
		//"border-color": red,
		//"border-radius": 20px,
		//"border-style": solid,
		//"border-width": 2px,
		//"object-fit": cover,
		//"max-height": 700px,
		//"min-height": 0,
		//"object-position": center,
		//"max-width": 100%,
		//"min-width": 30px,
		//"margin-bottom": $measure * 5,
		"caption": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure*2,
			//"padding-top": $measure * 2,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
      	),
    ),
    $link-options: (
		//"className": g--link-01 g--link-01--second,
    ),
    $lists-options: (
		//"number-font": (
		//"className": f--font-a,
		//"color": #638c1d,
		//"font-style": italic,
		//"font-weight": 400,
		//"text-decoration": underline,
		//"text-decoration-color": #000000,
		//"text-underline-position": under,
		//"margin-bottom": $measure*2,
		//"padding-top": $measure*5,
		//"text-align": right,
		//"margin-bottom-before-lists": 24px,
		//"bold-font-weight": 800,
		//"bold-color": red,
		// ),
		//"first-number-width": 14px,
		//"first-level-number-color": map.get($color-options, d),
		//"first-level-artwork-width": 8px,
		//"first-level-artwork-top": 8px,
		//"first-level-artwork-image": '(../img/artwork.png)',
		//"first-level-artwork-background": map.get($color-options, d),
		//"first-level-artwork-border-radius": 50%,
		//"first-level-artwork-border-width": 1px,
		//"first-level-artwork-border-color": map.get($color-options, d),
		//"second-level-number-color": map.get($color-options, d),
		//"second-level-artwork-width": 8px,
		//"second-level-artwork-top": 8px,
		//"second-level-artwork-image": '(../img/artwork.png)',
		//"second-level-artwork-background": map.get($color-options, d),
		//"second-level-artwork-border-radius": 50%,
		//"second-level-artwork-border-width": 1px,
		//"second-level-artwork-border-color": map.get($color-options, d),
		//"third-level-number-color": map.get($color-options, d),
		//"third-level-artwork-width": 8px,
		//"third-level-artwork-top": 8px,
		//"third-level-artwork-image": '(../img/artwork.png)',
		//"third-level-artwork-background": map.get($color-options, d),
		//"third-level-artwork-border-radius": 50%,
		//"third-level-artwork-border-width": 1px,
		//"third-level-artwork-border-color": map.get($color-options, d),
		//"margin-bottom": $measure * 4,
		//"nested-list-spacing": $measure,
      "font-styles": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure * 2,
			//"padding-top": $measure*5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
        	//"bold-color": red,
        ),
    ),
    $paragraphs-options: (
		//"className": f--font-a,
		//"color": #638c1d,
		//"font-style": italic,
		//"font-weight": 400,
		//"text-decoration": underline,
		//"text-decoration-color": #000000,
		//"text-underline-position": under,
		//"margin-bottom": $measure * 4,
		//"padding-top": $measure*5,
		//"text-align": right,
		//"margin-bottom-before-lists": $measure * 3,
		//"bold-font-weight": 800,
    	//"bold-color": red,
    ),
    $quote-options: (
		//"padding": $measure * 3 0,
		//"margin-top": $measure * 5,
		//"margin-bottom": $measure * 6,
		"background": (
			//"background-color": color.adjust(map.get($color-options, e), $lightness: 50%),
			//"background-image": url("http://placeholder.terrahq.com/img-16by9.webp"),
			//"background-size": cover,
			//"background-position": center,
			//"background-repeat": no-repeat,
			//"overlay": linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
		),
		"border": (
			//"border-color": red,
			//"border-radius": 0,
			//"border-style": solid,
			//"border-width": 2px 0,
		),
		"paragraph": (
			//"className": f--font-a,
			//"color": #638c1d,
			//"font-style": italic,
			//"font-weight": 400,
			//"text-decoration": underline,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
			//"margin-bottom": $measure*2,
			//"padding-top": $measure*5,
			//"text-align": right,
			//"margin-bottom-before-lists": 24px,
			//"bold-font-weight": 800,
			//"bold-color": red,
    	),
		"cite": ( 
			//"bold-color": red,
			//"bold-font-weight": 600,
			"className": f--font-f,
			"color": map.get($color-options, b),
			//"font-weight": 400,
			//"font-style": italic,
			//"margin-bottom": $measure * 3,
			//"padding-top": $measure * 2,
			//"text-align": right,
			//"text-decoration": none,
			//"text-decoration-color": #000000,
			//"text-underline-position": under,
		),
    )
  );
}
```
