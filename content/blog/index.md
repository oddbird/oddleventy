---
title: Resources
index: resources
permalink: /blog/index.html
summary: |
  Learn how to write resilient CSS,
  add WebSocket push notifications to a RESTful API, and more
  with these articles, videos, podcasts, and conference talks.
---

{% for post in collections._post %}
1. [{{ post.date | getDate('iso') }}] [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
