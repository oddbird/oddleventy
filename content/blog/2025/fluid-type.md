---
title: Reimagining Fluid Typography
sub: Are we responding to the right inputs?
author: miriam
date: 2025-02-12
updated: 2025-03-27
tags:
  - Article
  - CSS
  - Typography
image:
  src: blog/2025/font-scale-hero.jpg
  alt: >
    A case of letterpress type
    with arrows pointing outward
    and a cursor hand overlaid
summary: |
  For many years,
  it has been 'best practice'
  to use relative units
  (especially `em` and `rem`)
  for sizing text.
  That's great!
  But after playing around with my user preferences,
  I think we can improve on the common approaches.
---

{% import "quotes.macros.njk" as quotes %}
{% import 'embed.macros.njk' as embed %}

{% callout 'note' %}

Come join us live
for a conversation
about fluid type
with the experts from Clearleft. [Winging It | March 20 @ 11am MT](https://www.youtube.com/live/py41Ys-iRvk)

We also talked about some of these ideas
in our [Winging It](/2025/01/24/winging-it-15/) live stream
last month
with Alan Stearns,
co-chair of the CSS Working Group.
Check that out for more discussion
of typography and CSS units!
{% endcallout %}

The browser provides a default text size
based on user preferences,
and our text should be _relative to that preference_.
Establishing our root font-size with an `em` value
helps keep that relationship intact.

Similarly,
font 'scales' are intended to
maintain some _internal harmony_
across a range of different font sizes.
By establishing our entire scale in relative units
like `em` and `rem`,
we maintain a consistent relationship between sizes,
while allowing the entire system
to scale up or down
relative to user defaults
or browser [(page) zoom](/2024/07/09/zoomies/).

Recently,
'fluid typography' has pushed us
to incorporate viewport or container relative units
into our font sizing as well --
generally with a `clamp()` function
to integrate both `em`/`rem` and `vi`/`cqi` _inputs_
in a responsive algorithm
with lower and upper boundaries.
See [utopia.fyi](https://utopia.fyi)
for the most common approach:

```css
:root {
  font-size: clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem);
}
```

Those numbers look a bit magical,
because they are.
Utopia asks us to start from a range of font sizes
defined in `px` values,
and then it does a conversion to `rem`
by assuming that `1rem == 16px`.
As long as that assumption holds true,
the math above will scale our font
from an `18px` minimum
to a `20px` maximum.

This is an assumption that developers often lean on,
even when we're not doing fluid math.
It's not an entirely reliable assumption,
but it matches the default in most browsers,
and things can feel pretty squishy
if we don't do _some form_ of translation-to-pixels.
How can we choose a font size
using units that are entirely untethered from the display?
What is `1rem` without a conversion?

It's a reliable approach,
but the more I play with it
the more questions I have.
So let's dig in,
and see if there are improvements we can make.

{% callout 'note' %}
Fluid calculations with viewport units
can cause accessibility issues
if we're not careful.
So keep an eye on the warnings
that Utopia provides,
or jump over to [fluid.style](https://fluid.style)
to test the page-zoom capabilities
of any fluid calculation.
{% endcallout %}


## What's the purpose of a font-size preference?

I've been
[playing with my browser settings](https://www.miriamsuzanne.com/2024/01/24/have-preferences/),
starting with fonts
and then the default font-size.
These are settings that most browsers provide.
Since I generally prefer web text around `24px`,
that seems like an obvious preference to set, right?

But I've already designed my site
to have large text _relative to_ the user default.
Ignoring the fluid bits for now,
I set the root `font-size` to roughly `1.5em` --
half again the size of the user setting.
When my preference was set to the default `16px`,
my site would already display text at `24px`.
Now that I've said I _want_ `24px` font-size,
my site has increased to `36px`!

{{ embed.figure(
  data=[{
    img: 'blog/2025/font-scale.jpg',
    alt: 'Two screenshots from my site, one with 16px preference and 24px rendered text - the other with much larger 24px preference and 36px rendered'
  }],
  caption='I can make the text larger, but it never matches my preference'
) }}

It seems like Chromium browsers
now have a way of selecting from the default `medium`
or a list of larger and smaller options:

- Very small
- Small
- Medium (recommended)
- Large
- Very large

You can still get to an exact-font-size setting,
but it's hidden away.
That change makes some sense to me,
and better reflects what's happening.
I can make font sizes
generally larger or smaller across the web
(at least where sites use relative sizing) --
but I can't actually establish
a single font size
that sites will directly respect.

The problem is
that's not actually what I _want_
from setting a font-size preference.
My goal here
is not to make the text on every website
larger than it was before --
regardless of the existing design.
I really do want sites to _usually_
just give me text around `24px` (or 'large'),
because that's _a pretty good default for me_.
Sites with smaller body text
would ideally increase their font size,
but sites with the same size or larger text
certainly shouldn't get _even bigger_.

It's not just my site --
this has become a common practice across the industry.
And it means some of my favorite sites
already using large type
become _too large_ when I set my browser preference.
So I had to remove that preference.

I see this situation play out over and over
on the web.
The lesson we often learn is
_users don't set preferences_,
when the reality is that
_we applied their preferences badly_.
When the preference doesn't do what I want,
of course I have to stop using that preference.

That leads us to an assumption that
the browser preference will always be `16px`.
We compare that to our mockups with `24px` fonts,
do some basic arithmetic,
and set our base font size to `1.5em`.
_Good enough_.

TL;DR -- Never do pixel math with `em` and `rem` units.
That's where we went wrong,
by assuming that `16px == 1em` is a reliable fact.

In this case,
there's a quick and easy solution
that would make font-size preferences work
across the board.
There's a single root font size setting
that is guaranteed to match the user font size.
It's generally kept a secret,
but Adrian Roselli
has broken the magician's code
to bring us the good news:

{{ quotes.blockquote({
  'text': "It’s none.",
  'name': "Adrian Roselli",
  'venue': "The Ultimate Ideal Bestest Base Font Size That Everyone Is Keeping a Secret, Especially Chet",
  'url': 'https://adrianroselli.com/2024/03/the-ultimate-ideal-bestest-base-font-size-that-everyone-is-keeping-a-secret-especially-chet.html'
}) }}

_Don't set a root font size._
Adrian's article is excellent,
and I think he's probably right on this one.
The best base font size
is the user's default font size --
set in the browser.

```css
html {
  /* no size is the best size */
}
```

## Why should type be responsive at all?

But I still have an issue,
because _the browser_ doesn't give me many options
for setting the preference.
And (not surprisingly)
one size does not fit all sites or situations.

I like reading large text,
but 'large' is a relative concept.
A font size of `72px`
is nearly unreadable on my phone,
but looks great for headings on my
external 20-inch monitor.
Similarly,
the common default `16px` font size
feels fine to me on a phone,
with limited line length,
but it's smaller than I want
when I have 20 inches to fill.

Of course,
I could set different defaults
for different devices,
but that doesn't help when I resize windows.
Even with the browser constantly running fullscreen,
my laptop is only sometimes plugged into
an external monitor.
When I unplug it, I have less space available.

Again I've heard a common refrain that
"users don't resize their windows" --
but I find that entirely unbelievable.
In fact, I'd bet I'm in a very small minority
by using mostly fullscreen apps.
When I watch other people compute,
I expect to see a scattering of randomly-sized windows
overlapping each other on a single desktop.
That's the default.
And so those overlapping windows
have to get dragged around and resized
in order to navigate through different tasks.
Average users don't sit around
resizing windows up and down for fun,
like we do,
but they absolutely adjust the window size
to fit different tasks.
I set up a poll to see
[how people on Mastodon manage browser windows](https://front-end.social/@mia/113992409837989769).

As a web surfer,
I would like my default font size
to respond to those changes.
As a web author,
I would like my site to be responsive as well.
We design layouts that respond smoothly
from the smallest screen to the largest --
it seems absurd to keep the base font size
locked in place through that entire responsive process.

So _I want responsive typography_,
and browsers (as a rule)
don't make that available in user settings.
There are some browsers (like Safari)
that accept arbitrary CSS preferences,
but that's rare --
and only useful to people who write CSS.

There are a few ways I could imagine
approaching this.
Maybe we just add a slight scale factor
to the user default:

```css
html {
  font-size: calc(1em + 1vw);
}
```

But that will always be larger than the user asked for.
So we could adjust it down slightly,
and provide clamps:

```css
html {
  font-size: clamp(1em, 0.9em + 1vw, 1.5em);
}
```

{% import 'utility.macros.njk' as utility %}

{% set update = ['Update', utility.datetime(updated)] | join(' ') %}
{% callout 'note', update %}
I don't know if this is a major improvement yet.
I certainly don't feel confident here
in recommending a new best practice,
but I'm interested in continuing to explore these questions.
I think there might be other improvements we could make
to more helpfully reflect a user font-size preference
in a fluid setting.
I'd be curious what other ideas people come up with.
{% endcallout %}

For now,
I like that we've put the focus on
_what an `em` represents to the user_,
rather than _how an `em` will render under default conditions_.
We're not trying to achieve a specific font size
(or range of sizes)
by assuming the user has a `16px` default.
There's no _calculation witchcraft_ aimed
at some target value in our designer mind,
and the clamps are not related to my desired range of outcomes.
Instead we're adding a slight responsiveness to the user value,
and using the clamps to keep our fluid value
within range of the user's intent.

Relative units like `em` and `rem`
are excellent for _internal relationships_ --
keeping the scale consistent between
body text and headings, for example.
But things always go wrong
when we try to treat `em` as an alias for `px`,
with mental conversions based on their assumed default relationship.
At that point we're keeping _zoom_,
but discarding everything else about the user preference.

Any time you start doing mental math with `16px == 1em`,
stop yourself and ask if that math holds up
over a whole range of user preferences.

(It doesn't. Don't do it.)

## Doing what the browser won't

I also have an issue
where my web-surfing preference for large text
does not apply equally to all sites.
When I'm reading a blog post,
I just want a nice big view of the text.
When I'm scanning bank transactions,
I'm happy for something a bit more compact.
I think browsers like Arc are on the right track
with per-site style adjustments.

We could take my responsive-default approach even further
by providing site-specific controls
as part of our UI.
We still want to make sure the defaults are reasonable,
based on the global preferences,
and only provide the UI as a progressive enhancement.
To quote accessibility expert Kate Kalcevich:

{{ quotes.blockquote({
  text: "The real advance in accessibility is providing options and adapting to user preferences.",
  name: "Kate Kalcevich",
  title: "Scaling up Accessibility (video)",
  url: "https://www.youtube.com/watch?v=BF6LnePk_Ws"
}) }}

I mocked up a (stand-alone) custom element
with a rough proof of concept.
I'm sure there are ways to improve it,
such as adjusting the values,
adding a form submit option,
or tracking the preference in local storage --
but I'm curious what you think.

{% import 'embed.macros.njk' as embed %}

{{ embed.codepen(
  id='yyLLErw',
  title='Fluid-Type Custom Element',
  user='miriamsuzanne',
  height=600
) }}

It may not be the _Ideal Bestest_ (TM) base font size,
but we haven't strayed far --
and we've avoided magic numbers
or calculation witchcraft.
Maybe the slight deviation is warranted
for a more responsive and user-adaptive site?

What do you think?
Let us know on [Mastodon](https://front-end.social/@oddbird)
or [Bluesky](https://bsky.app/profile/oddbird.dev/)!
