---
title: Effective end-to-end testing for Django
date: 2022-10-16
author: ed
image:
  src: talks/computers.jpg
  alt: |
    People gathered around a table with multiple computers, cellphones, and
    notebooks on top.
  position: top
tags:
  - Testing
  - Tutorial
  - Django
  - Python
slides: https://drive.google.com/file/d/1K3Fyn4uj2uZoJSO5H5mFCMXr6206kiNa/views
events:
  - venue: DjangoCon US 2022
    adr: San Diego, CA (hybrid)
    url: https://2022.djangocon.us/tutorials/effective-end-to-end-testing-for-django/
    date: 2022-10-16
    end: 2022-10-21
    slug: 2022-djangocon
    slides: https://drive.google.com/file/d/1K3Fyn4uj2uZoJSO5H5mFCMXr6206kiNa/view
summary: |
  This tutorial provides hands-on experience with end-to-end testing for Django
  using pytest and Playwright. Participants acquire solid strategies to test
  common patterns in Django applications and the experience of writing a
  complete test suite for a non-trivial application.
---

A comprehensive test suite gives you the confidence to fix bugs, refactor, and
add new features to your application without fear of unknowingly breaking
unrelated parts of the codebase. End-to-end tests are a useful and important
member of your testing toolbox and tools like [pytest](https://pytest.org) and
[Playwright](https://playwright.dev/) provide a robust implementation for Python
developers.

The tutorial runs for 180 minutes and is completely hands-on. It covers the
following topics with practical exercises that each participant completes on
their own computer:

- "User contract" testing
- Pytest and custom fixtures
- Asserting DOM state
- Testing interactive elements
- Integrating your test suite with Continuous Integration (CI)
