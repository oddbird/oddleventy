---
title: CSS needs logical shorthands
sub: Can we move this process forward?
date: 2025-03-19
author: miriam
tags:
  - CSS
  - CSSWG
summary: >
  The CSS Working Group recently resolved
  to add a `size` shorthand for setting
  both the `width` and `height` of an element.
  Of course, many people wanted to know about
  a shorthand for setting the 'logical'
  `inline-size` and `block-size` as well.
  But 'logical shorthands' have been stalled
  in the working group for years.
  _Can we get them unstuck?_
---

CSS began to add
[logical properties and values](https://www.w3.org/TR/css-logical-1/)
in 2017-2018,
allowing us to replace
static physical terms like `top` and `bottom`
with flow-relative terms like `inline-start` or `block-end`.
That specification includes a lot of
longhand properties that are likely familiar by now --
from `padding-inline-start` to `inline-size` and `block-size`.
There are even some partial shorthands
without any physical alternative,
like `margin-block` for setting both
the `-block-start` and `-block-end` margins.
I find those extremely useful and concise.

But the existing 4-value shorthands,
like `margin`,
have a long history tied to the physical dimensions.
Is there any way to update those
so that they can be used to set logical dimensions?

- A [Github issue](https://github.com/w3c/csswg-drafts/issues/1282)
  has been open since 2017,
  to discuss the problem
- In 2021, Elika Etimad and Jen Simmons and I
  proposed [a multi-step path forward](https://github.com/w3c/csswg-drafts/issues/1282#issuecomment-952428897)
- Every year at TPAC,
  the Internationalization Working Group
  asks us to make progress and provide updates.
- Every year, we disappoint them.

The current situation
is that we have several viable paths forward,
but _someone has to do the research_
about which and how many properties and values
will be impacted by our choice.

I would love to do that work,
but of the browsers are interested in funding it.
I don't think this is a big-budget project,
but it's enough work that I don't want to start
unless I have the interest and resources
to get this feature over the line.

Are you (or your company) interested in logical shorthands?
Are you willing to chip in
to help move things forward?
We've added a donation option to our Open Collective,
allowing you to support this feature specifically.


Thanks in advance!
If you're interested in more detail
about the potential solutions…

…multiple choice for publishing this…

- keep reading below!
- join our mailing list
- watch this space for another post


## The per-property solutions

The [2018 specification includes a proposal](https://www.w3.org/TR/css-logical-1/#logical-shorthand-keyword)
that was never implemented by browsers --
with an optional `logical` keyword
before the four length values.
To copy their example directly:

```css
/* These two rules are equivalent: */

blockquote {
  margin: logical 1em 2em 3em 4em;
}

blockquote {
  margin-block-start:  1em;
  margin-inline-start: 2em;
  margin-block-end:    3em;
  margin-inline-end:   4em;
}
```

That's one of three solutions
mentioned in a [2017 Github issue](https://github.com/w3c/csswg-drafts/issues/1282)
where Elika (aka _fantasai_)
documents the problem.
The most similar option
replaces the keyword with a `!logical` flag,
but we could also add new properties
like `margin-logical`.
Elika uses the term `relative`, which I like,
but we're currently focusing on the mechanism
rather than the specific terms to use.

In all these proposals,
the result is a logical shorthand
that's significantly more verbose
than the physical alternative.
Many authors have moved to a logical-first approach,
but the language is still clearly giving preference
to physical shorthands.
That's not terrible,
but will it still make sense in 10 years --
or will it always feel like a mistake we're stuck with?

## Is a global solution possible?

What's missing
is some way to change the default
for an entire stylesheet --
so that a short-and-sweet shorthand like `margin`
can be used to set logical margins
without any extra keywords or flags.

The first solution that
