---
title: Don't Use My Grid System
sub: It's time to move past grid systems like Susy
author: miriam
date: 2017-06-14
slides: https://talks.oddbird.net/no-grid-system/
image:
  src: talks/devconf-best.jpg
  alt: Giant pencil awarded to Miriam Suzanne for Best of CSS Dev Conf 2017
tags:
  - Susy
  - OddTools
  - Layout
  - Grids
  - CSS
events:
  - venue: Boulder Python
    url: https://www.meetup.com/BoulderPython/events/256868153/
    adr: Boulder, CO
    date: 2019-02-12
    slides: https://talks.oddbird.net/no-grid-system/covalence19/
  - venue: Covalence Conf
    url: https://twitter.com/covalenceconf
    adr: San Francisco, CA
    date: 2019-01-16
  - venue: Beyond Tellerand
    url: https://beyondtellerrand.com/events/dusseldorf-2018
    adr: Düsseldorf, Germany
    date: 2018-05-07
    # slides: https://oddbooksapp.com/release/ce37ef91-8bd8-43e2-932a-66931b4b25ce
    video: https://vimeo.com/268576559
    media: &bt
      iframe: https://player.vimeo.com/video/268576559
      width: 640
      height: 360
  - venue: Clarity
    url: https://www.clarityconf.com/event/2017
    adr: San Francisco, CA
    date: 2017-11-28
    # slides: https://oddbooksapp.com/release/ae641b90-8efa-4b1e-8da8-16940edf420d
    video: https://youtu.be/DZrDSdTekI4
    media: &clarity
      iframe: https://www.youtube.com/embed/DZrDSdTekI4
  - venue: CSS Dev Conf
    adr: New Orleans, LA
    date: 2017-10-09
    # slides: https://oddbooksapp.com/release/0434d9c1-4e89-4827-abfc-4d3942fa305d
  - venue: DjangoCon US
    url: https://2017.djangocon.us/
    adr: Spokane, WA
    date: 2017-08-14
    # slides: https://oddbooksapp.com/book/djangocon-layout
    video: https://youtu.be/mDRfFEcj3-Q
    media: &django
      iframe: https://www.youtube.com/embed/mDRfFEcj3-Q
  - venue: Women Who Code Fort Collins
    url: https://www.meetup.com/Women-Who-Code-Fort-Collins/events/242033627/
    adr: Fort Collins, CO
    date: 2017-08-30
    # slides: https://oddbooksapp.com/book/wwc-layout
    title: Practical Layouts, Past & Future
  - venue: Develop Denver
    url: https://www.developdenver.org/
    adr: Denver, CO
    date: 2017-08-10
    # slides: https://oddbooksapp.com/release/76673f1e-63dc-4271-b326-76047288a10d
    title: Practical Layouts, Past & Future
  - venue: Refresh Denver
    url: https://www.meetup.com/refreshdenver/events/239219853/
    adr: Denver, CO
    date: 2017-06-14
    # slides: https://oddbooksapp.com/release/543aea12-2264-4794-867d-d01fbf3a79c9
    title: Practical Layouts, Past & Future
press:
  - text: |
      Amazing talk by Miriam Suzanne at the Beyond Tellerand conference
      about the benefits of using plain CSS
      instead of heavy library for your grid!
      Very useful and inspiring. Thanks!
    name: Sami Stein
    title: Frontend Developer at XING
    url: https://twitter.com/frontend_cat/status/993799732018532352
    icon: social/twitter-circle
    slug: useful
summary: |
  Explore the history of web layout
  with the creator of [Susy][susy] --
  why grid systems exist,
  how they work,
  and practical tips to avoid using them.

  [susy]: /susy/
media:
  - span: full
    <<: *bt
  - <<: *clarity
  - <<: *django
---

{% import "quotes.macros.njk" as quotes %}
{% import "embed.macros.njk" as embed %}

For those few cases where a grid really is required,
we'll talk about the best ways to roll your own,
so you're not relying on a bloated library to make decisions for you.
We'll also look at the new layout toys –
from flexbox to CSS Grid –
and how to get started with only a few lines of code.

- When to use floats, CSS Grid, flexbox, custom properties, and other techniques.
- How to make grid-math simple, and lose the grid-system.
- How to make grid-systems work for you when you need them.

------

{{ quotes.grid(press) }}

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
