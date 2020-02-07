---
layout: base
title: Events Sample Page
sub: Testing out the event filters
---

Output should show 2 workshops, and three events at different venues:

{% for post in collections.Workshops | includeEvents(false) %}
- [{{ post.date | getDate('iso') }}]
  **{{ post | pageType }}**
  [{{ post.data.title or 'WTF' }}]({{ post.url }})
  {% if post.data.venue %}at {{ post.data.venue }}{% endif %}
{% endfor %}
