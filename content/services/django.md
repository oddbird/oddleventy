---
title: GET BENEFIT with a Django Fixup
sub: >
  BENEFIT ONE,
  BENEFIT TWO,
  and BENEFIT THREE
action:
  text: Let's chat »
  url: '#chat'
cta: false
included:
  - title: No Obligation
    text: We're always happy to talk, and we're focused on helping, not selling.
    icon: icons/hand
  - title: Tailored to Your Needs
    text: What's the most difficult problem you're facing?
    icon: icons/tools
  - title: Best Practice is a Conversation
    text: We don't have all the answers, but we know what questions to ask.
    icon: icons/messaging
  - title: Would you like to level up your CSS?
    text: |
      [OddNews](/oddnews/) is packed with CSS demos and tips.
    icon: icons/rocket
summary: |
  [Describe the problem people feel.
  Security may be top of mind for many
  people in the US right now.
  How does Django/Python solve the problem?
  In 2-4 sentences.]
media:
  - span: full
    youtube: Um3tnONShPc
    id: workshop-video
---

{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}
{% import 'birds.macros.njk' as birds %}
{% import 'embed.macros.njk' as embed %}
{% import 'utility.macros.njk' as utility %}
{% import 'contact.macros.njk' as contact %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## A Django fixup helps you...

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Benefit 1

[One sentence description here.]

{% endcall %}

{% call layout.block('column') %}

### Benefit 2

[One sentence description here.]

{% endcall %}

{% call layout.block('column') %}

### Benefit 3

[One sentence description here.]

{% endcall %}

{% call layout.block('column') %}

### Benefit 4

[One sentence description here.]

{% endcall %}

{% call layout.block('column') %}

### Benefit 5

[One sentence description here.]

{% endcall %}

{% call layout.block('column') %}

### Benefit 6

[One sentence description here.]

{% endcall %}

{% endcall %} {# layout.grid('narrow-columns') #}

{% endcall %} {# layout.block('full') #}

## [Video Section Title?]

[Do we have or could we make a short video?]

{{ embed.figure(media) }}

## What is a Django fixup?

[Two to four sentence description
of what the steps are in a Django fixup
and what it fixes.]

## What's the cost?

**You decide!**
Start small with a conversation,
jump in to a full assessment and training.
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

### Expert Advice

Sometimes all you need
is a chat with an expert.
Ed Rivas or Victor Allen
will spend an hour with you,
answering your Django questions,
and recording the conversation for you.

- Identify obvious sticking points
- Outline next steps to bring to your team or boss

**$250**

{{ utility.main_action(
  content='Schedule now »',
  url='https://calendly.com/oddbirdllc/css-architecture'
) }}

{% endcall %}

{% call layout.block('column') %}

### Tailored Training OR Django Audit??

[Description here]

- [What you get 1]
- [What you get 2]

**Starts at $2,000**

{{ utility.main_action(
  content='Book now »',
  url='#chat'
) }}

{% endcall %}

{% call layout.block('column') %}

### Back-end Fixup
[Describe the problem.
Maybe security related?]
Ed, Victor, and the OddBirds
will help you make your application
more [describe the fix].

- Experts to take you to the next level
- Start scaling and reducing costs now

**Starts at $5,000**

{{ utility.main_action(
  content="Let's chat »",
  url='#chat'
) }}

{% endcall %}

{% endcall %}

{% endcall %}

## About Ed and the OddBirds

{% set bird = collections.birds | authorPage('ed') %}
{{ birds.card(bird=bird, extended=extended) }}

[Ed Rivas](/authors/ed) leads a tight-knit team
of senior back-end developers
including [Victor Allen](/authors/victor).

OddBird's back-end lead since 2020,
Ed has been an avid Python & Django developer
for over 13 years. He has
been delving into PHP & WordPress
development as well. He is a speaker
and open source software contributer,
and a mentor and organizer in his
local community.

- Multiple-time speaker at [DjangoCon US],
the largest international conference
for Django developers
- Ed has volunteered as a coach for [DjangoGirls],
a nonprofit organization focused on
teaching web development to girls and women.
- He is an expert in CMS-based sites, building dozens.
- He is a Native Spanish speaker
with experience translating content and software UIs.

[DjangoCon US]: https://djangocon.us/
[DjangoGirls]: https://djangogirls.org/en/

{{ quotes.find(
  collections.all,
  slugs=['popular-tutorial', 'handoff']
) }}

{% call layout.block(
  name='full',
  attrs={
    'class': 'fancy-background',
    'data-ccs-colors': 'invert'
  }
) %}

## <a id="chat">Want a Django fixup? Let's chat.</a>

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

{{ contact.form(
  submit='Send Message',
  name='fixup',
  extraActions='or [schedule a call to learn more »](https://calendly.com/oddbirdllc/css-architecture)'
) }}

{% endcall %}

{% endcall %} {# layout.grid #}

{% endcall %} {# layout.block #}

{% endcall %} {# layout.block fancy-background #}

{{ quotes.find(
  collections.all,
  slugs=[
    'easy',
    'complex-concepts',
    'curious',
    'exemplary'
  ]
) }}

## Why is Django important?

[Three paragraph description
speaking to any arguements people might have
against Django.]

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
There's no replacing ✨ Actual Intelligence.
