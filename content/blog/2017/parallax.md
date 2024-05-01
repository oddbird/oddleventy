---
title: 'Birds Recommend: Performant Parallaxing with CSS 3D'
author: sondra
date: 2017-01-27
tags:
  - Article
  - Design
  - Tips
image:
  src: blog/2017/parallax/parallax.jpg
  alt: Diagram of layered squares showing movement with arrows
summary: |
  If you'd like to learn how to create parallax scrolling for your
  website, Paul Lewis' guide to performant parallaxing is the perfect
  place to start.
---

## Parallaxing

Thanks to [Rachel Nabors] for pointing us to Paul Lewis' excellent
article on [Performant Parallaxing]. This article is so useful, we
couldn't pass up the opportunity to recommend it. Continue reading for a
quick summary or **head over to Paul's article right away!**

[Rachel Nabors]: https://nearestnabors.com/
[Performant Parallaxing]: https://developer.chrome.com/blog/performant-parallaxing/

### [Performant Parallaxing &gt;][Performant Parallaxing]

## Don'ts

Paul, a developer at Google, starts with the don'ts. Don't use scroll
events to create a parallax effect.

> JavaScript doesn’t guarantee that parallaxing will keep in step with
> the page’s scroll position.
>
> ---[Paul Lewis][Performant Parallaxing]

Trying to achieve a parallax look by changing background position
doesn't work well either, negatively effecting the animation.

## CSS 3D

Paul recommends using CSS 3D for performant parallaxing, and gives
detailed instructions for how to do just that. Anticipating the bugs for
us, Paul includes various workarounds.

Have you used this approach? Did it work? Let us know by sending us a
message via [Twitter].

  [Twitter]: https://twitter.com/oddbird

### [Performant Parallaxing &gt;][Performant Parallaxing]
