---
title: Mozilla Developer Channel
sub: Videos, articles, & tools for web professionals
image:
  src: mozdev/mozilla-youtube.jpg
logo: mozilla
client: Mozilla
date: 2019-07-01
end: 2020-01-06
links:
  youtube: https://www.youtube.com/MozillaDeveloper
index: Mozilla Developer Channel
press:
  - text: |
      Are you following @TerribleMia yet? She's amazing.
      **I'm so lucky to get to work with her on this video series & more.**
    name: Jen Simmons
    title: Designer & Developer Advocate
    face: jen-simmons.jpg
    url: https://twitter.com/jensimmons/status/1182658268457512961
    slug: amazing
  - text: |
      @TerribleMia does not only explain “why CSS is how it is”
      but also neatly **summarizes the basic principles
      of what make the Web the Web.**
      If you know those principles,
      many implementation details will be less baffling to you.
    name: Eric Eggert
    title: Accessibility Advocate
    url: https://mobile.twitter.com/yatil/status/1179359053572640770
    icon: social/twitter-circle
    slug: basic-principles
summary: |
  We worked with Mozilla Developer Relations
  to research & address developer needs around
  open web standards, CSS features, accessibility, Firefox,
  and developer tools.
  Over the course of six months,
  we released 30 videos to nearly twenty thousand subscribers.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.img(
    src='mozdev/mozdev-example.jpg',
    alt='Mozilla Developer YouTube channel with 24.3K subscribers
      and a grid of videos'
  ),
  name='desktop-work'
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Services

  - Research
  - CSS & Firefox DevTooling Tutorials
  - Developer Relations

{% endcall %}

{% call layout.block('column') %}

### Languages & Tools

  - CSS
  - Firefox
  - 4k filming, lighting, & screen-capture

{% endcall %}

{% endcall %}

{% endcall %}

{{ quotes.grid(press) }}

{% set mdc = collections['Mozilla Developer Channel'] %}

{{ embed.figure(
  [
    mdc | findData('data.media', {'slug': 'css-is-weird'}),
    mdc | findData('data.media', {'slug': 'fast-grids'})
  ],
  "
    Two of the most popular videos from Miriam.
    Check out the resources below for links to the rest...
  "
) }}
