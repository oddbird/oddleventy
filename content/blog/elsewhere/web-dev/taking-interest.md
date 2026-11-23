---
title: Taking Interest
date: 2026-11-23
venue: web.dev
canonical: https://web.dev/articles/taking-interest
author: james
image:
  src: blog/elsewhere/interest-timing.jpg
  alt: >
    A woman cradles her head in her hands
    and covers her eyes rather than looking
    at a laptop's screen.
tags:
  - Link
  - CSS
  - HTML
related_tag: HTML
summary:
  Navigating to a new page
  is a relatively significant change,
  but interest invokers
  provide a declarative way
  to peek into a page
  without fully committing.
  They can also provide
  an additional view
  on an action.

---

{% import 'embed.macros.njk' as embed %}

To use an interest invoker,
add the `interestfor` attribute
to the trigger element
with its value pointing
to the id
of the popover
you want to open.

## Interest versus action

Interest invokers are somewhat unique
to the web platform as a concept.
Most events are
in response to a user's action
that significantly changes
the user's context -- they clicked a link
to a new page, pressed play,
or submitted a form.

Interest invokers drive more subtle behaviors.
They allow for a temporary state
before reverting back
to the original state.
It's a much lower investment
for the user.

The cost of a user accidentally triggering an action
can be high—for example,
if they lose (or send) a half-written email,
or make an unintended purchase.
If a user accidentally opens a popover,
and then closes it,
they will likely only be annoyed or distracted.
Because the cost
of accidentally triggering a popover is lower,
you can make it easier for the user to trigger.

## Article contents

- Interest versus action
- Triggering interest
- UI patterns
- Implementation Checklist

## The demo where we put it all together

{{ embed.codepen(
  id="01a086da-ec05-738e-8dff-2ea66f9ccaf4",
  title="Interest Invokers Delays",
  user="jamessw"
)}}

[Read full article »](https://web.dev/articles/taking-interest)
