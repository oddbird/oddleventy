---
card: large
title: Typographic Superpower Game
sub: A meditation on typography
logo: adobe
image:
  src: work/adobe/adobegame.jpg
  alt: Illustrated game question about which font is most calligraphic
client: &client Adobe Fonts
people:
  - &meghan
    name: Meghan Arnold
    title: Sr. Product Marketing Manager
    face: meghan-arnold.jpg
    url: https://twitter.com/MeghanCArnold/status/1318671589618061312
    venue: *client
date: 2020-06-29
end: 2020-10-20
links:
  play game: https://game.fonts.adobe.com/
tags:
  - _post
  - Case Study
  - Design Sector
  - Technology Sector
sample:
  desktop:
    src: adobe/vintage-desktop.jpg
    alt: Options for the vintage font tag with Ferris wheel illustrations
  mobile:
    src: adobe/vintage-mobile.jpg
    alt: Mobile view of the vintage font tag question
  caption: |
    Adobe's font tags game is a meditation in typography
    with illustrated and animated questions.
vintage:
  - img: work/adobe/enter-here.png
    alt: Vintage Carnival Illustration
edgy:
  - img: work/adobe/edgy.png
    alt: Edgy Illustration
before:
  - img: work/adobe/before-adobe-font-game-calligraphic.jpg
    alt: Before we applied the size adjustment
compare:
  - img: work/adobe/before-and-after-adobe-size-adjust.png
    alt: Samples showing size comparison
after:
  - img: work/adobe/after-adobe-font-game-calligraphic.jpg
    alt: After making font-size adjustments
herolink:
  - img: work/adobe/organic-usability.png
    alt: Layout showing the link to heroes in the bottom right corner
funky:
  - img: work/adobe/funky.png
    alt: |
      Colorful square that says, 'My typographic superpower is
      Funky. fonts.adobe.com'
tasks:
  - User Experience Design
  - Graphic Design
  - Illustration
  - Animation
  - Front-End Development
press:
  - text: |
      **This was such a fun project to work on** with
      @TypeTasting, @OddBird & my @AdobeFonts
      colleagues.
    <<: *meghan
    slug: fun
  - text: |
      Oddbird developers know what they’re doing.
      We appreciate you all driving us to our goals.
      **I’m glad usability testing was baked into the process.
      It really was so valuable.** We are super super happy.
    <<: *meghan
    slug: usability
planning:
  - title: Game Goals
    icon: icons/map
    text: |
      We started with a conversation about goals for the game – to create a
      happy place for designers to connect with fonts and a method for Adobe to
      collect their feedback. We talked about what the game should _not_ do –
      sell things, store player information, or become a social media platform.
      We defined technical and accessibility requirements, collected specifics
      about the content, and established a deadline.
  - title: Object Map
    icon: icons/site-map
    text: |
      Using an object-oriented UX strategy, we mapped out the objects in the web
      application. Though this project had only four objects, the map helped us
      agree on terms and get organized. We fleshed out the content of each
      object and the relationships between the four objects that would make up
      the game: question, option, superpower, and session user.
  - title: Interactive Wireframe
    icon: icons/interact
    text: |
      We sketched a wireframe of the game showing the flow of a player through
      the objects, and ways to navigate from one object to another.
      Illustrations and animations make up the bulk of this game, but we didn’t
      get into those details yet at this stage. Keeping the wireframe basic and
      grayscale helped us nail down when animations should occur, what
      illustrations we would need, and where important Calls To Action (CTA)
      should be highlighted throughout the game.
  - title: User Profiles
    icon: icons/users
    text: |
      For the user profile, we described the game play of a typical player.
      Thinking through where the player may be coming from – an Adobe promo or a
      social media post – helped us hone our ideas for the landing page. In
      order to make the game accessible to as many players as possible, we
      established that both sound and animation should start in the off
      position, with prominent toggles to turn them on at the player’s
      discretion.
  - title: User Stories
    icon: icons/theater
    text: |
      Using the Goals, Object Map, Wireframe, and User Profiles
      we created a list of expected features or ‘stories.’
      Each user story defined one task
      that a player might want to accomplish
      during the game.
      For example, _As a Player, I want to select a font
      option._ Adobe appreciated this outline of the project.
      It help our big team,
      which included people from multiple companies,
      stay organized and on task –
      focused on the goals.
  - title: Itemized & Prioritized Estimate
    icon: icons/estimate
    text: |
      We estimated each user story,
      providing Adobe with an itemized hourly estimate,
      organized into phases.
      Structuring the estimate in this way
      allowed Adobe to adjust priorities,
      such as limiting the typographic superpowers to five
      for the initial release.
summary: |
  A meditation on typography, Adobe Fonts' Game allows players to choose the
  fonts that they feel apply best to different scenarios. Players' input helps
  Adobe Fonts continue to improve on their new browse-by-tags feature. We worked
  closely with Adobe to create animated & interactive illustrations using
  GreenSock, NuxtJS, and CSS – while maintaining high performance standards and
  responsive, accessible design.
---

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

At the end of the game, players discover their own typographic superpower.
Players have the option to share their superpower on social media, access the
typeface on Adobe, view similar typefaces, and download their superpower badge.

{{ quotes.grid(press) }}

{% import 'embed.macros.njk' as embed %}
{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ layout.title('What We Did') }}

{% call embed.media_block(
  media=embed.screen(
    notch='0',
    content=embed.img(
      src='work/adobe/game-phone.jpg',
      alt='game play example showing vintage TVs
      with the words Play Me in different font styles',
      sizes='media'
    )
  )
) %}

{% call layout.grid('narrow-columns') %}

{% call layout.block('column') %}

### Design

- Wireframes & mockups
- Graphic design 
- Illustration
- Animation
- Accessible user interface (UI)
- User experience design (UX)
- Information architecture
- Responsive across devices

{% endcall %}

{% call layout.block('column') %}

### Development

- Front-end Development 
- Sass & CSS
- JavaScript

{% endcall %}

{% endcall %}

{% endcall %}

## What Adobe Needed

Adobe wanted to make their fonts more searchable, tagged with natural language
terms like “organic,” “edgy,” and “calligraphic.” They envisioned a fun and
meditative game – a bit of joy in a difficult day – that would let players pick
the tags for each font, and give Adobe the tools to track user input. Adobe
described it as “a game for people who have feelings about fonts” and requested
custom illustrations, animations, and sound design. As typography and game
lovers ourselves, the OddBird team was excited to dive in!

{{ embed.icon_block(planning, 'Planning & Discovery Phase') }}

## Design and Development Phase

### Illustrations / Web Graphics

While part of the team
began setting up the infrastructure of the game,
the designers got to work on illustrations.
Sarah Hyndman of [Type Tasting]
provided initial sketches
to convey basic concepts and directions
based on her extensive typography research.
In collaboration with animator [Christina Gorton],
we established a style –
solid, filled SVGs –
for easy layer grouping and relatively small file size.
In Illustrator, we created unique graphics
for ten font questions
and five typographic superpowers.
A tight back-and-forth via Slack
between designers, animators, and Adobe
helped us move swiftly through drafting
to final designs in order to meet the project deadline.

[type tasting]: https://www.typetasting.com/
[Christina Gorton]: https://www.christinagorton.com/

{{ embed.figure(
  data=vintage,
  caption='The vintage Ferris wheel went through a sketch phase and a couple
    of drafts before the design was finalized.',
  class='extend-small'
) }}

{{ embed.figure(
  data=edgy,
  caption='Near the end of the edgy superpower design, the team realized the
    word “edgy” was hard to read in the lowercase Totally Gothic typeface.',
  class='extend-small'
) }}

### Audio & Nuxt.js

Audio implementation provided an interesting challenging. First, we tried Web
Audio API and a Nuxt.js plugin that automatically played and paused the sounds
on each page of the game. When we tested it, the sounds played simultaneously.
Uh oh! We switched to HTML5 Audio and added an ID for each question tag. The
correct sound played when the ID and tag matched. Yay!

During testing across different browsers and devices, we discovered that our
audio solution didn’t work correctly everywhere – returning autoplay errors. We
had to get clever. Using [HTML5 Audio] made recovery trivial if autoplay failed.

```js
controlSound(on) {
  const bg = this.$refs.audioBackground;
  if (bg) {
    if (on) {
      bg.play().catch(() => this.toggleSetting(this.sound));
    } else {
      bg.pause();
    }
  }
},
```

It was fun collaborating with audio specialist Rob Taliesin Owen of [Potion
SoundWorks]. Adding sound elevated the whole experience of game play.

[html5 audio]: https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
[Potion SoundWorks]: https://potionsoundworks.com/

### CSS Custom Properties

Each question in the game has nine options, and each option consists of the same
identical image plus a unique font. Instead of using a separate image for each
item on the page, we wanted to give Adobe more flexibility to easily edit or add
new font options and questions. We used a single SVG, and controlled the text
and fonts via HTML/CSS.

First, we used a YAML file containing the questions, answers,
and fonts to generate the page in Vue.
We soon realized the problem: **the type overflowed**.
Typefaces have a wide array of letter heights and widths.
When we placed the typefaces within the illustrations,
some barely filled the space while others extended past the edges.
CSS Custom Properties to the rescue!

{{ embed.figure(
  data=before,
  caption='We started with a default font-size for all typefaces and found
    there was too much variation. We needed a solution to individually scale
    each typeface in order to fit within the assigned space in each
    illustration.'
) }}

We established a default font-size for each illustration,
and called it the `--svg-base`.
Since the illustrations were designed with
different orientations and space available
for the text, this allowed us to start from a place
that worked best to maximize the type.

```css
/* Vue component scoped CSS */
.svg-text {
  --svg-base: 87px;
}
```

Knowing our goal was to be able to edit each font individually, we wrote some
CSS calc() logic to allow adjustments from that base size.

```css
/* Global CSS */
.svg-text {
  /* include fallbacks for each custom property */
  font-size: calc(var(--svg-base, 4em) * var(--svg-adjust, 1));
}
```

Now we were able to edit how each typeface should scale in the YAML file.

```yml
- name: Chapman Bold Extended Italic
  adjust: .675
```

Using Vue, we converted that data into an `--svg-adjust` custom property on each
font/illustration:

```js
fontStyles() {
  return {
    '--svg-adjust': this.font.adjust,
  };
}
```

{{ embed.figure(
  data=compare,
  caption='The example on the left shows the type extending outside it’s
    container and the right example is what this illustration looked like
    after we adjusted the font-size',
  class='extend-small size-quarter'
) }}

This method was easily replicated across the entire project and allowed us to
have more control over the design, while writing less code.

{{ embed.figure(
  data=after,
  caption='After applying adjustments to only the fonts that needed it,
    the result shows visually similar type size.'
) }}

### SVG Animation

We were privileged to have [Christina][Christina Gorton]
join us for this project.
Christina worked with our designers
to create clean and optimized SVGs for animating.
She used the [GreenSock animation library]
to create varied animations for each font question.
Each font had a distinct personality
built into the animation.
Christina worked with the whole team and Adobe
to adjust timing and easing on animations.
GreenSock made it easier to iterate on animations,
helping us to meet the project deadline.

[GreenSock animation library]: https://greensock.com/

{{ embed.codepen(
  id='rNedLbN',
  title='Relax Question',
  user='cgorton'
) }}

### Usability Testing

Testing web applications with users for the first time is exciting and a bit
nerve-racking. Are we headed in the right direction? We tested the Font Tags
Game with users as early in the process as possible – as soon as we had the
questions, options, and animations in place, but before adding sounds and
superpowers. Since our timeline was tight, we ran half-hour sessions via video
with two volunteer designers. Their feedback was invaluable. They caught
typeface alignment issues, pointed out confusing language, and helped us imagine
new features for phase two. Most importantly, they let us know we were hitting
our goals, describing their feelings afterwards as curious, optimistic,
empowered, and ready to explore typography!

{{ embed.figure(
  data=herolink,
  caption='Two testers helped us discover that the “link to heroes” was
    distracting them from playing the game.'
) }}

### Launch

Adobe launched the game in October 2020.
They were able to begin collecting and analyzing data
from users via Google Analytics right away.
Visitors reported a fun experience
and shared their typographic superpowers on social media.

> Adobe you see right through me! "Being too confrontational" 😂 Such a fun
> game. Check it out!
>
> ---@StatUXofLiberty

> okay this was actually very cool and fun. good job, adobe 😂 I found my
> typographic superpower. What's yours?
>
> ---@manic_femme

> I got... Funky!! 🤣✨ Of course these lyrics come to mind: 🎵 Shining through
> the city with a little funk and soul / So I'ma light it up like dynamite, whoa
> oh oh 🎵
>
> ---@froznberry

{{ embed.figure(
  data=funky,
  caption='Each typographic superpower has a badge to share on social media.',
  class='extend-small'
) }}
