---
title: Browse by Tags
---

{% for item in collections | tagData('all') %}
- [{{ item.pageCount }}] [{{ item.tag }}]({{ item.url }})
{%- endfor %}
