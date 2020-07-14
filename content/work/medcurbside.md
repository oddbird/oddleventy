---
title: MedCurbside
sub: Knowledge-sharing for clinical physicians
image:
  src: projects/medcurbside.jpg
  alt: Ask or answer medical questions
client: &client Lab06
date: 2017-12-15
links:
  site: https://www.medcurbside.com/
people:
  - &rohit
    name: Rohit Puranik
    # face: rohit-puranik.jpg
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

{% import 'quotes.macros.njk' as quotes %}
{{ quotes.grid(press) }}
