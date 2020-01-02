---
layout: base
sub: '[see all tags](/tags/)'
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
renderData:
  title: '{{ tag | displayName | capitalize }}'
  banner: "{{ tag | displayName | capitalize }} Resources"
  index: '{{ tag }}'
---

{% for post in collections[tag] %}
- [{{ post.date | getDate('iso') }}] [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
