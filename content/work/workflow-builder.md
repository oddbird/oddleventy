---
title: Workflow Builder
sub: Tools for data analytics
logo: aunalytics
client: &client Aunalytics
date: 2020-01-13
image:
  src: projects/aunalytics/workflow-mockup.png
  alt: Connected workflow processes shown within the canvas
tags:
  - Client Work
  - Research & Concepting
  - Development
  - Custom Application
  - Vue
  - D3js
  - Aunalytics
people:
  - &james
    name: James Stuckey Weber
    face: james-weber.jpg
    title: UI/UX Design & Development Director
    venue: *client
  - &greg
    name: Gregory Davis
    face: gregory-davis.jpg
    title: Chief Architect
    venue: *client
press:
  - text: |
      The Workflow Builder project met and exceeded expectations.
      The project was finished in budget and on time,
      and we were super excited to get the outcome we did.
    <<: *greg
    slug: excited
  - text: |
      We appreciate that there’s not one package deal at OddBird.
      Depending on the project,
      different configurations of the OddBird team
      were able to integrate with our internal developers.
      That worked really well.
    <<: *james
    slug: configurations
summary: |
  Aunalytics provides a full suite of data-analytics and management tools.
  The "workflow builder" is an embedded Vue application
  allowing data scientists to visually create and navigate
  through data flows of various kinds.
  The interface is an integration between standard HTML
  and an interactive SVG canvas, built with D3.
---

{% import 'quotes.macros.njk' as quotes %}

{{ quotes.grid(press) }}
