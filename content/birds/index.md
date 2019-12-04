---
title: Meet the Odd Birds
tagline: The people you'll work with...
permalink: birds/index.html
image:
  src: pages/faces-hero.jpg
summary: |
  **As a client, you'll get to know our tight-knit team**
  on a first-name basis,
  with direct access to everyone involved.
  We'll all learn what makes your company special,
  and discuss features as a team –
  keeping backend, frontend, and design integrated
  for a shared understanding of your project and goals.
---

Feel free to start a conversation with one of us
through the social networks listed,
in our [public Slack chat][slack],
or [in person][meetup] at a meetup or conference.

[slack]: http://friends.oddbird.net
[meetup]: /services/speaking/

------

## Birds

{% for bird in collections.birds | active() %}
- [{{ bird.data.title }}]({{ bird.url }})
{% endfor %}
