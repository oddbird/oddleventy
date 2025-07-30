---
draft: true
title: Utopian Typography in Modern CSS
sub: Introducing the `progress()` function
author: miriam
date: 2025-06-18
tags:
  - Article
  - CSS
  - Typography
series: revisiting fluid typography
permalink: false
summary: |
  TBD
---

I cited [Utopia.fyi](https://utopia.fyi)
as my favorite tool for doing all the math
to convert from 'actual' font and viewport sizes
(pixel values) to the appropriate CSS `clamp()` output --
which is not at all intuitive to do by hand.
That's especially true
if you rely on their advanced ability to scale
not just the individual font sizes,
but the relative ratio between steps.
To do this, we input:

- Our desired (`px`) base font size on small screens
- The (unitless) ratio between font sizes on a small screen
- The minimum (`px`) viewport size
  at which fonts & scales should start growing
- The maximum (`px`) viewport size
  where fonts and scales should stop growing
- The desired (`px`) base size for large screens
- The (unitless) ratio between sizes on large screens

We have several options for output,
but the more readable CSS option looks like this:

```css
:root {
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.944rem, 1.771rem + 0.8651vw, 2.4414rem);
  --step-4: clamp(2.3328rem, 2.0827rem + 1.2504vw, 3.0518rem);
  --step-5: clamp(2.7994rem, 2.4462rem + 1.7658vw, 3.8147rem);
}
```

- The `rem` values represent your desired base font size
  in relation to the common `16px` user-settings default
- The `vw` values represent how much a font needs to scale
  relative to the viewport
- The clamp min and max are direct representations
  of our desired small and large screen result
- The internal calculation ensures
  that our growth is offset to the correct point,
  scaling from one value to the other
  over the proper range of screen sizes

I consider this the current state of the art,
and I love using Utopia to get the output I need.
With or without the specific tooling,
this is a great CSS solution that has worked well for years.
But I raised some concerns about the approach:

- **The resulting numbers feel magical**.
  I couldn't tell you how each one was calculated,
  and I wouldn't be able to update them manually in CSS.
  That's not a problem with Utopia,
  it's one of the reasons Utopia is so helpful.
  As a member of the CSS Working Group,
  I wonder if we can provide some of these tools
  in the language itself?
- **I don't like the interaction
  between site and user font-sizes**.
  If I prefer a large font size for my design,
  and a visitor on my site
  prefers _the same large font size_,
  that's the font size we should use.
  We don't need to combine our preferences
  and render an _extra-large_ font size.
- **I don't think in pixel values**
  when I'm defining fluid relationships.
  I think in relative units.
  Any CSS _pixel-to-em_ conversion math
  makes me squirm.

Many people,
including [Richard Rutter](https://clagnut.com/blog/2441/),
found my critique frustrating.
It seems I wasn't very clear:

- That I think this solution is _pretty good_
  as a starting point,
  and is working from the right set of goals.
  I'm not opposed to fluid type,
  I want to see if we can improve how we achieve it in CSS.
- That I love Utopia,
  and don't have any issues with it as a tool.
  As CSS has evolved since their first launch,
  Utopia's output has also changed to stay on the cutting edge.
  _Even if_ we can find even more modern CSS improvements,
  I imagine they'll remain the state of the art
  for visualizing the thought process to get there.
- How I think about
  (or don't think about) pixels,
  and what it looks like to design
  without starting from a fixed unit.

Most importantly,
I didn't have any real alternative to propose.
My first stab at a 'solution'
was pretty similar to Utopia's output,
and extremely underwhelming.
All I managed to do was remove some calculations,
and replace them with _approximations_.

Those are valid critiques.
I'm afraid I let a lot of things get mixed together
in my original post,
as I was just starting to put words to an idea.
This time I want to break things apart,
and look for real alternative approaches in CSS.

{% callout 'note', false %}
If you enjoy Miriam's writing
on modern CSS,
consider booking her
[Cascading Layouts Workshop](/workshops/cascading-layouts/)
at your company
to take your sites
and your team's skills
to the next level.

[Book a workshop for your company »](/workshops/cascading-layouts/#schedule-a-workshop)
{% endcallout %}
