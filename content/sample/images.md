---
title: Responsive Images
sub: Using nunjucks
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

The `embed.figure` macro is the only one that has access to the outer element in
order to add attributes or classes. The `media-pull` class can be added to pull
the image to the left of the content at the `xlarge` screen size. Using a style
attribute, you can define how many rows to span using the css custom property
`--rowspan`.

