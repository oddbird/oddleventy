---
title: MetaDeploy
sub: Salesforce product installer
logo: salesforce-metadeploy
links:
  site: https://install.salesforce.org/
image:
  src: work/metadeploy/metadeploy.jpg
  alt: App UI of product installation flow
client: &client Salesforce.org
date: 2018-05-31
tags:
  - Technology Sector
people:
  - &jason
    name: Jason Lantz
    title: Sr. Director of Release Engineering
    face: jason-lantz.jpg
    url: https://www.linkedin.com/in/jasonlantz/
    venue: *client
  - &david
    name: David Reed
    title: Principal Member of Technical Staff
    face: david-reed.jpg
    url: https://www.linkedin.com/in/davidreed-salesforce/
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front & Back-End Development
  - Lightning Design System React Implementation
press:
  - text: |
      The OddBird team’s support of our engineers…
      has been exemplary. OddBird is the polar opposite
      of consultancies that deliver “exact words”
      solutions. They **understand our objectives as well
      as we do, if not better,** and deeply engage to
      deliver those objectives.
    <<: *david
    slug: exemplary
  - text: |
      **OddBird became an extension of our team**
      bringing UX, frontend, and backend brilliance
      to take MetaDeploy from an idea into a production application.
    <<: *jason
    slug: extension
summary: |
  MetaDeploy helps nonprofit Salesforce admins and developers configure,
  install, and test packaged products -- providing a graphic web interface
  for tasks and flows previously handled in the command-line. Admins can
  select from available products like the Nonprofit Success Pack (NPSP) or
  Education Data Architecture (EDA), to install on one of their Salesforce
  organizations. MetaDeploy helps make packages easy to find, while
  allowing users to customize their installations, and run preflight
  checks before committing to a full install.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='work/metadeploy/md-example.jpg',
    alt='view of a successful NPSP installation showing
      each step of the process'
  ),
  name='desktop-work'
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
  - Usability Testing

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - Adobe XD
  - Django & Python
  - JavaScript with React & Redux
  - Sass & CSS
  - Storybook

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
