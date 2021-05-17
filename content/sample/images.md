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
  alt='Miriam presenting'
) }}

### sizes
{{ embed.img(
  src='talks/mia-smashing19-rad.jpg',
  alt='Miriam presenting',
  sizes='card'
) }}
