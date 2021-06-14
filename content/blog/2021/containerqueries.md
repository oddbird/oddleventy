---
card: large
title: "Container Queries: a Quick Start Guide"
sub: Now is the time to begin experimenting with a long requested layout tool.
author: davidh
date: 2021-04-05
image:
  src: blog/2021/widequote.png
  alt: blockquote with magenta background and polygonal clip-path
tags:
  - CSS
  - CSSWG
  - Article
  - Container Queries
summary: |
  The `@container` query, that elusive feature developers have been requesting
  and proposing for years, has finally made its debut in a browser. Well, sort
  of. Here we'll explain what container queries are, how they work, and what
  other features they might come with once fully supported in browsers.
---

{% import 'embed.macros.njk' as embed %}

In the latest version of [Chrome Canary](https://www.google.com/chrome/canary),
the most recent `@container` query proposal is available for use behind an
experimental flag. Developed by OddBird's own [Miriam
Suzanne](https://www.oddbird.net/authors/miriam/), the
[draft](https://github.com/w3c/csswg-drafts/issues/5796) builds upon the ideas
previously proposed by other web standards experts like David Baron, who wrote
the [original
draft](https://github.com/dbaron/container-queries-implementability).

## Background

`@Media` queries sparked a responsive design revolution by allowing authors to
change the style of elements based on the size of the entire viewport. Up until
now, what could not be done was changing the style of an element based on the
size of one of its nearest containers.

## Syntax and an example

The proposed `@container` query syntax feels a lot like writing a `@media`
query, but a main difference is that a `@container` query has to be implemented
in two parts.

In this demo (which only works in the latest version of [Chrome
Canary](https://www.google.com/chrome/canary)), a `blockquote` is styled
differently depending on the size of its container.

{{ embed.codepen(
  id='YzpywrZ',
  title='Container Queries with Block Quotes',
  user='dvdherron',
  height=600
) }}

### Define a containment context

To achieve this, first define a containment context. This lets the browser know
which container to query against later and how exactly to query that specific
container.

```scss
article,
section {
  contain: layout size style;
}
```

The `contain` property is part of the existing [CSS Containment
Module](https://drafts.csswg.org/css-contain/). The `layout` value activates
[layout
containment](https://drafts.csswg.org/css-contain/#valdef-contain-layout) on the
container, which ensures that "nothing outside can affect its internal layout,
and vice versa." `Size` also [currently
exists](https://drafts.csswg.org/css-contain/#size-containment) as a value for
the `contain` property, and enables laying out a containment box without
accounting for its descendants in either the inline or block axes.
`Style` [containment](https://drafts.csswg.org/css-contain/#style-containment)
isolates counters that might exist inside of the container.

```scss
article,
section {
  contain: layout inline-size style;
}
```

With `inline-size`, a proposed change to the Containment Module, authors can be
more specific when declaring in which dimension containment should be applied.
(`Block-size` is also being considered as a containment type in the new
proposal. `Inline-size` seemed to satisfy more use-cases, so is being developed
first.)

### Apply @-rules at desired breakpoints

Now that a containment context has been defined, the `@container` rule is used
to tell the browser when and how styles should change inside each container.

With a narrow parent container, the `blockquote` features the image stacked on
top of the text.

{{ embed.figure(
  data=[{
    img: 'blog/2021/narrowquote.png',
    alt: 'profile image on top of quote'
  }],
  caption='The profile image sits on top of the quote in narrow containers.'
) }}

At the first breakpoint, the layout for the `blockquote` changes so that the
profile image moves from being above the quote to sitting next to it, and the
text describing the speaker gets a heavier weight applied.

{{ embed.figure(
  data=[{
    img: 'blog/2021/break1.png',
    alt: 'profile image next to quote'
  }],
  caption='The profile image changes position at the first breakpoint to sit next to the quote.'
) }}

```scss
/* change styles according to container size */
@container (min-width: 35em) {

  .quote {
    grid-gap: 1rem;
    grid-template: "media quote" auto/ max-content 1fr;
  }

  .media {
    align-items: center;
  }

  .source {
    font-weight: bold;
  }
}
```

At the second breakpoint, the size of the text for the quote and the attribution
grows, the background changes color, and the overall shape of the `blockquote`
changes by way of a `clip-path`.

{{ embed.figure(
  data=[{
    img: 'blog/2021/break2.png',
    alt: 'blockquote with magenta background and clip-path'
  }],
  caption='At a wider breakpoint, the blockquote gets a clip-path and a different background color.'
) }}

```scss
@container (min-width: 60em) {

  .quote {
    --quote-size: 1.5rem;
    --quote-background: darkmagenta;
    clip-path: polygon(
      -0.04% 100.6%,
      1.12% -0.52%,
      95.65% 11.18%,
      96.46% 90.05%
    );
    padding: 1.25em 3em;
    max-width: unset;
  }

  .source {
    font-size: 1.1rem;
  }
}
```

Any styles inside of one of these `@container` blocks will be applied when the
container fulfills the condition of the query.

Just as with `@media` queries, authors can write as many `@container` queries as
needed.

## All together now

With each `blockquote` sitting in a different sized container, they all look
slightly different, at the same viewport size.

{{ embed.figure(
  data=[{
    img: 'blog/2021/allquotes.png',
    alt: 'three blockquotes, styled differently'
  }],
  caption='The same blockquote component gets styled differently depending on its container size.'
) }}

## What's next?

It's still very early in the proposal process, so a lot regarding how container
queries work could change.

- There might be a way to contain only the block axis.
- Queries could also be made against properties like `aspect-ratio`,
  `orientation,` or even [custom properties and layout
  states](https://github.com/w3c/csswg-drafts/issues/5989).
- We already have viewport-relative units like `vh` and `vw`.
  [Container-relative units](https://github.com/w3c/csswg-drafts/issues/5888)
  could be on the horizon as well.

Bookmark Miriam's scratch site for updates: [Miriam's CSS
Sandbox](https://css.oddbird.net/rwd/query/).

To participate in discussions and implementation questions related to
`container` queries, visit this project board: [Open Issues & Work on the
Contain 3 Spec](https://github.com/w3c/csswg-drafts/projects/18).

## Experiment and share

Follow these steps to get started experimenting and making your own demos:
- Download [Chrome Canary](https://www.google.com/chrome/canary) or update to
  the latest version.
- Navigate to `chrome://flags`.
- Search for "CSS container queries" and select `Enabled`.
- Restart the browser.

The OddBird team would love to see what you come up with. Tag us on
[Twitter](https://twitter.com/OddBird) with a link to whatever you create. In
the meantime, check out our collection of demos on
[CodePen](https://codepen.io/collection/XQrgJo?grid_type=grid&sort_by=item_created_at&sort_order=desc)
for inspiration.
