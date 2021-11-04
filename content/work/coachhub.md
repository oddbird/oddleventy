---
card: large
title: CoachHub
banner: CoachHub Application
sub: Responsive platform for integrated health coaching
logo: orcas
image:
  src: work/coachhub/coachhub.jpg
  alt: CoachHub's services and platform demos
  position: top
client: &client ORCAS
people:
  - &sara
    name: Sara Taillon
    face: sara-taillon.jpg
    url: https://www.linkedin.com/in/sarataillon/
    title: CTO
    venue: *client
date: 2014-01-01
end: 2016-01-01
links:
  site: https://coachhub.resilienceboost.com/
tags:
  - _post
  - Case Study
  - Wellness Sector
sample:
  desktop:
    src: coachhub/coachhub-desktop.jpg
    alt: Home screen of CoachHub app, with coaches listed on the side
  mobile:
    src: coachhub/coachhub-home-iphone.jpg
    alt: Mobile home screen of CoachHub app, guidance on the go
  caption: |
    CoachHub is a HIPAA-compliant health coaching platform
    that provides users with anywhere,
    anytime access to varying levels of support.
tasks:
  - Accessible Interface
  - Custom Django Application
  - Integrated Style Guide
  - Information Architecture
  - Logo and Brand Identity
  - Responsive Design
  - Project Architecture
  - User Experience Design
  - WCAG & HIPAA Compliant
press:
  - text: |
      OddBird really changed my thinking
      about how successful remote development can be.
      We were able to hire them as a complete team,
      **ready to start adding value immediately**,
      working as closely as an internal team.
    <<: *sara
    slug: remote
  - text: |
      Since OddBird thinks about handoff from the beginning,
      **maintenance has been super easy**.
      For example, 100% unit test coverage was a given.
      I never had to ask for it.
    <<: *sara
    slug: handoff
  - text: |
      **Deep expertise and knowledge**,
      combined with **incredible communication**
      and an easy-going style.
    <<: *sara
    slug: experts
planning:
  - title: App Goals
    icon: icons/map
    text: |
      For an in-depth understanding of the CoachHub project
      and its place in the market, we created an App Goals document with ORCAS.
      We defined core problems coaches and clients face day-to-day,
      how our software might address these problems,
      and what features would make CoachHub uniquely useful.
  - title: User Profiles
    icon: icons/users
    text: |
      Together, we identified three distinct users --
      health coaches, individual clients,
      and business partners who might purchase CoachHub
      for an employee benefits package --
      and detailed the significantly different motivations
      and needs of each persona.
  - title: User Stories
    icon: icons/theater
    text: |
      Each user story defined one task that a specific user
      might want to accomplish on CoachHub.
      *(As a Client, I want to schedule an appointment.)*
      We listed each user story and provided itemized story estimates.
      This allowed ORCAS to add, prioritize, and remove stories
      before we began development,
      and throughout the project --
      remaining up-to-date and in control of
      the project cost and scope.
  - title: Data Models
    icon: icons/site-map
    text: |
      The data model provides a sense of backend database
      structure and object-relationships,
      built around conversations with the entire team
      to determine not just *what is included*
      but *how users will interact* with the available models:
      *"A CLIENT PROFILE contains all the public information
      about a CLIENT, for use in Q&A forums, messaging, etc."*
      The resulting document also acts as a glossary of terms,
      to help the entire team communicate consistently
      and write code that integrates smoothly.
summary: |
  A custom application we designed and developed with the ORCAS team --
  integrating their suite of self-management tools.
  We built in support for video chat, in-app messaging,
  public Q&A, webinars, file sharing, health assessments, and more.
  The app has been used internally by the **US Coast Guard**, **US Military**,
  and **National Institutes of Health**.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

Users browse coaches, send messages,
request appointments, post questions, and grant
permissions for coaches to view their progress.
Coaches create a profile, manage daily tasks, make appointments,
post answers to questions, view user progress,
and set alerts for relapse prevention and
escalation of care.

{{ quotes.grid(press) }}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/adobe/game-phone.jpg',
      alt='game play example showing vintage TVs
        with the words Play Me in different font styles',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- Research & Concepting
- Project Management
- UX & UI Design
- Front-end Development
- Back-end Development
- Ongoing Maintenance



{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Adobe Illustrator
- Adobe Photoshop
- Django & Python
- Herman
- JavaScript
- Sass & CSS



{% endcall %}

{% endcall %}

{% endcall %}


<!-- all but the first quote -->
{{ quotes.grid(press | slice(2) | first ) }}

## What They Needed

[ORCAS] partnered with OddBird to build a custom, responsive web
application – a hub to connect clients with health coaches for easy
access to personalized wellness guidance and support. The new software
needed to fit with ORCAS's existing suite of apps, especially
[MoodHacker], a tool for self-management of emotional well-being.

Studies show that telephonic health coaching can be effective, but ORCAS
identified several barriers keeping clients from getting the right level
of support when they need it. In designing the CoachHub web app, we
aimed to create an inviting space for clients and coaches to quickly and
easily access one another in dynamic and effective ways.

{{ embed.icon_block(planning, 'Planning & Discovery Phase') }}

[orcas]: https://orcasinc.com/
[moodhacker]: https://orcasinc.com/products/moodhacker/index.html

## Design and Development Phase

### Site Architecture & Information Design

<div class="contain">

{{ embed.img(
  src='work/coachhub/browse-coach-sitemap.jpg',
  alt='site map for browsing coaches',
  attrs={
    'class': 'align-left'
  }
) }}

We created an interactive web of static-HTML content templates – a
living draft of the site architecture, with samples of real content. For
each step in the flow we asked: how did the user get here, what do they
need to achieve, and where are they going next?

As we interacted with this visualization, it became clear, for example,
that we needed to replace the browse-coaches page and the my-coaches
page with an ever-present sidebar, providing one-click access to
coaches. Several pages stood out as important starting-points for users,
and those pages moved into the site navigation. We also added a
dashboard to give a quick overview of activity on the site.

Before developing any real functionality, we already had a live,
interactive, and testable prototype of the information architecture and
user-experience flows. Building features would be a matter of replacing
static content with live data.

</div>

### Brand Identity

We worked with ORCAS to pinpoint the attitude and associations they
wanted the CoachHub brand to evoke, and created a friendly, distinct
brand identity. Like their existing apps – MoodHacker and BlipHub – the
CoachHub logo and overall brand are bright, cheerful, and hopeful.

{{ embed.figure(
  data=[{'img': 'work/coachhub/color-palette1.png'}],
  caption='Full color palette derived from three basic brand colors.'
) }}

{{ embed.figure(
  data=[{'img': 'work/coachhub/logo.jpg'}],
  caption='Rounded edges and a playful curl evoke feelings of friendliness and movement. New life, change, and hope: turning over a new leaf.'
) }}

<div class="contain">

{{ embed.img(
  src='work/coachhub/avatars.png',
  alt='leaf avatar collage',
  attrs={
    'class': 'align-left'
  }
) }}

We then created hundreds of unique avatar designs from just a few unique
leaf graphics dynamically rendered using light and dark contrasts of our
colors and rotation of the leaves.

</div>

### Responsive & Interactive UX Design

User experience design guides feature development. Working
feature-by-feature, we created rough sketches of each feature to get a
sense of the components and layout. With approved sketches, we moved on
to detailed designs and live implementation. As time went on patterns
developed, and features began moving directly from sketch to code,
allowing us to move quickly and efficiently. Integrating design and
implementation helped us minimize time and money waste.

<figure>
{{ embed.img(
  src="work/coachhub/profiles.png",
  attrs={"class":"extend-full"}
) }}
<figcaption>Starting with designs for the smallest, mobile screens sizes helped clarify and prioritize relevant information for each user.</figcaption>
</figure>

<figure>
{{ embed.img(
  src="work/coachhub/interactive.jpg",
  attrs={"class":"extend-small img-shadow"}
) }}
<figcaption>Interaction can become distracting if implemented for its own sake. Sliding side panels and realtime chat serve the needs of the user, highlighting particular features or important information.</figcaption>
</figure>

### Usability Testing

Usability testing guided us in prioritizing feature development and
adjusting UX design along the way, ensuring that CoachHub would be
useful and relevant to users and partners.

<figure>
{{ embed.img(
  src="work/coachhub/calendars.jpg",
  attrs={"class":"extend-large"}
) }}
<figcaption>As we observed users navigating the app, it became clear that the appointment calendar needed distinct views and interactions for coaches and clients.</figcaption>
</figure>

### Accessibility

Accessibility is built into the core technologies and techniques we use
on every project: accessible HTML5, unobtrusive Javascript, and
mobile-responsive CSS styles. We make it a priority from the beginning
of each project – using progressive enhancement and responsive design to
support a broad range of users, devices, and browsers. For CoachHub we
also used Lea Verou's [Contrast Ratio] tool to select colors for text
that passed WCAG AA level at all sizes. We also built a WCAG contrast
test into our [Sass Accoutrement toolkits].

[contrast ratio]: https://contrast-ratio.com/
[sass accoutrement toolkits]: /accoutrement/

### Landing Pages

In conversation with ORCAS's internal team, we designed graphics,
recommended and edited text, and identified important “call to action”
steps to create a relevant and compelling landing pages for different
users.

<figure>
{{ embed.img(
  src="work/coachhub/splash-final-2.jpg",
  alt="final design for landing page",
  attrs={"class":"extend-large img-shadow"}
) }}
</figure>

## Ongoing Design

CoachHub launched with a minimum viable set of features, and room to
grow. We continue to work periodically with ORCAS's internal development
team, consulting on the design and flow of new features as CoachHub
expands to accommodate the needs of their growing user-base – people who
use it every day to improve their health and wellness, or as part of
their work coaching others.
