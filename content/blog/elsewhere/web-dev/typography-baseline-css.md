---
title: Responsive and Fluid Typography with Baseline CSS Features
date: 2026-01-08
venue: web.dev
canonical: https://web.dev/articles/baseline-in-action-fluid-type?hl=en
author: miriam
image:
  src: blog/2026/type-zoom.png
  alt: >
    A graph showing font size and zoom effectiveness versus viewport width.
    The font size, calculated as calc(17px + 2.5vw),
    increases linearly with viewport width.
    The 500% zoom line,
    representing the maximum possible zoom,
    shows that zoom becomes less effective as viewport width increases,
    failing to provide a 200% font size increase
    beyond a viewport width of 2040px.
tags:
  - Link
  - CSS
  - Typography
related_tag: Typography
series: revisiting fluid typography
graph:
  - iframe: https://www.desmos.com/calculator/xruperkze1?embed
    width: 800
    height: 500
summary:
  As designers, it makes sense to think about
  what space is available in the browser,
  and adjust your typography accordingly.
  It's also important to remember
  that different users will have different `font-size` needs --
  and _the more a font size is responsive to the viewport,
  the less responsive it will be to user inputs_.
---

I spent much of 2025 on this blog
digging into font-sizing and responsive/fluid typography,
and it has changed the way I approach sizing text on the web.
Feel free to read (and watch the videos)
back through my process if you're interested in the details --
but this article on the web.dev blog
provides a quick summary of my current approach.

I found that graphing various relationships
helped me understand better
how all the parts interact.
I may do a follow-up post here
exploring and explaining this chart in more detail:

{% import 'embed.macros.njk' as embed %}

{{ embed.figure(
  data=graph,
  caption='
    The default settings show
    `calc(16px + 2.5vw)`.
    You can adjust the values
    and add `clamp()` ranges to
    [the graph on Desmos](https://www.desmos.com/calculator/xruperkze1).
  '
) }}

This is really two graphs overlaid,
using the same horizontal axis
(viewport width in pixels)
but a different vertical axis.
Near the bottom, in `px` units,
the base and zoomed font-size at different viewport widths,
and a line showing that `2×` font-size
grows at a much steeper pace than `200%` zoom.
Above, in `%` units,
we can see the effectiveness of various zoom values,
and the zoom required to achieve a `2×` font-size.

Hopefully I got the math right,
but let me know if I've missed something.

## Article Contents

- Negotiate a base font-size based on user preferences
  (I prefer the `clamp()` approach)
- Add responsiveness
- Warning: Viewport changes don't always mean the same thing!
- Typographic scales with `pow()`
- Respond to the size of in-page containers
