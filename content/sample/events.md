---
layout: base
title: Events Sample Page
sub: Testing out the event filters
---

Output should show 2 workshops, and three events at different venues:

{% for post in collections.Talks | includeEvents(false) %}
- [{{ post.date | getDate('iso') }}]
  **{{ post | pageType }}**
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}
