---
title: Second Measure
banner: Second Measure Component Library
sub: React design system & component library
logo: second-measure
image:
  src: projects/secondmeasure.jpg
  alt: UI component library color palette options grouped by category
client: &client Second Measure
date: 2019-03-29
tasks:
  - React Component Library
  - Sass/CSS Design System Architecture
  - Design Dictionary & Storybook integration
  - Living Documentation
people:
  - &matt
    name: Matthew King
    title: Engineering Manager
    # face: matthew-king.jpg
    venue: *client
  - &tara
    name: Tara Kelly
    title: Director Of Product Design
    # face: tara-kelly.jpg
    venue: *client
press:
  - text: |
      OddBird was quick to learn and pick up new technologies.
      **They delivered high quality code, and delivered on time.**
    <<: *matt
    slug: quick
  - text: |
      When the inventor of the modern design system
      names you as **the number one person she'd hire
      to build a design system**, well then I jump!
      I'm grateful she put us in contact.
    <<: *tara
    slug: best
  - text: |
      **It was easy to talk about technology options.**
      OddBird was both flexible
      (working within the constraints of our existing systems)
      and opinionated
      (bringing context from past experience).
    <<: *matt
    slug: easy
  - text: |
      **I appreciated the specific experience OddBird brought to bear
      in terms of building component libraries**,
      particularly the need to incrementally import the component library
      in order to have it successfully be used.
    <<: *matt
    slug: systems
summary: |
  Second Measure provides a daily view into company performance & consumer
  behavior data. We were hired to help organize the code and design
  systems into a reusable and fully documented React component library and
  integrated design system.
---

{% import 'quotes.macros.njk' as quotes %}
{{ quotes.grid(press) }}
