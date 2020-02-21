---
title: Why isn't this CSS doing anything?
sub: Have you ever set a `width` in CSS, and... nothing happens?
date: 2019-10-21
author: miriam
tags:
  - DevTools
  - Code
  - Videos
image:
  src: mozdev/inactive-css.png
summary: |
  There are a number of property & value combinations
  that can lead to CSS being inactive,
  and now Firefox will tell you why.
  Open the developer tools,
  and look for the greyed-out property with an info-box on hover.
media:
  - iframe: https://www.youtube.com/embed/O3DAm82vIvU
---
{% import "embed.macros.njk" as embed %}

{{ embed.figure(
  data=media,
  caption='Handy new developer tools in Firefox!'
) }}
