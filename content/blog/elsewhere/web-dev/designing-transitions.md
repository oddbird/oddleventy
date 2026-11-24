---
title: Designing View Transitions
date: 2026-11-23
venue: web.dev
canonical: https://web.dev/articles/designing-view-transitions
author: james
image:
  src: blog/elsewhere/designing-view-transitions.png
  alt: >
    A diagram showing two views of the same item.
    There are 3 shared items—a photo, common name, and scientific name.
    The positions and styles change, but they represent the same content.
tags:
  - Link
  - CSS
  - HTML
  - JS
related_tag: HTML
summary: |
 Designing the view transitions on your site
 can add polish and usabilty by adding cues about
 how content is repositioned as a user
 goes through your application.
---

{% import 'embed.macros.njk' as embed %}

The View Transition API increases the polish and usability of your Single Page
Application (SPA) by adding cues about how content is repositioned as a user
goes through your application.

Humans perceive subtle and continuous changes, like scrolling through a page, or
a button's hover effect, as connected motion. Complete changes, like navigating
to a new page, are seen as switching to a new context. Changes that are
somewhere in between can be jarring.


## Article contents

- Where should I use view transitions?
- Whole page versus partial transitions
- Transitioning specific elements
- Fallback Strategies
- Implementation Checklist

## The demo where we put it all together

{{ embed.codepen(
  id="GgmJMMZ",
  title="Interest Invokers Delays",
  user="web-dot-dev"
)}}

[Read full article »](https://web.dev/articles/designing-view-transitions)
