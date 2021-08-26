---
title: CFOshare Website
sub: WordPress CMS & responsive design
logo: cfoshare
image:
  src: projects/cfoshare.jpg
  alt: CFOshare's wordpress articles about finance
  position: top
client: &client CFOshare
date: 2018-07-01
end: 2020-07-01
press:
  - text: |
      OddBird is very pleasant to work with and responsive.
      I’m not an expert in web development,
      so I really appreciated that.
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
  to WordPress CMS --
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

{{ quotes.grid(press) }}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='pages/cfo-phone.jpg',
      alt='trig race screen',
      width=743,
      height=1611,
      sizes='media'
    )
  )
) %}


{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Design

- Brand implementation
- Image optimization

{% endcall %}

{% call layout.block('column') %}

### Development

- Transitioned original marketing website to WordPress CMS
- Content migration
- Trained staff in on-going site maintenance

{% endcall %}

{% endcall %}

{% endcall %}
