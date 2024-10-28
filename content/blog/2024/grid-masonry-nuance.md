---
title: Choosing a Masonry Syntax in CSS
sub: What makes something a 'grid', and what's at stake?
author: miriam
date: 2024-10-01
updated: 2024-10-23
image:
  src: blog/2024/masonry.jpg
  alt: >
    A gallery of numbered images
    in four columns
tags:
  - Article
  - CSS
  - CSSWG
  - Masonry
  - Grids
summary: >
  Back in 2020,
  Firefox released a prototype
  for doing 'masonry' layout in CSS.
  Now all the browsers are eager to ship _something_,
  but there's a hot debate
  about the best syntax to use.
---

{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}

{% set updateDetails = ['Update', utility.datetime(updated)] | join(' ') %}
{% callout 'note', updateDetails %}
Since posting this article,
Safari has [responded to the debate](https://webkit.org/blog/16026/css-masonry-syntax/)
with (I think) a fairly strong set of arguments.
I've added [my thoughts below](#looking-at-apple%E2%80%99s-latest-arguments-for-grid).
{% endcallout %}

The Firefox prototype
and [CSS Grid Level 3 specification](https://drafts.csswg.org/css-grid-3/)
initially introduced a `masonry` keyword
as part of CSS grid layout.
We can define a standard grid template on one axis,
set the cross-axis to `masonry`,
and we get a 'waterfall' of content
divided somewhat evenly across our tracks --
aligned on one axis,
but packing more densely on the other.

At its core,
a 'masonry' layout
works like 'grid' layout on one axis
and 'flexbox' on the other.
Jen Simmons --
then at Mozilla,
but now working for Apple --
developed a great demonstration
of both the new functionality
and several alternative techniques:

<figure>
  {{ embed.codepen(
    id='QWjqbJj',
    title='Masonry Layout Demo',
    user='jensimmons'
  ) }}
  <figcaption>
    This demo works on Safari Tech Preview,
    or Firefox with an experimental feature flag.
  </figcaption>
</figure>

Rachel Andrew --
then independent, but now at Google --
immediately
[pushed back on the proposal](https://rachelandrew.co.uk/archives/2020/05/05/does-masonry-belong-in-the-css-grid-specification/),
suggesting that masonry and grid
are different enough
they should not be part of the same layout mode.
Since then, the debate has heated up
with conflicting proposals from Apple and Google:

- Safari implemented the grid-masonry proposal,
  and [wrote about the feature](https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/),
  [asking for feedback in a CSSWG issue](https://github.com/w3c/csswg-drafts/issues/10233).
- Chrome responded with an
  [alternative masonry proposal](https://developer.chrome.com/blog/masonry),
  and opened an
  [alternative issue on the CSSWG](https://github.com/w3c/csswg-drafts/issues/9041).
- For better comparison,
  two of the primary CSS spec authors --
  Elika Etemad (Apple) and Tab Atkins-Bittner (Google) --
  wrote a [combined specification](https://www.w3.org/TR/css-grid-3/)
  with both proposals side by side
  (and joined wherever possible).
- Chrome has since followed up
  with [further arguments](https://developer.chrome.com/blog/masonry-syntax)
  for a non-grid syntax.
- ~~I expect we'll see a reply from Apple soon?~~
  ([The Apple response has arrived](https://webkit.org/blog/16026/css-masonry-syntax/))

Based on the comment threads,
it seems like web authors also have opinions!

At this point,
the proposals have nearly the same functionality
(with some caveats that Apple is hoping to address).
They accept roughly the same options,
and use almost the same layout algorithm.

```css
/* grid masonry */
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: masonry;

/* non-grid masonry */
display: masonry;
masonry-tracks: repeat(3, 1fr);
masonry-direction: column;
```

I think either one will work _just fine_.
But let's look at the details!

{% callout 'Hot off the press' %}
I was about to hit _publish_
when Geoff Graham from CSS Tricks posted
a similar rundown:
[CSS Masonry & CSS Grid](https://css-tricks.com/css-masonry-css-grid/).
I recommend checking it out!
{% endcallout %}

## Is masonry a grid?

This is a common debate,
and I don't find it that useful.
I'm not here to protect
the pure platonic essence of 'grid-ness'
being sullied by un-aligned rows.
There is _extensive_ overlap between
masonry and grid functionality.
The terminology can adapt to our needs.

The most I can manage for this line of debate
is to say: web author mental models matter.
On that front it's clear that authors
(like spec editors)
see things very differently from each other.
We're divided.

## Do the features even overlap?

Ian Kilpatrick (Google)
[raised some issues early on](https://github.com/w3c/csswg-drafts/issues/8195#issuecomment-1347260607),
suggesting that even the overlapping parts
of grid and masonry
(defining the columns)
must have slightly different algorithms:

- The grid layout mechanic starts by assigning items to tracks,
  and then adjusts the track sizing
  based on item placement.
- The masonry mechanic works the other way,
  first determining what tracks are available,
  and then fitting items into those tracks.

It's clear that there has been a lot of effort since then
to bring the two approaches in line with each other.
The [current proposal](https://drafts.csswg.org/css-grid-3/#track-sizing-performance)
works by first placing 'hypothetical' items
_in every position that the item could potentially occupy_ --
and then proceeding with normal grid track sizing,
before finally placing the actual items
in their actual positions.

There may still be more to work out here,
but the goal seems to be
making both approaches _work the same_.
That process should help reveal
any fatal flaws in either proposal,
and ensure our final choice
is based only on the fundamental differences.

It's worth letting that play out some
before we make decisions based purely on syntax.
Still, there are a lot more considerations
to keep in mind.

## What can we learn or teach more clearly?

When we're working on new features,
we hope they will be easy to teach and easy to learn.
That's essential if we want people to use the feature!
But it has some of the same issues
as the previous debate.
Who are we teaching,
what do they know already,
and how do they think about layout?

The two proposals provide slightly different abstractions.

- We can imagine a grid,
  where we define either columns or rows,
  and then masonry-pack elements on the other axis.
- We can imagine a set of masonry tracks,
  and then specify the direction that they pack.

There are advantages to understanding one
unified track-layout system,
and giving it additional flexibility.
If you know how to use grids,
the masonry value becomes a smooth extension of that syntax.

There are also advantages to a customized syntax,
specialized for a specific use-case.
If you don't know grids,
the alternative masonry layout mode
might provide a simpler entry point.
In either case,
we can (mostly) re-use the track-definition syntax.

Unfortunately, both options result in
some properties that _look similar_ --
sharing names or syntax --
but have _subtly different rules_ in masonry.

Still, I feel like I could learn or teach either one.

## What are the defaults?

To get from `display: grid` to a basic masonry layout
requires us to set both
`columns` and `rows` --
one of them as the `masonry` axis,
and the other with our desired tracks.
If we don't define multiple tracks,
we'll get a single masonry column by default.

We could consider this a good small-screen default,
and then expect authors to add columns as needed.
But `display: masonry` is a specialized layout mode,
so the defaults can reflect a more common
'masonry' approach:
adding new tracks as the space becomes available.
In the proposed spec,
`masonry-template-tracks` will have an initial value of
`repeat(auto-areas, auto)`.

There's a lot going on in that value.
The `repeat()` function is borrowed from grid,
allowing us to take any number of columns
and duplicate them any number of times.
The first value is _how many times to repeat_,
and the second value describes _the tracks to repeat_.

Grid provides a few keywords for the repeat-count:
`auto-fit` and `auto-fill`.
Both create new tracks whenever space becomes available,
but `auto-fit` caps the total number of tracks
based on the number of items in our grid
(and some other criteria) --
to avoid generating empty tracks.
The proposed `auto-areas` would generate
zero or more tracks based first on
covering any explicit grid areas needed,
and then falling back to `auto-fill`
(or [maybe `auto-fit`](https://github.com/w3c/csswg-drafts/issues/10854#issuecomment-2379810590)) behavior.
This might be useful in both masonry and non-masonry grids,
but is a good _default_ for masonry specifically.

Grid doesn't currently allow auto-repeating tracks
that use an intrinsic size.
Having `auto` in the second argument here
is a powerful new feature.
If this is possible to do in non-masonry tracks as well,
we should make it work everywhere.
But again: it only makes sense as the _default_
in a masonry-specific layout.

Even assuming these values will work
in both syntax options,
our simplest possible masonry layout
looks a bit different now:

```css
/* grid syntax */
display: grid;
grid-template-columns: repeat(auto-areas, auto);
grid-template-rows: masonry;

/* non-grid syntax */
display: masonry;
```

The non-grid option is clearly simpler --
more can be _implied_.
The grid option is not excessive,
just _explicit_.
Both make sense,
but they represent different approaches moving forward…

## What precedent are we setting?

CSS doesn't add new layout modes all the time,
but we do on occasion,
and this is likely to come up again.
We could imagine a new layout system
that is grid-like on one axis,
but does _something else_ on the other axis.
I don't think this is far-fetched at all.
Columns are useful for alignment,
even when the page isn't a strict 2-axis grid.
See, for example, a decade of column-only web 'grid systems'.

Or just consider masonry as a literal combination
of grid columns with flexbox rows:

```css
/* name TBD, maybe 'masonry'? */
display: grid-columns-but-flex-rows;

/* or, extending grid to contain other things… */
display: grid;
grid-template-rows: flex;
```

The grid-integrated syntax maintains existing properties and values.
There is less 'new' syntax we need in the language --
just a single keyword opens up entirely new layout opportunities.
With a small syntax addition,
and a small impact on the overall footprint of CSS,
we've opened up an entire range of grid-plus possibilities.
Even as we add new `grid-plus-*` features down the road,
the _overall language_ remains streamlined.

A new display mode, on the other hand, adds
a whole array of new properties to the language
for each additional extension --
some of them nearly-exact duplicates of existing grid properties.
Our new properties can re-use familiar syntax internally,
so it's not a _huge_ burden to re-learn,
but it does involve a lot of new property names
that could have been avoided.

As a tradeoff, each of those properties is _specialized_ --
providing a new default for the new layout.
If we add more `grid-plus-*` layout modes in the future,
the language will grow quickly,
but each layout mode can get specialized defaults
designed for the use-case in question.
Each _individual usage_ is streamlined.

Both of those maintain one form of 'simplicity'
at the expense of another.
One looks better in isolated demos,
but both are important for
_teachability of the language_
as a unified system.

Of course,
we wouldn't have to make the same decision every time.
Other things to consider case-by-case would be…

## What's the best fallback (or responsive alternate)?

There are several situations
when it's useful to switch between layout methods.
One of those is providing a _fallback_
in browsers that don't support the new syntax,
and the other is providing an _alternative_
under different conditions
(often a `@container` or `@media` query).

Building masonry into grid
provides us with one very clear fallback path.
If we remove the new `masonry` keyword,
we get the same basic grid,
with all the cells aligned on both axis.
You can see this fallback option
in [Jen Simmons' demo](https://codepen.io/jensimmons/pen/QWjqbJj)
embedded above.
It's not perfect,
there's too much space,
but it's pretty decent for a fallback.

Jen provides some
flexbox-based alternatives in her demo,
and Chris Coyier has
a 2020 article documenting other
[Approaches for a CSS Masonry Layout](https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/).
Many of them rely on either
JavaScript, flexbox, or multi-column layouts.

I find most of those alternatives unconvincing.
Some people have suggested that masonry is
'closer to flexbox than grid'
because of the dense item-packing.
It's an argument that sounds compelling to me
on the surface,
but after trying various options,
I haven't actually seen a flexbox fallback
that would work for me as a basis for enhancement.
Maybe that just comes down to personal taste.

If we do want a flexbox or multi-column fallback,
the grid-based proposal requires a bit more work
to get there.
Since the `grid` display mode isn't going to fail entirely,
we need to override it using `@supports`:

```css
/* grid fallback… just leave it */
.grid-fallback {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: masonry;
}

/* flex fallback, additional definition */
.flex-fallback {
  display: flex;
  flex-wrap: wrap;
  /* maybe other things? */

  @supports (grid-template-rows: masonry) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: masonry;
  }
}
```

I'm not sure why we would want that fallback, exactly.
Flexbox rows are all vertically aligned,
just like our default grid rows --
so there's no clear advantage that I see.
But I can imagine situations where we want
a flexbox variant at some other screen size,
to create a different effect?

An alternate `masonry` display mode
would fall back to `block` display by default.
To get any other fallback (grid, flex, or multi-column)
we would have to specify both layouts completely.
For a grid fallback
with columns that match our masonry layout,
that would mean duplicating the track definitions:

```css
/* grid fallback… duplicate properties */
.grid-fallback {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  display: masonry;
  masonry-template-tracks: repeat(auto-fit, minmax(200px, 1fr));
}
```

We could put those track definitions inside a variable if we want,
but it still requires explicit duplication.

Because we can rely on various properties working
in only one layout mode,
and we get a simple mode toggle,
it's fairly simple to set up any fallback we want.
But the trade off is that we don't have
the the most obvious fallback _built in_ from the start.

While I was experimenting with different fallback paths,
I was trying to maintain the spirit of masonry in some way --
tightly packed columns --
with as little effort as possible.
My favorite solution was the default fallback
provided by grid-integrated masonry,
with the addition of rough aspect-ratio attributes when possible --
e.g. `is-short` and `is-tall`.
All items span multiple rows,
but short items span fewer rows,
and tall items span more rows.

<figure>
  {{ embed.codepen(
    id='wvVKvrN',
    title='Rough Puff Masonry',
    user='miriamsuzanne'
  ) }}
  <figcaption>
    I borrowed the markup and images
    from Jen Simmons,
    and I'm pretty happy with the result.
  </figcaption>
</figure>

It's not a perfect solution,
but I was surprised how well it works.
This is a damn good fallback story in my mind.
Of course, _effort_ here is hard to measure.
If we know the size of each item,
and have access to the markup,
then this is pretty straight-forward.
But those are big _ifs_.

On my personal site,
[image galleries](https://www.miriamsuzanne.com/2023/12/31/23-24/)
fit this description.
Maybe I'll start using this approach.

It's also fair to say that fallbacks
become less essential over time.
Looking further down the road,
we might also want to consider…

## What corners are we painting ourselves into?

Frankly, it's hard to know.
But this is one of the questions
that the Chrome team keeps bringing up.
If we attach masonry to grid now,
they can never diverge in the future.
Every future addition to grid
will need to take masonry into account.

While I can see features
that might build on a masonry precedent,
I don't actually have a clear picture of what
might _conflict_ with masonry-in-grid down the road.
I don't see obvious issues
that are likely to come up --
but Chrome is right that it could
theoretically become an issue.

How much do we worry about that now?
I don't know.

## What's next?

Join the conversation!
There are several threads
where developers can leave feedback:

- on the [original proposal](https://github.com/w3c/csswg-drafts/issues/10233)
- or the [alternate syntax](https://github.com/w3c/csswg-drafts/issues/9041)

It's most helpful to talk about your own use-cases,
and how you expect to use this feature
(if you do).
I avoid arguments about:

- The meaning of the word 'grid'.
  CSS column-only layouts
  have been called 'grids'
  since I started building websites
  in the early 2000s --
  and there are still use-cases for `display:grid`
  that focus entirely on one axis.
- Masonry being frivolous, as a layout.
  I get it.
  What we call _the Pinterest layout_ (derogatory)
  has often been overused, or poorly used,
  and not always accessible.
  But there are many other use cases
  for _flowing items into columns without aligning rows_,
  and we shouldn't lose sight of that.
  This is going to be a powerful tool when it ships,
  so it's worth spending some time to consider
  how we want it to work.

I imagine Apple will also post something soon,
to clarify and expand on their position.
I'm interested to see what they say.
I also think Google might release a prototype soon,
which would allow us to compare real code.

For my part,
I'm not particularly invested in one outcome or the other.
I think both proposals are _pretty good_,
and this conversation has already pushed both
to be better than they were initially.
So I'm rooting for the process!

Ask the questions!
Push the language to be better!
Have fun out there, building the web.

## Looking at Apple's latest arguments for grid

_Added on {{ utility.datetime(updated) }}_

In their [response posted Oct 21, 2024](https://webkit.org/blog/16026/css-masonry-syntax/),
Apple developers make several arguments
in favor of the grid-integrated syntax.
It's a long article,
and covers a lot of points we've already discussed,
but a few ideas stand out to me.

They provide use-cases to show where the grid fallback is preferable,
but also how a current masonry-like solution (similar to mine)
could be progressively enhanced in much the same way as `subgrid`.
That feeds into their argument that,
while defaults are nice,
most layouts will require more detail --
and often that detail is where we get overlap with grids.
So the simplest cases might be a line or two shorter
with a non-grid approach,
but realistic use-cases are likely to duplicate the work.

Taking that even further,
they call into question how useful it is
to have `auto` as a repeating value in masonry layouts.
This caught me off guard --
up above I say it sounds useful --
but I think Apple is right to question that.
There's a fundamental lack of information
if we ask the browser to figure out how many columns fit,
_and also how big those columns should be_,
without providing more detail about what to prioritize.
Just because the browser can give us _something_ in this case,
doesn't mean the result will ever be a useful default.

They also provide more specific examples
of [another `grid-plus-*`](#what-precedent-are-we-setting%3F)
layout that authors would find useful:
grid columns, with 'normal flow' rows.
That's a feature that I would be very excited to see.
I don't know if their proposed syntax will work,
but I agree that it should _also_
re-use existing properties wherever possible,
rather than being treated as a distinct layout method.

At this point, I'm fairly well convinced
that the grid solution is a better path forward --
though I'm still not sure what
'future conflicts' Google is concerned about.

### Are we really calling this 'masonry'?

At the end of the article,
there is a suggestion that we re-think the name of this feature.
The only real argument for 'masonry'
is a popular tool with the same name --
and a metaphor that's not particularly precise.

I agree, but don't love their proposed `collapse` or `pack` values.
Do you have better ideas?
Let us know [on Mastodon](https://front-end.social/@mia/113234445766222639)
or [Bluesky](https://bsky.app/profile/mia.terrible.gay/post/3l5iajyldyk22)!
