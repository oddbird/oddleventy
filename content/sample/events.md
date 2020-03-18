---
title: Events Sample Page
sub: Testing out the event filters
---

## Mixed pages & events

`collection | getEvents('mixed')` (the default) --
Replaces event-pages with their events,
while leaving non-event pages un-touched:

{% for post in collections.Workshop | getEvents() %}
- [{{ post.date | getDate('iso') }}]
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}

## All page & events

`collection | getEvents(true)` --
will add the events as list-items
in addition to all existing pages in the collection:

{% for post in collections.Workshop | getEvents(true) %}
- [{{ post.date | getDate('iso') }}]
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}

## Only events

`collection | getEvents(false)` --
will add the events as list-items
in addition to all existing pages in the collection:

{% for post in collections.Workshop | getEvents(false) %}
- [{{ post.date | getDate('iso') }}]
  [{{ post.event.title or post.data.title }}]({{ post.url }})
  {% if post.event.venue %}at {{ post.event.venue }}{% endif %}
{% endfor %}

## Using `index` data

The `index` attribute in page-data has several effects:

- The page will be used as official list-index for a given tag
- The page will show a list of all resources in a given collection

The `index` value can be a string of the tag/collection name,
or an object with `slug` attribute set to the desired collection.
By default, pages with a `bird` are treated as an index for that bird
(no slug required).

The `index` object has several attributes:

- `index.slug` \[string] sets the desired collection
- `index.events` [boolean | 'all' | 'only' ] to optionally include events in the resource list
