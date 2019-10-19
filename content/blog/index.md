---
layout: base
title: resources
index: resources
permalink: /blog/index.html
---

{% for post in collections._post %}
- [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
