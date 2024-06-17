---
title: Learn Grid Now, Container Queries Can Wait
sub: Take your time with new CSS, but don't sleep on the essentials
date: 2024-06-13
image:
  src: blog/2024/ever-given.jpg
  alt: >
    A back hoe on the bank of the Suez,
    trying to free the Ever Given cargo ship
author: miriam
tags:
  - Article
  - Susy
  - CSS
  - CSSWG
  - Layout
  - Grids
summary: |
  Several people have asked recently
  why container queries
  aren't being used more broadly
  in production.
  But I think we underestimate
  the level of legacy browser support
  that most companies require
  to re-write a code-base.
---

Chris Coyier
[wrote about this recently](https://frontendmasters.com/blog/weve-got-container-queries-now-but-are-we-actually-using-them/)
over at Frontend Masters.
As he (and several comments) mention,
grid and flexbox make
layout more responsive without
the need for queries.
That's true!
But looking at the numbers,
I think we're asking the wrong question.

Container (size) queries
shipped in Firefox on February 14, 2023 --
the last major browser to ship the feature.
Chrome/Edge and Safari shipped
a few months earlier,
in the fall of 2022.
[CanIUse lists size queries support](https://caniuse.com/css-container-queries)
in **93.49%** of all tracked browsers,
with a Baseline status of
_Newly Available_.

In contrast,
Safari shipped CSS grid on March 27, 2017 --
and Edge un-prefixed the feature
on October 17 that same year.
[CanIUse lists grid support](https://caniuse.com/css-grid)
in **99.39%** of all tracked browsers,
with a Baseline status of
_Widely Available_.

These are the two 'stages'
of [Baseline support](https://web.dev/baseline/),
as described on Google's [web.dev](https://web.dev/):

- **Newly available**:
  The feature becomes supported
  by all of the core browsers,
  and is therefore interoperable.
- **Widely available**:
  30 months has passed
  since the newly interoperable date.
  The feature can be used by most sites
  without worrying about support.

Even in single-digits,
_6% of the web_
is still a big difference
in support.

Firefox was the first to support
flexbox behind a prefix,
and the last to un-prefix the feature
on March 18, 2014.
[CanIUse shows flexbox support](https://caniuse.com/flexbox)
in **99.9%** of all tracked browsers.
Solidly in the _wide support_ category
for Baseline,
but only a fraction more
than grid support.

Chris links the Chrome usage counters
for container queries.
I'm warned these numbers are extremely unreliable --
easily triggered by feature checks (e.g. Modernizr),
unused code in third-party libraries,
or popular outliers skewing the data --
so take this with truckloads of salt.
Here's what I see:

- **4.18%** of page loads use
  [container queries](https://chromestatus.com/metrics/css/timeline/popularity/699)
- **81.22%** of page loads use
  [flexbox layout](https://chromestatus.com/metrics/feature/timeline/popularity/1692)
- **only 18.485%** of page loads use
  [grid layout](https://chromestatus.com/metrics/feature/timeline/popularity/1693)

The [State of CSS survey](https://2023.stateofcss.com/)
attempts to measure
how many web authors are using a feature.
This is also suspect, but
**26.7%** of 2023 respondents
['have used' container queries](https://2023.stateofcss.com/en-US/features/layout/#at_container)).
They didn't have questions
about grid and flexbox.

With popular tools like Bootstrap
shipping flexbox-based grid systems,
it's not surprising
to see it highly represented
in the Chrome use counter.
Maybe this data is meaningless.
But anecdotally,
it does seem like most developers are using flexbox,
a few are also using grid,
and everyone still has container queries
on their to-do list
_once it has better support_.

Container queries are basically brand new.
But _what's going on with grids_?

{% callout 'The CanIUse defaults are broken' %}
  By default,
  [CanIUse](https://caniuse.com/) will show you
  _% of all users_,
  which is a very misleading number.
  Since nearly 3% of browsers are untracked,
  those support numbers will never go over 97% for new features.
  I recommend opening the
  [CanIUse default display settings](https://caniuse.com/ciu/settings#display),
  and selecting _All tracked users_.
  You might also want to apply the 'filtered' view,
  to see only browsers with more than
  0.5% usage by default.
{% endcallout %}

## We can't measure time in features released

As close observers of CSS
we often overestimate how long
these features have been around.
Especially with newer features
shipping every few months.
Our scale is off!

> You're still talking about container queries?!
> That was before
> color mixing and selector nesting, _last year_!
> Try to keep up!
> If you're not learning
> view transitions with anchor positions now,
> you'll be left behind!

I get it.
I'm in the CSS Working Group,
regularly discussing features
that won't even become _newly available_
for another year or three.
At OddBird,
we often work on internal tools for clients --
building from scratch,
with little need for legacy support.

I've been thinking about
(and playing with)
container queries
for much longer than the
baseline _wide support_ 30 months.
I wrote the specification,
and started building
[demos in January 2021](https://codepen.io/miriamsuzanne/details/NWRJpQo)
(this demo is broken,
since the syntax changed several times).
But actual browser support
is barely over half-way there --
reaching 16 months next week.

This is still a _very new feature_,
despite our hype cycles moving on.

## Large sites (and core features) are slow to change

Many developers are working in a context
with much more conservative legacy support policies --
often waiting for 'full' support of a new feature
before they even consider using it in production.

In conversations,
I especially hear concerns
about browsers like iOS Safari
that update more slowly,
sometimes requiring a much heavier OS update.
Safari on Mac may update in monthly-ish cycles,
but users with an old phone
are more often out-of-date.

Big sites are container ships
that will get stuck in the Suez Canal
during high winds,
or decimate the Francis Scott Key bridge
when there's a power issue.
These ships are not easy to maneuver.
Sometimes they are maintaining essential resources
for a long tail of users on older devices --
sometimes they are weighed down
by the sheer scale of their organization.
Either way,
it takes some time to change course.

But it's not just the sites
that are difficult to move.
Developers can start sprinkling
`text-wrap: balance` on headings
with a 5-minute pull request,
no matter how large the project.
But Layout Systems are core features,
and often rely on third-party tooling.
It's one thing to install new light fixtures,
it's another thing to replace
the entire hull of a ship.
Even with a smaller team,
a smaller project,
and a lighter browser-support matrix --
it doesn't make sense to re-write your code base
or design system
every time a new feature comes out.

We started phasing out Susy
(our light-weight grid system)
on OddBird projects in 2015.
By 2017,
we were
[recommending others do the same](http://localhost:8080/talks/no-grid-system/),
and we
[officially deprecated](https://github.com/oddbird/susy/commit/018b5c638ec0726d172af96828e6f1712682283b)
the project
on Jul 14, 2020.
Four years later,
[OddBird.net/susy](/susy/)
still has the highest traffic of anything on our site,
and the `susy` package gets
[nearly 19k weekly downloads on npm](https://www.npmjs.com/package/susy).

## Learn CSS grid (yes, you need it)

There's no rush to rip out
all your media queries,
and replace them with containers.
You'll be fine waiting for
_widely available_ support
and your next scheduled re-factor.

But if you're still avoiding grid --
whatever your reasons --
you are, in fact, _missing out_.
CSS grid is one of the best features in CSS,
and one of the biggest time-savers
on every site we build.

I can imagine
it's hard to re-write
a system built on flexbox.
Flexbox is a great feature,
and part of the web platform.
What more do you need?

But flexbox is designed for
content-out distribution,
not system-wide page layouts.
Using flexbox alone
is like only using `inline` text,
without paragraphs, divs, and other `block` elements.
You're using half the system,
and _it's the more complicated half to manage_.

At some point
people looked at grid and thought
"that looks complicated" --
then spent nearly a decade
over-complicating flexbox to compensate.
People still rely on third-party grid systems
like Bootstrap,
because flexbox needs to be _coerced_
into doing this job.

No!
Stop.
_It's time to learn grid. Right now._
You might not think you need it,
but you do.
Set down container queries,
and go learn grid.
