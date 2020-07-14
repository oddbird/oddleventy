---
eleventyExcludeFromCollections: true
title: Trop
sub: A cool little lit mag from Los Angeles.
image:
  src: projects/trop.jpg
client: &client Trop Magazine
date: 2017-01-15
links:
  site: https://tropmag.com/
press:
  - text: |
      Having worked with a handful of web developers,
      OddBird was by far the best, the nicest,
      and the most fun to work with.
    name: Tom Dibblee
    title: Editor
    venue: *client
summary: |
  Trop is a cool little lit mag that lives in Los Angeles
  and publishes on the internet.
  They like funny and thought-provoking work of any
  form/genre/medium --
  especially if it does not quite fit in at traditional
  journals or humor sites.
---

{% import 'quotes.macros.njk' as quotes %}
{{ quotes.grid(press) }}
