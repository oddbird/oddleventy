---
title: Getting Started with Container Queries
sub: Now is the time to begin experimenting with a long requested layout tool. 
author: davidh
date: 2021-04-01
image:
  src: projects/w3c.jpg
  alt: W3C logo
tags:
  - CSS
  - CSSWG
  - Article
  - Container Queries
summary: |
  An early prototype version of **container queries** is now available in [Chrome Canary](https://www.google.com/chrome/canary). What are container queries exactly and how will they change the way we build layouts?
---

{% import 'embed.macros.njk' as embed %}

 The `@container` query, that elusive feature developers have been requesting and proposing for years, has finally made its debut in browsers. Well, sort of. As of the latest version of [Chrome Canary](https://www.google.com/chrome/canary), the most recent `@container` query proprosal, developed by OddBird's own [Miriam Suzanne](https://www.oddbird.net/authors/miriam/), is available for use behind an experimental flag. What _are_ container queries exactly? And how do they work?

 Bookmark Miriam's scratch site for updates: [Miriam's CSS Sandbox](https://css.oddbird.net/rwd/query/). 

 ## Background

`@Media` queries sparked a responsive design revolution by allowing authors to change the styles of elements based on the size of the entire viewport. Up until now, what could not be done was changing the style of an element based on the size of its parent element. 

## Syntax and an example

 The proposed `@container` query syntax feels a lot like writing a `@media` query, but a main difference is that a `@container` query has to be implemented in two parts.

In this demo (which only works in the latest version of [Chrome Canary](https://www.google.com/chrome/canary)), a `blockquote` is styled differently depending on the size of its container. 

{{ embed.codepen(
  id='YzpywrZ',
  title='Container Queries with Block Quotes',
  user='dvdherron',
  height=600
) }}

### Define a containment context

To achieve this, first a containment context must be defined. This lets the browser know which container to query against later. 

```scss
article,
section {
  contain: layout inline-size;
}
```

The `contain` property is part of the existing [CSS Containment Module](https://drafts.csswg.org/css-contain/). The `layout` value turns on [layout contaiment](https://drafts.csswg.org/css-contain/#valdef-contain-layout) on the container, which ensures that "nothing outside can affect its internal layout, and vice versa." The `inline-size` value is a proposed change to the Containment Module that would let authors explicitly declare in which dimension containment should be applied. 

### Apply @-rules at desired breakpoints
Now that the containment context has been defined, the `@container` rule is used to tell the browser when and how styles should change. 

```scss
/* change styles according to container size */
@container (min-width: 35em) {

  .first {
    --column: full;
    margin-bottom: 0.5rem;
  }

  .title {
    --title-background: forestgreen;
  }

  [data-quote] {
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

@container (min-width: 40em) {

  .spread {
    --column: full;
    display: grid;
    grid-template-columns: minmax(50%, 1fr) minmax(min-content, 20em);
    gap: 2rem;
  }
}

@container (min-width: 60em) {

  .title {
    --title-background: goldenrod;
  }

  [data-quote] {
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
Any styles inside of one of these `@container` blocks will be applied when the container fulfills the condition of the query. 

Just as with `@media` queries, authors can write as many `@container` queries as needed.

## What's next?

It's still very early in the proposal process, so a lot regarding how container queries work could change. 

Block-size containment might also be possible, as well as querying against physical values like `width` and `height`:

```css
.block-container {
  /* establishes a new containment context on the block axis */
  contain: layout block-size;
}
```

If containment on both inline and block axes is possible, queries might also be made against properties like `aspect-ratio` or `orientation`.


## Experiment and share

To get started experimenting and making your own demos:
- Download [Chrome Canary](https://www.google.com/chrome/canary) or update to the latest version. 
- Navigate to `chrome://flags`
- Search for "CSS container queries" and select `Enabled`.
- Restart the browser. 

We'd love to see what you come up with. Tag us on [Twitter](https://twitter.com/OddBird) with a link to whatever you create and check out our collection of demos on [Codepen](https://codepen.io/collection/XQrgJo) for inspiration.
