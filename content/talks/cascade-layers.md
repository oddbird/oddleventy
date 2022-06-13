---
title: Cascading Layers of !Importance
sub: How is the cascade changing, and how do we put it to use?
author: miriam
date: 2022-06-07
image:
  svg: svg/talks/aea-denver
  alt: |
    An illustration of Denver landmarks
    including the capitol building, light rail,
    union station, funky geometric art museum,
    and blue bronco with glowing red eyes
tags:
  - Cascade
  - Cascade Layers
  - CSS
  - Scope
events:
  - venue: An Event Apart
    url: https://aneventapart.com/event/denver-2022
    date: 2022-10-10
    end: 2022-10-12
    adr: Denver, CO
summary: |
  Earlier this year,
  all the major browsers released
  Cascade Layers,
  with the potential
  to fundamentally change
  how we write styles --
  especially in an age of design systems,
  component libraries,
  and third-party tools.
  But fundamental changes
  require us to re-think
  how all the pieces fit together.
---

You may have heard that
the 'C' in CSS stands for _Cascade_.
It's the underlying algorithm
that drives our entire language,
and the main target of frustration
when our styles go bad.
But why is it there,
how is it changing,
and why should we care?

In this deep-dive,
we'll look at the overall cascade,
and where Cascade Layers fit.
Along the way we'll need to rethink
our CSS conventions,
the purpose of `!important`,
and how we build or use third-party libraries.
And we'll take a look at what else is coming
over the next few years
with `@scope` and proximity.
