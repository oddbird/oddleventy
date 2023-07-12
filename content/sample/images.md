---
title: Image Layout Helpers
sub: Using nunjucks and the image utility classes
---

{% import 'embed.macros.njk' as embed %}


{{ embed.figure(
  data=[{
    img: 'blog/2023/graph.jpg',
    alt: 'sketched graph on paper'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 2'}
) }}

### `media-pull` will position an image next to the text on wide enough screens

The `media-pull` class can be used to pull an image to the left of the content
at the `xlarge` screen size. Using a style attribute, you can define how many
rows to span using the css custom property `--rowspan`. The first image example
uses the `embed.figure` macro.

{{ embed.img(
  src='blog/2023/graph.jpg',
  alt='A collection of button screenshots from one project',
  attrs={
    'class': 'media-pull',
    'style': '--rowspan: span 2'
  }
) }}

### `media-pull` with the `embed.img` macro

When using the `embed.img` macro in a markdown file, the image is placed
within a `<p>` tag. We have a CSS helper that targets this nested image with
`display: contents` in order to add layout classes which will work in [most
modern browsers](https://caniuse.com/css-has). When unsupported, the image will
appear centered within the content column.


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
Images will only float if the screen is wide enough.
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
Images will only float if the screen is wide enough.
</div>


<div class="contain">
{{ embed.img(
  src='work/coachhub/browse-coach-sitemap.jpg',
  alt='site map for browsing coaches',
  attrs={
    'class': 'align-center'
  }
) }}

To center align an image add the class `align-center`. This is only applicable
if your image is smaller than the column width.

</div>

## Extending images outside the content column

To extend an image further outside of the content column's width, add one of
the following classes: `extend-small`, `extend-large`, or `extend-full`.

When using the `embed.img` macro in a markdown file, the image is placed
within a `<p>` tag. We have a CSS helper that targets this nested image with
`display: contents` in order to add these layout classes in [most modern
browsers](https://caniuse.com/css-has).


### `embed.img` using the `extend-small` class

The `embed.figure` macro uses the same grid-columns as the `extend-small`
class.

{{ embed.img(
  src='herman/herman-color-palette.jpg',
  alt='',
  attrs={'class': 'extend-small'}
) }}

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

{{ embed.img(
  src='talks/mia-smashing19-rad.jpg',
  alt='Miriam presenting',
  sizes='media'
) }}

{{ embed.figure(
  data=[{
    img: 'blog/2023/graph.jpg',
    alt: 'The word "yes" with a smiley and sparkles'
  }],
  class='media-pull',
  attrs={'style': '--rowspan: span 2'}
) }}

## Position an image next to the text on wide enough screens

The `embed.figure` macro is the only one that has access to the outer element in
order to add attributes or classes. The `media-pull` class can be added to pull
the image to the left of the content at the `xlarge` screen size. Using a style
attribute, you can define how many rows to span using the css custom property
`--rowspan`.
