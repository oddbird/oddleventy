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
      Miriam has always been nothing but spot-on,
      professional, funny, while also being extremely knowledgeable,
      smart, polite and always on time.
    slug: spot-on
    name: Vitaly Friedman
    title: Founder
    venue: Smashing Magazine & Conference
    face: vitaly-friedman.jpg
  - text: Ed's tutorial has been the most popular this year!
    name: Catherine Holmes
    title: Sponsors Co-Chair
    venue: DjangoCon
    slug: popular-tutorial
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

<!-- Insert video intro, demo, image, or graphic here if relevant/available -->

## 11 Weekly Emails

{% call layout.grid(
  'narrow-columns',
  attrs={'style': '--column: page'}
) %}

{% call layout.block('column') %}

- Why use CSS anchor positioning?
- Placement with `position-area`
- Using a position with `anchor()`
- Using a size with `anchor-size()`
- Reusing anchor declarations
- Positioning popovers

{% endcall %}

{% call layout.block('column') %}

- Multiple anchors and calculations
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

You learn about anchor positioning, positioned element siblings, Shadow Dom, using Dev Tools, valid pseudo elements, `anchor-scope`, `anchor-name`, `position-area`.

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

{{ contact.form(
  submit='Subscribe to learn CSS anchor positioning',
  name='workshop'
) }}

{% endcall %}

{% endcall %}




## Why CSS Anchor Positioning Is Important

Recently I was working on a web app with a designer, trying to solve a UX
problem we were encountering near the end of a project. The designer suggested a
tooltip, which was a perfect solution. But we hadn't built that pattern in to
the app yet, and in my head I ran through the cost of setting that up in an
accessible manner. Based on our target browsers, we'd need to research and add a
dependency, style it, and then we'd be able to use a tooltip pattern.

We landed on a different (and probably better) solution, but it still bothered
me that we had to discard a reasonable and common solution solely based on
implementation cost.

What bothered me even more is that I know that there is a solution on the
horizon- we just don't fully have it yet.

CSS anchor positioning takes a challenging task and simplifies it, speeding up
your delivery time. And while it's not yet in all browsers, it's coming soon,
and available with a polyfill. So now is the perfect time to learn CSS anchor
positioning, step by step, so you can add it to your toolbox.
