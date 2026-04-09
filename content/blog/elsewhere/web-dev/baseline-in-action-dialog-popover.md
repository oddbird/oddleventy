---
title: < dialog > and popover Baseline Layered UI Patterns
date: 2026-04-09
venue: web.dev
canonical: https://web.dev/articles/baseline-in-action-dialog-popover
author: davidh
image:
  src: blog/elsewhere/dialog-popover.jpg
  alt: >
    Grid of hotair balloon images
tags:
  - Link
  - CSS
related_tag: CSS
summary:
  Elements and windows
  that pop up on the screen
  are one of the most common patterns
  on the web.
  With use cases spanning
  from alerts and brief
  forms requesting data,
  to the now ubiquitous cookie settings prompt,
  these layered UI patterns
  are used frequently by developers.
---

{% import 'embed.macros.njk' as embed %}

Most of these user interface elements
are added to web applications
using either custom JavaScript
or common libraries.
With that route there's a lot
to make sure that you
or the library you choose gets right.

The `<dialog>` element
and the `popover` attribute
are two Baseline layered UI patterns
that developers can reach
for instead of custom implementations.
To show the advantages
of using layered UI patterns built
into today's web browsers—
and to give an example
of when you might reach for `<dialog>`
or use the `popover` attribute—
this article walks through
an example of a modal
that appears when the user attempts
to save an image
to a favorites list without being logged in.

## Article contents

- A modal `<dialog>`
- How to close the dialog
- `popover`, rising to the top
- Autofocus
- Style the `::backdrop`
- Make an entrance (and exit) with `@starting-style`

## The demo where we put it all together

{{ embed.codepen(
  id="GgZOwxL",
  title="Baseline dialog demo",
  user="web-dot-dev"
)}}

[Read full article »](https://web.dev/articles/baseline-in-action-dialog-popover)
