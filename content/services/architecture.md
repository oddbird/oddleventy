---
title: Scale Faster with a CSS Architecture Fixup
sub: Want to reduce technical debt and long-term maintenance?
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
    text: We'd love to hear how CSS works in your world.
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
  Scaling is hard
  and workflow inefficient,
  but the mountains of tech debt
  feel overwhelming to fix.
  You're relying on
  outdated third-party tools
  that are fragile
  and tedious to maintain.
  **It doesn't have to
  be like this!**

  Let's review your code
  and create a prioritized strategy
  to streamline your CSS
  so you can scale faster,
  spend less on maintenance,
  and improve workflow.
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

## Architecture fixup helps you...

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Scale Faster

Save significant time, effort, and money
by understanding the range of tools available,
and how to use them efficiently.

{% endcall %}

{% call layout.block('column') %}

### Improve Performance

Make your users happier
with a more performant
and accessible app or site.

{% endcall %}

{% call layout.block('column') %}

### Reduce Maintenance

Learn best practices
to create and document
resilient code
for fewer updates and
less maintenance over the long run.

{% endcall %}

{% call layout.block('column') %}

### Streamline Workflow

SOMETHING

{% endcall %}

{% call layout.block('column') %}

### Write Resilient Code

SOMETHING

{% endcall %}

{% call layout.block('column') %}

### Prioritize with Confidence

Come away with a clear set
of top priorities
to reduce your tech debt.

{% endcall %}

{% endcall %}

{% endcall %}

## Example (IS THERE A BETTER VIDEO?)

{{ embed.figure(media) }}

<div style="margin-bottom: 1.5rem">

## What is a CSS architecture fixup?

It's a modernization of your
application or website.
CSS has come a long way
since the early days,
but many sites and apps
are still using decade-old approaches.
The goal is to get your CSS architecture
to the next level,
so you can do what you do best,
help more people,
and grow. (MAYBE MENTION TAILWIND
HOLDING SCALING BACK?)

</div>

## What's the cost?

**You decide!**
The more you invest
the quicker you'll see
your maintenance costs go down
and your scalability go up.
Make improvements with quick fixes
over time or all at once.
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

Miriam leads of tight-knit team
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
  and recently co-wrote the CSS specifications for
  [Container Queries][cq], [Cascade Layers][layers], and [Scope][scope].

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
---

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

{% endcall %}

{% endcall %}


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

The web allows us to reach a world-wide audience across all internet-connected devices, with the promise of long-term compatibility. But that reach comes with additional complexity that can feel hard. What does it mean to design for an infinite and always-changing canvas, across widely different interfaces?

While the breadth of the problem can seem daunting, HTML and CSS are designed to help us – providing built-in functionality to reach the broadest possible audience with minimal code.

Many teams get lost trying to re-invent existing features from scratch, or using third-party tools to mask the complexity without addressing it. But we can save significant time, effort, and money by understanding the range of tools available on the web, and how to use them efficiently. Understanding HTML and CSS architecture in-depth allows us to ship more performant, resilient, and accessible applications – while requiring fewer updates and maintenance over the long run.

Writing code is only one small piece of web development. Along the way we are making constant decisions about the user interface, accessibility, and long-term maintainability. New tools can sometimes automate parts of the process, but that only makes it more essential for us to understand the decisions being made, and how they will impact the users and the business moving forward.

## Can't I just vibe code with AI?

Sure, AI can generate HTML and CSS.
But AI isn't strategic.
It can't tell the difference
between resilient code and horse shit.
If you vibe coded a tool
that people like, but the architecture is a mess,
we can help.

## Why get an CSS architecture fixup?

Here's why.
1 OR 2 SPECIFIC EXAMPLES
OF THINGS WE COULD DO
THAT HAVE AN IMMEDIATE AND CLEAR BENEFIT

PORTIONS OF EXISTING ARTICLES?
