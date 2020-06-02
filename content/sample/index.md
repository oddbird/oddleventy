---
title: Sample Pages
sub: To help with development
summary: |
  Samples pages demonstrate
  how to create certain element/effects,
  and also provide in-context style references.
---

## Patterns & Usage

{% for item in collections.sample -%}
{%- if item.url != page.url -%}
{%- set name = (item.data.title or item.url) %}
- [{{ name | mdInline | safe }}]({{ item.url }})
{%- endif -%}
{%- endfor %}


## Available Filters

Filters are written in JS,
and can be used to manage and manipulate data.

{% for other in filters %}
- [{{ other.title | mdInline | safe }}](/sample/filters/{{ other.slug | slug }})
{%- endfor %}


## Available Macros

We have a number of nunjucks macros
that can be used in any file
to generate special patterns and effects,
or convert structured data
into page content.

{% for other in macros %}
- [{{ other.title | mdInline | safe }}](/sample/macros/{{ other.slug | slug }})
{%- endfor %}
