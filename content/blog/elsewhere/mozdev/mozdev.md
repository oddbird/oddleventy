---
title: Announcing the Mozilla Developer Channel
sub: a gift from Mozilla (and OddBird)
author: miriam
card: feature
date: 2019-10-01
tags:
  - AboutWeb Video
  - Firefox DevTools
  - Grids
  - CSS
image:
  src: mozdev/mozilla-youtube.jpg
darkmode:
  caption: |
    Dark mode is all the rage, with iOS, macOS, Android and others
    all shipping a system-wide dark mode for people's devices.
  media:
  - youtube: jmepqJ5UbuM
inspector:
  caption: |
    Use that third pane to quickly access
    the Grid or Flexbox Inspectors, the Font Editor,
    the Animations Tools, Tracked Changes, and more.
  media:
  - youtube: N6aMLUZ-v3w
markers:
  caption: |
    Style list markers,
    and add your own counters!
  media:
  - youtube: 2awepiNoaZI
summary: |
  Over the summer, we've been working with Mozilla
  to help create a new resource for web professionals like us --
  with a mix of videos, articles,
  demos, and open source tools.
  Today, we're excited to launch [the video channel][mozdev]!

  [mozdev]: https://www.youtube.com/MozillaDeveloper
---

{% import "embed.macros.njk" as embed %}

The project will include short videos, articles, demos, and tools that
teach web technologies and standards, browser tools, compatibility, and
more. No matter your experience level or job description, we’re all
working together towards the future health of the web, and Mozilla is
here to help.

Today we’re launching a [new video channel], with a selection of shorts
to kick things off. There are two in our “about:web” series on web
technologies, and one in our “Firefox” series on browser tools for web
professionals.

Get started with an intro to Dark Mode on the web, by Deja Hodge – and
check out her [dark mode demo].

{{ embed.figure(darkmode.media, darkmode.caption) }}

Jen Simmons shows us how to access a handy third-panel in the Firefox
Developer Tools, and toggle print preview mode.

{{ embed.figure(inspector.media, inspector.caption) }}

Use that third pane to quickly access the Grid or Flexbox Inspectors,
the Font Editor, the Animations Tools, Tracked Changes, and more.

If you’ve ever struggled to style lists with customized bullets and
numbers, Miriam Suzanne has a video all about the `::marker`
pseudo-element and list counters. Watch the video, and go play with the
[demo on CodePen].

{{ embed.figure(markers.media, markers.caption) }}

To celebrate the launch, we’ll be releasing new videos every day this
week! Check back to learn about several more Firefox tools like
Screenshots and the CSS Track Changes panel, and a reflection on what
makes CSS so weird. Over the next few months we’ll have new videos
weekly ([subscribe to the channel][channel]!), along with more
articles, demos, and some exciting new open source tools.

[channel]: https://www.youtube.com/MozillaDeveloper
[dark mode demo]: https://empathic-dev.github.io/HelloDarkness/
[demo on CodePen]: https://codepen.io/miriamsuzanne/pen/BaBKowO?editors=0100
