---
title: Dynamic CSS
layout: 'layouts/base'
events:
  - name: JSConf US
    date: 2018-08-22
  - name: CSSConf AR
    date: 2018-08-16
  - name: FullStackFest
    date: 2018-08-28
tags:
  - _talks
  - _talk_dynamic-css
templateEngineOverride: njk
---

{% markdown %}
# I can write *markdown* in this paired shortcode?
{% endmarkdown %}

{%- import 'event.macros.njk' as event -%}
{{ event.list(events, 'Page Events:') }}

{{ event.list(collections.all_events, 'All Events:') }}
