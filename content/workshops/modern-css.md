---
feature: workshop
title: Modern CSS
sub: A workshop on what's new, and how to start using it
author: miriam
date: 2024-12-10
image:
  src: talks/mia-smashing-de.jpg
  position: top
  alt: |
    Mia from behind,
    standing at a laptop -
    speaking to a conference audience
    and gesturing to one side
tags:
  - CSS
  - Cascade
  - Cascade Layers
  - Container Queries
  - CSS Scope
  - CSS Nesting
  - CSSWG
events:
  - venue: Smashing Conference
    date: 2025-10-09
    adr: New York
    # url: https://smashingconf.com/ny-2025
included:
  - title: Interactive Sessions
    text: Virtual or in-person
    icon: icons/talk
  - title: Dedicated Q&A
    text: To gain a thorough understanding
    icon: icons/messaging
  - title: Cutting Edge Techniques
    text: From a W3C Invited Expert
    icon: icons/rocket
  - title: Immediate Access
    text: To recording and shared docs
    icon: icons/video
  - title: Certificate of Completion
    text: Documenting your education
    icon: icons/ribbon
intro:
  media:
    - iframe: https://player.vimeo.com/video/880145407?h=d1fcc941a4
      span: full
  caption: |
    Join Miriam for a deep dive
    into all the new tools (and a few old ones)
    that are essential for modern CSS.
summary: |
  New CSS features are shipping at an unprecedented rate --
  cascade layers, container queries, the `:has()` selector,
  subgrid, nesting, and so much more.
  **It’s a good time to rethink
  how we write modern and resilient styles**.
---

{% import 'utility.macros.njk' as utility %}
{% import 'contact.macros.njk' as contact %}
{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}


{{ embed.figure(
  data=intro.media,
  caption=intro.caption
) }}

## What Will Attendees Get?

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

{{ quotes.grid(press) }}

## Schedule a Workshop

**Contact us to schedule a workshop with your company**:

{{ contact.form(
  submit='Book Now',
  name='workshop',
  extraActions='or [schedule a call to learn more »](https://calendly.com/oddbirdllc/schedule-a-workshop)'
) }}

## What Will Attendees Learn In This Workshop?

- Writing **maintainable styles** with **progressive enhancement**
- **The Cascade**, why it's there, and how to use it
- **Managing conflicts** with cascade layers, scope, and nesting
- **Modern selectors** like `:is()`, `:where()`, and `:has()`
- **CSS Layout** with grid and flexbox
- Dynamic layouts using **subgrid** and **container queries**

## Who Is This For?

This workshop is intended for designers & developers
with at least a basic understanding of HTML and CSS.
You don’t need to be an expert to keep up,
but even the experts are likely to learn something new.

{{ utility.main_action(
  content='Bring this workshop to your company »',
  url='#schedule-a-workshop'
) }}

## About Miriam

{% set miriam = collections.birds | authorPage('miriam') %}
{{ miriam.data.bio | md | safe }}

## Workshop Outline

### 1. Understanding The Cascade

{{ embed.figure([{
  img: 'pages/css-workshop/cascade.jpg',
  alt: 'Yoda reaching out to control the force, surrounded by jungle swamp'
}]) }}

#### Hints & Suggestions (an introduction)

CSS is fundamentally different
from other languages or design tools,
built around a radical vision
for contextual style and user-control.
We’ll review the practical implications of that vision,
and how the ‘grain’ of the language
can guide us to more performant and resilient styles.

#### Cascade Layers, Scope, Nesting, and new Selectors

A deep-dive into the cascade,
and how we can manage (or avoid)
conflicts between styles.
Along the way, we’ll explore new features like nesting,
cascade layers, scope, and the `:has()` selector.

### 2. Understanding Layouts

{{ embed.figure([{
  img: 'pages/css-workshop/flow.jpg',
  alt: 'Earth seen through a window on the international space station'
}]) }}

#### Flowing & Flexing

Unlike the printed page,
web content and context can be unpredictable.
We'll review normal flow and flexbox,
and get a better understanding of
alignment --
which is now possible in block
and positioned contexts!

#### Defining Structure

Flexbox is a content-out sizing method,
But sometimes we also need to impose structure --
creating more consistent and reliable layouts.
This is a full session dedicated to grid & subgrid,
the multiple ‘stages of squishiness’,
and container queries.

### 3. Understanding Resilience

{{ embed.figure([{
  img: 'pages/css-workshop/conventions.jpg',
  alt: 'A woman in a suit kneels to pet cute ducklings while the mother duck removes money from her purse'
}]) }}

There are many conventions for organizing CSS,
but the best systems all share underlying principles
based on CSS itself.
The details may vary from project to project,
but we’ll look at practical strategies
for building an expressive and robust CSS system
that works for you.

## Contact Us to Book a Workshop

Consider bringing us in
to talk with your team directly:

{{ contact.form(
  submit='Book Now',
  name='workshop',
  extraActions='or [schedule a call to learn more »](https://calendly.com/oddbirdllc/schedule-a-workshop)'
) }}
