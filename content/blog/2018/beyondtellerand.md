---
title: Beyond Tellerand
sub: Grid Systems & Vue Invaders!
author: miriam
date: 2018-05-15
tags:
  - Article
  - Vue
  - Conferences
  - Design Systems
  - Style Guides
  - Component Libraries
image:
  src: blog/2018/vue-invaders.jpg
  alt: Generated art using CSS Grid inspired by Jared Tarbell
talk: /talks/no-grid-system/
summary: |
  I love when conferences give me the opportunity to travel around the world.
  I love it even more when conferences go beyond the web to find inspiration from
  other fields. [Beyond Tellerand] (Düsseldorf, Germany) was the best possible
  combination.

  [Beyond Tellerand]: https://beyondtellerrand.com/events/dusseldorf-2018/speakers
---

{% import "quotes.macros.njk" as quotes %}
{% import "embed.macros.njk" as embed %}
{% import 'contact.macros.njk' as contact %}

{{ quotes.find(
  collections.all,
  page=talk,
  slugs='useful'
) }}

Right from the start, Beyond Tellerand was unlike other conferences.
Rather than hearing familiar talks about familiar technology, the first
day took us on a journey through web annotations, intricate
illustrations, design for non-designers, robots with personality,
stop-motion tinkering, and programatically-generated art.

I spoke on day two, followed by "bleeding edge" accessibility,
large-scale projection-mapping, the women who built the internet, and a
lesson on ethics in tech. How could I even begin to match the
inspirational scope of these other presenters, while talking about
layout?

I couldn't -- but I did have some fun. Inspired by the generated art from
Jared Tarbell and the [Levitated Toy Factory], I picked [one of his art
pieces] to recreate with CSS variables (aka custom properties) and CSS
grid layouts.

{{ embed.figure(
  data=[{
    img: 'blog/2018/levitated.jpg',
    alt: 'Miriam showing a slide of the CSS Grid generated art inspired by Jared Tarbell'
  }],
  class='img-shadow'
) }}

I spent that evening studying his image, and translating it into HTML
and CSS. My first draft relied heavily on `:nth-child()` selectors,
leading to an absurd 3MB CSS file. By adding custom properties in the
HTML, I was able to streamline things dramatically. This [second draft]
relies on HAML to generate the required HTML for a static (but
responsive) result.

That went over well at the conference, but I decided to improve it after
the conference was over. By moving the component logic into [Vue], I
could interact with the controls dynamically -- and animate the changes:
shuffling, resizing, and more. Finally, I pulled in an
Asteroids-inspired browser snippet so you can destroy your creation.
Enjoy the invasion!

<figure class="extend-large">
  <p data-height="600" data-theme-id="0" data-slug-hash="LmrEmb" data-default-tab="result" data-user="miriamsuzanne" data-embed-version="2" data-pen-title="Vue Invaders!" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/miriamsuzanne/pen/LmrEmb/">Vue Invaders!</a> by Miriam Suzanne (<a href="https://codepen.io/miriamsuzanne">@miriamsuzanne</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</figure>

I highly recommend watching the other talks. Here are a few of my
favorites:

- [A Tinker Story] by dina Amin
- [Broad Band] --
  *What History’s Female Internet Pioneers can Teach us about Tomorrow*
  by Claire Evans
- [Generative Spaces] by Jared Tarbell
- [How to Build an Atomic Bomb] by Mike Monteiro

{{ embed.from_event(
  collections.all,
  venue='Beyond Tellerand 2018',
  caption='Video from Beyond Tellerand'
) }}

[Levitated Toy Factory]: http://levitated.guru/
[one of his art pieces]: http://levitated.net/daily/levInvaderFractal.html
[second draft]: https://codepen.io/miriamsuzanne/pen/gzXqOP
[Vue]: https://vuejs.org/
[A Tinker Story]: https://beyondtellerrand.com/events/dusseldorf-2018/speakers/dina-amin#talk
[Broad Band]: https://beyondtellerrand.com/events/dusseldorf-2018/speakers/claire-evans#talk
[Generative Spaces]: https://beyondtellerrand.com/events/dusseldorf-2018/speakers/jared-tarbell#talk
[How to Build an Atomic Bomb]: https://beyondtellerrand.com/events/dusseldorf-2018/speakers/mike-monteiro#talk
