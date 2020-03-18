---
title: Understanding 'Spread' in Susy3
tags:
  - News
  - Susy
  - Open Source
  - Susy3
  - CSS
  - Sass
  - Grids
  - Code
author: miriam
image:
  src: blog/2017/spread/susy-spread.jpg
  alt: Narrow and wide spread column math
summary: |
  **Susy 3.0** will be released in the next week, if all goes well, and
  there's a lot to write about it. I wanted to start with a detailed
  overview of one core concept: **spread**.
date: 2017-06-13
---

Spread isn't new to Susy3, [or even to Susy generally], but its full
power is usually hidden behind other settings (like `gutter-position` in
Susy2), or opinionated assumptions about your grid. We didn't invent the
idea behind spread – every grid system has to make these decisions – but
we haven't seen anyone else talking about it explicitly.

In Susy3 we've tried to move in the other direction – naming spread, and
making it central to the API – giving you full control over the math.

[or even to Susy generally]: https://susy.readthedocs.io/settings/#spread

## Spread on Containers

Container-spread describes how a grid-parent (or container) handles
available gutters. Most grids only put gutters between the columns. That
means there will be one less gutter than there are columns. We call that
a `narrow` container-spread, and make it the default.

<img src="{{ site.images }}blog/2017/spread/context-narrow.jpg" class="extend-small" alt="container-spread: narrow" />

Some grids use "split" gutters, with half of a gutter on either side of
a column – forming full-gutters between columns, and an extra half at
the edges. Mathematically, that means we have an equal number of gutters
and columns. We call that a `wide` spread.

<img src="{{ site.images }}blog/2017/spread/context-wide.jpg" class="extend-small" alt="container-spread: wide" />

Occasionally, a grid will have full gutters on both sides, meaning there
is one more gutter than columns. We call that a `wider` spread.

<img src="{{ site.images }}blog/2017/spread/context-wider.jpg" class="extend-small" alt="container-spread: wider" />

## Spread on Spans

Spread describes the same concept as it relates to internal
grid-spanning elements. In most systems, including the new [CSS Grid
module], all spans are `narrow` – meaning they only span intermediate
gutters.

<img src="{{ site.images }}blog/2017/spread/span-narrow.jpg" class="extend-small" alt="spread: narrow" />

Occasionally it's useful to span as many gutters as columns – a `wide`
spread – if you have split-padding gutters, for example, or if you want
elements to touch at certain places, or if you are pushing and pulling
elements in the grid.

<img src="{{ site.images }}blog/2017/spread/span-wide.jpg" class="extend-small" alt="spread: wide" />

It's rare that you need to span a `wider` spread, but we'll let you
decide if it's useful.

<img src="{{ site.images }}blog/2017/spread/span-wider.jpg" class="extend-small" alt="spread: wider" />

[CSS Grid module]: /2016/09/19/css-grid-layout/

## Fluid Context

In Susy3 there is no single grid "container" element that receives
special treatment. Instead, container spans are described in the same
syntax as any other span – and any element containing other grid-aligned
elements is a container.

Fluid-span calculations require understanding both the container width
and span-width. The Sass math looks like this:

```scss
$fluid-width: percentage($span-width / $container-width);
```

For that reason, it's important to be explicit with Susy about the
spread of both containers and spans, when you are building fluid grids.
In the Susy3 syntax, that looks like:

```scss
$width: span(3 wide of 6 narrow);
```

If it comes before `of`, it describes the span. If it comes after `of`,
it describes the container. In most cases, there will be a sensible
default for both values, which you can set in the global settings:

```scss
// Both default to "narrow"...
$susy: (
  'spread': 'narrow',
  'container-spread': 'narrow',
);
```

## Common Use Cases

Commonly, all spans have a `narrow` spread. In fact, the CSS Grid module
doesn't provide any way to span across extra gutters. You would have to
achieve a `wide` or `wider` span using negative `grid-gap`-sized
margins.

There are times when you simply want to span across a gutter, for the
sake of style. But there are other common reasons to span extra gutters.
Let's look at a few.

### Pushing, Pulling, & Padding Elements

It's sometimes necessary to "push" and "pull" elements out of their
usual flow position, or add grid-aligned padding. You can do that by
using the `span` functions on the `margin` or `padding` of an element.
Push with positive left margins, pull with negative right margins, and
pad either side with the padding property.

In all those cases, you'll probably need a `wide` span in order to align
your content with the proper column:

### Split Gutters

Some grid systems use "split" gutters, with half a gutter on either side
of an element. That will add an extra gutter to your total grid width,
giving your common `container` a `wide` spread. If you are using split
gutters, you likely want to set `container-spread: wide` in your global
settings.

Here's a `wide` container, with `narrow` spans and split gutters:

If you move the gutters inside, using the `padding` property, both
`spread` and `container-spread` may need to be `wide`. I say "may"
because it also depends on your `border-box-sizing`. That's a whole new
article, and honestly: padding gutters make the math much simpler. If
you use padding gutters, there's a good chance you don't need Susy.

More about that in my next post. Until then: Happy coding!

Keep an eye out for the Susy3 release, coming soon! Follow us on
[Twitter], join our [public Slack channel], or [contact us] online.
We're excited to hear from you!

[Twitter]: https://twitter.com/oddbird
[public Slack channel]: http://friends.oddbird.net
[contact us]: /contact/
