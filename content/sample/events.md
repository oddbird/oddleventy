---
layout: base
title: Events Sample Page
sub: Testing out the event filters
---

## Replace page with events

`collection | includeEvents` --
by default, replaces event-pages with their events.
So aworkshop without event will still be listed,
but a workshop with events will be replaced by individual
event listings:

{% for post in collections.Workshops | includeEvents() %}
- [{{ post.date | getDate('iso') }}]
  **{{ post | pageType }}**
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}

## Show both page and events

`collection | includeEvents(false)` --
will show both the events
and the original pages that they come from:

{% for post in collections.Workshops | includeEvents(false) %}
- [{{ post.date | getDate('iso') }}]
  **{{ post | pageType }}**
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}
