---
title: Office Hours Coaching
sub: Coaching designers and developers in web best practices
index: Office Hours Coaching
image:
  src: pages/open-sign.jpg
  alt: door with an open sign
  position: 20% 40%
action:
  text: Request office hours coaching »
  url: /contact/
summary: |
    We love helping people solve
    complex technology and design problems!
    Schedule a chat
    with your favorite Bird
    for 1 hour or multiple sessions
    about anything related to
    brand or UX Design, CSS,
    JavaScript, Django, or Python.
---

{% import 'embed.macros.njk' as embed %}
{% import 'quotes.macros.njk' as quotes %}
{% import 'layout.macros.njk' as layout %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

## What to Expect ...

{% call layout.grid('inner') %}

{% call layout.block('column') %}

### Expert Code Review

Chat with top developers,
working at the cutting edge
of front-end, design systems,
and W3C standards.

{% endcall %}

{% call layout.block('column') %}

### Troubleshooting Help

Get a new perspective
on a thorny design or development issue,
and find ways to make your app
more performant and scalable.

{% endcall %}

{% call layout.block('column') %}

### More Intuitive Designs

Talk through quick and easy options
to make your website or app
more accessible and intuitive
for the people who visit.

{% endcall %}

{% endcall %}

{% endcall %}

{{ layout.title('Topics') }}

{% call embed.media_block(
  media=embed.screen(
    fill='hsl(202.5, 7.5%, 42%)',
    content=embed.img(
      src='work/medcurbside/medcurbside-phone.jpg',
      alt='medcurbside welcome screen',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Languages & Tools

- CSS & Sass
- Accessible HTML
- JavaScript (Svelte, Vue, React, Node)
- Python, FastAPI, & Django
- OddTools (OddContrast, Polyfills)
- WordPress
- Figma


{% endcall %}

{% call layout.block('column') %}

### Design & Structure

- Brand & Logo Design
- UX/UI Design
- Design Systems & Component Libraries
- Product Messaging

{% endcall %}

{% endcall %}

{% endcall %}

{% call layout.block('fancy-list') %}

## How It Works ...

- **Step 1** \
  Send us a message
  requesting office hours coaching
  including the topic or issue
  you'd like to talk about.
- **Step 2** \
  We'll reply with our recommendation
  for the Bird that can help out,
  as well as links to schedule and pay.
- **Step 3** \
  Schedule a date/time
  that works well for you.
- **Step 4** \
  Pay for ongoing coaching
  or individual sessions.
- **Step 5** \
  Send any materials or code
  you'd like us to review
 before the video call.

 [Get expert help](/contact/)

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['pleasant', 'best-in-the-world']
) }}

{{ layout.title('Services') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/quarqrace/trig-phone.jpg',
      alt='trig race screen',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Ongoing Coaching

When you buy a package,
you can use it anytime for up to a year.
Schedule recurring sessions
or use as needed.
Buy in bulk for a discount.

- 7 - 10 hours is $230/hour
- 11 - 14 hours is $220/hour
- 15+ hours is $210/hour

{% endcall %}

{% call layout.block('column') %}

### One-Time Session
If you need a single session
for a quick tip or question,
we’re here for you.
Schedule singles hour-long sessions
at times that works well for you.

- individual 1 hour sessions are $250/hour

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['exemplary', 'curious']
) }}

## Request Office Hours Coaching
To learn more
about individual Birds'
experience and expertise,
visit our [About](/about) page.

To schedule your first session,
send us a message that includes
the topic you'd like to talk about.
We're here,
and happy to help
whenever you need us.

[Send a message](/contact/)
