---
title: Jonny Gerig Meyer
sub: Co-founder & technical lead
dates: 2008–present
bird: jonny
image:
  src: birds/jonny.jpg
social:
  twitter: jgerigmeyer
  github: jgerigmeyer
  _facebook: jgerigmeyer
summary: |
  [Jonny Gerig Meyer][jonny]
  is an architect of clean,
  well-tested JavaScript web applications,
  and a brewer of delicious IPAs.

  [jonny]: /authors/jonny/
---

**Jonny leads the front-end development process**,
turning your ideas into functional interactions.
He has been writing clean,
well-tested JavaScript web applications
for more than a decade.
Experienced in a wide variety of JavaScript frameworks,
he is passionate about front-end architecture,
code test coverage, and sweating the details.
An active member in the JavaScript community,
Jonny has authored or contributed to
numerous open-source projects.
He's easily distracted by a game of ultimate frisbee,
homebrewing delicious IPAs and stouts,
and trying to keep up with his dog and two young kids.

------

{% for site, username in social %}
{% if site[0] != '_' %}
- {{ site }}: {{ username }}
{% endif %}
{% endfor %}

------

{% for page in collections._oss | byBird(bird) %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}
