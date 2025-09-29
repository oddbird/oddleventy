---
title: Cascading Layers of !mportance
date: 2022-10-10
author: miriam
image:
  src: blog/2022/cascade-layers-guide.png
  alt: |
    fragment of an inverted triangle with the cascade --
    cascade layers are highlighted below element-attached styles
    and above specificity
tags:
  - Cascade
  - CSS
  - Cascade Layers
  - CSSWG
slides: https://slides.oddbird.net/layers/
events:
  - venue: JS Heroes
    adr: Cluj, Romania
    url: https://jsheroes.io/
    date: 2025-05-29
    end: 2025-05-30
    media: &jsheroes
      - youtube: 4PkhzoFLJ0Q
  - venue: An Event Apart
    adr: San Francisco, CA
    date: 2022-12-12
    end: 2022-12-14
    slides: https://slides.oddbird.net/layers/aea-sf22/
  - venue: An Event Apart
    adr: Denver, CO
    date: 2022-10-10
    end: 2022-10-12
    slides: https://slides.oddbird.net/layers/aea-denver22/
media:
  - span: full
    <<: *jsheroes
summary: |
  Earlier this year,
  all the major browsers released Cascade Layers,
  with the potential to fundamentally change
  how we write styles --
  especially in an age of design systems,
  component libraries,
  and third-party tools.
  But fundamental changes
  require us to re-think
  how all the pieces fit together.
---

{% import "embed.macros.njk" as embed %}

The Cascade is the underlying algorithm
that drives our entire language,
and the main target of frustration
when our styles go bad.
But why is it there,
how is it changing,
and why should we care?

In this deep-dive,
we’ll look at the overall cascade,
and where Cascade Layers fit.
Along the way we’ll need to rethink our CSS conventions,
the purpose of `!important`,
and how we build or use third-party libraries.
And we’ll take a look at what else is coming
over the next few years with `@scope` and proximity.

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
