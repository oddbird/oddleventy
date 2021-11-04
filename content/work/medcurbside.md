---
title: MedCurbside
sub: Knowledge-sharing for clinical physicians
image:
  src: work/medcurbside/medcurbside.jpg
  alt: Ask or answer medical questions
client: &client Lab06
date: 2016-01-01
end: 2017-12-15
links:
  site: https://www.medcurbside.com/
tags:
  - Wellness Sector
people:
  - &rohit
    name: Rohit Puranik
    face: rohit-puranik.jpg
    url: https://medium.com/medcurbside
    title: Founder
    venue: *client
tasks:
  - Product Branding
  - User Experience Design
  - Project Architecture
  - Responsive Styles
press:
  - text: |
      Other developers build exactly what you say,
      or they don't understand,
      and develop the wrong thing.
      **OddBird always thinks about the project goals.**
      I defer to the team expertise now,
      which makes a better result.
    <<: *rohit
    slug: goals
  - text: |
      I liked the way OddBird presented themselves.
      **They were curious and asked detailed questions
      to really understand what was needed.**
    <<: *rohit
    slug: curious
summary: |
  MedCurbside was started by practicing physicians who want a more modern
  way to connect with good literature
  and the clinical knowledge in the healthcare community.
  The site helps clinicians exchange questions and
  answers with other clinicians --
  connecting visitors with evidence,
  facilitating quick progression
  from question to answer, curating the
  best content through community input, and
  generally helping clinicians
  deal with the plethora of information available
  in healthcare today.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/cfoshare/cfo-phone.jpg',
      alt='team page examples showing name, title, headshot, and bio',
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

- Adobe Xd 
- Django & Python
- Herman
- JavaScript
- Sass & CSS



{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
