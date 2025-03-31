---
title: What should logical shorthands look like?
author: miriam
---

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
