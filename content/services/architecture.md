---
title: Improve performance & reliability with Poetic CSS Architecture
sub: >
  Level up your team,
  improve your user experience,
  and scale with confidence
action:
  text: Let's chat
  url: '#chat'
cta: false
included:
  - title: No Obligation
    text: We're always happy to talk, and we're focused on helping, not selling.
    icon: icons/mail-open
  - title: Tailored to Your Needs
    text: What's the most difficult problem you're facing?
    icon: icons/interact
  - title: Best Practice is a Conversation
    text: We don't have all the answers, but we know what questions to ask.
    icon: icons/eye-crossed
  - title: Would you like to level up your CSS?
    text: OddNews [LINK] is packed with CSS demos and tips.
    icon: icons/tools
press:
  - text: |
      Miriam knows CSS better
      than nearly anyone on the planet.
      Not only does she help shape CSS specifications,
      she applies the nuances of CSS
      in honest-to-goodness real-world work.
    name: Brad Frost
    venue: bradfrost.com
    slug: planet
    face: brad-frost.jpg
    url: https://bradfrost.com/
summary: |
  The web allows us to reach a world-wide audience across all internet-connected devices,
  with the promise of long-term compatibility.
  But many teams get lost
  trying to re-invent existing features from scratch,
  or using third-party tools
  to mask the complexity without addressing it.
  **It doesn't have to
  be like this!**

  Together
  we can create a prioritized strategy
  to level-up your team
  and streamline your HTML & CSS
  so you can scale efficiently,
  improve performance and reliability,
  and spend less on maintenance.
media:
  - span: full
    youtube: iZZXOuLxagE
    id: workshop-video
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

## Poetic CSS Architecture helps you...

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Level-up Your Team

Make sure your whole team
has a shared set of tools
and a comprehensive strategy
for building reliable front-ends.

{% endcall %}

{% call layout.block('column') %}

### Streamline Workflows

Save significant time, effort, and money
by understanding the range of web features available,
and how to use them efficiently.

{% endcall %}

{% call layout.block('column') %}

### Improve Performance

Keep your users coming back
with a more performant, reliable,
and accessible app or site.

{% endcall %}

{% call layout.block('column') %}

### Reduce Maintenance

Create and document
resilient design systems
for fewer updates and
less maintenance over the long run.

{% endcall %}

{% call layout.block('column') %}

### Reduce Dependence

Third-party tools
often stand between us
and the platform features
that are designed to work everywhere --
forcing dependency upgrades
when we could be
making progressive enhancements.

{% endcall %}

{% call layout.block('column') %}

### Prioritize with Confidence

Come away with a clear set
of top priorities
to reduce your tech debt.

{% endcall %}

{% endcall %} {# layout.grid('narrow-columns') #}

{% endcall %} {# layout.block('full') #}

## Example (IS THERE A BETTER VIDEO?)

{{ embed.figure(media) }}

## What is a Poetic CSS architecture fixup?

It's a modernization of your
application or website,
starting with the core web technologies
and working out.
CSS has come a long way
since the early days,
but many sites and apps
are still using decade-old approaches.
We'll help you organize your CSS
around accessible and performant HTML,
and make sure everyone on the team
understands the tools and strategy
to keep things running smoothly –
so you can do focus on
your users and business goals.

## What's the cost?

**You decide!**
Start small with a conversation,
or jump into a full assessment and training.
We can customize the project
to fit your budget and needs,
but the options below
are a great place to start.

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Quick Fix

Sometimes all you need
is a chat with an expert.
Miriam Suzanne will spend an hour with you,
answering your architecture questions,
recording the conversation along the way.

- Identify obvious sticking points
- Outline next steps to bring to your team or boss

**$250**

{{ utility.main_action(
  content='Schedule now »',
  url='https://calendly.com/oddbirdllc/schedule-a-workshop'
) }}

{% endcall %}

{% call layout.block('column') %}

### Architecture Audit

Based on 20+ years of working with clients
and the W3C,
Miriam will meet with you
to talk through your pain points
and bottlenecks.
We'll review your code, tools,
and workflow, and deliver a report
with recommending strategic updates.

- Dive deep into your architecture
- Get a report with prioritized action items
and recommended tools

**Starts at $2,000**

(LET'S CHAT CTA)

{% endcall %}

{% call layout.block('column') %}

### Frontend Fixup

Your inefficient code
is holding your company back,
but your team is focused elsewhere.
Miriam and the OddBirds
will define strategic updates,
make your application performant,
scalable, and resilient,
and provide workshops
to get your team up-to-speed.

- Experts to take you to the next level
- Start scaling and reducing costs now

**Starts at $5,000**

(LET'S CHAT CTA)

{% endcall %}

{% endcall %}

{% endcall %}

## About Miriam & the OddBirds

{% set bird = collections.birds | authorPage('miriam') %}
{{ birds.card(bird=bird, extended=extended) }}

Miriam leads a tight-knit team
of senior front-end developers
including [David Herron](/author/david),
[James Stuckey Weber](/author/james), and
[Stacy Kvernmo](/author/stacy/).

**A developer, teacher,
and pioneer of modern CSS** --
Miriam is an Invited Expert on the
[W3C CSS Working Group](/csswg/)
and core contributor to the
[Sass](/sass/) language.
She created [Susy](/susy/) for responsive layouts back in 2009,
and recently lead the design and specification for
popular new CSS features including
[container queries][cq],
[cascade layers][layers], and [scope][scope].

In addition to [presenting talks & workshops][speaking]
at conferences around the world,
Miriam is a former staff writer for [CSS-Tricks][tricks],
co-founder of the [Mozilla Developer Channel][mozdev],
and co-author of SitePoint’s [Jump Start Sass][jss].
She's also a cross-media artist
with extensive experience in theatre,
writing, music, and visual art.

[tricks]: /tags/css-tricks/
[smashing]: /tags/smashing-magazine/
[mozdev]: /work/mozdev/
[jss]: https://www.sitepoint.com/premium/books/jump-start-sass/
[speaking]: /talks/
[cq]: /tags/container-queries/
[layers]: /tags/cascade-layers/
[scope]: /tags/css-scope/

{{ quotes.find(
  collections.all,
  slugs=['planet', 'like-us']
) }}

## <a id="chat">Want a CSS architecture fixup? Let's chat.</a>

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
  heading='Start the Conversation',
  subheading='Schedule a call to talk through
  your goals and what type of CSS architecture
  fixup make sense for you.',
  tag='course-anchor-positioning',
  class='headerless',
  buttonText='Send Message'
) }}

{% endcall %}

{% endcall %} {# layout.grid #}

{% endcall %} {# layout.block #}


{{ quotes.find(
  collections.all,
  slugs=[
    'trust-enough',
    'ins-outs',
    'easy-understand',
    'fits-together',
    'unique-talent',
    'fav-dev',
    'clear-competent',
    'thorny-subjects'
  ]
) }}


## Why is CSS architecture important?

The web allows us to reach
a world-wide audience
across all internet-connected devices,
with the promise of long-term compatibility.
But that reach comes with complexity
that can be scary
without the right mental model.
What does it mean
to design for an infinite and always-changing canvas,
across widely different interfaces?

While the breadth of the problem can seem daunting,
HTML and CSS are designed to help us --
providing built-in functionality
to reach the broadest possible audience with minimal code.
We end up relying on tools that try to
hide the web's power and complexity
behind a veneer of familiar programming constructs.

When we switch from fighting the grain of the web
to working with it,
we can unlock superpowers
only available in the browser.

## Can't I just vibe code with AI?

Writing code is only one small part of web development.
Along the way we are making constant decisions
about the user interface,
accessibility,
and long-term maintainability.
New tools can automate
parts of the code-writing process --
with varying levels of success --
but no machine can make the hard decisions for us.
It's more essential than ever
for us to understand the decisions being made,
and how they will impact the users
and the business moving forward.
There's no replacing Actual Intelligence.

## What is 'Poetic CSS'?

There are a few guiding principles of writing
Poetic CSS.
At the core,
we aim to
_use the wide vocabulary of language features
to express our intent clearly and efficiently_.
In practice that means:

- Start global, end local
- Everything that can be global should be global
- Stop naming things that already have names
- Use selectors for selecting, use layers for layering
- Use a wide range of units and intrinsic values to say what you mean
- Use both logical and physical properties
- Every layout method has different strengths
- Use declarative browser behaviors whenever possible
- Meaningful abstractions require less maintenance
- Use progressive enhancement to reduce workload
- Use the minimum constraints to achieve a goal
- Plan for the unexpected (user preferences, devices, and interfaces)

To say it another way:
_write CSS, not too much, mostly global_.

For the last decade,
a large part of the industry
has tried to push in the opposite direction --
renaming every feature in the language,
and using brute force or abstinence-only approaches to CSS.
Everything is re-named.
Everything is a single class.
Everything is scoped.
Nothing is important.
Everything is flexbox.
Everything's a utility.
Everything is `rem` or `em` or `px`.
But on the whole,
they still seem unhappy with the results --
and constantly insist that CSS can't be maintained.
Meanwhile we've been
happily building large-scale projects
by using the language as intended,
and embracing new features as they come along.

Third-party tools come and go,
but a deep understanding of the language
allows you to keep working with the grain of the web
over the long term.
