---
title: CSS Functions & Mixins
sub: Is sass dead yet?
author: miriam
date: 2025-06-05
action:
  text: Watch the video on Conffab
  url: https://conffab.com/presentation/is-sass-dead-yet-css-mixins-functions-c/?gl=yFA1b51n8wXn
image:
  src: projects/w3c.jpg
  alt: W3C
tags:
  - CSS
  - CSS Mixins & Functions
  - CSSWG
  - Custom Properties
events:
  - venue: CSS Day
    adr: Amsterdam, NL
    url: https://cssday.nl/
    date: 2025-06-05
    end: 2025-06-06
    slides: https://slides.oddbird.net/mixins/cssday/
    video: https://www.youtube.com/watch?v=IIvqkkfmPYE
    media: &cssDay
      youtube: IIvqkkfmPYE
media:
  - span: full
    <<: *cssDay
summary: |
  Sass has inspired new developments in CSS for over a decade --
  from variables to nesting,
  and now author-defined CSS mixins and functions.
  As these features make the jump from Sass to CSS,
  they tend to change in significant ways.
---

So what can we do with CSS functions and mixins,
how will they be different
from the Sass tools that inspired them,
how can you help in the spec process,
and what other features might this open up in the future?

------

{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption="
    Both features have come a long way in the last year,
    since I gave this talk.
    If you're interested in an update,
    check out our
    [live stream with Chris Coyier](https://www.oddbird.net/2026/01/22/winging-it-28/).
  "
) }}

------

Along the way,
we dive into variables --
and some of the surprises
that still cause confusion for developers.
Those same issues
will become even more visible
as new features roll out,
so it's a good time to learn our way around!

{% callout 'note', false %}
Take your CSS knowledge deeper
with a workshop!
Bring
[Cascading Layouts Workshop](/workshops/cascading-layouts/)
to your company,
or attend [Modern CSS Architecture](https://smashingconf.com/ny-2025/workshops/miriam-suzanne-modern-css-architecture)
at Smashing Conference in New York.

[Book a workshop for your company »](/workshops/cascading-layouts/#schedule-a-workshop)
{% endcallout %}
