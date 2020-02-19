---
sub: '[see all tags](/tags/)'
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - 'all'
permalink: /tags/{{ tag | slug }}/
renderData:
  title: '{{ tag | displayName }}'
  banner: "{{ tag | displayName }} Resources"
---

{% for post in collections[tag] %}
- [{{ post.date | getDate('iso') }}] [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
