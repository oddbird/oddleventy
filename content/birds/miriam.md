---
title: Miriam Suzanne
bird: miriam
image:
  src: birds/miriam.jpg
social:
  twitter: mirisuzanne
  github: mirisuzanne
  codepen: mirisuzanne
  stackoverflow: 1930386
  _facebook: mirisuzanne
summary: |
  [Miriam Suzanne][mia]
  is a product manager,
  user-experience designer,
  writer, speaker,
  and open source developer.

  [mia]: /authors/miriam/
---

**Miriam leads the OddBird process**,
working with clients and users to set priorities
and find solutions to their unique problems.
She is a user-experience expert,
and a pioneer of modern CSS techniques –
member of the [Sass][sass] core team,
and creator of the popular [Susy][susy]
and [True][true] libraries.
Miriam is a staff writer for [CSS Tricks][tricks],
co-author of SitePoint’s [Jump Start Sass][jss],
and internationally known
[conference speaker][speaking],
winning "Best of" [CSS Dev Conf][dev] in 2017.
She is also a multimedia artist
with extensive experience in theatre,
writing, music, and visual art.

[sass]: https://sass-lang.com
[susy]: /susy/
[true]: /true/
[tricks]: http://css-tricks.com
[jss]: https://www.sitepoint.com/premium/books/jump-start-sass
[speaking]: /services/speaking/
[dev]: https://blog.cssdevconf.com/slides-and-resources-from-css-dev-conf-2017-new-orleans-8e2a5edb06b0#2b07

------

## Social

{% for site, username in social -%}
{%- if site[0] != '_' -%}
- {{ site }}: {{ username }}
{% endif -%}
{%- endfor %}

------

## Open Source

{% for page in collections._oss | byBird(bird) -%}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

------

## Speaking

{% for page in collections.speaking | byBird(bird) -%}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

------

## Articles

{% for page in collections._post | byBird(bird) -%}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}
