---
title: Use new selectors responsibly with selector queries
sub: Just in time for Selectors Level 4
author: miriam
date: 2019-11-20
tags:
  - AboutWeb Video
  - CSS
image:
  src: mozdev/supports_selector.png
  alt: CSS @supports statement
summary: |
  Firefox 69 was the first to implement selector feature queries, but
  other browsers are following suit. I'll show you how it works, and how
  to start using this new feature query right away.
media:
  - youtube: WjvJheGhHIQ
---

{% import "embed.macros.njk" as embed %}

There are many ways to start using a new feature in CSS
without waiting for full cross-browser support,
but "feature queries" are the most clear and explicit.
We can use them to test for browser support,
and provide targeted styles only where they are supported.
Now we can do the same
with [new selectors](https://www.w3.org/TR/selectors-4/),
like `::marker` or `:focus-visible`!

{{ embed.figure(
  data=media,
  caption='Selector queries allow us to finesse browser-support in new ways'
) }}

- [Firefox 69 Release Notes](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/69)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports#testing_for_the_support_of_a_selector)
- [Caniuse](https://caniuse.com/mdn-css_at-rules_supports_selector)
- [Demos](https://mozdemos.netlify.app/support-selector/)
