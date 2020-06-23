---
layout: docs
doc_lang: django
pagination:
  data: macros
  size: 1
  alias: file
permalink: /sample/macros/{{ file.slug | slug }}/
eleventyComputed:
  title: '{{ file.info.label or file.name }}'
  sub: '`{{ file.path }}`'
eleventyExcludeFromCollections: true
---

## See Also:

{% for other in macros -%}
{%- if other.slug != file.slug %}
- [{{ other.title | mdInline | safe }}](/sample/macros/{{ other.slug | slug }})
{%- else %}
- **{{ other.title | mdInline | safe }}**
{%- endif -%}
{%- endfor %}
