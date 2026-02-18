---
title: Container Queries and Units in Action
date: 2026-02-18
venue: web.dev
canonical: https://web.dev/articles/baseline-in-action-container-queries
author: miriam
image:
  src: blog/elsewhere/baseline-bakery.jpg
  alt: >
    Baseline Bakery: as sweet as Interop.
    Demo to view donut products as a
    small grid, large grid, or list
    with an optional To Go Bag sidebar.
tags:
  - Link
  - CSS
  - Container Queries
related_tag: Container Queries
summary:
  One of the goals when writing CSS
  is to build component parts
  that will adapt well
  to different (and unexpected) contexts.
  Ideally, a component can be placed
  inside any "container" element
  without it feeling broken or out of place.
  How can you accomplish this
  in a complex layout like
  a store where the primary component -- the "product" -- has
  to fit into a variety of list layouts,
  including the sidebar?
---

{% import 'embed.macros.njk' as embed %}

## Defining containers to measure in context

By default, `1cqi` (1/100 container query inline size) is the same as `1svi`
(1/100 small viewport inline size) because the ["small"
viewport](https://web.dev/learn/css/sizing#alternative_viewport-relative_units)
acts as the initial container for any web page. In order to take full advantage
of the `cqi` unit, you need to define additional "containers" within the page.
The primary layout containers on this page are the `product-list` and
`shopping-cart` -- so they are set to expose their `inline-size`.

```css
product-list,
shopping-cart {
  container-type: inline-size;
}
```

Container units are powerful, but sometimes it's useful to make more dramatic
changes in a component layout when the available size crosses a threshold. These
are often called breakpoints -- since the fix is applied at the point when a
given layout begins to break. You may already be familiar with using `@media` to
add breakpoints based on the viewport size. The new `@container` rule works the
same way, but measuring container elements instead of the page!

## Article contents

- Defining containers to measure in context
- Explicit container queries
- Transition grid templates and visibility
- Querying media versus containers

## The demo where we put it all together

{{ embed.codepen(
  id="XJXEOEg",
  title="Baseline Bakery",
  user="web-dot-dev"
)}}
