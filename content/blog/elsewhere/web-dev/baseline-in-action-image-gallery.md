---
title: How to Implement an Image Gallery Using Baseline Features
date: 2026-03-02
venue: web.dev
canonical: https://web.dev/articles/baseline-in-action-image-gallery
author: stacy
image:
  src: blog/elsewhere/baseline-zoo.jpg
  alt: >
    Image gallery grid
    with pictures of dogs and birds.
tags:
  - Link
  - CSS
related_tag: CSS
summary:
  From image sharing sites
  to online stores,
  image galleries are
  a common pattern on the web.
  Images can be very data heavy,
  and loading images
  can make the page take
  a long time to load.
  In addition,
  users have high expectations
  around the usability of galleries,
  so it's common to add additional libraries
  that further increase page size.
---

{% import 'embed.macros.njk' as embed %}

The web platform has added support
for many of the underlying pieces
of an image gallery.
So, what does it look like
to code an image gallery
with Baseline features?
This demo showcases a variety of techniques
that you can use to do just that.

## How to deal with large image sizes

Images can be some of the largest assets you ask your users to download, and
image galleries by their nature often have many images. This demo uses a couple
of Baseline features to help reduce the performance impact on users.

## Article contents

- Lazy loading and AVIF
- Lightbox effect transitions with `@starting-style`
- Style the button
- Aspect ratio
- Take it further

## The demo where we put it all together

{{ embed.codepen(
  id="yyeEwJJ",
  title="Baseline Zoo",
  user="web-dot-dev"
)}}
