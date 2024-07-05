---
title: Zoom, zoom, and zoom
sub: The three types of browser (and CSS!) magnification
author: miriam
date: 2024-07-04
tags:
  - Article
  - CSS
  - Layout
---

I'm working on an article
about fluid typography,
and relative units --
but fell down a rabbit hole
(or a cleverly-disguised trap?)
wanting to understand 'zoom' in the browser.
Since I couldn't find any up-to-date articles
on the subject,
I thought I should write one.

In brief:
there is wide support for
three different types of 'zoom' --
available both to site visitors
and (to some extend) CSS authors:

- **Page zoom**
  is the default with a handy keyboard shortcut,
  and roughly matches behavior of
  the CSS `zoom` property.
- **Scale factor** (or '_pinch zoom_')
  was introduced by early versions of mobile Safari,
  and may only be available through
  track-pad or touch interfaces --
  roughly matching the behavior of
  the CSS `scale` transform.
- **Text-only zoom** is also provided
  by Firefox and Safari.
  While not directly available in CSS,
  the behavior is similar
  to changing default font size
  on a site that uses entirely
  relative text sizing with `rem` units.

## What's a (CSS) pixel?

To understand these different zoom behaviors,
it's helpful to understand
that a `pixel` is not a completely fixed unit --
at least not the CSS pixels
we access through the `px` unit.

**Device Pixels** are specific to an output device,
and are physically determined by the hardware.
To quote the [CSS Values & Units Specification](https://drafts.csswg.org/css-values/#device-pixel):

> A _device pixel_
> is the smallest unit of area on the device output
> capable of displaying its full range of colors.
> For typical color screens,
> it’s a square or somewhat rectangular region
> containing a red, green, and blue subpixel.

These can range in size dramatically.
Printers can generally fit more dots
in a tighter space (more _pixels per inch_)
than a screen can,
and modern screens have smaller pixels
than ever before.
If we relied on those
physical device pixels for design,
all our interfaces would become
too small to read or interact with
on higher-resolution devices!

Operating systems often provide one
layer of device-pixel abstraction --
allowing us to set a screen 'resolution'
that is different from the physical potential
of the hardware.
I have a 4k monitor here
with `3840 x 2160` physical pixels,
but to make the interface more legible
it renders at a `1920 x 1080`
resolution by default.

That means we have twice the _pixel density_ --
we can now fit multiple physical pixels
inside a single resolution 'pixel'!
That ratio of rendered pixels to physical pixels
is called the _device pixel ratio_.
For my screen, at the default settings,
I have a device pixel ratio
(what CSS calls a 'resolution')
of `2x` or `2dppx` (_dots per `px` unit_).

To phrase it differently,
the entire operating system is
_zoomed in 200% by default_
on this monitor.

CSS adds another layer of pixel abstraction.
While the CSS `px` unit is generally
equivalent to a single OS-provided 'pixel' by default,
there are several ways they can diverge --
including the zoom/scale options
that we'll discuss below.

But also,
rather than having fixed
real-world dimensions,
the _CSS pixel_ (`1px`) and _CSS inch_ (`1in`)
have a fixed _relationship to each other_.
There are always `96` CSS pixels for every CSS inch.
But depending on the output media (screen vs print),
their actual sizes might vary:

- On screens,
  the `px` acts as an '[anchor unit](https://drafts.csswg.org/css-values/#anchor-unit)',
  and physical units (like `in`, `cm`, `mm`)
  are determined relative to that.
  It might not match a real-word inch,
  but you can count on the relationship: `1in == 96px`.
- In print,
  where physical measurements are more reliable,
  the 'physical' units act as our anchor --
  and the CSS pixel unit becomes relative instead
  (`1px == 1/96in`).

On screens,
the actual size of a CSS inch
depends on the screen resolution --
and may not be anywhere close to a physical inch.
But once you hit 'print',
the inch becomes reliable,
and pixels will resize to fit.

No matter what the result,
that `1:96` inch-to-px relationship
(determined by
[the arm-length of Håkon Wium Lie](https://drafts.csswg.org/css-values/#reference-pixel))
is always the same.
We only change which unit is anchored to the media,
and which one is adjusting to maintain the ratio.

Elika Etemad
(aka Fantasai)
covered this in her recent talk at CSS Day:
[_Standardization Stories_](https://www.youtube.com/watch?v=krh_nb9PdVk).

## Why are there two viewports?

You might have heard about
_the browser viewport_,
or even used _viewport units_
(`vw`/`vi`/etc).
But browsers actually provide
_two viewports_:

- The **layout viewport**
  is the box that we put our web pages in.
  You can think of it like
  the parent element of the `<html>` tag.
  It might overflow (and have scrollbars),
  but it still has a fixed size
  based on your browser window.
  When we make that layout viewport larger,
  we can fit more things on the page
  without overflowing.
- The **visual viewport**
  is the window we look through
  to see the page.
  When we make the visual viewport larger,
  we can see more of the layout at once.

Those might sound the same,
because they usually are!
Both are based on
the size of your browser window,
or the size of the page we print on.
But there's a difference between
_overflowing the box_
and _only seeing part of the box_.

Imagine an image zoom-and-pan interface,
often in photo apps and editing tools.
The image itself has a 'canvas size'.
Overflowing that canvas will crop the image.
That's the 'layout viewport'.
But you can also zoom in
to view only part of the canvas,
which is now large enough
to overflow your screen.
What you can see is the 'visual viewport'.

Since I'm old,
I'm more drawn to microfiche
as a visual analogy:

<iframe src="https://giphy.com/embed/SxFW9rZbk3mdvlTFNN" width="480" height="271" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

In most situations,
the two viewports
are the same size --
the size of your browser window,
or what's left of it after drawing
the tabs and toolbars.
But (as we'll see)
there are some zoomed-in situations
where the visual viewport
can end up smaller (but never larger)
than the layout viewport.

It gets confusing
(to me at least)
because both viewports can overflow
in different ways.
But the size of our content
only impacts one of them.
When we add more content,
we can overflow the layout viewport.
In order to overflow
the visual viewport,
we'll need browser help!

In researching this article,
I also came across
an old two-part QuirksMode post by PPK --
[_A tale of two viewports_](https://www.quirksmode.org/mobile/viewports.html) --
which covers this in depth.

## Getting the zoomies

To _zoom_ or _scale_ a page,
we have to manipulate either the
size of a CSS pixel
in relation to the layout viewport,
or the relationships _between_ the two viewports.
Each approach gives a different result.

This behavior is defined in
the CSS [View Module specification](https://drafts.csswg.org/cssom-view-1/#zooming).

### Page zoom: CSS pixels vs. the layout viewport

Browsers all provide
a _page zoom_ feature for us
as we surf the web.
I use it all the time.
By default,
pages load at `100%` page zoom,
but we can zoom in or out from there.
Generally,
browsers will remember our zoom settings
for each domain we visit.
(I used to have Wikipedia load at 150%,
but now they provide built-in tools
for scaling the font size.
Thanks, Wikipedia!)

This is the most common form
of zoom available to us web surfers.
I use the <kbd>Ctrl+/-</kbd>
(<kbd>Cmd+/-</kbd> on mac)
keyboard shortcuts quite often,
but these controls are also available
in a browser menu.

Page zoom is similar
to the resolution setting in your operating system.
Adjusting the page zoom
will change the ratio of
_CSS pixels_ vs _device pixels_.
In fact,
browsers combine the operating system and page zoom
to provide an overall _device pixel ratio_ --
the relationship between a (physical) pixel
and a rendered (CSS) pixel.

Pixels on my 4k monitor are already zoomed `2x`/`200%`
by the operating system,
before the browser gets involved.
If I also zoom a web page by `2x`/`200%` in the browser,
the result is a `4x`/`400%` overall zoom --
and a _device pixel ratio_ of `4:1`.

This _zoom_ is applied to the size of a CSS pixel,
_before the page is rendered_.
By zooming in,
we make each 'pixel' larger.
But our layout viewport isn't growing at all,
so our layout now contains _fewer_ `px`
in each dimension.
In effect, we've made
the layout viewport _smaller_
in relation to our pixels.

**Page Zoom** is adjusting
_the size of a CSS pixel in relation to the layout viewport_.
Since that happens before rendering,
it impacts the layout of the page.
It's then reflected by media queries,
which query a 'smaller' viewport.

As far as the browser is concerned,
there's very little difference
between _making the window smaller_
or _making the pixels bigger_.
The result is the same:
_fewer pixels fit in the viewport_.

### Scale factor: viewport vs. viewport

The _scale factor_
is also available in all browsers,
but you're most likely to notice it
on touch-screen devices.
As far as I can tell,
this was implemented originally
for mobile Safari,
and later added to the spec,
and adopted by desktop browsers.
In fact, the published spec
mentions a previous name for it --
_pinch zoom_ --
and the Editor's Draft
includes a brief explanation:

> The "scale factor" is often referred to as "pinch-zoom";
> however, it can be affected through means other than pinch-zooming.
> e.g. The user agent may zooms [sic] in
> on a focused input element to make it legible.

I know I've experienced that.
On mobile Safari you can also double-tap
elements in the page to 'zoom in'
so that element fills the viewport.
Testing here on a MacBook laptop with a track-pad,
both the pinch and double-tap interactions
work for me now in macOS Vivaldi (Chromium).

If you play with this,
you'll notice that it's quite different
from the behavior of page zoom above.
First: _we can only zoom in, not out_.
There is no way to scale the page
so that it is smaller than 100%
of the visual viewport.
And when we do 'scale' the page up,
_the layout doesn't change,
but we can see less of it_.

Everything on the web page
stays exactly where it was
relative to everything else --
even the media-queries remain untouched --
we're just looking at a smaller area
of the overall page.

**Scale factor** is adjusting
_the size one viewport in relation to the other_.
Specifically, the layout viewport
can be scaled up larger (but not smaller)
than the visual viewport.
Since that happens _after rendering_,
it has no impact on our page layout,
or the available pixels,
or any media queries.

You might also notice a lack of scrollbars.
We're not overflowing the box,
we're zoomed in to view
one smaller part of the box --
and browsers handle that differently.

### CSS `zoom` and `scale` properties

There's an old CSS browser hack
using `zoom: 1` to trigger `hasLayout` --
a proprietary bit of Internet Explorer lingo
that's roughly equivalent
to a modern Block Formatting Context.
You can see it
in Jay Hoffmann's excellent
[evolution of the clearfix](https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution/).
Other than that,
I don't think I've ever
paid much attention to the `zoom` property
in 20-some years of writing CSS!

It turns out there's a good reason for that.
CSS `zoom` was initially IE-only.
I believe it pre-dates IE6,
released in 2001
(MDN and CanIUse don't have data farther back),
but it wasn't available in Firefox
until **May 2024**.
Zoom [just became available](https://caniuse.com/css-zoom)
in all browsers
_this year!_

The `zoom` property
is similar to _page zoom_.
Zoom changes the relative size of a CSS pixel
in relation to its layout box,
before rendering.
Now we can apply that behavior to
individual elements inside the page.

We also have
the much more commonly-used
`scale()` transform,
[available (with a prefix)](https://caniuse.com/transforms2d)
since ~2010.
[Over the last couple years](https://caniuse.com/mdn-css_properties_scale),
a number of transforms
(including `scale`)
have become
stand-alone properties.
But the function and the property work the same --
both of them behaving like
the page _scale factor_.
The entire element is scaled
(up or down!)
as a cohesive rendered unit,
in relation to the things around.

Or,
as CanIUse explains the difference:

> If e.g. `transform: scale(0.6)` is used on the `html` or `body` element
> then it resizes the entire page,
> showing a minified page with huge white margins around it,
> whereas `zoom: 0.6` scales the elements on the page,
> but not the page itself on which the elements are drawn.

I've made a couple demos
to help visualize
zoom and scale and device pixel ratios --
using the properties
to better understand these
two behaviors:

- [What's a pixel?](https://codepen.io/miriamsuzanne/pen/oNRrLLy)
- [Zoom/scale, viewport vs elements](https://codepen.io/miriamsuzanne/pen/Exzzwgy?editors=1100)
- [Scale vs zoom](https://codepen.io/miriamsuzanne/pen/pomXRxP?editors=1100)

### Text-only zoom

[Firefox](https://support.mozilla.org/en-US/kb/font-size-and-zoom-increase-size-of-web-pages)
and [Safari](https://support.apple.com/guide/safari/zoom-in-on-webpages-ibrw1068/mac)
provide an additional option to
_zoom text only_.
This is generally available
as an alternative of _page zoom_.
I'm still working on that article --
all about font-sizing --
so I'll save the details for later.

But if you've ever wanted to zoom the text
without _zooming_ or _scaling_
anything else on the page,
there it is!
