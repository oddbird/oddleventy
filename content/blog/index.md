---
title: Resources
index: resources
permalink: /blog/index.html
---

{% for post in collections._post %}
- [{{ post.date | getDate('iso') }}] [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
