---
title: Re-imagining fluid typography
sub: Are we responding to the right inputs?
author: miriam
date: 2024-06-10
tags:
  - Article
  - CSS
  - Layout
---

For many years,
it has been 'best practice'
to use relative units
(especially `em` and `rem`)
for sizing text.
The browser provides a default text size
based on user preferences,
and our text should be _relative to that preference_.
Establishing our root font-size with an `em` value
helps keep that relationship intact.

Similarly,
font 'scales' are intended to
maintain some _internal harmony_
across a range of different font sizes.
By establishing our entire scale in relative units
like `em` and `rem`,
we maintain a consistent relationship between sizes,
while allowing the entire system
to scale up or down
relative to user defaults
or browser zoom.

Recently,
'fluid typography' has pushed us
to incorporate viewport or container relative units
into our font sizing as well --
generally with a `clamp()` function
to integrate both `em`/`rem` and `vi`/`cqi` _inputs_
in a responsive algorithm
with lower and upper boundaries.

See [utopia.fyi](https://utopia.fyi)
for the most common approach.
This comes with some accessibility risks
if we're not careful,
so keep an eye on the warnings
that Utopia provides.

Since typography exists in context,
it's also quite popular to define
spacing in `em`/`rem` units.
That helps maintain dimension-relationships
across an entire design.
The result is a more consistent behavior
between font preference settings
and browser zoom --
when something grows,
everything else grows to match.
But is that always what we want?

## What's the purpose of a user preference?


## How do we determine available space?

- Several articles have pointed out that `em`-based
  spacing responds badly when we zoom in.
  _The more space we need for text, the less space is available to it_.
  See
  _[Why You Should Use `px` Units for margin, padding, & Other Spacing Techniques](https://ashleemboyer.com/blog/why-you-should-use-px-units-for-margin-padding-and-other-spacing-techniques)_
  by Ashlee M Boyer, and
  _[Maybe sometimes you should use pixels](https://thudfactor.com/posts/2024/03/pixels/)_
  by John Williams.
  Josh Comeau
  also makes this case in
  [The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/).
- As a user who prefers large text defaults,
  I've been
  [playing with my browser settings](https://www.miriamsuzanne.com/2024/01/24/have-preferences/) --
  and the results have not been great.
