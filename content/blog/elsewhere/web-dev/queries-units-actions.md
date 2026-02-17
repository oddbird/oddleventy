---
title: Container Queries and Units in Action
date: 2026-02-17
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
  a store where the primary component—the "product"—has
  to fit into a variety of list layouts,
  including the sidebar?
---

## Responsive typography with `cqi` units

The first step is to define some basic sizing variables that could be reused across the project—starting with whitespace sizes. But before creating any custom properties, the browser provides some useful named values as CSS units:

- `1em`: the current font size.
- `1rem`: the font size on the :root (html) element.
- `1lh` / `1rlh`: the current and root line heights.
- `1vw`: the viewport width.
- `1vi`: the viewport "inline" size (for English, this is the same as vw).
- `1cqi`: the inline size of the nearest "container" (defaulting to the viewport).


{% import 'embed.macros.njk' as embed %}

{{ embed.codepen(
  id="XJXEOEg",
  title="Baseline Bakery",
  user="web-dot-dev"
)}}

## Article Contents

- Defining containers to measure in context
- Explicit container queries
- Transition grid templates and visibility
- Querying media versus containers
