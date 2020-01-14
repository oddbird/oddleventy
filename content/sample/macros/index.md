---
title: Nunjucks Macros
---

We have a number of nunjucks macros
that can be used in any file
to generate special patterns and effects,
or convert structured data
into page content.

## Macro Files

{% for file in dox %}
- [`{{ file.name }}`](/sample/macros/{{ file.slug | slug }})
{%- endfor %}
