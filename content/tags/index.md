---
layout: base
title: Browse by Tags
---

{% for item in collections | tagData('pageCount') %}
- [{{ item.pageCount }}]
{%- endfor %}
