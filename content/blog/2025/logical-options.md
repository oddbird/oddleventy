---
title: How do we move logical shorthands forward?
sub: There are several proposals, but one major road block
author: miriam
date: 2025-03-27
image:
  src: blog/2025/closed.jpg
  alt: >
    A chain-link gate in black and white
    with a sign that says
    closed indefinitely,
    and a smaller warning
    with gruesome icons for
    entrapment (a person being smashed)
    and pinching (a hand going through gears)
tags:
  - Article
  - CSS
  - CSSWG
  - Logical Properties
series: CSS logical shorthands
action:
  text: Sponsor our work on logical shorthands
  url: https://opencollective.com/oddbird-open-source/contribute/css-logical-shorthands-86141
summary: >
  We're trying to make progress
  on shorthand syntax
  for CSS logical properties.
  But the path forward
  depends on where we hope to be
  a decade from now.
---

## What are flow-relative 'logical' properties?

The specification for
[CSS Logical Properties & Values](https://www.w3.org/TR/css-logical/)
was first published as a
[Working Draft](https://www.w3.org/TR/2017/WD-css-logical-1-20170518/)
in 2017,
almost three years after
[the first GitHub commit](https://github.com/w3c/csswg-drafts/blob/156b081188738ea7ecd1aa6a168e4347d339b19f/css-logical-props/Overview.bs).
In many ways,
this is an offshoot of the
spec for [CSS Writing Modes](https://www.w3.org/TR/css-writing-modes/)
[first published in 2010](https://www.w3.org/TR/2010/WD-css3-writing-modes-20101202/).

Writing Modes define
how the text flows in a document.
Many languages are written horizontally
(either left-to-right or right-to-left)
with lines of text stacking
from top to bottom.
This is the default `horizontal-tb` writing mode.
But some languages can also be written vertically,
and stack in either direction:
`vertical-lr` or `vertical-rl`.

In any given writing mode,
text creates lines on one axis,
and those lines wrap to stack up on the cross axis.
We call those the `inline` and `block` axes respectively.
This allows us to use
'flow-relative' or 'logical' language
in place of the 'physical' terms
that CSS started with:

- Axes: `horizontal`/`x` and `vertical`/`y`
  are always fixed in place,
  but `inline` and `block`
  change relative to the writing mode.
- Directions & sides: If we also account for
  the text direction (`rtl` or `ltr`) then the
  `top`, `right`, `bottom`, and `left` sides
  can be replaced with
  `inline-start`, `inline-end`, and so on.
- Dimensions: The `width` and `height`
  of an element can be described
  as the `inline-size` and `block-size`.

{% callout 'note', 'Side quest' %}
The original specifications
use `length` (or later `extent`) and `measure` to describe
the block and inline dimensions.
That eventually became `block-size` and `inline-size` in 2014,
which I think is a big improvement for clarity.
I [trace this history in my notes](https://css.oddbird.net/logical/research/#why-inline-size-but-padding-inline),
with links to all the discussion I can find.
{% endcallout %}

_CSS Logical Properties & Values Module Level 1_
defines a number of flow-relative values
for existing properties such as `flow`, `clear`,
`text-align`, and `resize`.
Then it defines two logical dimension properties --
`inline-size` and `block-size` --
and a list of logical sub-properties
for `margin-<side>`, `padding-<side>`, and `border-<side>`.

## What about logical shorthands?

CSS provides several 2-value
logical shorthand properties,
allowing us to specify
both `-start` and `-end`
values on either the `inline` or `block` axis.
I find these extremely useful
for quickly setting the `margin-block`,
`border-block`, and `padding-block` on elements:

{% import 'embed.macros.njk' as embed %}

{{ embed.codepen(
  id='RNwYrEB',
  title='2-Value Logical Shorthands',
  user='miriamsuzanne'
) }}

{% callout 'note', 'Side quest' %}
These 2-value properties
don't have any physical counterparts.
There is no `margin-vertical` or `margin-y` property.
Should there be?
Let us know what you think
on [Mastodon](https://front-end.social/@oddbird)
or [Bluesky](https://bsky.app/profile/oddbird.dev/)!
{% endcallout %}

The Logical Properties spec also
[includes a proposal](https://www.w3.org/TR/css-logical-1/#logical-shorthand-keyword)
that was never implemented by browsers,
so that we can use the existing
4-value `margin`, `padding`, or `border` shorthands
to set the logical rather than physical values.

Since these properties already exist
and have a purely physical meaning,
it's a bit more work.
But the spec adds an optional `logical` keyword
that can be set before the value:

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

That's one of four approaches
discussed in a [2017 Github issue](https://github.com/w3c/csswg-drafts/issues/1282)
which Elika Etimad (_fantasai_)
opened a few weeks before publishing the spec:

1. Add a _keyword_ like `logical` or `relative` to the value
2. Use a _flag_ like `!logical` or `!relative` to toggle declarations
3. Create _new shorthands_ like `margin-logical` and `padding-logical`
4. Add a single _toggle property_ like `margin-mode: relative`

For now we'll set aside
finding the right _word_ (logical, relative, or something else),
and focus on choosing a _mechanism_:
keyword, flag, special shorthands, or toggle.
These all have potential issues --
which I'll cover with more detail
in the another post --
but option 4 raises an important issue
we should address right away.

## Is a global solution possible?

The first three proposals are declaration-level solutions,
which we have to repeat
every time we use the shorthand syntax.
The result is a logical shorthand
that's significantly _less short_
than the physical alternatives.

That might be okay as a partial fix,
but if we stop there
logical shorthands still feel
like a second-class feature.
That's a big problem for the language.
It's hard to encourage a logical-first approach as the best practice,
when the language is clearly giving preference
to physical values instead.
Will it still make sense 10 years from now,
or will it always feel like
[a mistake](https://wiki.csswg.org/ideas/mistakes)
we're stuck with for legacy reasons?

A toggle like `margin-mode` would be one approach to that,
similar to the `box-sizing` property.
I'm not sure we would actually need
different mode-toggles for each shorthand,
so let's call it `shorthand-mode` for now.
But that still comes with some significant issues.

First,
we have to consider _the order of the values_.
I don't know why Bert Bos and Håkon Lie
used the clockwise
top-right-bottom-left ordering
for 4-value properties.
The best thing about it
is the alternating-axis,
which allows us to shorten things even more --
down to 3 values, 2 values, or even a single value:

```css
article {
  /* top, right, bottom, left */
  margin: 1em 2em 3em 4em;

  /* top, right & left, bottom */
  margin: 1em 2em 3em;

  /* top & bottom, right & left */
  margin: 1em 2em;

  /* all at once! */
  margin: 1em;
}
```

That would still be possible
if we went _counter-clockwise_,
and everything else about it would make more sense.
Given a default `horizontal-tb` writing mode
and the default `ltr` text direction,
why do we set the `block-start` first,
then the `inline-end`?
Why is the `inline-start` at the very end?

Given this reality,
if we assume the default flow of text
and try to directly transpose
the syntax from physical to relative,
it looks strange:
`block-start` then `inline-end`,
`block-end`, and `inline-start`.
Sure, I could learn that --
but it has absolutely no logic to it
outside that direct transposing of defaults.

If the entire goal is to have
a flow-relative set of values,
they should have a flow-relative order as well.
That's why grid syntax (for example)
uses `block-start` and then `inline-start`,
and then the alternating `-end` values.

That leads to the second issue:
Any global toggle will be applying
_action-at-a-distance_.
The toggle is not positioned in our code
next to the values that it will impact.
When we encounter a margin of `1em 2em 3em 4em`,
we have no idea what that value _means_
until we find the toggle.
If that toggle is another value in the cascade,
there is _no way to know_ what mode we're in
before rendering the page,
and allowing the cascade to resolve.

This works okay for `box-sizing`,
which only impacts the `width` and `height` properties.
We can set the toggle on an element
as we size it,
and generally assume the three properties
will cascade together.
If a third-party tool is using a different mode
to size specific components,
we can make sure the right `box-sizing` is applied
on those components specifically.

But there are many properties
that could accept logical properties,
and they aren't always clearly related.
Are we sure we want
`scroll-snap-margin` to use the same mode
as `border-radius` and `box-shadow` and `background-position`?
Are we going to create distinct toggles for each?

## Finding a path forward

We can continue to discuss
the pros and cons of each syntax,
but this is where we're forced to step back
and consider the bigger question:

_No one knows the full list of CSS properties
that will be impacted by our choice_.

- Before we can pursue a global toggle
  (cascading or otherwise)
  we have to know which properties will be impacted,
  and what that impact looks like
  on each individual property.
- Even when we provide a global toggle,
  we will likely need a per-property syntax
  to opt-out in specific situations.
  That means we need a property syntax first,
  even if we plan on a global solution later.
- We can't even determine
  which of our proposed declaration-level solutions are viable
  without seeing the full list of properties
  where they will be applied.

We will also have to consider the serialization
and CSSOM representations for each property.
We can get into all of that
in more detail later,
but the current blocker is clear --
and it's been blocking this issue
for several years now…

## We need to know what we're talking about

Before anything else can move forward,
_someone has to make a list_
of all the shorthand properties that accept physical dimensions,
but should allow logical dimensions as well.
That's a lot of research,
and that's what we're
[currently trying to fund](https://opencollective.com/oddbird-open-source/contribute/css-logical-shorthands-86141).

Are you willing to help support that work?
