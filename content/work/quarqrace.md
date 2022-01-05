---
title: Quarq Race Intelligence
sub: Real-time race analytics
links:
  site: https://www.quarqrace.com/
logo: sram
image:
  src: work/quarqrace/trig.jpg
  alt: Athlete list tied to their location and elevation
client: SRAM/Quarq
date: 2015-09-01
end: 2017-01-31
tags:
  - Sports Sector
  - Wellness Sector
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Responsive Styles
brag: |
  **Real-time race analytics**
  used by spectators & coaches
  at **IronMan** & **Enduro** events
  around the world.
press:
  - text: |
      Just like the Quarq power meters
      changed the playing field for power measurement,
      this new technology is going to change the way people watch races.
    name: Triathlon Magazine
    url: https://triathlonmagazine.ca/feature/introducing-quarq-race-intelligence-quollectors/
    slug: change
  - text: |
      Seguimiento GPS de atletas en **IronMan Kona**
      gracias a **Quarq Race Intelligence**.
    name: Eduardo Mateos
    title: User
    slug: gracias
summary: |
  Quarq Race Intelligence captures and interprets race performance and
  state-of-play information, and delivers that data in real time to
  spectators, commentators, race officials, third-party analysis software
  and visualization tools. Integrating with Quarq's telemetry and
  reporting hardware, the app shows racers' positions, direction, speed,
  heart-rate, and a number of other statistics in real time. Our
  mobile-optimized web interface has been used for bicycle races,
  triathlons, and non-competitive events, including regular IronMan and
  Enduro races.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='1%',
    fill='#000',
    content=embed.img(
      src='work/quarqrace/qri-phone.jpg',
      alt='ironman leader board showing
        real-time order of athletes and expanded
        speed, cadence, and power of one athlete',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- Project Management
- UX & UI Design
- Front-end Development
- Ongoing Maintenance

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Adobe Xd
- Herman
- JavaScript with Backbone & Marionette
- Sass & CSS

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
