---
title: Re-imagining fluid typography
sub: Are we responding to the right variables?
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
(specifically `em` and `rem` units)
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
By establishing our scale in relative units
like `em` and `rem`,
we maintain a consistent relationship _between_ sizes,
while allowing the entire system
is to scale up or down --
often relative to user preferences
or browser zoom.

But text doesn't exist in isolation.
Line-spacing, line-lengths, and white-space
also play a big role in typography.
To keep text sizing relative to _context_,
and create a consistent 'visual rhythm',
we often want to tie spacing and layout values
(box dimensions, padding, margins, and borders)
into our type systems as well.
What better candidates than `em` and `rem`?!

Those all seem to me like excellent goals.
It's no wonder that many articles and videos
recommend using one or both of these units
for _all_ `<length>` values.
But it's not a perfect system,
and there are some good reasons to reconsider:

- 'Fluid' typography has attempted to integrate
  viewport and/or container dimensions into font sizing,
  often with `calc()` and `clamp()` functions
  to combine various inputs.
  See [utopia.fyi](https://utopia.fyi)
  for the most common approaches.
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

With more units available,
and broad support for `min`/`max`/`clamp` comparison functions,
it seems like a good time to rethink
fluid typography and relative sizing on the web.

- What are the variables we should respond to?
- How can we create reliable typography systems?
- What are the best units for the job?

## An abundance of units

There are a lot of units in CSS.
Some of them come from the
[CSS Values and Units Module](https://www.w3.org/TR/css-values/#lengths)
of the specification,
while some are defined as part of other features
like [container queries][cq-units].
Only considering `<length>` units,
we have over 30 units to choose from:

- Absolute: `cm`, `mm`, `Q`, `in`, `pc`, `pt`, `px`
- Font relative: `em`, `ex`, `cap`, `ch`, `ic`, `lh`
- Viewport relative: `vw`, `vh`, `vi`, `vb`, `vmin`, `vmax`
- Container relative: `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, `cqmax`
- Container font relative:
  `rem`, `rlh`, `rex`, `rch`, `cqem`, `cqlh`, `cqex`, `cqch`
  (some of these have not yet been implemented in browsers)

[cq-units]: https://www.w3.org/TR/css-contain-3/#container-lengths

Some people consider this _abundance of units_ problematic --
a sign that we've lost our way --
but I consider them essential to CSS,
and hope we define even more over time.
In the end, every `<length>` in CSS
resolves to a `px` value before rendering,
but how we get there is important.
CSS is a language
for conveying _design intent_
to the browser,
and units provide a great interface
for _expressing the purpose of a length_.

That layer of abstraction
allows the browser to adapt our lengths
to different situations.
This is what makes [declarative design](https://adactio.com/journal/19131)
so powerful.
But it also means we have decisions to make,
and those decisions can feel overwhelming.
So the community will latch onto simple rules:
_never use `px`_, or _always use `em`/`rem`_.
But the reality is that each unit has distinct _meaning_,
and we should be careful to align that meaning
with our own _design intent_ --
careful to consider how it will impact the _user experience_.

## What should we do with font-size preferences?
