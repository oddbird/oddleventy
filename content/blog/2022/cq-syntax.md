---
title: Use the Right Container Query Syntax
sub: Size queries are stable, and shipping in browsers
author: miriam
date: 2022-08-18
image:
  src: talks/container-query.jpg
  alt: |
    Wireframe of card elements
    in different sized containers --
    some laid out vertically in small spaces,
    others horizontal when there's room.
  position: top
tags:
  - Article
  - CSS
  - CSSWG
  - Container Queries
summary: |
  Since we got a first look at
  a Container Queries prototype
  back in April 2021,
  the syntax has changed a few times.
  But now the spec is stable,
  browsers are getting ready to ship,
  and it's time to make sure
  you're using the same syntax they are!
---

{% import 'embed.macros.njk' as embed %}

{% callout %}
We'll keep this article up-to-date
if there are any further developments --
but now that the feature
is beginning to ship in browsers,
it is very unlikely that there will be
any breaking changes.
{% endcallout %}

Container Queries
allow us to measure (or 'query')
aspects of a 'container' element,
and style any descendants
based on the result of the query.
This is very similar to
Media Queries,
which allow us to query the overall
_browser viewport_.

If you haven't encountered
Container Queries before,
there are many
[resources available](https://css.oddbird.net/rwd/query/#articles--demos)
on the web.
[David Herron](/authors/davidh/)
wrote a great
[Quick Start Guide](/2021/04/05/containerqueries/)
back in April 2021,
when Chrome Canary
shipped the first prototype of the feature.

Since then
the syntax has gone through several revisions.
That's why we prototype --
it allows us to learn and make changes,
before developers are relying on the feature
in production.
The downside is,
many people (including me!) have written articles,
made demos,
given talks,
and released videos
using now-out-of-date syntax.

Now Safari and Chrome
have both signaled that
they are ready to ship
Container size queries and units,
likely starting in late August 2022.

So, what syntax
is actually shipping in browsers?

## TL;DR, a code sample

```css
main, .sidebar {
  /* establish containers for inline-size queries */
  container-type: inline-size;
}

main {
  /* optionally give a container one or more names */
  /* - use any names you want, there are no pre-defined options */
  container-name: main-content page-layout;
}

article {
  /* a shorthand to set both names and types */
  /* - names are required and come first in the shorthand */
  container: article-layout / inline-size;
}

/* query the nearest ancestor container named page-layout */
/* - using a container-name is optional in the query */
/* - we can also use the old `(min-width: 40em)` syntax */
@container page-layout (inline-size > 40em) {
  .card {
    grid-template-columns: auto 1fr;
  }
}

h2 {
  /* container-query-inline units */
  font-size: max(1.2em, 1em + 2cqi);
}
```

If you are looking at an old demo,
talk, or article,
and wondering why it doesn't work,
there are two major changes
that you should check first:

- [The container shorthand](#the-container-shorthand)
- [Container query units](#container-query-units)

Let's dig into the details...

## Establishing containers with `container-type`

In order to query elements in the page,
we need to define them as _query containers_.
We can do that with the `container-type` property,
which defines the questions we're able to ask
about a given container.

The initial value is `normal`.
By default,
all elements are _style containers_ --
meaning we should be able to query the
[computed value](https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value)
of any property on any element.
But don't worry about that yet,
**browsers are shipping
size queries and units first**.[^style]
For now, you can use the `normal` value
to override other values --
similar to using the `initial` keyword.

Size containers need to be defined explicitly,
because they require special _size containment_
in order to function.
Normally, the size of an element
would be based on the size of its contents --
but if we query that size,
and change the contents based on the query,
we have an infinite loop.
Size containment breaks that loop
by ensuring the size of a container
is not based on the size of its contents.

Here we have two options:

- `inline-size` establishes size containment
  on the _inline axis_ (the direction that text flows),
  and allows us to query the _inline size_
  of the container.
  **This is almost always what you want**.
- `size` establishes size containment
  on both dimensions of the container,
  and allows us to query either the inline or block size.
  **Be careful with this** --
  elements might collapse entirely
  if they can't get either a width or height value
  from their contents.

There is no `block-size` option.
I won't go into all the reasons here,
but it wasn't possible for browsers to implement,
and there are fewer use-cases for it anyway.

Over time,
Media Queries have expanded
to cover much more than viewport sizing --
we can query user preferences,
display quality,
color-depth,
interaction capabilities,
and more.
We expect a similar expansion
with Container Queries.
_Size queries_ will ship this summer,
but _style queries_ are already well-defined,
and ready for browsers to implement.
We're also looking into a range of possible
_state queries_ --
for example,
selecting elements inside a `position: sticky` container
based on the stuck or unstuck 'state'
of that container.

[^style]: Chrome has started to implement
  a prototype of style queries
  (_for custom properties only_)
  in Chrome Canary,
  using the `--enable-blink-test-features`
  runtime (command line) flag.
  Keep an eye out for more details soon!

## Naming containers with `container-name`

By default,
a container query will look for
_the nearest ancestor container of the appropriate type_.
So if we ask about the `inline-size` of a container,
we'll get the inline dimensions of
the nearest ancestor with a size-based `container-type`.
That's a handy default,
but it's more resilient if we can name our containers,
and know that we're measuring the right thing.

We can do that with the `container-name` property.
It allows us to give a container
_any number of custom names_ that we want.
Those names can be any valid CSS 'custom-ident'
that we come up with
(similar to naming keyframe animations, grid-areas, layers, etc),
and they are not required to be unique.
There are only a few reserved words --
like `none` or `not` or `initial` --
that we can't use as names.

Think of container-names more like a 'class' than an 'ID'.
We can make them as broad or specific as we need.
I think it's useful to establish
some broad categories like
`layout` or `component` --
and then occasionally add more
detailed/specific identifiers as needed
(like `main` in the code sample above).

## The `container` shorthand

There's also a `container` shorthand
that allows us to define both the container
types and names in a single property.
This should only be used
to set both the name **AND** type of a property:

```css
main, .sidebar {
  /* <name> comes before the slash, <type> comes after */
  container: page-layout / inline-size;
}
```

{% callout %}
_Names go first_, before the slash.
**This is one of the big changes
that will break a lot of demos.**
In an earlier draft of the feature,
the order was reversed.
If you see an old container query
article or talk or demo
that no longer works,
_this is probably why_.
{% endcallout %}

## Container Query units

Did you know that
Container Queries
also come with their own units?
These work the same as
_viewport units_
(`vw`, `vh`, `vmin`, etc) --
but if they end up inside a size container,
they'll use the container dimensions
instead of the viewport dimensions.
If they aren't inside a container,
they'll use the 'small viewport' dimensions.

- `1cqw` - `1%` of a query container’s width
- `1cqh` - `1%` of a query container’s height
- `1cqi` - `1%` of a query container’s inline size
- `1cqb` - `1%` of a query container’s block size
- `1cqmin` - The smaller value of `cqi` or `cqb`
- `1cqmax` - The larger value of `cqi` or `cqb`

{% callout %}
**This also changed
after some of the early demos came out.**
The original prototype
used `q*` instead of `cq*`
as the unit prefix.
{% endcallout %}

Scott Kellum
has a great demo on Codepen:

{{ embed.codepen(
  id='jOwmOZE',
  title='Container units',
  user='scottkellum',
  height=500
) }}

## Querying containers with `@container`

Now that we have some (size) containers defined,
we can query various aspects of their dimensions:[^size]

```css
@container (inline-size > 40em) {
  h2 { font-size: 1.5em; }
}

@container page-layout (min-width: 35em) {
  .card {
    grid-template-columns: auto 1fr;
  }
}
```

There are a few things to note here:

- The optional 'range syntax' -- e.g. `(inline-size > 40em)` --
  is a [separate feature](https://www.bram.us/2021/10/26/media-queries-level-4-media-query-range-contexts/),
  which is allowed in media queries
  as well as container queries.
  However,
  at this point,
  Safari only supports it in container queries.
- Each `h2` and `.card` element on the page
  will query _its own container_.
  An `h2` will query the nearest ancestor size container,
  but a `.card` will only query ancestors
  that also have the correct `page-layout` name.
- `em`-based media queries use the 'browser em' (usually `16px`),
  but container-queries actually resolve units
  _based on the font-size of the container_.

[^size]: Check out the spec
  for a full list of
  [size container features](https://drafts.csswg.org/css-contain-3/#size-container)
  that can be queried --
  like `aspect-ratio` and `orientation`.

## Browser support

Apple doesn't announce their release schedule in advance,
but we know they are planning to ship
size queries and units in Safari 16,
and that the version is already _frozen_
(no more changes before release) --
we just don't know when it will
actually go public.
Chrome 105
will also support size queries and units --
shipping on August 30, 2022.
Firefox is
[actively working on support](https://bugzilla.mozilla.org/show_bug.cgi?id=1744221),
but hasn't yet announced when it will be ready.

Here's the support
for each feature:

{{ embed.caniuse('css-container-queries') }}
{{ embed.caniuse('css-container-query-units', script=false) }}

## Safari bug with 'negated' queries

There's one small bug worth noting in Safari,
but it only applies to queries using the keyword `not`.
The following is a valid container query
that should apply when the inline size
is _not greater than_ `40em`:

```css
@container not (inline-size > 40em) { /* … */ }
```

Safari currently reads that as
a container with the name of `not`,
and an `inline-size` that is _greater-than_ `40em`.
You can get the correct behavior
in all browsers
by wrapping the entire query in parentheses:

```css
@container (not (inline-size > 40em)) { /* … */ }
```

You can also expect Safari to fix this
as soon as they're able to release a patch.
