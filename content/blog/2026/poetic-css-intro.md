---
title: CSS is one big progressive enhancement
sub: Learn the internal logic of CSS in my new course
author: miriam
date: 2026-02-12
action:
  text: Subscribe for updates »
  url: /courses/poetic-css/
summary:
  I hear regularly from web developers
  that CSS feels like a series of workarounds,
  rather than a unified system.
  And sometimes that's because
  there are essential features missing from the language,
  but often it's a problem
  with the way CSS is taught
  through third-party frameworks.
  In my upcoming course,
  Poetic CSS,
  I hope to show you the systems
  behind the language.
---

{%- import 'utility.macros.njk' as utility -%}

There are many excellent CSS courses in the world,
and I recommend learning from more than one source.
Many of them are by top-notch designers,
if that's an angle that interests you.
But this course is all about systems:

- Understanding the internal system logic of CSS itself
- Building our own systems to efficiently work with CSS

We'll cover individual features
like flexbox, grid, and container queries,
but we'll also re-visit
underlying principles like inheritance,
the cascade, and value resolution.
I want to completely change how you think about
something like 'CSS variables' --
fundamentally different
from variables in any other language --
so that you have more tools to reach for
in everyday situations.

The goal is extremely practical and grounded:
helping you write better CSS,
without the struggle and confusion.
Not a set of tricks,
but a system to work with.
If you're writing it from scratch,
using third-party frameworks,
or having an LLM generate code for you --
your job is to _make it work for users_.
And to get there,
you have to understand
how all the pieces fit together.

# A vision disguised as a language

A lot has changed over the 20 years
I've been making websites and applications
for clients,
and tools for developers.
These days,
new CSS features are rolling out
faster than ever.
But underneath the heap of different properties and values
that we learn,
there's a logic that holds it all together.
That logic hasn't changed,
but it's rarely discussed.
Meanwhile,
CSS features like variables and cascade layers
have given us more and more _direct access_
to understand and manipulate
the internal systems that make CSS
both _powerful_ and also _complicated_.

This is not some secret
that's been kept from you,
but often a fundamental confusion
about the role of design on the web,
and the problem CSS was created to address --
a problem that doesn't exist
in any other design context.

The purpose of CSS,
and the driving logic of the language
is _progressive enhancement_:
design that will work
across different browsers,
on different platforms and devices,
with different interfaces,
in different languages and writing modes,
while leaving the end user
with full control of the outcome.

A _world wide web_:
[on everything,
for everyone](https://w3.org/Consortium/mission.html#principles).

Many of us learned about
progressive enhancement
as one _approach_ to web development --
a way of thinking about our sites
so that they will work for more people.
That's often framed as a moral argument,
something that you _should_ consider
for the sake of inclusion.
But I want to show you
how CSS is built on progressive enhancement
_from the inside out_.

If you want to design websites,
CSS is the only way to do it.
And if you write CSS,
then there's no way to avoid progressive enhancement.
It's the foundation of the language,
and the driving force behind every
strength and weakness that CSS has.
If you find that impractical,
you're probably right!
Universal design certainly makes things complicated!
But you'll be surprised how much of the work
CSS can do for us once we embrace that mindset.
When we reject it,
we end up fighting the language at every step --
confused by its behavior.

With that in mind,
we can revisit the various features of CSS
and see how they all fit together
from that underlying principle.
Not to gloss over the rough edges
(CSS has
[its share of mistakes](https://wiki.csswg.org/ideas/mistakes))
but to _understand where they come from_.
The result is a language
that prioritizes resilience over precision,
and _showing your work_ over _getting the right answer_.

Like poetry,
CSS works best when
we choose our words carefully
to _express our intent_
without being overly restrictive.

## CSS without inheritance (a side quest)

Sometimes when I'm working on a lesson,
I end up down a rabbit hole
that feels interesting but tangential
to the main thread.
The other day,
I filmed one of these 'side quests'
to include as extra material --
and to get a feel for my setup.
Let me know if you find this sort of tangent
interesting!
Maybe you'll catch my 'todo' slide
that makes a brief appearance! :)

I was looking at early proposals
for style on the web,
and noticed they all include _inheritance_.
It's mentioned in the first proposal
without any explanation,
and never goes away.
But maybe that shouldn't be surprising?
Have you ever considered
what it would be like
to style the web _without_ inheritance?
Let's try it!

… video here? …

## Making progress

We've been planning this course for a while,
but fitting it in around other projects
made it slow to pick up momentum --
and we didn't want to start selling something
that only exists in my mind!

It's still not done,
but we're getting to the point
where we have actual lessons
to share with early subscribers.
Maybe that's you?
The course structure is roughed in,
many of the demos have been built,
slide decks and transcripts/articles are taking shape,
I've done some camera and lighting tests,
and I'm starting to film the first lessons.

But there's a lot more to do,
turning a series of videos into a _course_
that you can access.
Hopefully we'll get that infrastructure in place soon --
a landing page with the course outline,
a checkout flow,
and a platform you can log into.
We're working on it!

Our plan
is to launch the course later this spring (2026),
with pre-sales and early access
starting in the next few months.

You're in the right place
to get updates along the way.

{{ utility.main_action(action.text, url=action.url) }}

## Let us know what you're looking for!

Are there specific questions you have,
or topics you'd like me to cover?
Confusion around a specific feature,
or interest in a particular aspect of the language?
I'd love to hear what's on your mind!
