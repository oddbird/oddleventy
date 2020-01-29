---
layout: base
title: Browse by Tags
---

{%- import 'tags.macros.njk' as tags -%}

{% for item in collections | tagData('pageCount') %}
- [{{ item.pageCount }}] {{ tags.tag_link(item.tag, collections.all) }}
{%- endfor %}
