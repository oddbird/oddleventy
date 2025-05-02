---
title: Courses
sub: Frontend web development course for curious developers
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
{% call layout.grid('training') %}
    {% for item in collections.courses | getPublic | eventSort(true) | reverse %}
    <article {{ post.aria_label(item) }} class="training-item">
      {{ post.hero(item.data.image, 'post') }}
      <header class="training-header">
        {{ post.banner(item) }}
        {{ post.subtitle(item.data.sub) }}
        {{ post.byline(item, collections) }}
      </header>
      {% if item.data.events %}
        <div class="training-detail">
          {{ talks.list(item | pageEvents, compact=true) }}
        </div>
      {% endif %}
    </article>
  {% endfor %}
{% endcall %}
