---
title: CFOshare Website
sub: WordPress & responsive design
logo: cfoshare
image:
  src: work/cfoshare/cfoshare.jpg
  alt: CFOshare's WordPress articles about finance
  position: top
client: &client CFOshare
date: 2018-07-01
end: 2020-07-01
press:
  - text: |
      OddBird is very pleasant to work with and responsive.
      I’m not an expert in web development,
      so I really appreciated that.
    slug: pleasant
    name: LJ Suzuki
    face: lj-suzuki.jpg
    url: https://cfoshare.org/
    title: Founder & Fractional CFO
    venue: *client
links:
  site: https://cfoshare.org/
tags:
  - Financial Sector
  - Accounting Sector
summary: |
  OddBird helped CFOshare transition their marketing site
  to WordPress --
  implementing the brand,
  migrating content,
  optimizing responsive images,
  and training CFOshare staff in continued maintenance.
  CFOshare is a "fractional CFO"
  that serves as an outsourced finance
  and accounting department
  for a range of businesses.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='10%',
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

- UX & UI Design
- Content Migration
- Front-end Development
- Ongoing Maintenance

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

- PHP
- Sass & CSS
- WordPress

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
