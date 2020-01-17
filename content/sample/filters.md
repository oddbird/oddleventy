---
layout: docs
doc_lang: js
pagination:
  data: filters
  size: 1
  alias: file
permalink: /sample/filters/{{ file.slug | slug }}/
renderData:
  title: '{{ file.info.label or file.name }}'
  sub: '`{{ file.path }}`'
eleventyExcludeFromCollections: true
---

## See Also:

{% for other in filters -%}
{%- if other.slug != file.slug %}
- [{{ other.title | mdInline | safe }}](/sample/filters/{{ other.slug | slug }})
{%- else %}
- **{{ other.title | mdInline | safe }}**
{%- endif -%}
{%- endfor %}
