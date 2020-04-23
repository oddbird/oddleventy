---
title: Responsive Images
sub: Using nunjucks and markdown
---

{% import 'utility.macros.njk' as utility %}
{% import 'embed.macros.njk' as embed %}

## srcSet

### markdown:
![](/assets/images/blog/2016/trick-loops.jpg)

### embed (no width):
{{ embed.img(
  src='blog/2016/trick-loops.jpg'
) }}

### embed (width: 4410):
{{ embed.img(
  src='talks/mia-btconf.jpg',
  alt='Miriam presenting',
  width=4410,
  height=2159
) }}

### sizes
{{ embed.img(
  src='talks/mia-smashing19-rad.jpg',
  alt='Miriam presenting',
  width=1477,
  height=984,
  sizes='card'
) }}

----

## For Testing

{% set srcsetA %}
  {%- for width in taxonomy.srcset -%}
    {{- ['https://via.placeholder.com/', width, 'x', width / 2] | join  -}}
    {{- ' ' + width }}w{{ '' if loop.last else ', ' -}}
  {%- endfor -%}
{% endset %}

{% set attrs={
  'src': 'https://via.placeholder.com/600x300',
  'srcset': srcsetA
} %}

<img {{ utility.show_attrs(attrs) }}>

{% set srcsetB %}
  {%- for width in taxonomy.srcset -%}
    {{- ['https://via.placeholder.com/', width, 'x', width / 2 + 10] | join  -}}
    {{- ' ' + width }}w{{ '' if loop.last else ', ' -}}
  {%- endfor -%}
{% endset %}

{% set attrs={
  'src': 'https://via.placeholder.com/600x310',
  'srcset': srcsetB,
  'sizes': '20rem'
} %}

<img {{ utility.show_attrs(attrs) }}>
