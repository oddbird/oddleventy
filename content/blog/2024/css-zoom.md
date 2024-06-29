---
title: Zoom isn't a single feature
sub: Browser zoom, page scale, and font-sizing
author: miriam
date: 2024-07-04
tags:
  - Article
  - CSS
  - Layout
---

I'm working on another article
about fluid typography,
and relative units --
but fell down a rabbit hole
(or a cleverly-disguised trap?)
trying to understand 'zoom' in the browser.
Since I couldn't find any up-to-date articles
on the subject,
I figured I should write one.

Modern browsers
broadly support three different
types of 'zoom' --
available both to site visitors
and (to some extend) CSS authors:

- **Page zoom**
  is the default zooming,
  and roughly matches behavior of
  the CSS `zoom` property.
- **Pinch zoom** (or 'page scale')
  was introduced by early versions of mobile Safari,
  and may only be available through
  track-pad or touch interfaces --
  roughly matching the behavior of
  the CSS `scale` transform.
- **Text-zoom** is also provided
  by Firefox and Safari.
  While not directly available in CSS,
  the behavior is similar
  to changing default font size
  on a site that uses entirely
  relative text sizing with `rem` units.

## What's a pixel?

To understand the differences,
it's helpful to understand
that a `pixel` is not a completely fixed unit --
at least not the pixels we interact with.

**Device Pixels** are determined by the display,
and are physically determined by the hardware.
To quote the [CSS Values & Units Specification](https://drafts.csswg.org/css-values/#device-pixel):

> A _device pixel_
> is the smallest unit of area on the device output
> capable of displaying its full range of colors.
> For typical color screens,
> it’s a square or somewhat rectangular region
> containing a red, green, and blue subpixel.

But as our screens improve,
those device pixels keep getting smaller,
and we can shove more of them into the same space
(more _pixels per inch_).
If we would rely on the physical device pixels
for interface design,
older interfaces would quickly become
too small to read or interact with on new devices.
We need some form of _reference pixel_ or
**Device-Independent Pixel** that will remain more stable
over time and across hardware.

Operating systems often provide one
layer of device-independence --
allowing us to set a 'screen resolution'
that is different from the physical potential
of the output device.
I have a 4k monitor here
with 3840 x 2160 device pixels,
but to make the interface legible
it renders as 1920 x 1080 by default --
with a twice the pixel density.

CSS adds another layer of pixel abstraction.
For legacy reasons,
the _CSS pixel_ (`1px`) and _CSS inch_ (`1in`)
have an absolute relationship.
There are always `96` CSS pixels for every CSS inch.
But depending on the output media,
we might get different results:

- On screens,
  the `px` acts as an '[anchor unit](https://drafts.csswg.org/css-values/#anchor-unit)'.
  Without any zoom applied,
  one CSS pixel is equivalent to one device-independent pixel,
  and physical units (like `in`, `cm`, `mm`)
  are determined relative to that (`1in == 96px`).
- In print,
  where physical measurements are more reliable,
  the 'physical' units act as our 'anchor' --
  and one CSS pixel becomes relative instead
  (`1px == 1/96in`).

That `1:96` relationship
(determined by
[the arm-length of Håkon Wium Lie](https://drafts.csswg.org/css-values/#reference-pixel))
is always the same,
but we change which unit is fixed to the media,
and which one is determined by the relationship.
