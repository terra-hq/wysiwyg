# Video

Here are the styling options for a video.

## Editable options

### margin-bottom

This property sets the margin-bottom of the video.

The value must be a numerical value expressed in any unit.


## SCSS

```scss
    .c--content-X {
        @include make-content-modifier (
            $video-options: (
                "margin-bottom": $measure*4,
            )
        );
    }
```