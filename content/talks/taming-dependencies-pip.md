---
title: Taming dependencies with pip
author: carl
date: 2011-09-08
image:
  src: talks/taming-dependencies.jpg
  alt: DjangoCon US Portland 2011 logo
tags:
  - Python
  - Pip
events:
  - venue: DjangoCon US
    url: https://2011.djangocon.us/
    date: 2011-09-08
    adr: Portland, OR
    slides: https://carljm.github.io/tamingdeps/
    video: https://pyvideo.org/djangocon-us-2011/djangocon-2011--taming-dependencies-with-pip.html
summary: |
  **Dependency management sucks.** Pip provides some options for making it
  suck a bit less, but not all of them are immediately obvious. This talk
  will cover a number of strategies for making your deployments faster and
  more reliable, and demonstrate how to implement them in practice.
---

Areas we'll cover:

- Easy wins: requirements files, version-pinning, virtualenv, PyPI
  mirrors.
- One single point of failure is bad, multiple single points of
  failure are worse: kick your PyPI addiction with find-links,
  bundling sdists, "vendoring", or your own package index. We'll go
  over how each of these looks in a real project, and the tradeoffs
  with each.

This talk will assume basic knowledge of pip and requirements files;
we'll be covering intermediate and advanced usage.
