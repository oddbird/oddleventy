---
title: VueConf US
sub: Agile design systems in Vue
author: miriam
date: 2018-05-14
tags:
  - _post
  - News
  - Vue
  - Conferences
  - Design Systems
  - Code
  - Style Guides
image:
  src: blog/2018/vueconf.jpg
talk: /talks/agile-systems/
summary: |
  I've been excited about [Vue.js] since [Sarah Drasner] first showed me
  the basics. Since then, we've started using it for client work at
  OddBird, and I'm constantly impressed by the power and simplicity --so
  it was a real honor being invited to speak at the first [VueConf US] in
  New Orleans.

  [Vue.js]: https://vuejs.org/
  [Sarah Drasner]: https://sarahdrasnerdesign.com/
  [VueConf US]: http://us.vuejs.org/
---

{% import "quotes.macros.njk" as quotes %}
{% import "embed.macros.njk" as embed %}

{{ embed.from_event(
  collections.all,
  venue='VueConf US',
  page=talk,
  caption='Video from VueConf US'
) }}

{{ quotes.find(
  collections.all,
  page=talk,
  slugs='audit'
) }}

------

I enjoyed the conference as much as I enjoy the framework. I was
particularly impressed with the way core team members talk about
community and future development. Everyone was welcoming, interested in
my contributions, and helpful when I had questions. Several of the core
team members are now helping us build Vue component documentation into
[Herman], our style guide generator.

I was also able to attend Sarah's full-day Vue animation workshop. If
you ever have the chance to learn from Sarah, I highly recommend it. I
was already using the Vue `<transition>` and `<transition-group>`
[built-in functionality] on projects, but not to their full extent.
Revisiting an internal OddBird project, still in early development, I
was finally able to create the page transitions that I wanted all along.

<figure>
<img src="{{ site.images }}blog/2018/oddbooks.gif" class="size-full img-border" alt="" /><figcaption>The image is low-resolution in order to show more animations, without a massive file size...</figcaption>
</figure>

All the [VueConf talks] are available online, and I recommend checking
them out!

  [Herman]: /herman/
  [built-in functionality]: https://vuejs.org/v2/guide/transitions.html
  [VueConf talks]: https://www.vuemastery.com/vueconf
