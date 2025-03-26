---
title: Support Logical Shorthands in CSS
sub:  Can we get this process unstuck?
date: 2025-03-20
author: miriam
image:
  src: blog/2025/logical.jpg
  alt: block-size, inline-size, size?
tags:
  - CSS
  - CSSWG
action:
  text: Sponsor work on logical shorthands
  url: https://opencollective.com/oddbird-open-source/contribute/css-logical-shorthands-86141
summary: >
  The CSS Working Group recently resolved
  to add a `size` shorthand for setting
  both the `width` and `height` of an element.
  Many people asked about using it to set the 'logical'
  `inline-size` and `block-size` properties instead.
  But 'logical shorthands' have been stalled
  in the working group for years.
  _Can we get them unstuck?_
---

CSS began to add
[logical properties and values](https://www.w3.org/TR/css-logical-1/)
in 2017,
allowing us to replace
static physical terms like `top` and `bottom`
with flow-relative terms like `inline-start` or `block-end`.
The longhand properties are likely familiar by now --
from `padding-inline-start` to `inline-size` and `block-size`.

There are a few situations
where physical values make sense.
If we're applying drop shadows on a multi-language page,
we don't need each language to have its own
light source casting shadows in different directions.
But the majority of web design starts
from the flow of text --
and it's helpful to define styles
that will adapt when that flow changes:

{% import 'embed.macros.njk' as embed %}

{{ embed.codepen(
  id='xbxWzEo',
  title='Logical properties form direction',
  user='miriamsuzanne'
) }}

Before logical properties,
it was common to have a preprocessor generate 'flipped' versions
of all our stylesheets.
This is an essential feature for some sites,
but these days it's a good default for everyone.
Modern browsers and extensions
will often translate our sites automatically.
Logical properties are a great way
to optimize our sites in advance,
without much effort.

But what if we want to set
multiple properties at once?
This is where shorthands
like `margin` and `padding` become useful.
But they are currently limited
to setting physical dimension.
_Logical properties are great,
but without shorthand options
they still feel like a second-class
feature of the language._

There are a few 2-value shorthands,
like `margin-block` for setting both
the `-block-start` and `-block-end` margins --
which are currently logical-only.
I find those extremely useful and concise.
But the existing 4-value shorthands feel stuck in the past.
It's surprising that a `size` shorthand
can't set the `inline-size`,
and the `inset` shorthand doesn't include `inset-block-start`.
Is there any way to update those shorthand properties
so that they can be used to set logical dimensions?

- A [GitHub issue](https://github.com/w3c/csswg-drafts/issues/1282)
  has been open since 2017,
  to discuss the problem.
- In 2021, Elika Etimad, Jen Simmons, and I
  proposed [a multi-step path forward](https://github.com/w3c/csswg-drafts/issues/1282#issuecomment-952428897),
  to progressively move towards logical properties
  as a simple default in CSS.
- Every year at TPAC,
  the Internationalization Working Group
  asks us to make progress and provide updates.
- Every year we disappoint them.

The current situation
is that we have several viable paths forward,
but _someone has to do the research_
about which and how many properties and values
will be impacted by our choice.

**I would love to do that work**,
but none of the browsers seem interested in funding it.
I don't think this is a big-budget project,
but it still takes time and resources
to get something like this over the finish line.

Are you (or your company) interested in logical shorthands?
Are you willing to chip in
to help move things forward?
We've added a donation option to our Open Collective,
allowing you to support this feature specifically.

[Support our work on logical shorthands in CSS](https://opencollective.com/oddbird-open-source/contribute/css-logical-shorthands-86141)

Thanks in advance!
As we start on this,
I'll post more about the possible solutions
and their tradeoffs.
[Subscribe to our newsletter](/oddnews/)
so you don't miss out!
