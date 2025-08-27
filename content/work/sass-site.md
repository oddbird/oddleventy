---
title: Sass Playground & Website
sub: Discover and learn the Sass language
date: 2022-11-09
end: 2024-10-09
client: &client Google
logo: google
links:
  site: https://sass-lang.com/
  playground: https://sass-lang.com/playground/#eJxdj9FqwjAUhu/zFD9OVgULyhAhvfFV0ubYhiY5JYk4J333xdluZTch5zv5v58cDus6kOoHNj5FiY1AEZ2ythxUS4XExz6Q22XqSJurm/HxOGGrQkszPb3othJCnEk1HRb2HdaxCUS+jOaLYPxyGfEQwPlZovB6BuU1Ns748mZ06iSKt8fSMBbbnxBQs75PV+BdypouHOiXAA37RD5JrLLir3TEwv5Pvqqm9CjmcxRj/tezbFlRq6ZvA1+9Lhu2HCQSO5U456f51plEedQmDlbdJWrLTZ/BwNEkw17iYj5JZ5J4kNhXYvwGtNZ+7g==
image:
  src: work/google/sass-site.jpg
  alt: Homepage for the Sass project at sass-lang.com
tags:
  - Technology Sector
people:
  - &natalie
    name: Natalie Weizenbaum
    title: Lead designer and developer of Sass
    face: natalie-weizenbaum.webp
    url: https://github.com/nex3
    venue: *client
tasks:
  - User Experience Design
  - Project Architecture
  - Front Development
  - Technology Sector
press:
  - text: |
      OddBird rewrote [sass-lang.com](https://sass-lang.com/)
      from the ground up
      to make it easier to work on, update, and deploy.
      Not only that, they added a new
      [online playground](https://sass-lang.com/playground/#eJxdj9FqwjAUhu/zFD9OVgULyhAhvfFV0ubYhiY5JYk4J333xdluZTch5zv5v58cDus6kOoHNj5FiY1AEZ2ythxUS4XExz6Q22XqSJurm/HxOGGrQkszPb3othJCnEk1HRb2HdaxCUS+jOaLYPxyGfEQwPlZovB6BuU1Ns748mZ06iSKt8fSMBbbnxBQs75PV+BdypouHOiXAA37RD5JrLLir3TEwv5Pvqqm9CjmcxRj/tezbFlRq6ZvA1+9Lhu2HCQSO5U456f51plEedQmDlbdJWrLTZ/BwNEkw17iYj5JZ5J4kNhXYvwGtNZ+7g==)
      and got Sass running in the browser to power it.
      They're a fantastic team that we were lucky to work with.
    <<: *natalie
summary: |
  OddBird helped modernize the tech stack
  powering Sass's documentation and marketing site.
  We ported content and functionality to maintain parity,
  and added some high value new features.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

Sass's documentation and marketing site was in need of a technology refresh.
OddBird helped port over a decade's worth of blog posts, and a feature-rich set
of documentation.

One key client goal was to simplify the deployment process. OddBird worked to
integrate CI/CD best practices, while incorporating content from a variety of
sources.

OddBird also made updates to Sass to enable it to run in the browser. This made
possible a long-standing user request to have a Sass playground, which can be
used to quickly learn and prototype Sass, or to report bugs in Sass.

{% call embed.media_block(
  media=embed.img(
    src='work/google/sass-playground.jpg',
    alt='a Sass editor showing code input, compilation and error reporting'
  ),
  name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

- UX & UI Design
- Front-end Development
- Ongoing Maintenance

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- Figma
- JavaScript with TypeScript
- HTML with Eleventy
- CSS & Sass

{% endcall %}

{% endcall %}

{% endcall %}

{{ embed.figure(
  data=[{
    img: 'work/google/sass-language-website.png',
    alt: 'Sass language homepage'
  }],
  class='extend-large',
  caption='We rewrote sass-lang.com from the ground up to make it easier to work on, update, and deploy.'
) }}

{{ embed.figure(
  data=[{
    img: 'work/google/sass-site-playground-responsive.png',
    alt: 'Sass playground for large and small screens'
  }],
  class='extend-large',
  caption='A responsive playground to learn, prototype, and report bugs in Sass.'
) }}

{{ quotes.grid(press) }}
