---
title: CSS @scope
sub: Keep selector conflicts to a minimum
author: miriam
date: 2023-12-15
canonical: https://12daysofweb.dev/2023/css-scope/
tags:
  - CSS
  - CSS Scope
  - Link
summary: >
  The new `@scope` rule is here!
  It's a better way to keep our component styles contained --
  without relying on third-party tools or extreme naming conventions.
---

Scoped styles have always been the primary goal of CSS.
Selectors scope declarations to matched elements.
Those selectors can be combined to create more specific scopes --
each modified by its relation to others.
But the `@scope` feature,
already available in Chromium browsers,
will make that functionality even more powerful.
