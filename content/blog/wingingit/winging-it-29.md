---
title: Responsive Type Doesn’t Have to Be Complicated
sub: Building a type scale for your website
episode: 29
tags:
  - CSS
  - Typography
author:
  - stacy
  - miriam
  - james
date: 2026-02-19
length: 60 min
image:
  src: winging-it/winging-it-29.jpg
media:
  - youtube: B-r6wembUxI
summary: |
  Miriam has spent a lot of time
  digging into the different approaches,
  the math involved,
  the user implications,
  and the ways modern CSS can help us out.
  There are equations and graphs!
  But you don’t need anything that complicated
  to build a type scale for your next site.
  With the right units,
  we can get excellent results
  from a few lines of (readable) code —
  without relying on third party tools.
---

{% callout 'note', false %}
Check out our [Typography Playlist](https://www.youtube.com/playlist?list=PL4jAKUtAhpHl-C60ywDDBbkxDjpxXfEiS) today.
{% endcallout %}

{% import "embed.macros.njk" as embed %}
{% import "utility.macros.njk" as utility %}

{{ embed.figure(
  data=media
) }}

{{ utility.main_action(
  'Subscribe to Channel »',
  subscribe_url
) }}

## What We Cover:

- My base rule is that we want to avoid unit conversions
  - If we’re talking about pixels, use pixels
  - If we’re talking about relative sizes, use relative units
- How do we work with the user default font size? 12:05
  - How it’s often been done: a multiple of the users size, calculated
  - My approach: Just say the size I want, but clamped by the user
- How will the font respond to viewport sizes? 19:00?
  - Big ol’ warning about zoom and viewports
    - We don’t know if it’s a small screen or a zoomed screen
    - See how zoom becomes less effective as we add responsiveness 21:53
   - Rules:
     - Never change the font size more than 2.5× based on the window 31:00
     - Fluid type always starts with a base size
   - If you know the breakpoints, set the breakpoints, it’s easier
   - For a fluid approach, don’t worry about the exact breakpoints
- How do we generate a ‘scale’ of relative font-sizes?
  - Using the pow() function!
- How do our scales scale?! Making the scale itself responsive
  - Using a breakpoint is the easiest option
- Bonus material:
  - Spacing relative to both the screen and text


## Links:

- [Ep 15: Relative Units & Typography](https://www.oddbird.net/2025/01/24/winging-it-15/) with special guest Alan Stearns
- [Responsive and fluid typography with Baseline CSS features](https://web.dev/articles/baseline-in-action-fluid-type)
- [Building Typographic Scales in CSS with :heading(), sibling-index(), and pow()](https://www.alwaystwisted.com/articles/building-typographic-scales-with-headings-sibling-index-and-pow) by Stuart Robson
- [CodePen: Responsive type live demo](https://codepen.io/miriamsuzanne/pen/QwEXomP)
