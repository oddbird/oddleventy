---
title: Services
banner: OddBird's Services
services:
  - /services/planning/
  - /services/design-systems/
  - /services/speaking/
summary: |
  **Let’s solve real problems for your business and users** --
  pairing your industry-expertise,
  with our product-design experience.
---

{% import 'post.macros.njk' as post %}

{% for service in services %}
{% set page = collections.all | getPage(service) %}
## {{ post.heading(page) }}

{{ page.data.summary }}
{% endfor %}
