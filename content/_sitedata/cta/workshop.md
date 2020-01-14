---
templateEngineOverride: njk
title: Resilient Web Training & Consulting
image:
  src: talks/mia-btconf.jpg
  alt: Miriam presenting
summary: |
  Take full advantage of the universal web,
  and reduce maintenance over the long term
  with resilient HTML, CSS, and JS systems.
  OddBird provides [custom consulting](/services/)
  and [in-depth trainings](/talks/resilient-systems/)
  on front-end architecture and workflow --
  from advanced HTML/CSS to integrated design systems,
  component libraries, testing, and documentation.
---

{{ summary | md | safe }}

{% import 'embed.macros.njk' as embed %}
{% set default = collections.all | pageContent('/_sitedata/cta/default/') %}

{{ embed.media_block(
  media=embed.svg('faces/miriam'),
  content=default
) }}
