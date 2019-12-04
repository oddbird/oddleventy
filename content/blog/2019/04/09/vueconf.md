---
title: VueFinder at VueConf, 2019
public: true
author: miriam
tags:
  - _post
  - Vue
  - Conferences
  - Code
  - CSS
image:
  src: blog/2019/vueconf.jpg
headline:
  tagline: |
    Talk: `Dynamic CSS with Vue`_

    .. _Dynamic CSS with Vue: /talks/data-design/
summary: |
  Inspired by [VueConf 2018] I spent some time learning JS and Vue in more
  depth, and built myself a more flexible [VueFinder] presentation tool to
  fit my needs. This year, I returned to VueConf and gave the closing talk
  on passing data between CSS and Vue.

    [VueConf 2018]: /2018/05/14/vueconfus/
    [VueFinder]: https://github.com/oddbird/vuefinder
date: 2019-04-09
---

community/events.macros.j2\#videos\_by\_talk

content.macros.j2\#get\_quotes

content.macros.j2\#divider

After learning about Vue from [Sarah Drasner]'s stream of articles on
[CSS-Tricks], I had the pleasure of speaking at [VueConf 2018]. I really
enjoyed that conference, and left feeling inspired by the community and
the framework behind it. I loved that I could build complete and valid
Vue components in plain HTML/CSS --and slowly integrate JS logic as
necessary. I started digging, and quickly learned to bind JS data to
HTML attributes:

    <table :style="{'--scale': graph.scale}">
      <!-- … -->
      <td :style="{'--value': item.value}">{{ item.value }}%</td>

CSS variables provide a safe approach for passing JS settings to CSS via
inline HTML. While most inline styles are difficult to override, CSS
variables can instead be ignored --making their inline specificity
harmless.

I wrote a quick demo for CSS-Tricks --[More CSS Charts, with Grid &
Custom Properties] --and continued to develop the idea into my latest
talk: [Dynamic CSS]. This talk explores how data can be used to
manipulate presentation directly in CSS --a combination of variables,
`calc()`, grids, `hsl()` and more.

The [slides are online], and you can [sign up for a notification] when
the videos are posted.

  [Sarah Drasner]: https://twitter.com/sarah_edo
  [CSS-Tricks]: https://css-tricks.com/author/sdrasner/
  [VueConf 2018]: /2018/05/14/vueconfus/
  [More CSS Charts, with Grid & Custom Properties]: https://css-tricks.com/css-charts-grid-custom-properties/
  [Dynamic CSS]: /talks/data-design/
  [slides are online]: https://talks.oddbird.net/dynamic-css/vueconf19/
  [sign up for a notification]: https://www.vuemastery.com/conferences/

## VueFinder Slides

While learning JS and Vue in more detail, I decided to re-build my
presentation software to better meet my needs as a speaker.

The result, which I call [VueFinder], allows me to write slides using a
slightly-extended markdown syntax --with yaml metadata for each slide.
That metadata controls slide layout, allows me to embed Vue components
directly for live demos, and pass in CSS variables for custom styling.

VueFinder is public and open-source, though it isn't currently as
reusable as I would like. The content and logic are tightly coupled in
ways I haven't yet resolved. If you're interested in helping make this a
more viable open source tool, or using it yourself, I'm open to new
features and PRs.

After VueConf, [Rahul Kadyan][] [released an extension] for Visual
Studio Code that provides syntax-highlighting and code-folding for my
`.slides` files, as well as the `.vue-slides` format [he uses]. Thanks,
Rahul!

  [VueFinder]: https://github.com/oddbird/vuefinder
  [Rahul Kadyan]: https://twitter.com/znck0
  [released an extension]: https://marketplace.visualstudio.com/itemdetails?itemName=znck.vue-slides#qna
  [he uses]: https://github.com/znck/vue-slides

## VueConf, 2019

This year I connected with the [Vue Vixens], and enjoyed getting to know
more of the Vue community. [Chris Fritz] and Rahul helped me add some
last-minute features to my slide deck, while [Maria Lamardo] and
[Krystal Campioni] both inspired new demos in my talk.

content.macros.j2\#iframe

Animated sprites from [Monster Slayer] by [Krystal Campioni][]
\[[permalink] / [source]\] -- hover to see them move

You can find all the available [speaker slides linked from gist].

content.macros.j2\#divider

community/subscribe.macros.j2\#form

  [Vue Vixens]: https://vuevixens.org/
  [Chris Fritz]: https://twitter.com/chrisvfritz
  [Maria Lamardo]: https://twitter.com/marialamardo
  [Krystal Campioni]: https://twitter.com/krystalcampioni
  [Monster Slayer]: https://github.com/krystalcampioni/monster-slayer
  [permalink]: https://talks.oddbird.net/demos/cssSprites
  [source]: https://github.com/oddbird/vuefinder/blob/master/components/demos/cssSprites.vue
  [speaker slides linked from gist]: https://gist.github.com/vincentmayers/298f7bfd4c26ebd2fc0143f03dc4cbf7
