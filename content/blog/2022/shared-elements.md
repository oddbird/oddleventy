---
title: Every Transition is a Page Transition?
sub: Experimenting with the shared element transitions API
author: miriam
date: 2022-06-29
syndication:
  - https://twitter.com/OddBird/status/1542535314366902277
tags:
  - Article
  - CSS
  - CSSWG
  - JavaScript
image:
  src: blog/2022/element-transitions/starwars-wipe.jpg
  alt: |
    A scene wipe transition in Star Wars,
    as Luke and C-3PO in a speeder
    wipe across a close-up
    of Luke and Obi-Wan talking.
    Over top, a dotted line shows the transition edge,
    and a red arrow shows the transition movement
    in front of the speeder.
layers:
  caption: |
    Layers can be written in any order,
    with the same layer being used in multiple locations,
    but CSS will treat layers as groups
    based on the established layer-order --
    which we can visualize sorted into groups
    such that the 'last-takes-precedence'.
  gallery:
    - img: blog/2022/element-transitions/original.png
      alt: |
        Sorting Cascade Layers, original order,
        '@layer reset, components, utilities;'
        followed by
        9 color-coded @layer blocks and imports
        in random order
    - img: blog/2022/element-transitions/sorted.png
      alt: |
        Sorting Cascade Layers,
        sorted so last-takes-precedence,
        '@layer reset, components, utilities;'
        followed by
        9 color-coded @layer blocks and imports
        grouped together by layer,
        with unlayered styles at the end
summary: |
  There's a new web API proposal
  for transitioning shared-elements
  across pages.
  It's great for making smooth page transitions,
  but what if we apply it to
  individual elements
  with changing styles on a single page?
---

{% import 'embed.macros.njk' as embed %}

Over the last couple of years,
the [Web Incubator Community Group](https://github.com/WICG)
has been developing a proposal for
[Shared Element Transitions](https://github.com/WICG/shared-element-transitions).
The stated goal
is to smooth out transitions
across page-loads on the web --
helping users maintain context as they navigate.
From [the explainer](https://github.com/WICG/shared-element-transitions/blob/main/explainer.md):

> When a user navigates on the web from Page-A to Page-B,
> the viewport jumps and there is a flash of white
> as elements disappear only to reappear in the same place
> in some in-progress state.
> This sequenced, disconnected user experience is disorienting…

<video src="https://user-images.githubusercontent.com/93594/141100217-ba1fa157-cd79-4a9d-b3b4-67484d3c7dbf.mp4" controls="controls" muted="muted">
</video>

I haven't been involved with
the development of this feature,
but I was excited to see it underway.
Last week, I decided to take a closer look.

## Getting started with the prototype

The
[initial draft API](https://developer.chrome.com/blog/shared-element-transitions-for-spas/)
was released last year,
along with a prototype
available in [Chrome Canary](https://www.google.com/chrome/canary/).
To turn on the prototype
in Chrome:

1. Navigate to `chrome://flags/`
2. Search for and enable `Experimental Web Platform features`
3. Search for and enable `documentTransition API`
4. Restart the browser
5. Check out the [demo site](https://http203-playlist.netlify.app/)!

<!-- <details>
<summary>More on pre-release browsers</summary>

If you haven't explored
the 'nightly' and 'beta' channels
of the various browsers,
I highly recommend installing them:

- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Firefox Beta & Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Edge Canary](https://www.microsoftedgeinsider.com/en-us/download/canary)

These 'pre-release' browsers give us a chance
to play with new web features as they are being developed --
and provide feedback before the features go public
(and become much harder to change).
Prototypes are generally the first step,
and will often show up in a single pre-release browser
before there is even a complete specification.

</details> -->

## Now with CSS support

In order to animate 'shared elements'
across different pages, we need to:

1. Associate elements on the starting page
   (like the thumbnail of a video)
   with elements on the ending page
   (like the video itself).
2. Start a 'document transition'
   from one page to the other,
   which will animate each 'shared' element
   between the two pages.
3. Optionally override the default transitions
   used for each 'shared' element.

In the first draft of the feature,
JavaScript was required for all three steps.
At that point,
many of us suggested
that steps 1 and 3 in particular
feel like style concerns
that could be handled declaratively in CSS.
And earlier this year,
[Jake Archibald](https://jakearchibald.com/)
presented a new proposal & prototype,
which makes that possible!

{{ embed.figure(data=[{youtube:'JCJUPJ_zDQ4'}]) }}

1. We can use the `page-transition-tag` property in CSS
   to give each element a name.
   If the start and end pages both have
   an element with the same name,
   it becomes a shared element!
2. At this point,
   we still need JavaScript
   to create and start transition events
   (we'll get there).
3. We can optionally override the default transitions in CSS
   by applying animation styles
   to several pseudo-elements
   that represent the elements-in-transition.

For more detail on the full API,
I recommend reading the
[Developer Guide](https://github.com/WICG/shared-element-transitions/blob/main/developer-guide.md).

## Every transition is a 'page' transition?

Last week
at [SmashingConf SF](https://smashingconf.com/sf-2022/),
[Jhey Tompkins](https://smashingconf.com/sf-2022/speakers/jhey-tompkins/)
mentioned something that caught my attention.
According to Jhey,
it's possible to trigger
a page 'transition' without
ever leaving the page you're on.
That seemed strange to me.
Is it just a bug in the prototype?
But after thinking through it more,
this makes sense.

Shared-element transitions
are designed to work
with standard web navigation
_across multiple page loads_,
as well as page transitions
in 'single-page' apps (often called SPAs).
While many SPAs have similar features built-in,
a web platform approach requires less code,
and will result in better, more consistent performance.
In either case,
the stated goal is to help with transitions
from one 'page' to the next --
but SPAs (by definition)
recreate the _effect_ of a page-load
_without ever leaving the page_.
We might update the URL
and replace the entire contents of the page,
but from a browser perspective
there is no change from one document to another.

Since SPA transitions are supported,
and SPA navigation happens entirely in-page,
a 'page' in this case is just
_any given state of the document_.
We can capture the state of things at one moment,
define that as the starting page,
make any changes we want,
and define the results as our ending page --
then animate between them.

The result is just like a 'FLIP'
(first, last, invert, play) animation!
If you haven't encountered FLIP before,
[Cassie Evans](https://www.cassie.codes/)
is a great resource on the topic:

{{ embed.figure(data=[{youtube: 'kUDMwy2OaK4'}]) }}

Cassie also gave a brilliant talk at SmashingConf
about FLIP animations in responsive design.
I'll post that video here if it becomes available.

## Animating 'discrete' changes in CSS

CSS can currently only animate
by smoothly updating the value of a property.
We can animate a change in `opacity` from `0` to `1`,
because CSS understands all the opacity values
between `0` and `1`.
Along the way,
CSS can show us an opacity of `0.001` and `0.002`
and so on, up through `0.998` and eventually `1`.

But there are many properties
that we can't animate in that way,
like grid-item positions.
There are no valid `grid-column-start` values between `1` and `2` --
grid lines only exist as whole steps,
or what we call 'discrete' values,
without any other values in-between.
Since CSS has no way to represent
the infinite intermediate steps along the way,
we aren't able to animate between them.
The same is true
if we want to change the `order`
of elements in grid or flexbox layout,
and have them re-arrange automatically.

What we really want to do in this case
is animate the _results_ of those style changes.
The 'in-between' positions aren't values of any CSS property,
but actual coordinates on the page --
the changes in an element from state 'A' to state 'B'.
Again, we're describing the common use-case
for a FLIP animation.

## Let's try it out!

For my own talk at SmashingConf,
I created a
[visualization](https://slides.oddbird.net/demos/cascade/layers/)
of
[Cascade Layers](https://css-tricks.com/css-cascade-layers/)
being 'sorted' into groups.
The visualization starts
with an explicit layer order
followed by 9 layer blocks & imports,
mixed together in random order.
Three buttons allow them
to be shown either in their original order,
sorted so last-takes-precedence,
or weighted with most powerful at the top:

{{ embed.figure(
  data=layers.gallery,
  caption=layers.caption
) }}

Pressing a given button
changes a `data-sort` attribute
on the (flexbox) list of layers,
and then CSS `order` and `flex-direction`
(both discrete values)
are used to re-order the list
in different ways.
I wanted to animate the re-ordering
to make it clear what's happening,
but in a hurry
I didn't want to mess with
the JavaScript libraries required.

It may also be more semantically appropriate
to do this sorting in the DOM --
and I may still do that --
but at the time I was more concerned
about the resulting stage visualization.
Either way,
sorting in CSS or in the DOM,
the shared-element transition will work.
All that matters to this API
is that _something changed_ between two states,
and we can animate each 'shared element'
from one state to the other.

In this case, we want to associate
each element in the initial state
with the same element in the target state.
Since the element itself isn't going anywhere,
we can do that by giving each element
a unique `page-transition-tag`.
That transition-tag will be the same
both before and after the state-change,
associating the element before
with the same element after.
I used a `for` loop in Sass
to apply unique transition-tags on each layer:

```scss
// for each of the nine layer blocks
@for $i from 1 through 9 {
  // give it a transition-tag based on its nth-position
  [data-layer]:nth-of-type(#{$i}) {
    page-transition-tag: layer-#{$i};
  }
}
```

That's all we need in the CSS.
I also have a `pressBtn` JavaScript function
that changes an attribute on the list.
This is the function that 'triggers' our change:

```js
const btnPress = (btn) => {
  list.setAttribute('data-sort', btn.dataset.set);
};
```

All that's left is telling the browser
that this attribute change
should be considered a 'document transition'.
As far as I can tell,
with my limited research,
this seems to work:

```js
const btnPress = (btn) => {
  // create a document transition
  const transition = document.createDocumentTransition();

  // start the transition,
  // and make our change in the callback function
  await transition.start(() =>
    doc.setAttribute('data-sort', btn.dataset.set),
  );
};
```

Roughly speaking,
the browser will take a picture of each tagged element
before any changes are applied by the callback function,
and then take a picture of any tag-associated elements
after the change has been applied --
and animates between those two images.

It's worth noting that --
while we haven't changed any content on the page,
and only a few elements are moving --
the browser does actually
consider this a transition 'between pages'.
For the duration of the transition,
the entire page is being turned into
a set of captured images to cross-fade.
That can lead to some unexpected stretching
of the surrounding elements
if we're not careful.

Here's the live demo on codepen:

{{ embed.codepen(
  id='JjpQzJd',
  title='In-Page Transitions',
  user='miriamsuzanne',
  height='600'
) }}

And a video of the animated results:

{{ embed.video('2022/layer-page-transition.mov', height='1244', width='700') }}

You might also notice the `clip-path` animation on the list itself
looks a bit janky.
The prototype doesn't yet support
'nesting' shared-elements in a transition --
so the items are being pulled out of the list
(where they appear un-clipped)
for the duration of the change.
If I understand right,
that will be improved in later versions,
allowing the outer clip animation
to impact the items inside.

I'm sure there are more improvements
that we could make here --
like checking for support of the API
and providing a fallback,
or providing more detailed animation rules,
or re-arranging the DOM rather than using CSS order --
but I'll leave all those optimizations
as an exercise for the reader.

## Caveat emptor

I am not an expert
on the details of this API --
and the API itself is likely to keep changing.
At this point,
I'm just an interested developer
playing with an early prototype,
and potentially pushing it outside
the intended use-cases.

I'll be interested in feedback on this
from the people working on the spec,
or anyone else who wants to explore.
I'll try to provide updates here
as my understanding develops.
