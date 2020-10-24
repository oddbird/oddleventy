---
layout: docs
pagination:
  data: filters
  size: 1
  alias: file
permalink: /sample/filters/{{ file.slug | slug }}/
eleventyComputed:
  title: '{{ file.info.label or file.name }}'
  sub: '`{{ file.path }}`'
eleventyExcludeFromCollections: true
---
{% import 'layout.macros.njk' as layout %}

{{ layout.title('See Also') }}

{% for other in filters -%}
{%- if other.slug != file.slug %}
- [{{ other.title | mdInline | safe }}](/sample/filters/{{ other.slug | slug }})
{%- else %}
- **{{ other.title | mdInline | safe }}**
{%- endif -%}
{%- endfor %}
