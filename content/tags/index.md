---
layout: base
title: Browse by Tags
---

{% for item in collections | getTags(null, true) | byPageCount %}
- [{{ item.pageCount }}] [{{ item.tag | displayName }}]({{ item.tag | tagLink(collections) }})
{%- endfor %}
