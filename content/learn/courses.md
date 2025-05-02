---
title: Courses
sub: Frontend web development courses for curious developers
index: Courses
action:
  text: Add call to action »
  url: /#
summary: |
    Video and email courses for
    frontend web developers on
    modern CSS including anchor
    positioning, grid & subgrid,
    container queries and more!
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'layout.macros.njk' as layout %}
{% import 'post.macros.njk' as post %}

{{ quotes.find(
  collections.all,
  slugs=['spot-on', 'popular-tutorial']
) }}

{{ layout.title('All Courses') }}
