---
title: Isolation and Bleed in Susy
tags:
  - Article
  - Susy
  - OddTools
  - Susy v1
  - Layout
  - Grids
  - Sub-pixel rounding
author: miriam
image:
  src: blog/susy.jpg
summary: |
  A few new features have landed in Susy 1.0.7, even as we work on more
  integrated syntaxes for 2.0. The `isolate()` and `isolate-grid()` mixins
  help you manage the worst effects of [sub-pixel rounding], while
  `bleed()` helps you break items out of the box.

  [sub-pixel rounding]: https://www.palantir.net/blog/responsive-design-s-dirty-little-secret
date: 2013-03-20
---

{% import 'embed.macros.njk' as embed %}

A few new features have landed in Susy 1.0.7, even as we work on more
integrated syntaxes for 2.0.

## Isolation

[Sub-pixel rounding] has always been a problem for fluid design. Susy
takes care of the most egregious layout-breaking cases, but there is no
way to entirely eliminate the problem.

John Albin Wilkins has a [demo] of the problem, as well as a proposed
[solution]. He hasn't eliminated rounding errors, he just found a way to
keep them from piling up. Every float is positioned relative to its
container, rather than the float before it. It's a bit of a hack, and
removes content from the flow, so I don't recommend building your entire
layout on isolated floats, but it can be very useful as a spot-check
when rounding errors are really causing you a headache.

(_Note that rounding errors can still stack up when you use a gradient
background for testing. Gradient background grids are useful, but you
should never trust them as a pixel-exact guide._)

Using John's method, you can now [isolate any grid element in susy],
with the simple `isolate()` mixin:

{{ embed.codepen(
  id='ad41121d402b5faccd1dbee4e88e35d1',
  title='Susy Isolation Demo: Syntax',
  user='mirisuzanne',
  height=300
) }}

When you put several of those together, you can see how they have been
removed from the flow:

{{ embed.codepen(
  id='93faa807c78fb4e9b1e15af2727d22d1',
  title='Susy Isolation Demo: Multiple',
  user='mirisuzanne',
  height=300
) }}

The items can overlap, and stack in any order – almost as though they
are positioned absolutely.

[sub-pixel rounding]: https://johnresig.com/blog/sub-pixel-problems-in-css/
[demo]: https://johnalbin.github.io/fluid-grid-rounding-errors/
[solution]: https://www.palantir.net/blog/responsive-design-s-dirty-little-secret
[isolate any grid element in susy]: https://susyone.oddbird.net/guides/reference/#ref-helper-isolation

## Isolation Grid

Isolation is most useful when you are repeating the same grid math again
and again, such as image-galleries. To help with that use-case, we've
added the `isolate-grid()` mixin. You just tell us how wide each item
should be, and we'll calculate the locations, applying them with
nth-child selectors.

Change the span-width, and we'll update everything for you:

{{ embed.codepen(
  id='c891305b8d32d1306fc305846cfd926f',
  title='Susy Isolation Demo: Gallery',
  user='mirisuzanne'
) }}

## Bleed

Bleed has nothing to do with isolation, it just happened to appear in
the same update. [Bleed] uses negative margins and equal-but-positive
padding to let an element's background "bleed" outside the area it would
normally occupy.

Here's an element bleeding 1-column outside our 6-column page layout:

{{ embed.codepen(
  id='351a144615300d48574188af838764ea',
  title='Susy1 Bleed Demo: Syntax',
  user='mirisuzanne',
  height=300
) }}

You'll notice that the context syntax is a bit different here:
`(1 of 9)` instead of `(1,9)`. That's the direction we're heading with
Susy 2.0, and it's very helpful in this case, because there's another
argument we want to access easily. Use the second argument to list which
sides should do the bleeding (defaults to "left right"). You can also
pass arbitrary widths in the first argument:

{{ embed.codepen(
  id='c8eb354821f8441e8c4b28864f92a8dd',
  title='Susy1 Bleed Demo: Sides',
  user='mirisuzanne',
  height=300
) }}

This can be especially useful to bleed across `$grid-padding`. Simply
`bleed($grid-padding)` and you're there.

Happy coding!

[bleed]: https://susyone.oddbird.net/guides/reference/#ref-bleed
