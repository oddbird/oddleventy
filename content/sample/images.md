---
title: Placing Images
sub: Using nunjucks and the image utility classes
---

{% import 'embed.macros.njk' as embed %}

## srcSet

### embed (no width):
{{ embed.img(
  src='blog/2016/trick-loops.jpg'
) }}

### embed (width: 4410):
{{ embed.img(
  src='talks/mia-btconf.jpg',
  alt='Miriam presenting'
) }}

### sizes
{{ embed.img(
  src='talks/mia-smashing19-rad.jpg',
  alt='Miriam presenting',
  sizes='card'
) }}

{{ embed.figure(
  data=[{
    img: 'blog/2023/graph.jpg',
    alt: 'sketched graph on paper'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 2'}
) }}

## `media-pull` will position an image next to the text on wide enough screens

The `media-pull` class can be added to the `embed.figure` macro to pull an image
to the left of the content at the `xlarge` screen size. This is not available
with the `embed.img` macro because the markdown wraps these images in a `<p>`
element. Using a style attribute, you can define how many rows to span using
the css custom property `--rowspan`.


## Aligning images within the content areas

If you want an image to float to a side of the text, you need to first wrap the
image and text in a div with a class of `contain`.

<div class="contain">
{{ embed.img(
  src='work/coachhub/browse-coach-sitemap.jpg',
  alt='site map for browsing coaches',
  attrs={
    'class': 'align-left'
  }
) }}

To align an image to the left of the text, add the class `align-left`.
Images will only float left or right if the screen is wide enough.
</div>

<div class="contain">
{{ embed.img(
  src='work/coachhub/browse-coach-sitemap.jpg',
  alt='site map for browsing coaches',
  attrs={
    'class': 'align-right'
  }
) }}

To align an image to the right of the text, add the class `align-right`.
Images will only float left or right if the screen is wide enough.
</div>


<div class="contain">
{{ embed.img(
  src='work/coachhub/browse-coach-sitemap.jpg',
  alt='site map for browsing coaches',
  attrs={
    'class': 'align-center'
  }
) }}

To center align an image add the class `align-center`. This is only necessary
if your image is smaller than the column width.

</div>

## Extending images outside the content column

To extend an image further outside of the content column's width, add one of
the following classes: `extend-large`, or `extend-full`. This is not available
with the `embed.img` macro because the markdown wraps these images in a `<p>`
element. Note that the `embed.figure` macro extends wider than the
content column by default, as opposed to the `embed.img` macro.

### `embed.figure` without an extend class for comparison

{{ embed.figure(
  data=[{
    img: 'herman/herman-color-palette.jpg',
    alt: ''
  }]
) }}

### `extend-large`

{{ embed.figure(
  data=[{
    img: 'herman/herman-color-palette.jpg',
    alt: ''
  }],
  class='extend-large'
) }}

### `extend-full`
{{ embed.figure(
  data=[{
    img: 'herman/herman-color-palette.jpg',
    alt: 'Herman color palettes'
  }],
  class='extend-full',
  caption='I am a caption'

) }}

## Add a shadow to make an image stand out from the background

You can add the class `img-shadow` to the `embed.figure` and `embed.img` to
display a shadow around the image. This doesn't work on figure if you have a
caption as the shadow will be around the entire container.

### `embed.figure` with `class='img-shadow'`

{{ embed.figure(
  data=[{
    img: 'pages/inventory.jpg',
    alt: 'A collection of button screenshots from one project'
  }],
  class='img-shadow'
) }}

### `embed.img` with `attrs={'class': 'img-shadow'}`

An image with a light background:

{{ embed.img(
  src='pages/inventory.jpg',
  alt='A collection of button screenshots from one project',
  attrs={'class': 'img-shadow'}
) }}

An image with a dark background:

{{ embed.img(
  src='talks/mia-btconf.jpg',
  alt='Miriam presenting',
  attrs={'class': 'img-shadow'}
) }}
