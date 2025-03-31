---
eleventyExcludeFromCollections: true
title: Learn CSS Anchor Positioning
sub: Make your dropdowns more performant and discover new layout possibilities with CSS anchor positioning.
author: james
extended: |
  James has added key features to the Anchor Positioning polyfill, and helped clients troubleshoot anchor positioning in a variety of frameworks.  James has written about anchor positioning on the OddBird site, and spoken on Learn With Jason and at Michigan TS.

  In addition to this email course, you can hire James for one-on-one consulting or to refactor your existing application.
action:
  text: Subscribe now
  url: "#sign-up"
image:
  src: blog/2024/anchor1.jpg
  alt: A rusty anchor hanging with the sea in the background.
press:
  - text: |
      Just tried out the anchor positioning API in CSS for the first time.
      It's a little more complex than I initially thought it'd be,
      but I love what can be done with it.
      Shout out to @OddBird for the great polyfill too
      so I could get it working in Firefox.
    slug: shout-out
    name: Luke Hansford
    title: Engineering Manager, Fishbrain
    venue: "@lukehansford@mastodon.social"
    face: luke-hansford-bg.jpg
  - text: |
      OddBird is a company I recommend without reservation.
      They are among the best in the world at front end,
      design systems, and w3c standards.
    name: Nicole Sullivan
    title: Product Manager for Web UI
    venue: Google Chrome
    face: nicole-sullivan.jpg
    slug: best-in-the-world
    url: https://www.stubbornella.org/
included:
  - text: Immediate access to lesson 1
    icon: icons/mail-open
  - text: Additional free surprises
    icon: icons/wand
  - text: Ongoing front-end tips & tricks
    icon: icons/tools
  - text: Easily unsubscribe whenever
    icon: icons/interact
  - text: We won’t give anyone your email address
    icon: icons/eye-crossed
summary: |
  Add CSS anchor positioning to your toolbox for quicker turnarounds and to unlock new creative possibilities.
---

{% import "layout.macros.njk" as layout %}
{% import "quotes.macros.njk" as quotes %}
{% import "birds.macros.njk" as birds %}
{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}
{% import 'contact.macros.njk' as contact %}
{% import 'oddnews.macros.njk' as oddnews %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## Take this Free Course to Get...

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Troubleshooting tips

Most of the time, CSS anchor positioning just works.
But when it doesn't, it can be a real pain.
I'll share the common issues I've seen and how to avoid them.

{% endcall %}

{% call layout.block('column') %}

### Reduced buggy behavior on dropdowns

What happens to your dropdowns that are close to the edges,
or as the user scrolls?
CSS anchor positioning offers a robust feature set to handle
these literal edge cases.

{% endcall %}

{% call layout.block('column') %}

### Improved page performance

JavaScript positioning libraries require a lot render-blocking
computations to do what they do.
Moving that load to the browser reduces performance bottlenecks.

{% endcall %}

{% call layout.block('column') %}

### Future-proof component libraries

JavaScript positioning libraries require updates and maintenance.
CSS anchor positioning is part of the browser spec,
and will still work in 10 years.

{% endcall %}

{% call layout.block('column') %}

### Using it now

Not all your users have a browser that supports CSS anchor positioning yet.
I'll show you how to use OddBird's anchor position polyfill to support all your users.

{% endcall %}

{% call layout.block('column') %}

### Advanced use cases

The ability to declaratively reference the size and position
of another element unlocks all sorts of creative possibilities.

{% endcall %}

{% endcall %}

{% endcall %}

{{ embed.codepen(
  id='wBvEavV',
  title='Anchor Positioning Demo',
  user='jamessw',
  height=300
) }}

## 9 Weekly Emails

{% call layout.grid(
  'narrow-columns',
  attrs={'style': '--column: page'}
) %}

{% call layout.block('column') %}

- Placement with `position-area`
- Using a position with `anchor()`
- Using a size with `anchor-size()`
- Reusing anchor declarations
- Positioning popovers

{% endcall %}

{% call layout.block('column') %}

- Troubleshooting anchor positioning
- Scroll visibility
- Handling element overflow
- Use it now with a polyfill

{% endcall %}

{% endcall %}

{% call layout.block() %}

{{ utility.main_action(
  content='Sign up, get first email',
  url='#sign-up'
) }}

{% endcall %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## This Email Course Teaches

You learn about anchor positioning, scoping your anchors, handling overflow,
anchoring with the Shadow DOM, positioning popovers, using Dev Tools to
troubleshoot anchors, pseudo elements that can be anchors, and new possibilities
for innovative layouts.

{% endcall %}

## About James

{% set bird = collections.birds | authorPage('james') %}

{% call birds.card(
  bird=bird,
  extended=extended
) %}

{% endcall %}

{{ utility.main_action(
  content='Subscribe to the free course',
  url='#'
) }}

{{ quotes.grid(press) }}

## Sign up

{% call layout.grid(
  name='narrow-columns',
  attrs={'style': '--column: wide'}
) %}

{% call layout.block('column') %}

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

{% endcall %}

{% call layout.block('column') %}

{{ oddnews.oddnews_signup(
  heading=false,
  tag="course-anchor-positioning",
  class="headerless",
  buttonText="Subscribe to learn Anchor Positioning"
) }}

{% endcall %}

{% endcall %}

## Why it's time to learn CSS anchor positioning

Anchor positioning is currently not available in all browsers,
and it will be 2 to 3 years before you can safely assume all your users have it.
But now is the time to add this new tool to your toolkit. Here's why.

The ability to describe anchor positioning in a more declarative way has changed
how I think about layout. It’s unlocked new possibilities and made for better
user experiences. And with the polyfill, all your users can have the same
experience without waiting for browsers to catch up.

## Don't add another dependency

While it's tempting to reach for the JavaScript library you've used in the past,
they introduce performance bottlenecks and ongoing maintenance. As part of the
browser, anchor positioning is more performant and will automatically continue
to work for years to come. With the polyfill, even your users with browsers that
don't support anchor positioning will have the same functionality, and you'll
get to enjoy the ergonomics of the new API.

That's why I love anchor positioning. I can't wait to share what I've learned
with you so you can add it to your toolkit too!

## Why subscribe to an email course?

The CSS anchor positioning API may seem complex, but it is actually a group of
many simple parts. A talk or video will need to speed through all the parts to
cover everything, but this email course will space deeper learning over
multiple weeks.

This email course is designed to complement other learning methods, to give you
repetition so the concepts move from short to long term memory. You will benefit
from having an understanding of the capabilities of the tool before you need to
use it, so you can quickly identify where it will be useful.
