---
title: Responsive and Fluid Typography with Baseline CSS Features
date: 2025-12-31
venue: web.dev
url: https://web.dev/
author: miriam
tags:
  - Link
  - CSS
  - Typography
related_tag: Typography
action:
  text: Read the full article »
  url: https://web.dev/articles/baseline-in-action-fluid-type
summary:
  When responsive web design is applied to typography, the central concern is often adjusting `font-size` based on the browser width—which can also have implications for spacing values like `line-height` and `margin`.
---

As designers, it makes sense to think about what space is available in the browser, and adjust your typography accordingly. It's also important to remember that different users will have different `font-size` needs across a range of devices, depending on personal circumstances outside your reach or awareness. So it's dangerous to do anything that would take away user control of the final result. There are two primary inputs that people can use to impact font sizing while they browse the web:

- Providing a default `font-size` preference across all websites.
- Zooming in or out on a site-by-site basis.

The goal of this demo is to make typography responsive to both the browser's viewport size, and also the user inputs. But it's important to understand that *the more your typography responds to the viewport, the less it will respond to user preferences.* If you are going to implement responsive typography, it's important to do so carefully, and test that the results are still accessible.

## Article Highlights

- Negotiate a base font-size based on user preferences
  like `grid-template`
- Add responsiveness
- Warning: Viewport changes don't always mean the same thing!
- Typographic scales with `pow()`
- Respond to the size of in-page containers
