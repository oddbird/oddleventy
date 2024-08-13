---
title: Partial Feature Queries, Relaxed Layout Containment, and More
sub: CSS Working Group updates from July
author: miriam
date: 2024-08-13
image:
  src: projects/w3c.jpg
tags:
  - Article
  - CSS
  - CSSWG
  - Open Source
summary: >
  Over the last month,
  the CSS Working Group has determined
  we can loosen containment restrictions for query containers,
  and agreed on a syntax for special-case support queries
  (like support for the gap property in a flex context,
  or support for align-content in a block flow context).
---

For more, you can access
[CSS Working Group meeting minutes](https://www.w3.org/Search/Mail/Public/search?keywords=minutes&hdr-1-name=subject&hdr-1-query=&index-grp=Public_FULL&index-type=t&type-index=www-style)
on the W3C mailing list archive.
That's also a good place to see
the [agenda for upcoming meetings](https://www.w3.org/Search/Mail/Public/search?keywords=agenda&hdr-1-name=subject&hdr-1-query=&index-grp=Public_FULL&index-type=t&type-index=www-style).
Regular meetings happen every Wednesday,
with the agenda generally sent one day in advance.
This post highlights updates from:

- [2024-07-10](https://lists.w3.org/Archives/Public/www-style/2024Jul/0003.html)
- [2024-07-17](https://lists.w3.org/Archives/Public/www-style/2024Jul/0006.html)
- [2024-07-24](https://lists.w3.org/Archives/Public/www-style/2024Jul/0010.html)
- [2024-07-31](https://lists.w3.org/Archives/Public/www-style/2024Aug/0000.html)

{% import 'embed.macros.njk' as embed %}
{% import "quotes.macros.njk" as quotes %}

{% callout %}
This is part of a series
providing updates around my work
on the CSS Working Group.

These contributions take a lot of time and effort.
If you're interested in supporting
our open-source CSS work,
consider becoming a [GitHub sponsor](https://github.com/sponsors/oddbird),
or contributing to our
[Open Collective](https://opencollective.com/oddbird-open-source).
{% endcallout %}

## Container queries & conditional rules

Container Queries have officially moved
out of the CSS Containment Module, and into
[CSS Conditional Rules Module (Level 5)](https://www.w3.org/TR/css-conditional-5/).
This is [the same specification module](https://www.w3.org/TR/css-conditional-3/)
that defines the `@media` and `@supports` rules.

Both levels 4 and 5 are currently written as 'diff specs' --
only showing changes from the previous level,
rather than the entire specification.
[Level 4](https://www.w3.org/TR/css-conditional-4/)
defined the `@supports selector()` selector-support feature query,
and is already a
[Candidate Recommendation](https://www.w3.org/Style/2011/CSS-process#rectrack):

{% set crStatus %}
By publishing a Candidate Recommendation,
a working group is expressing
that it considers the specification complete
and that it has resolved all known issues.
{% endset %}

{{ quotes.blockquote({
  'text': crStatus,
  'name': 'The CSS Standardization Process',
  'url': 'https://www.w3.org/Style/2011/CSS-process#rectrack'
}) }}

It's a bit strange to me
that it would still be treated as a 'diff',
with the generic
[`/css-conditional/`](https://www.w3.org/TR/css-conditional/) url
still pointing at level 3 --
but these things happen.
The spec process is not always simple and linear.

Just to make this web of CSS modules
even more confusing:
media queries also have a distinct
[Media Queries](https://www.w3.org/TR/mediaqueries/) module.
That module defines what media features can be queried,
while the Conditional Rules module
only defines the at-rule we use inside CSS stylesheets.

### A new preference-query API

[Media Queries Module Level 5](https://www.w3.org/TR/mediaqueries-5/)
defines a number of
[user preference media features](https://www.w3.org/TR/mediaqueries-5/#mf-user-preferences),
which have been around for a while now:

- `prefers-reduced-motion`
- `prefers-reduced-transparency`
- `prefers-reduced-data`
- `prefers-contrast`
- `prefers-color-scheme`
- `forced-colors`

One of those queries is not like the others,
and you can tell the difference from the name.
The `forced-colors` setting
is the only one _enforced_ by browsers --
all the others are _ignorable_.
If we (as authors) never query the user preference
for 'reduced motion',
it will have no effect on our site.

Users can generally change these preferences
at either the operating system level,
or inside their browser --
depending on the OS, browser, and setting in question.
But at this point,
there's no way for users to change their preference
_for a specific website_,
and save that change across multiple visits.
We can work around that
by individually providing (for example) light/dark toggles,
and then saving the choice
to local storage or a cookie.
But returning visitors will still see
a [flash of their global preference](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/)
on page-load,
before our JavaScript kicks in.

Wouldn't it be nice
to have a way for users
to change their preference site-by-site,
and have browsers remember their preference?
That's what the proposed
[Web Preferences API](https://github.com/WICG/web-preferences-api)
would do.
This proposal gives us access
to update a domain-specific setting
for any `prefers-*` query, for any user,
and have the browser remember that setting
when they return.

That proposal has been underway for some time,
but last month it was
[adopted by the CSS Working Group](https://github.com/w3c/csswg-drafts/issues/6517#issuecomment-2220975121),
and will be added to
[Media Queries Module Level 5](https://www.w3.org/TR/mediaqueries-5/).

### Relaxed layout containment for size queries

Part of the reason
for moving Container Queries
out of the Containment spec
is a drive to relax the relationship
between these features.
Containment is essential for
making size queries possible --
but the existing breakdown of containment types
defined for the `contain` property
is not a perfect match for what we need.

Our initial specification
relied on applying `size` (or `inline-size`),
`layout`, and `style` containment
to all size-query containers.

- Size containment ensures
  that the size of child elements
  can't be used for sizing the parent element.
- Layout containment ensures
  that child elements
  can only participate in the contained layout,
  and are not able to impact layouts
  higher up in the DOM tree.
- Style containment ensures
  that things like CSS counters
  that increment inside a container
  can't change the value of a counter
  outside the container.

All three of those are necessary precautions
to avoid looping behavior,
where changes inside a query could impact
the results of the query.
However, over time we've found
that _only some_ `style` and `layout` containments
are strictly required.
If we don't need as many restrictions
on a container,
we should remove the ones that aren't necessary.

Back in March we resolved that
[anchor names are not blocked by `style` or `layout` containment](https://github.com/w3c/csswg-drafts/issues/10040#issuecomment-2009840674).
I immediately opened an issue
pointing out that this situation is
[not specific to anchor positioning](https://github.com/w3c/csswg-drafts/issues/10102),
and we should consider allowing all positioned elements
to escape `layout` containment --
and therefore escape containers.
Ian Kilpatrick (a Blink engineer)
followed up by proposing we
[no longer apply full `layout` containment to query-containers](https://github.com/w3c/csswg-drafts/issues/10544),
and only apply an [independent formatting context](https://drafts.csswg.org/css-display/#independent-formatting-context).

Two weeks ago,
presumably as a celebration of my birthday,
the Working Group
[resolved to make this change](https://github.com/w3c/csswg-drafts/issues/10544#issuecomment-2248438355).

Moving forward,
that means it still won't be possible
to use `subgrid` across a container boundary,
but it will be possible to do things like:

- Use `baseline` alignment across containers
- Allow `absolute` and `fixed` positioned elements
  to escape their container

I hope we can continue to
relax the impacts of containment on container queries over time.
At this point, we might not see major changes
to existing features --
but we might find more situations like anchor position
where a new feature should not strictly
follow containment rules
applied by query containers.

### Querying partial feature support

There's been a long-standing issue
with how to handle `@support` queries
for features that may be partly implemented
in one or more browser.
The most notable case was
browsers extending the `gap` property
from being grid-specific (2017)
to being supported in flexbox as well.

Firefox implemented that change late in 2018,
Chrome/Edge rolled it out in mid-2020,
but Safari didn't add flexbox gap support
until early 2021.
For several years,
all the browsers were reporting support
for the `gap` property,
but only one browser had _full support_
in all the relevant layout modes.

This is the result of an essential design principle
of the `@supports` rule:
_browsers should not have to maintain a list
of supported features_.
That's been attempted in the past,
but the lists would be to long to maintain well,
and quickly get out of date.
Instead, when a browser parser encounters the `@supports` rule,
it tries to parse the contents of the query:

- If the query can be parsed as valid CSS,
  then the result is `true`
- If the parser doesn't recognize the query content as valid CSS,
  then the result is `false`
- If the query syntax itself is invalid,
  the result is `unknown`
  (I've written about [unknown support](https://www.oddbird.net/2021/05/14/support-unknown/) before)

We can query for `@supports (gap: 1em)`,
and any browser that understands `gap: 1em`
as a valid CSS declaration will claim support.
But there's no way to check
_that the declaration does what we want in all cases_.

This situation has come up again recently,
with browsers adding support for
[box alignment in block](https://css-irl.info/how-do-you-vertically-centre-an-element-in-css/)
and [absolute positioning](https://wpt.fyi/results/css/css-align/abspos?label=master&label=experimental&aligned)
contexts.
As Michelle Barker mentions in her post:

{% set blockAlign %}
One thing that concerns me,
is that this seems to fall into that tricky area
where it becomes impossible to test for browser support
and provide fallbacks using a feature query --
much like `gap` when it was implemented for flexbox.
As `align-content` is well-supported for Grid and flexbox,
the feature query doesn’t help us here.
{% endset %}

{{ quotes.blockquote({
  'text': blockAlign,
  'name': 'Michelle Barker',
  'venue': 'CSS { In Real Life }',
  'url': 'https://css-irl.info/how-do-you-vertically-centre-an-element-in-css/'
}) }}

Back in January,
browsers agreed to
[maintain a short list of these situations](https://github.com/w3c/csswg-drafts/issues/3559#issuecomment-1885332213),
and provide named queries
in specific cases.
To make this work,
it has to be a tool we resort to _rarely_,
in a way that is _coordinated_
across all the major browser engines.

The recent update here
is that we've [agreed on a syntax](https://github.com/w3c/csswg-drafts/issues/9875#issuecomment-2233725405) --
`@supports named-feature(<keyword>)` --
and our first feature keyword:
`align-content-on-display-block`.
Once browsers implement this,
you will be able to test:

```css
@supports (align-content: center) {
  /* browsers that support align-content ANYWHERE */
}

@supports named-feature(align-content-on-display-block) {
  /* only browsers that support align-content in block layout */
}
```

## What's up with CSS masonry?

If you skim through the minutes
from our July meetings you will also find
a number of updates
related to the CSS 'masonry' proposals.

[WebKit](https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/)
and
[Chrome](https://developer.chrome.com/blog/masonry)
have two competing visions
for how masonry layout
ought to work in CSS.
WebKit wants masonry to be part of grid layout,
and Chrome wants to keep them distinct.
The former leads to grid properties
that behave slightly different in different situations,
while the latter means duplicating
a number of properties that would otherwise be identical.

I don't have strong feelings about this,
or strong use-cases for masonry --
but for a second there, it seemed like a hot debate.
Both teams posted the competing proposals,
people ran surveys on social media
to get developer feedback,
and then… nothing.

So what's happening?

You might remember,
a similar thing happened last year
with two different proposals for anchor positioning.
Rather than choosing one or the other,
there was an attempt to merge
the best of both.
That took some time,
but the resulting feature
is much more powerful and usable
than either of the initial proposals.
The work paid off.

In this case,
we can't fully _have it both ways_.
Masonry will either be part of grid layout,
or it will have to be separate.
But in many ways,
we're taking the same approach:
Chrome is opening issues
to show where their masonry might
conflict with existing grid features,
and WebKit is looking for ways
to minimize those conflicts.
Depending how those conflicts are resolved,
we'll have a much better sense
if the masonry-in-grid approach is viable or not.

And then we will (hopefully)
not be debating how the feature _works_,
but only how it is 'spelled' in CSS syntax.
Maybe kicking that can down the road
will give us more information to work with.

## Also keep an eye on…

- [Issue #10618](https://github.com/w3c/csswg-drafts/issues/10618):
  I don't have much to say on this specific issue,
  but I'm keeping a close eye
  on the larger features.
  The `calc-size()` function
  and `interpolate-size` property
  will finally solve _transitions to `auto`_!
- [Issue #8320](https://github.com/w3c/csswg-drafts/issues/8320):
  One of the big frustrations
  with view transitions
  is the need to name every element involved.
  While there's no resolution here yet,
  there's a lot of effort going into
  solving this problem.
