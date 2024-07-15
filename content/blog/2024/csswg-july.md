---
title: CSS Working Group, June/July updates
sub: What I've been working on as an Invited Expert
date: 2024-07-11
summary: >
  The CSS Working Group has regular face-to-face meetings
  (hybrid online/in-person) throughout the year,
  and they always result in a flurry of activity!
  Here's a rundown of some highlights
  from the last few months,
  with a focus on the features I maintain.
---

## Container Queries & Units

spec:
~~[Containment, Level 3](https://www.w3.org/TR/css-contain-3/)~~
[Conditional Rules, Level 5](https://drafts.csswg.org/css-conditional-5/)

### Moving to a new specification

While Container Queries rely heavily
on the idea of 'containment',
the two features are not tightly intertwined --
and we're working to
[loosen the containment restrictions](https://github.com/w3c/csswg-drafts/issues/10544)
even more.

To help clarify the dependency relationship,
and simplify maintenance of these specifications,
Container Queries are moving
from the [Containment module (level 3)](https://www.w3.org/TR/css-contain-3/)
into the [Conditional Rules module (level 5)](https://drafts.csswg.org/css-conditional-5/). Hopefully this change will get published to the
[Working Draft](https://www.w3.org/TR/css-conditional-5/) soon.

### Querying the shadow DOM

After many issues were raised (thanks for making noise!),
we were able to revert the limitation on
[querying containers across shadow-DOM boundaries](https://github.com/w3c/csswg-drafts/issues/5984#issuecomment-2112977366).
Moving forward, slotted elements should be able to query
containers that are defined by a parent shadow-DOM.
Container units will also
get their sizing from
[relevant shadow-DOM containers](https://github.com/w3c/csswg-drafts/issues/7947).

### Viewport units and scrollbars

For years, the viewport units (`vi`/`vw` etc)
have been based on the full dimensions of the viewport,
ignoring any possible scrollbars.
That can lead to accidental overflow
if you size something to `100vw`,
and there's a vertical scrollbar present.

While sometimes frustrating,
that behavior is designed to avoid loop conditions.
Elements sized with viewport units _can cause scrollbars_,
which would change the size of the unit,
potentially removing the need for scrollbars.
But we don't have that issue when scrollbar spacing is stable --
using `overflow: scroll` or
[`scrollbar-gutter: stable`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter) --
so the working group resolved to loosen the restriction.

Moving forward, [*stable* scrollbars](https://github.com/w3c/csswg-drafts/issues/6026)
will be removed from the viewport measurements.
I [requested we do the same](https://github.com/orgs/oddbird/projects/16/views/1?filterQuery=is%3Aissue+last-updated%3A7days&pane=issue&itemId=55733548)
for container-relative `cq*` units,
so that will also be fixed.

### Variables in container (size) queries

A bit farther back, but still exciting:
we agreed that
[variables should be allowed in container size queries](https://github.com/w3c/csswg-drafts/issues/8088#issuecomment-1371590352).
In the future,
you'll be able to write `@container (width > var(--small-screen))`.

The variable will resolve
with the value that custom property has _on the container_.
So you won't be able to make the variable different
for each querying element,
but it can be different for each container
being queried.

### Zoom and container queries

We clarified the
[impact of `zoom` on resolving container queries](https://github.com/w3c/csswg-drafts/issues/10268).
Zoom
[increases the size of a CSS pixel](/2024/07/09/zoomies/)
in relation to the surrounding layout --
so things _appear larger_,
but maintain their internal dimensions.
A `50px` box is still `50px`,
we've just changed the size of our `px` unit.

To keep things simple and consistent,
we determined that containers
should report their own size _as they see it_.
So a `50px` container at `200%` zoom
will continue to report `50px`
in a container query.
This is similar to how relative units
and custom properties resolve
in a container query.

https://codepen.io/miriamsuzanne/pen/xxobvgd?editors=1100

If you want to learn more about
all the variations of
[browser and CSS magnification](/2024/07/09/zoomies/),
I've got you covered.

### Is container query adoption 'too low'?

I've seen a wide range of people worried that
"people aren't using container queries" --
but we don't actually have a way of tracking that!
I was curious where this concern comes from,
what we're comparing to,
and what expectations we _should_ have
about new features showing up in production.

I wrote up my thoughts,
summarized by the title of the article:
[Learn Grid Now, Container Queries Can Wait](/2024/06/13/css-layout/).
Later this month,
we'll be doing a live stream with
Stephanie Eckles
()

Cascade Layers (Cascading & Inheritance, Level 5)
- I want to move the conversation forward on [a `layer` attribute for the html `<link>` element](https://github.com/whatwg/html/issues/7540). This issue has been stalled in the WHATWG for a while, as we try to sort out feature-testing new attributes in HTML. While I'd love to have feature queries in html links as well, I think [separating these two features](https://github.com/w3ctag/design-reviews/issues/970) might unblock the essential progress on Cascade Layers.
- There's been a very active discussion around [handling unlayered styles in the cascade](https://github.com/w3c/csswg-drafts/issues/6323#issuecomment-2207341923). By default, unlayered styles have priority over layered styles. [This is an essential default](https://github.com/w3c/csswg-drafts/issues/6284#issuecomment-2207379170) in my mind, but there are many use-cases where we should be override it. The mega-thread discussion keeps eating it's own tail, but it seems like we have three basic approaches to choose from (and then any number of small variations on each). I have a clear favorite there, but feel free to leave your thoughts as well. If possible, try not to get lost in the naming details - and focus first on the overall behavior of the feature!

Scope (Cascading & Inheritance, Level 6)
- We resolved [a series of issues](https://github.com/w3c/csswg-drafts/issues/10431#issuecomment-2189648413) related to scope specificity and nesting. In the future, you'll be able to put style declarations directly into an `@scope` rule, and they will apply to the scope root with no added specificity. Note that you can also use the `:scope` selector (with a specificity of one attribute), or the `&` selector (which uses the specificity of the scope-root selector). You can imagine bare declarations being wrapped in `:where(:scope)`.
- 😕 'Forgiving selector lists' are very handy, [but limited to `:is()` and `:where()`](https://github.com/w3c/csswg-drafts/issues/7676#issuecomment-1341347244). We had to update the scope start/end selectors [to be unforgiving](https://github.com/w3c/csswg-drafts/issues/10042).
- I've opened a new issue to discuss [implicit scopes when nesting](https://github.com/w3c/csswg-drafts/issues/10497). Not a big change in behavior, but potentially a nice shortcut in some situations?

Mixins & Functions (Mixins & Functions, Level 1)
- The [Editor's Draft](https://drafts.csswg.org/css-mixins/) is underway! This isn't complete (mixins are missing), but it lays out our current plan for custom CSS functions.
- I wrote an article about [how mixins should interact with the cascade](/2024/06/11/removing-mixins/). I'd be happy for your thoughts!
- I've heard some browsers expressing doubt about the impact of mixins. I plan to start documenting use-cases where there are not good alternatives. If you have some, reach out!

Other…
- I'm not an editor on the Color spec, but [I have some opinions anyway](https://github.com/w3c/csswg-drafts/issues/9449). Browsers currently use 'channel clipping' to render out-of-gamut colors, and [the results can be wild](https://codepen.io/miriamsuzanne/pen/BavZLNG). I made a [comparison pen, to see the difference](https://codepen.io/miriamsuzanne/pen/rNRoBXO) between browser rendering and what the spec calls for. Good news! We have [a tentative compromise solution](https://github.com/w3c/csswg-drafts/issues/9449#issuecomment-2162711081) that all browsers agree on. It's not perfect, but it's a big improvement over the current state of things. You can test how it changes the linked pen in Chrome, by turning on the `css gamut mapping` feature flag (`chrome://flags`).
