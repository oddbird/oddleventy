---
title: Testing and Django
author: carl
image:
  src: projects/django.jpg
date: 2012-03-10
tags:
  - Testing
  - Django
events:
  - venue: PyCon
    url: https://us.pycon.org/2012/
    date: 2012-03-10
    adr: Santa Clara, CA
    media:
      youtube: ickNQcNXiS4
summary: |
  Django has a fair bit of custom test code: a custom TestSuiteRunner,
  custom TestCase subclasses, some test-only monkeypatches to core Django
  code, and a raft of testing utilities. I'll cover as much of that code
  as I find interesting and non-trivial, taking a close look at what it's
  actually doing and what that means for your tests.
---

This will be a highly opinionated talk. There are some things in
Django's test code I really don't like; I'll talk about why, and how I'd
like to see them changed. As a natural part of this, I'll also be
outlining some principles I try to follow for writing effective and
maintainable tests, and note where Django makes it easy or hard.

This is an "extreme" talk, so I'll be assuming you've used Django and
done some testing, and you're familiar with the basic concepts of each.
This won't be an introductory "testing with Django" howto.
