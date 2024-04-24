---
title: Can We Query the Root Container?
sub: The complexities of containment, overflow, and 'propagation'
author: miriam
date: 2023-07-05
tags:
  - Article
  - CSS
  - Container Queries
  - CSSWG
image:
  src: blog/2023/container.jpg
  alt: >
    The top front of a bright yellow shipping container
    with the door open
    and a blue sky behind it
summary: |
  I spoke about Container Queries
  at both Smashing Conference (San Francisco)
  and CSS Day (Amsterdam) --
  where I recommended setting up a root container
  to replace most media queries.
  Since then,
  [Temani Afif](https://front-end.social/@css/110513977760791600)
  pointed out a few issues with that approach,
  and sent me down a rabbit hole of
  overlapping specs and browser bugs.
---

{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}

<details>
<summary id="toc">Article contents</summary>
<nav class="toc-nav" aria-labelledby="toc">

- [Why we need containment for queries](#why-we-need-containment-for-queries)
- [The dangers of containment](#the-dangers-of-containment)
- [The case for a root container](#the-case-for-a-root-container)
- [Is it safe to contain the root element?](#is-it-safe-to-contain-the-root-element%3F)
- [What is root/body propagation, and how does it work?](#what-is-root%2Fbody-propagation%2C-and-how-does-it-work%3F)
- [Containment and propagation (according to spec)](#containment-and-propagation-(according-to-spec))
- [What browsers implemented](#what-browsers-implemented)
- [So… Can we have a root container?](#so%E2%80%A6-can-we-have-a-root-container%3F)

</nav>
</details>

{% set tldr = ['TL;DR Update', utility.datetime('2024-04-24')] | join(' ') %}
{% callout 'note', tldr %}
While there's a workaround (below)
that will allow you to query the root element,
it's not a perfect solution.
We've found it simpler to apply containment
on all the major layout blocks
directly inside the `body` --
things like `nav`, `header`, `main`, and `footer`.

That ensures every nested component
will have a container to query,
without creating problems on root.
It also allows you to put some things
_intentionally outside_ a container,
if you need them to use the viewport
as a positioning context
(with `position: fixed`, for example).
{% endcallout %}

## Why we need containment for queries

We were told for years
that container queries
would be impossible to implement --
_and for good reason_.
CSS layout depends on a powerful and complicated
balancing of 'content' and 'context':

- Change the size of a containing element,
  and all its contents will re-flow
  to try and fit the new context size.
- Change the size of nested elements
  (adding or removing content, for example)
  and the container will re-flow
  to try and properly contain the new content size.

Introducing 'container queries'
directly in this system
would cause a sort of
[Observer's Paradox](https://en.wikipedia.org/wiki/Observer%27s_paradox).
We want to measure the context
so that we can make changes to the content --
but the context size is _based on the content size_,
and so we end up changing the thing we are trying to measure.

The solution is
[containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment),
which allows us to break
the outward flow of content information,
breaking the loop.
In order for container size queries to work,
we have to [contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
the size, style, and layout
of our containers.
We can do that by specifying
a [`container-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)
of `size` (to contain both width and height)
or `inline-size` (to only contain the inline axis).
We can only query the dimension(s) we contain.
Both container types
also get `layout` and `style` containment.

## The dangers of containment

But containment comes with a price,
and can have some surprising side effects:

- Layout containment creates
  a new (`z-index`) stacking context,
  as well as containing floated
  and fixed-position elements.
- Style containment
  scopes all counters to a given context.
- Inline-size containment on block elements
  will usually go un-noticed,
  but full `size` containment
  will collapse the box
  unless we provide an external block-size.

{{ embed.codepen(
  id='YzRVPma',
  title='Containment Examples',
  user='miriamsuzanne'
) }}

While there's no problem generally
with defining lots of containers on a page,
we need to be somewhat cautious about
the impacts of containment.
As a general rule,
we want to use `inline-size` for most containers,
and only use `size` for containers
that will be allowed to overflow.
When we allow overflow on elements,
we generally also give them a way to size
based on something other than their contents.
The difference between the 'intrinsic' (content) size
and the 'extrinsic' size
is what causes overflow in the first place.

## The case for a root container

Container size queries
are mostly intended to solve the problem
of _nested containers_.
If we have a `.card` element
which might be in the main body of the page,
might be in a narrow sidebar,
and might be in a responsive grid --
measuring the 'viewport' with `@media`
doesn't tell us much
about the space that's available for each card.
With `@container`,
we can have each `.card` query
the space that it lives in.

But container queries provide
a few additional features
that are not possible with `@media`,
and might be useful
even when we're measuring the outermost container.
Most importantly:

- With `em`-based media queries,
  we don't have access to the user settings
  or the actual font size we establish
  on the root element --
  the query will always use the 'browser default'
  (usually `16px`) as the size of an `em`.
- Container queries using relative units
  will resolve based on the
  _actual font size_
  of the container element.
  If we set font-size to grow responsively,
  our queries will respond to that growth.
- Eventually,
  we will also be able to use custom properties
  in container queries.

The side-effects of containment
also seem like they should be minimal on the root element.
The root (`html`) element
seems like a great candidate for `size` containment:

- We want to size it
  based on the (extrinsic) viewport size,
  rather than the (intrinsic) contents of the site.
- We want it to overflow
  rather than resizing
  if the contents get too long.
- If the root element is the root scroller
  (I'm foreshadowing here)
  then fixed-position elements
  should continue to work as expected:
  fixed to the root.
- There are no outside counters or quotes
  for us to worry about.

With `container-type: size` on the root,
we could replace most or all
`@media` size queries with `@container`
across our sites.
That feels right to me!

## Is it safe to contain the root element?

👍🏼 It should be. \
👎🏼 But it isn't. \
🤷🏻‍♀️ Unless you're careful?

Currently,
adding a `container-type` of `size`
to the root (`html`) element
will make scrolling impossible:

{{ embed.codepen(
  id='QWJbLLe',
  title='HTML containment & overflow (2d)',
  user='miriamsuzanne'
) }}

And using `inline-size` instead
will fix the scrollbar issue,
but now fixed elements
scroll off the page:

{{ embed.codepen(
  id='dyQWdag',
  title='HTML containment & overflow (1d)',
  user='miriamsuzanne'
) }}

Neither behavior
will work as a default for most sites.

Various people in that thread
pointed to 'root/body propagation'
as the cause.
And they're right --
but as far as I can tell,
they shouldn't be.
I was involved with several conversations
in the CSS Working Group
around containment and propagation,
and this is not what we decided.
It's also not defined
to work like this
in the specification.

As far as I can tell,
this is a browser bug --
implemented in all browsers --
that needs to be fixed.

## What is root/body propagation, and how does it work?

For us as web authors,
the root of a document
is the `html` element.
But for browsers,
there's more context to worry about
-- more root than the root --
such as
the _viewport_,
the _document canvas_,
the _initial containing block_,
and the _initial layout block_.

I am not an expert on the complexities
of these browser concepts --
but roughly, together,
they describe the context
immediately surrounding our web pages
in the browser:
the 'viewport' through which we're looking,
the 'canvas' our site is painted onto,
and the 'blocks' that defines
our initial positioning and layout context.
For simplicity,
I'm going to refer to all of this
collectively as The Viewport.

We don't have direct access
to The Viewport.
There's no CSS syntax we can use
to select and style any aspect of The Viewport.
And yet, we style them all the time
using the somewhat quirky and esoteric magic
of 'propagation' --
where styles on one element
(in this case `html` or `body`)
bubble outward ('propagate')
and apply to a parent element instead.

For example,
when we set a `background` on `html`,
that background
[propagates to the document canvas](https://drafts.csswg.org/css-backgrounds/#special-backgrounds)
instead.
If we don't set a background on `html`,
but we do set a background on `body`,
then the `body` background
propagates instead --
skipping over the root,
and straight up to the canvas!

<figure>
{{ embed.codepen(
  id='eYQWyGq',
  title='Body background propagation',
  user='miriamsuzanne'
) }}
<figcaption>

The `papayawhip` background
covers the entire window,
despite the `body` outline
surrounding a fraction of that space.

</figcaption>
</figure>

Background isn't the only element
that propagates out
from the `html` or `body` element
to the viewport.
I haven't found a full list anywhere --
this is defined spec-by-spec
for individual properties --
but the one causing issues for us is `overflow`.

[Overflow Viewport Propagation](https://drafts.csswg.org/css-overflow-3/#overflow-propagation)
is defined in
[CSS Overflow Module Level 3](https://drafts.csswg.org/css-overflow-3/):

> UAs must apply the overflow-* values
> set on the root element
> to the viewport
> when the root element’s display value is not none.

Unless we hide the root element,
overflow properties will always propagate.
But not always from the root:

> However, when the root element is an HTML `<html>` element
> (including XML syntax for HTML)
> whose overflow value is visible (in both axes),
> and that element has as a child a `<body>` element
> whose display value is also not none,
> user agents must instead apply the overflow-* values
> of the first such child element to the viewport.
> The element from which the value is propagated
> must then have a used overflow value of `visible`.

If both the `html` and `body` elements are un-hidden (the default),
and the `html` element has the default overflow (`visible`),
then we propagate the overflow
from `body` instead of `html`.
Once that propagation happens,
the browser ignores the actual overflow values
on both `body` and `html` --
using a value of `visible` instead.

This is very similar to how background propagation works,
except for one final twist:

> If `visible` is applied to the viewport,
> it must be interpreted as `auto`.

So, in the default case --
before we apply any outside CSS --
the `visible` default of the root `html` element is ignored,
the `visible` default of the `body` element
propagates up to the viewport,
which ignores the propagated value,
treating it as `auto` instead.

By default,
after all that,
we get scrollbars
when content overflows the viewport.
Simple. 🥴

There's a reason
the CSS Working Group
[has resolved](https://github.com/w3c/csswg-drafts/issues/6079#issuecomment-816307011)
that:

> RESOLVED: No future properties should propagate from `<body>` to the ICB

('ICB' is the Initial Containing Block.)

> RESOLVED: deprecate any existing use of body propagation

Body propagation was a mistake.
We're stuck with it now,
but we don't have to protect it moving forward.

## Containment and propagation (according to spec)

[CSS Containment Module Level 2](https://drafts.csswg.org/css-contain-1/#contain-property)
does provide some caveats
around root/body propagation and containment:

> When any containments are active
> on either the HTML `<html>` or `<body>` elements,
> propagation of properties from the `<body>` element
> to the initial containing block, the viewport, or the canvas background,
> is disabled. Notably, this affects:
>
> - `writing-mode`, `direction`, and `text-orientation`
>   (see CSS Writing Modes 3 § 8 The Principal Writing Mode)
> - `overflow` and its longhands
>   (see CSS Overflow 3 § 3.3 Overflow Viewport Propagation)
> - `background` and its longhands
>   (see CSS Backgrounds 3 § 2.11.2 The Canvas Background and the HTML `<body>` Element)

(Maybe this is the complete list?!
If you know of a better list,
or want to put one together,
please [tell us about it](/contact/).)

And then we get a clarification:

> NOTE: Propagation to the initial containing block,
> the viewport, or the canvas background,
> of properties set on the html element itself is unaffected.

The logic,
as I understood it
(and taught it at these recent conferences)
_goeth thusly_:

- Because containment needs to stop the flow of information outward,
  it must cut off any propagation from the body to the viewport.
- That's ok, we don't like body propagation anyway.
- But we can't simply remove a decades-old default.
- So _browsers_ can't apply containment on root,
  but _authors_ [can opt-in](https://github.com/w3c/csswg-drafts/issues/6178)
  to that behavior.
- As long as they don't rely on body propagation, they'll be fine!

I think that logic makes good sense,
and my expectations match
the text of the spec as I read it.
But all the browsers implemented something else.

## What browsers implemented

{% set notABug = ['Update', utility.datetime('2023-08-01')] | join(' ') %}
{% callout 'note', notABug %}
According to
[browser engineers in the CSSWG](https://github.com/w3c/csswg-drafts/issues/9003#issuecomment-1646246626),
my explanation here wasn't quite right.

The actual issue is that
overflow propagates as defined in the spec,
but containment remains on the root element.
Since the overflowing content is contained,
it is not visible to the viewport
(where overflow is now set).
Meanwhile, the root element
(which can see the overflowing content)
no longer has a specified value of `overflow`.

That is all proper
according to the current specification.
Any solution has to ensure
that overflow and containment
are applied to the same element --
either the root or the viewport.
Root is simpler,
but doesn't provide a number of scroll optimizations.
On the other hand,
it's not clear what it would even mean
for containment to propagate as well.

In the meantime,
the solution below still works.
{% endcallout %}

I am not a browser engineer,
but I've been trying to parse out
how browsers got a different answer than I did.

I'm not sure
if browsers are 'wrong'
when the root element has default `visible` overflow.
The spec says to propagate from the body,
but it doesn't say what to do
if containment breaks that propagation.
I would _expect_ the viewport
to still default to `visible` overflow,
which is then treated as `auto`.
But that's not stated explicitly,
and the spec may need some improvements.

However,
it does seem clear that a
_non-default_ overflow on root
should propagate to the viewport
with or without containment.
It works fine without containment:

{{ embed.codepen(
  id='jOQmzzG',
  title='Root overflow propagates fine',
  user='miriamsuzanne'
) }}

But when we add containment,
our non-default overflow no longer propagates:

{{ embed.codepen(
  id='xxQdWWB',
  title='Root overflow propagation plus containment',
  user='miriamsuzanne'
) }}

I filed an
[issue with the CSSWG](https://github.com/w3c/csswg-drafts/issues/9003).

## So… Can we have a root container?

**Yes, with caveats**.
There's a solution that works right now.
Instead of setting
height and overflow on the `html` element,
we use the `body` as our top-level scroll-container.
Here's the code:

```css
html {
  /* a size or inline-size container */
  container-type: size;
}

html, body {
  /* body and html both size to the viewport */
  block-size: 100%;
}

body {
  /* body is the root scroller */
  /* this value doesn't propagate */
  overflow: auto;
}
```

I made a codepen example
that allows you to play with
various combinations here,
and see how each one behaves.
With the combination above,
the body is able to scroll,
with fixed elements remaining in place:

{{ embed.codepen(
  id='zYMqBJP',
  title='Testing a Root Container',
  user='miriamsuzanne'
) }}

{% set tradeoffs = ['Update', utility.datetime('2024-04-24')] | join(' ') %}
{% callout 'note', tradeoffs %}
This is an acceptable solution in many cases,
but it comes with a trade-off.
Browsers provide a range of optimizations
for the 'root scroller'
which won't be applied to the `body` element here.
Your mileage may vary.
{% endcallout %}

But I would make one more change to the code above.
By adding names to containers,
we can better control what is being queried.
I like to give containers both
ID-style (unique) names,
along with class-like (shared) names:

```css
html {
  container: root layout / size;
}
```

Then we can explicitly query the root
any time we want:

```css
@container root (inline-size > 30em) { /* … */ }
```

Or we can query the nearest layout container:

```css
@container layout (inline-size > 30em) { /* … */ }
```

Happy querying!
