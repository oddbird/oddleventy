---
title: Dynamic CSS
sub: with grids & custom properties
author: miriam
date: 2018-08-18
slides: https://talks.oddbird.net/dynamic-css/
image:
  src: talks/mia-dvlpdnvr19-dynamic.jpg
  alt: Miriam speaking at Develop Denver, 2019
  width: 1500
  height: 844
tags:
  - CSS
  - JavaScript
  - Vue
  - Layout
events:
  - venue: Webconf.asia
    url: https://2020.webconf.asia/
    adr: Hong Kong
    date: 2020-08-28
  - venue: Develop Denver
    url: https://developdenver.org/
    date: 2019-08-15
    end: 2019-08-16
    adr: Denver, CO
    video: https://www.youtube.com/watch?v=JnvkjhwcMcM
    media: &dvlp
      iframe: https://www.youtube.com/embed/JnvkjhwcMcM
  - venue: Generate New York
    url: https://www.generateconf.com/
    adr: San Francisco, CA
    date: 2019-04-24
    end: 2019-04-25
    slides: https://talks.oddbird.net/dynamic-css/generate19/
    video: https://www.youtube.com/watch?v=oXEsYwtTT6I
    media: &generate
      iframe: https://www.youtube.com/embed/oXEsYwtTT6I
  - venue: Smashing Conf
    url: https://smashingconf.com/sf-2019/
    adr: San Francisco, CA
    date: 2019-04-16
    end: 2019-04-17
    slides: https://talks.oddbird.net/dynamic-css/smashingsf19/
    video: https://vimeo.com/331571593
    media: &smashing
      iframe: https://player.vimeo.com/video/331571593
      width: 640
      height: 360
  - venue: VueConf US
    url: https://vueconf.us/
    adr: Tampa, FL
    date: 2019-03-26
    end: 2019-03-27
    slides: https://talks.oddbird.net/dynamic-css/vueconf19/
    video: https://www.vuemastery.com/conferences/vueconf-us-2019/dynamic-css-with-vue/
  - venue: Front Range Front-End
    url: https://www.meetup.com/front-range-front-end/events/chtxtpyxpbcb/
    adr: Denver, CO
    date: 2018-11-01
    slides: https://talks.oddbird.net/dynamic-css/frontrange18/
    video: https://www.vuemastery.com/conferences/vueconf-us-2019/dynamic-css-with-vue/
  - venue: Full Stack Fest
    adr: Barcelona, Spain
    date: 2018-09-06
    slides: https://talks.oddbird.net/dynamic-css/fullstack18/
    video: https://youtu.be/9fTUeLsR2Hc
    media: &fsfest
      iframe: https://www.youtube.com/embed/9fTUeLsR2Hc
  - venue: JSConf US
    url: https://2018.jsconf.us/
    adr: Carlsbad, CA
    date: 2018-08-21
    slides: https://talks.oddbird.net/dynamic-css/jsconfus18/
    video: https://www.youtube.com/watch?v=uwgBz748t-g
    media: &jsconf
      iframe: https://www.youtube.com/embed/uwgBz748t-g
  - venue: CSSConf Argentina
    url: https://cssconfar.com/
    adr: Buenos Aires, Argentina
    date: 2018-08-18
    slides: https://talks.oddbird.net/dynamic-css/cssconfar18/
press:
  - text: |
      Some pretty mind-bendingly cool uses for CSS custom props
      from @MiriSuzanne --
      color, layout & animation all in css
      and only using JS to feed data.
    slug: mind-bending
    name: Jason Pamental
    title: Invited Expert
    venue: W3C
    icon: social/twitter
    url: https://twitter.com/jpamental/status/1118585546803036160
  - text: |
      Best CSS talk I've ever seen was from @MiriSuzanne
      today at #dvlpdnvr. Simply amazing.
    name: Michael Dowden
    title: President
    venue: FlexePark
    icon: social/twitter
    url: https://twitter.com/mrdowden/status/1162121756699746307
  - text: |
      Well that was awesome!!!
      “If you think CSS is a dumb language,
      you’re a dumb language – CSS IS AWESOME!”
      @MiriSuzanne thank you so much for the amazing talk!
    name: Nour Saud
    title: Software Engineer
    icon: social/twitter
    url: https://twitter.com/Nour_ASoud/status/1118588349994823681
  - text: |
      Miriam has always been nothing but spot-on,
      professional, funny, while also being extremely knowledgeable,
      smart, polite and always on time.
    name: Vitaly Friedman
    title: Founder
    venue: Smashing Magazine & Conference
    icon: social/twitter
    url: https://www.smashingmagazine.com/events/
  - text: |
      So stoked @mirisuzanne is @vueconfus !!!
      look at how cool CSS is ~ and all the squishy things it does.
    name: Ngan Hoang
    title: Principal Designer
    venue: Prefect.io
    icon: social/twitter
    url: https://twitter.com/itsngansense/status/1111001282528063488
    slug: squishy
summary: |
  Don't let the declarative syntax fool you --
  CSS is a powerful and dynamic programming language.
  It's time to start moving style logic
  back into the language designed for it.
media:
  - span: full
    <<: *dvlp
  - <<: *generate
  - <<: *smashing
  - <<: *fsfest
  - <<: *jsconf
---

{% import 'utility.macros.njk' as utility %}
{% import "quotes.macros.njk" as quotes %}
{% import "embed.macros.njk" as embed %}

CSS has come a long way since the browser wars of the late 90s.
What used to be a struggle,
is now often a breeze (see `box-shadow` or `border-radius`).
But the last 2 years have pushed CSS into entirely new territory:
with DOM-aware variables
and calculations that can drive your design,
without all the invasive Javascript.

- Basics for understanding Custom Properties & `Calc()`.
- Practical examples and use-cases for data-infused design.
- Integrating with CSS Grids to build layouts on-the-fly.

------

{{ quotes.grid(press) }}

------

{{ embed.figure(
  data=media,
  caption='Conference videos...'
) }}
