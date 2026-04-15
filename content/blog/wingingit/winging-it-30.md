---
title: Quick & Easy UI Wins (for real)
sub: Hidden gems of UI development
episode: 30
tags:
  - CSS
author:
  - stacy
  - miriam
  - james
date: 2026-03-19
length: 49 min
image:
  src: winging-it/winging-it-30.jpg
media:
  - youtube: kIJv7eB3d-8
summary: |
  Join Stacy, James, and Miriam
  as we explore some hidden gems
  of UI development—
  from `@starting-style`
  for smoother entry transitions
  to performance boosts with AVIF images
  and using the browser’s built-in lazy-loading.
  We cover a variety of quick wins
  that you can use
  to make your life easier
  and improve the experience
  for your website visitors.
---

{% callout 'note', false %}
Based on Stacy's [web.dev article](web.dev/articles/baseline-in-action-image-gallery)
{% endcallout %}

{% import "embed.macros.njk" as embed %}
{% import "utility.macros.njk" as utility %}

{{ embed.figure(
  data=media
) }}

{{ utility.main_action(
  'Subscribe to Channel »',
  subscribe_url
) }}

## What We Cover:

- **AVIF**
  - What makes AVIF a good choice
  - How to convert images
  - Where you can use them
  - Example image sizes after converting
- **Lazy Loading**
- **`@starting-style`**
- **Backdrop-filter** - Baseline 2024 Newly available 18/30
- **Relative colors** - Baseline 2024 Newly available 18/30
- **Text-box** - Limited (waiting on Firefox, been in Chrome/Edge/Safari for over a year)
- **`nth-child` of .class** [codepen](https://codepen.io/editor/stacy/pen/019d06f5-09b0-739b-b4ec-3104bbe8af6f)

## Links:

- [caniuse AVIF](https://caniuse.com/avif)
- [AVIF has landed](https://jakearchibald.com/2020/avif-has-landed/)
- [Squoosh](https://squoosh.app/)
- [Lazy Loading Attr](https://caniuse.com/loading-lazy-attr)
- [caniuse starting style](https://caniuse.com/wf-starting-style)
- [caniuse CSS backdrop filter](https://caniuse.com/css-backdrop-filter)
- [caniuse CSS relative colors](https://caniuse.com/css-relative-colors)
- [caniuse CSS text box trim](https://caniuse.com/css-text-box-trim)
- [CSS text box trim](https://developer.chrome.com/blog/css-text-box-trim)
- [CodePen Quick Wins](http://codepen.io/editor/stacy/pen/019d038f-2feb-761c-9fbd-aa3e319166ac)
- [caniuse transition behavior](https://caniuse.com/mdn-css_properties_transition-behavior_allow-discrete)
