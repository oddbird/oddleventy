---
title: Getting started with automated testing
author: carl
date: 2013-03-16
image:
  src: talks/automated-testing.jpg
  alt: Carl talking at a conference
tags:
  - Python
  - Testing
events:
  - venue: PyCon
    url: https://us.pycon.org/2013/
    date: 2013-03-16
    adr: Santa Clara, CA
    slides: https://oddbird.github.io/start-testing-preso/
    media: &pycon
      iframe: https://www.youtube.com/embed/ukm64IUANwE
summary: |
  **The hardest part of testing is getting the ball rolling.** Once you've
  picked your tools and started writing tests, the added confidence you
  have in making changes to your code, and the time you save in repetitive
  manual testing, can quickly become addictive! If you never got over that
  initial speed bump, or you've tried testing but it hasn't yet clicked,
  this talk is for you.
media:
  - <<: *pycon
---

{% import "embed.macros.njk" as embed %}

- Picking a testing framework: unittest, nose, py.test. (Don't waste
  time on this, just pick one).
- Writing your first test.
- Unit tests and integration tests.
- Outside-in vs inside-out testing.
- Do I have to write my tests first?
- Mocking: why to do it, why not to do it, and tools that can help.
- Testing persistence code: fixtures and object mothers.
- Measuring code coverage with coverage.py; using code coverage as a
  driver to know what tests you're missing.
- Using WebTest for integration testing of web code.
- Introducing tests into an untested legacy codebase.

{{ embed.figure(media) }}
