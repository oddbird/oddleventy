---
title: Cascading Styles
sub: A CSS Deep Dive
author: miriam
date: 2023-01-09
image:
  src: talks/mia-back.jpg
  alt: |
    Mia from behind,
    standing at a laptop -
    speaking to a conference audience
    and gesturing to one side
tags:
  - CSS
  - Cascade
  - Custom Properties
  - Cascade Layers
  - Container Queries
  - CSS Scope
  - Color
events:
  - venue: Smashing Workshops
    date: 2023-09-06
    adr: Freiburg, Germany
    url: https://smashingconf.com/freiburg-2023/workshops/miriam-suzanne/
summary: |
  It’s a great time to revisit
  everything you thought you knew about CSS.
  Join Miriam for a deep dive
  into what makes the language work,
  and how we can harness it’s power
  to develop resilient and delightful experiences
  that hold up across browsers, languages, and device interfaces.
---

A lot has changed in the nearly 30 years since CSS was first proposed,
and new features are shipping at an unprecedented rate --
cascade layers, container queries,
the ':has()' selector, wide-gamut colors,
subgrid, and so much more.

Meanwhile, we're still getting used to
custom properties and basic grids!
Taken one at a time, the list can feel overwhelming,
but these features all fit together to form a highly systemic language
based on a radical foundation: _the cascade of styles_.
Together, we’ll explore:

## Selectors & the Cascade

We’ll look at selectors,
their specificity,
nesting, and of course custom properties.

- cascade origins and importance
- cascade layers
- specificity and source-order
- :is(), :where(), and :has()
- nesting & scope
- preference & support queries
- custom properties
- naming & organizing conventions
- progressive enhancement

## Layout & Typography

From modern CSS layout to functions,
from aspect ratios to media & container queries.

- display, flow, and context
- writing modes
- logical properties
- flexbox, grid, and subgrid
- comparison functions
- aspect-ratios
- scroll-snapping
- media & container queries

## CSS Colors

Lastly, new color spaces & formats, accent-color and much more!

- accent-color
- color-scheme
- new color spaces & formats
- gradient color spaces
- color-mix()
