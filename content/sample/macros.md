---
layout: docs
doc_lang: django
pagination:
  data: macros
  size: 1
  alias: file
permalink: /sample/macros/{{ file.slug | slug }}/
renderData:
  title: '{{ file.info.label or file.name }}'
  sub: '`{{ file.name }}`'
eleventyExcludeFromCollections: true
---

## See Also:

{% for other in macros -%}
{%- if other.slug != file.slug %}
- [`{{ other.name }}`](/sample/macros/{{ other.slug | slug }})
{%- endif -%}
{%- endfor %}
