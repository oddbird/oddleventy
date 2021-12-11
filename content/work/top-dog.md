---
title: Top Dog
sub: Bet on live sports with play money
logo: topdog
client: &client Top Dog
date: 2020-06-01
end: 2021-04-01
image:
  src: work/top-dog/topdog.jpg
  alt: three lists of games to bet on including NFL and NHL
  position: top
tags:
  - Sports Sector
people:
  - &griffin
    name: Griffin Parker
    face: james-weber.jpg
    url: https://www.linkedin.com/in/jamessw/
    title: Founder
    venue: *client
press:
  - text: |
      @@@
    <<: *griffin
    slug: configurations
summary: |
  OddBird worked with Top Dog to plan, design, 
  develop, and test a responsive web application
  that includes an automated style guide.
  The Top Dog app provides a tournament-style community 
  experience in which people bet on live sports
  using play money, and winners get real prizes.
  
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/top-dog/topdog-phone.jpg',
      alt='mobile view of placing a bet within a specific tournament',
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
- Design System
- Usability Testing




{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Adobe XD
- Django & Python
- Herman
- JavaScript with Vue.js
- Sass & CSS



{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
