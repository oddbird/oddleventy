---
title: Expression Builder
sub: Tools for data analytics
logo: aunalytics
client: &client Aunalytics
date: 2019-05-14
image:
  src: projects/aunalytics/exbldr.jpg
  alt: Tools for data analytics
  position: top
  width: 2048
  height: 959
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
      Some of our developers are junior,
      and we appreciated the opportunity to work
      with senior developers at OddBird.
      We all learned from that experience.
    <<: *james
    slug: learned
  - text: |
      We feel grateful for having found our relationship with OddBird
      and excited to continue with future projects.
    <<: *greg
    slug: future
summary: |
  Aunalytics provides a full suite of data-analytics and management tools,
  including the Aunsight Dataflow service.
  The "expression builder" is an embedded Vue application
  allowing users to create and update the dataflows
  using a visual UI that describes data transformation
  without having to write code.
  Advanced users can also edit flows directly in JSON,
  or move seamlessly between the two modes.
---

{% import 'quotes.macros.njk' as quotes %}

{{ quotes.grid(press) }}
