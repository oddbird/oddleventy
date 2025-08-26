---
title: Visualizing Responsive Typography
sub: What do all the numbers in our `clamp()` do?
author: miriam
date: 2025-08-26
image:
  src: blog/2025/tips-tricks-04.jpg
  alt: >
    Miriam gesturing as she talks in a video thumbnail
tags:
  - Article
  - CSS
  - Typography
series: revisiting fluid typography
related_tag: Typography
media:
  - youtube: a59ui2j8WU4
summary: |
  There are multiple tools that can help
  create a fluid font-size calculation for CSS --
  generally expressed as a `clamp()` function
  combining `em` (or `rem`) with `vw` (or `vi`) units.
  But the results are difficult
  to understand at a glance,
  so I wanted to visualize what's going on,
  and how the various units interact.
---

{% import "embed.macros.njk" as embed %}
{% import "quotes.macros.njk" as quotes %}

{{ embed.figure(
  data=media
) }}

The simplest interaction
between font-size and viewport width
would be a 1-to-1 relationship --
keeping the values equal at all times.
We can express that in CSS
as a font-size of `100vw`.

```css
html { font-size: 100vw; }
```

That's very direct and simple,
but a terrible idea.
When the viewport width is `0px`,
the font-size is also `0px`.
If the viewport grows to be `3250px`,
the font-size will also be `3250px`.
The viewport can't go below `0px`,
but
([in theory](https://meyerweb.com/eric/thoughts/2025/08/07/infinite-pixels/))
there's no upper limit here.

Tools like [Utopia.fyi](https://utopia.fyi/type/calculator/)
will give you a more complex output
with several parts:

```
:root {
  --step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);
}
```

I built a Codepen visualization
to see how things change
as I adjust the different values:

<figure>
<iframe height="600" style="width: 100%;" scrolling="no" title="Responsive Type Visualization" src="https://codepen.io/editor/miriamsuzanne/embed/0198be16-c4b8-71e7-9b81-15c2589c463f?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/editor/miriamsuzanne/pen/0198be16-c4b8-71e7-9b81-15c2589c463f">
  Responsive Type Visualization</a> by Miriam Suzanne (<a href="https://codepen.io/miriamsuzanne">@miriamsuzanne</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</figure>

We could start by setting
a more leisurely rate of change --
adjusting the slope (or _rate_) of growth.
To do that,
we need to adjust the `vw` value.
At `50vw` we would get a font that scales
at half the rate of the viewport,
but even that seems too dramatic.
The [default scale from Utopia.fyi](https://utopia.fyi/type/calculator/)
uses `0.2273vw` for the primary font size.
That's a of `1px` font-size change for every
`440px` of viewport resizing!
Even the largest font in that scale
uses less than a `2vw` response rate.
Let's round it off for the sake of our demo:

```css
html { font-size: 0.25vw; }
```

Now we're growing at a more reasonable rate,
but now our font is way too small.
It still starts at `0px`
for a `0px` viewport --
and would only be `1px` tall
on a `400px` screen.
At that rate,
we won't get to a standard `16px` font size
until the browser hits `6400px` --
a very wide screen.
This subtle slope only makes sense
if we start with an offset.
We can do that by adding two values together:

```css
html { font-size: calc(17px + 0.25vw); }
```

That offset value moves our slope
up and down in the visualization,
without impacting the slope that we set earlier.
Now a `400px` browser
will give us `18px` font-size,
and a `1200px` browser
will result in a `20px` font.
That's much more appropriate!

But we still have infinite scaling,
and we don't really need that.
We could improve our algorithm even more
by providing boundaries with a `clamp()` function:

```css
html { font-size: clamp(18px, 17px + 0.25vw, 20px); }
```

That establishes a fixed _range_
for our font-size change,
which we can think about in two ways.
On the surface we can see the font-size range
from `18px` to `20px`.
But when we combine that with the slope
and offset,
we also have a range of viewport sizes
where the font is in transition
between those two sizes.
In this case,
the font begins to grow
once the viewport is larger than `400px`,
and stops growing when we reach `1200px`.

As a tool,
Utopia starts from these four inputs --
min font-size, min viewport,
max font-size, and max viewport --
and works backwards to determine
the proper offset and slope.

## Accessibility Issues

I think this is a useful pattern.
I like somewhat smaller fonts
in tight spaces,
and larger fonts when there's more room.
But that comes with caveats --
and it's important for users to get final say
with the ability to zoom in or out.
If we're not careful,
viewport units and clamp functions
can make fonts unable to zoom.
I show a few examples of that in my video above,
and there are more
[situations to watch out for](https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/),
but a simple rule you can follow:

{% set a11y %}
If the maximum font size is less than or equal to
2.5 times the minimum font size,
then the text will always pass WCAG SC 1.4.4,
at least on all modern browsers.
{% endset %}

{{ quotes.blockquote({
  'text': a11y,
  'name': 'Maxwell Barvian',
  'url': 'https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/'
}) }}

Utopia helpfully provides a warning
when we create scales that are inaccessible.
Maybe I can add that to my demo is well.
In the meantime,
play with that 'page zoom' slider
to test different values
and see how they interact.
