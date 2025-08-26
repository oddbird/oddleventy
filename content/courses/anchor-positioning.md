---
title: Create Performant Layouts and Resilient Dropdowns
sub: This CSS anchor positioning course teaches you how
author: james
date: 2025-04-28
extended: |
  James added key features to the Anchor Positioning polyfill, and helped
  clients troubleshoot anchor positioning in a variety of frameworks. He has
  written about [anchor positioning](/tags/anchor-positioning/) on the OddBird
  site, and spoken on Learn With Jason and at Michigan TypeScript.

  In addition to this email course, you can hire James for
  [one-on-one consulting](/services/consulting/)
  or to [refactor your existing application](/contact/).
action:
  text: Subscribe now
  url: '#sign-up'
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
    venue: '@lukehansford@mastodon.social'
    url: https://mastodon.social/@lukehansford
    face: luke-hansford-bg.jpg
  - text: |
      James helped me get my head around anchor positioning quickly. After he
      explained it to me I was able to put anchor positioning to work in a
      project immediately, in a way that I would have previously solved with
      lots of custom JavaScript and headaches. If you want to learn anchor
      positioning in a fast and practical way, there's no one better than James
      to teach you.
    name: Jason Lengstorf
    venue: Learn With Jason
    face: jason-lengstorf.webp
    slug: head-around
    url: https://codetv.dev/series/learn-with-jason/
included:
  - title: Immediate access
    text: You will receive lesson 1 within minutes of subscribing
    icon: icons/mail-open
  - title: Easily unsubscribe
    text: Take in as much of the course as you'd like
    icon: icons/interact
  - title: Privacy matters to us
    text: We won’t share your email address
    icon: icons/eye-crossed
  - title: Easily opt-in for more free tips & tricks
    text: After the course, choose to receive updates from OddBird
    icon: icons/tools
summary: |
  Make your dropdowns more performant and discover new layout possibilities with
  quicker turnarounds using CSS anchor positioning. JavaScript positioning
  libraries require updates and maintenance, but CSS anchor positioning is part
  of the browser spec, and will stand the test of time.
---

{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}
{% import 'birds.macros.njk' as birds %}
{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}
{% import 'oddnews.macros.njk' as oddnews %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## Take this free course to get...

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Troubleshooting tips

Most of the time, CSS anchor positioning just works.
But when it doesn't, it can be a real pain.
I'll share the common issues I've seen and how to avoid them.

{% endcall %}

{% call layout.block('column') %}

### Fewer dropdown bugs

What happens to dropdowns that are close to viewport edges,
or as the user scrolls?
CSS anchor positioning offers a robust feature set to handle
these literal edge cases.

{% endcall %}

{% call layout.block('column') %}

### Fast page performance

JavaScript positioning libraries require a lot of render-blocking
computations to do what they do.
Moving that load to the browser reduces performance bottlenecks.

{% endcall %}

{% call layout.block('column') %}

### Future-proof component libraries

JavaScript-based solutions require updates and maintenance.
CSS anchor positioning is part of the browser spec,
and will still work in 10 years.

{% endcall %}

{% call layout.block('column') %}

### Full support now

Not all your users have a browser that supports CSS anchor positioning yet. I'll
show you how to use OddBird's [anchor positioning
polyfill](https://anchor-polyfill.netlify.app/) to support all your users.

{% endcall %}

{% call layout.block('column') %}

### Advanced use cases

The ability to declaratively reference the size and position
of another element unlocks all sorts of creative possibilities.

{% endcall %}

{% endcall %}

{% endcall %}

## Anchor positioning demo

{{ embed.codepen(
  id='wBvEavV',
  title='Anchor Positioning Demo',
  user='jamessw',
  height=300
) }}

## 9 weekly emails

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
  content='Sign up to get your first email',
  url='#sign-up'
) }}

{% endcall %}

<div style="margin-bottom: 1rem">

## What this email course teaches

You will learn about anchor positioning, scoping your anchors, handling
overflow, anchoring with the Shadow DOM, positioning popovers, using Dev Tools
to troubleshoot anchors, pseudo elements that can be anchors, and new
possibilities for innovative layouts.

</div>

## About James

{% set bird = collections.birds | authorPage('james') %}

{{ birds.card(bird=bird, extended=extended) }}

{{ utility.main_action(
  content='Subscribe to the free course',
  url='#sign-up'
) }}

{{ quotes.grid(press) }}

## <a id="sign-up">Create performant layouts and resilient dropdowns</a>

{% call layout.block(
  attrs={'style': '--column: wide'}
) %}

{% call layout.grid(
  'narrow-columns'
) %}

{% call layout.block('column') %}

{{ embed.icon_block(
  data=included,
  grid='fit'
) }}

{% endcall %}

{% call layout.block('column') %}

{{ oddnews.oddnews_signup(
  heading='Email Course Sign Up',
  subheading='Be among the first to discover new layout possibilities with anchor positioning.',
  tag='course-anchor-positioning',
  class='headerless',
  buttonText='Subscribe'
) }}

{% endcall %}

{% endcall %}

{% endcall %}

## Why it's time to learn CSS anchor positioning

Anchor positioning is currently not available in all browsers,
and it will be 2 or 3 years before you can safely assume all your users have it.
But now is the time to add this new tool to your toolkit.

The ability to describe anchor positioning in a more declarative way has changed
how I think about layout. It has unlocked new possibilities and made for better
user experiences. And with the polyfill, all your users can have the same
experience without waiting for browsers to catch up.

## Don't add another forever dependency

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
repetition so the concepts move from short-term to long-term memory. You will
benefit from having an understanding of the capabilities of the tool before you
need to use it, so you can quickly identify where it will be useful.
