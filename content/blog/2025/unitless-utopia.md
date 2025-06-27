---
title: Putting Utopia in the Browser
sub: Using modern CSS units and math functions
author: miriam
date: 2025-06-18
tags:
  - Article
  - CSS
  - Typography
series: revisiting fluid typography
summary: |
  TBD
---

Earlier in the year,
I posed some questions
about how to approach fluid typography
in modern CSS.
I had two primary concerns
about the way we commonly handle things:

- **I don't like the common interaction
  between site and user font-sizes**.
  If I prefer a large font size for my design,
  and a visitor on my site
  prefers _the same large font size_,
  that's the font size we should use.
  We don't need to combine our preferences
  and render an _extra-large_ font size.
- **I don't think in pixel values**
  when I'm defining fluid relationships.
  I think in relative units.
  Any CSS _pixel-to-em_ conversion math
  makes me squirm.

I cited [Utopia.fyi](https://utopia.fyi)
as an example of current best practice --
not because they cause of these issues,
but because that's _my favorite typography tool_.
I use it all the time,
and consider it the current state of the art.
So, when I'm thinking about
ways to improve web typography,
Utopia is the standard I'm comparing to.

Many people,
including [Richard Rutter](https://clagnut.com/blog/2441/)
found my critique frustrating
for various reasons:

- Utopia doesn't just describe
  fluid font _sizes_,
  but also fluid font _scales_.
  The relationships between font sizes
  can change based on the viewport or container size.
  I left that out entirely.
- My first stab at a 'solution'
  was pretty similar to Utopia's output,
  and extremely underwhelming as an alternative.
  All I managed to do was remove some calculations,
  and replace them with _approximations_.
- Pixels are involved, whether I like them or not.
  And unlike me,
  some designers do think in pixels, maybe?
  Richard mentions this as a _feature_ of Utopia as a tool.
  It converts a designer's pixels into
  more useful user-relative terms.
  Maybe I'm the odd one out:
  I think in relative terms,
  and like leaving pixels to the browser.
- It's not clear how user and author font settings
  _should_ interact.
  Is this is a problem we can address as designers,
  or do we need browser-level solutions?

Those are all valid critiques.
I'm afraid I let a lot of things get mixed together
in my original post,
as I was just starting to put words to an idea.
This time I want to take my thoughts
one step at a time.

Anyway,
this series is not meant to critique Utopia.
I use their excellent tool for all my fluid scale needs.
But it is an attempt to consider
how modern CSS can improve on our
collective approach to typography,
and I find Utopia useful as a reference point.
I do also attempt to address
some of Richard's comments where I can.

## Balancing author and user preferences

Before we deal with anything fluid at all,
let's talk about user control over font sizes.
Current best practice is to choose a pixel size
that we like for our site,
convert that to `em`s by assuming `1em = 16px`,
and set our result on the `html` or `body` tag.
Utopia helpfully does the conversion math for you,
but this is a technique used much more broadly.

The goal is two-fold:

1. Authors get to provide a
   good default size for our content,
   and it will apply for most users
   who never change the default preference.
2. When users do set a font-size preference,
   our site text scales up or down
   by the same amount.

That sounds like a decent solution!
We have some ability to establish a design,
and the user has some ability to adjust it.
I don't think we've been doing it _wrong_
all these years --
but I do think modern CSS
allows us to do _better_.

Starting from the user perspective,
a global default is never going to be perfect:

1. **Not all content has the same needs.**
   When I'm reading a blog post
   I like larger text,
   but when I'm filling in a spreadsheet
   smaller text makes more sense --
   as long as I can still read it.
   There's no preference setting
   that will work perfectly in both situations.
2. **All styles are contextual**,
   and it's the overall impact that we're concerned with.
   My `16px` default size will look different
   depending on the fonts used,
   the space available,
   the color scheme, line-lengths,
   and so on.

Because a global value is limited,
the ability to make quick adjustments is essential.
No matter what my browser font-size preference,
when I land on a page
I should be able to zoom in and out easily.
I'll talk about that more below,
but first I want to push to make global preferences
as useful as possible.

For my eyes,
I find that `20px` feels better
as a rough global font-size estimate.
I don't want that applied everywhere,
and I don't need it to be exact --
but I should be able to tell the browser
_this seems about right_,
and get some useful results from that setting.

### Combining the two offsets

Ideally, my preference provides some baseline
information about my context.
A blog author can still send me large text
I didn't ask for,
or make the text responsive to the viewport --
something I can't do easily in my preferences.
I appreciate getting help from a thoughtful designer
who will adapt my defaults
to better fit the context.

But if a designer likes `20px` fonts,
and I _also_ request a `20px` default,
it seems like we should agree?
Instead,
they likely set a base size of `1.25em`
(as a way of respecting my preference),
and now the result is a (`1.25 * 20`) `25px` font.

Was that adjustment helpful?
It's not the font-size the designer wanted,
not particularly close to the
font size I asked for,
and not a font-size that's adapting to context
in any meaningful way.
Instead of merging our styles
to find the best fit,
we _multiply them together_.

It's not the end of the world,
but it's large enough to make me zoom out
every time I land on a page
that was designed to work perfectly for me already.
That's a strange result,
and makes me not want to set my preference.

This is a much better solution
than simply overriding or discarding
the user preference,
and it still allows me
to make adjustments on the fly,
which is essential.
It's not a _terrible_ solution --
and for a time,
it was maybe the best we could do.

But it's also not a _great_ solution,
and I still think we can do better.

### Negotiating a more useful default

Here's my first stab at a new approach
to a base font-size negotiation,
using CSS comparison functions.
The user default is represented by `1em`
on the `html` element.
The other value represents my site default size,
and the browser will choose the larger of the two:

```css
html {
  /* larger of user preference & design preference */
  font-size: max(1em, 20px);
}
```

That only allows the user to increase our font size,
which I believe is the most common need.
But we could also allow decreasing the default,
and try to keep our value in a range
_near_ the user preference:

```css
html {
  /* design preference, clamped so we don't stray too far */
  font-size: clamp(1em, 20px, 1.25em);
}
```

Those min and max values aren't designed
to achieve a specific size --
it doesn't matter if `1em` here is
`16px` or `25px`.
The goal is just to keep us
_close to the user preference_ on both ends,
with some wiggle room.
We can adjust how tight the range is
by moving either end closer or farther from
the user's preferred `1em`.
As long as our ideal font size is within range,
we stick with the size we brought.
But if the user preference is outside that range,
we'll scale to accommodate.
A `14px` preference here will scale things down slightly,
a `20px` setting won't require scaling up,
but a larger preference will override us entirely.

_We're negotiating instead of multiplying!_

This seems to me like an improvement.
And it leaves the px-to-rem comparison
as a function for the browser to resolve --
rather than a calculation for pre-processing.

We've generally been told
not to set a root size in pixels,
because that would override the user preference.
But here the `max()` comparison
still allows our user
to override the static `px` value
_when it gets too far from their preference_.
Instead of a multiplier,
we're providing a baseline.

I've started using this snippet
on my `html` element,
to handle the merging of user and site defaults.
From there,
I can use [Utopia.fyi](https://utopia.fyi)
(or similar)
to generate fluid scales
over top of our negotiated default.

## Making the fonts fluid

Richard and I agree that
_fluid typography is great_!
So let's add some viewport sizes to the mix.
For simple cases,
I might use this CSS
from the previous article:

```css
/* grow from 1em to 1.25em */
/* grow at a rate of 1vi */
body {
  font-size: clamp(1em, 0.9em + 1vi, 1.25em);
}
```

This was never meant as a universal replacement
for the more well-tuned results
that Utopia and other tools provide.
We're just swapping out detail and precision
for a quick and readable approximation.
Each value serves a single purpose,
and I can adjust things until it
looks about right in the browser:

- I use `1em` as my minimum
  so that we're starting from the
  negotiated size in our previous step.
- The maximum value (`1.25em`) is a ratio
  for how much overall growth I want to allow.
  Text will stop growing at `125%` of the default.
- In the middle we want to add some amount of viewport `vi`
  to our base `em` font-size.
  The larger we make the `vi` value,
  the faster things grow.
  The smaller we make the `em` unit,
  the later fonts start growing.
  For accessibility,
  we just want to keep the `vi` influence kinda low,
  and keep the `em` influence close to our baseline.
  That helps avoid text that shrinks as we zoom in.

[add a code-pen demo to play with it??]

If we want to get more precise,
or start adding fluid scales over our base font,
the math gets complicated quickly.
That's why Utopia is so helpful.
I might start prototyping
with the quick approximation --
but once I'm working on detailed styles,
I'll spend the time in Utopia
to get everything tuned correctly.

### Simpler math with `progress()`

But over the last month,
browsers have started to roll out
a new set of functions
that will make even the full Utopian math
much easier to do directly in CSS.
That starts with a `progress()` function --
available in pre-release versions
of Webkit and Chromium:

```css
body {
  /* where does the viewport width fall */
  /* in a range of 320px - 1400px */
  --progress: progress(100vi, 320px, 1400px);
}
```

The result to the `progress()` function
is a unitless fraction that ranges from `0` to `1`.
If the viewport (`100vi`) is
less than or equal to `320px`,
then the value will be `0`.
If the viewport is greater than or equal to `1400px`,
the value will be `1`.
If we know we want our font to scale
by `25%` (or `0.25em`) over that same range,
we can multiply that total growth by our progress
to get our current growth,
and add it to our font-size:

```css
body {
  --progress: progress(100vi, 320px, 1400px);
  --growth: calc(var(--progress) * 0.25em);
  font-size: calc(1em + var(--growth));
}
```

No more messing around with
calculations like `0.9em + 1vi`
to control the baseline and rate of our growth --
we can tell the browser exactly what we mean.
But it gets better.
[CSS Values and Units Level 5](https://drafts.csswg.org/css-values-5/)
(where `progress()` is defined)
also provides a `calc-mix()` function
that saves us one step:

```css
body {
  --progress-percent: calc(progress(100vi, 320px, 1400px) * 100%);
  font-size: calc-mix(1em, 1.25em var(--progress-percent));
}
```

And a `calc-interpolate()` function
that puts it all together in a single value:

```css
body {
  font-size: calc-interpolate(100vi, 320px: 1em, 1400px: 1.25em);
}
```

The names and syntax could still change
before browsers ship these functions --
but I'm really excited for the possibilities here.
I don't think I was clear enough in my previous article.
I'm not opposed to these calculations happening,
I just like them to be readable directly in the code:

```css
html {
  /* 20px is our small screen base size,
  but user preference can impact it */
  font-size: clamp(1em, 20px, 1.25em);
}

body {
  /* scale to 1.25em between 320px and 1400px */
  font-size: calc-interpolate(100vi, 320px: 1em, 1400px: 1.25em);
}
```

Without popular tools like Utopia proving
that this is something designers want,
these functions would never make it into a browser!
Utopia is one of the most popular tools
making that point,
and filling the gap for developers
while we wait for the browsers to implement
a CSS-native solution.
We should also give major credit to Scott Kellum at
[Typetura](https://typetura.com)
for [putting in the request](https://github.com/w3c/csswg-drafts/issues/6245).

### Adding typographic scales

As Richard pointed out,
Utopia doesn't just give us
a fluid base font-size --
the main feature is fluid _scales_.

## What are pixels for?

I've said up-front that I don't like
thinking in pixels,
but here I am adding them to my CSS!
My goal isn't to avoid pixels altogether,
but to revisit what they are useful for.

Richard sees pixel input
as a feature of Utopia.
Designers know the font size they like
as a pixel value,
and the tool converts that value
to more flexible `em` or `rem` unit.
And I agree that's useful
_in a world where we know the desired pixels,
but want to use relative units instead_.
In that world, pixels are the best input,
and `em` or `rem` values are the output.

But maybe we're not in that world any more?

I've suggested a situation where we can safely (I hope?)
put our pre-defined pixel value _directly in CSS_,
and let the negotiation with user-values
happen in the browser.
That removes any need for `px`-to-`em` conversion,
since it can now be handled by a browser.

But that leaves us with the question
of _knowing the desired pixels_.
And I might be out on a limb here,
showing my weakness as a designer,
but I do not think in pixels at all.
To my mind,
everything is contextual --
I need to see the fonts in question
rendered in the space available
before I can adjust it to the right size.
When it looks good
I can copy/paste a pixel value into CSS,
but that value means nothing to me.
It's the output of a decision I already made.

I imagine other designers
are also experimenting with their font sizes
in a tool like Figma or Adobe Something --
and then using the output of one tool
as input for another.
Or maybe they've done this enough
that they _just know_ what font sizes and ratios to use.
That's amazing!
But when I'm designing a new site,
I don't know what base sizes I want in pixels,
or how much it should grow
between which viewport sizes,
or what the right scales will be --
I'm looking for a tool
that will help me make those decisions.

This clicked for me
when I was in Amsterdam for CSS Day.
I had the pleasure of meeting
Eva Boogaard --
a student working on her final project
to graduate from the
Amsterdam University of Applied Sciences.
She referred to her project as
_a design tool with opinions_.
It's a fun site-builder interface,
where you can click on elements of the page
to style them from options in a sidebar.
But the tool won't let
you choose an inaccessible color contrast,
for example,
and (more relevant here)
the font-sizing controls
_don't show any numbers or units at all_.

Eva's tool uses Utopia under the hood,
and shows a similar visualization of font scales --
but rather than setting pixel values as input,
she provides unmarked range sliders.
What are the values at the end?
Which value have you selected?
Does it matter?
What we care about is the text
changing size on the page.
Pixels are still the output,
applied to the relevant CSS calculations,
but not a concern the designer needs to worry about.

That might not be for everyone,
but I love it.
That works well for my brain.

Units like `1em` or `50vi`
are more conceptually useful to me,
because they don't represent any specific size --
they represent a relationship.
If I want half the viewport, that's `50vi`.
If I want a vertical rhythm, that's `1lh`.
I don't need complex calculations
to maintain consistent spacing at _any_ font size.
Any multiple of `1lh` represents that many lines of text.
That's a unit with some _meaning_ behind it.

## What if our tools could figure out the pixel part?





## text-only zoom

That sort of adjustment generally requires browser UI --
some combination of page zoom (generally available),
and text-only zoom (only in some browsers).
Richard suggests that better support for text-only zoom
would make a big difference here,
but I've noticed there's often
_no difference between these features_
on modern responsive sites.
If we size our images and layouts using `em`-relative units,
then supposedly 'text-only' zoom
_continues to impact the entire design_.
The difference is only noticeable
when we disconnect image/layout sizes from text sizes.
