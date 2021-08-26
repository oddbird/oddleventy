---
title: Shopify UX Summer Series
sub: Asynchronous CSS training with Q&A
image:
  svg: logos/shopify
logo: shopify
client: &client Shopify
date: 2020-06-15
end: 2020-08-15
tags: 
  - E-Commerce Sector
  - Technology Sector
press:
  - text: |
      We take submissions from our team,
      and **Miriam was a highly desired expert we wanted to learn from**!
      I really appreciated the different topics
      you presented as options
      to best talk to our internal audience.
    name: Jen Rogers
    face: jen-rogers.jpg
    url: https://www.linkedin.com/in/jenrogers1/
    title: UX Operations
    venue: *client
    slug: desired
summary: |
  Shopify is a popular e-commerce platform
  for building & hosting online stores
  and retail systems.
  We provided Shopify UX with
  custom CSS training videos
  based on the needs & interests of their team,
  with a follow-up Q&A.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='pages/shopify-phone.jpg',
      alt='trig race screen',
      width=744 ,
      height=1611,
      sizes='media'
    )
  )
) %}


{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Training

- Analysis of team needs & interests
- Custom CSS training video

{% endcall %}

{% call layout.block('column') %}

### Q&A

- Follow-up question & answer session

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}
