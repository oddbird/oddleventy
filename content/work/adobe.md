---
card: large
title: Typographic Superpower Game
sub: A meditation on typography
logo: adobe
image:
  src: projects/adobegame.jpg
  alt: Illustrated game question about which font is most calligraphic
client: &client Adobe Fonts
people:
  - &meghan
    name: Meghan Arnold
    title: Sr. Product Marketing Manager
    face: meghan-arnold.jpg
    url: https://twitter.com/MeghanCArnold/status/1318671589618061312
    venue: *client
date: 2020-10-20
links:
  site: https://game.fonts.adobe.com/
tags:
  - _post
  - Case Study
sample:
  desktop:
    src: 
    alt: 
  mobile:
    src: 
    alt: 
  caption: |
    @@@
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
planning:
  - title: Game Goals
    icon: icons/map
    text: |
      We started with a conversation about goals for the game — create a happy place for designers to connect with fonts and a method for Adobe to collect their feedback. We talked about what the game should not do like sell things, store player information, or become a social media platform. We defined technical and accessibility requirements, collected specifics about the content, and established a deadline. 
    - title: Object Map
    icon: icons/site-map
    text: |
      Using Sophia Prater’s Object Oriented UX strategy, we mapped out the objects in the web application. Though this project had only four objects, the map helped us agree on terms and get organized. We fleshed out the content of each object and the relationships between the four objects that would make up the game: question, option, superpower, and session user.
  - title: Interactive Wireframe
    icon: icons/map
    text: |
      We sketched a wireframe of the game showing the flow of a player through the objects and ways to navigate from one object to another. Illustrations and animations make up the bulk of this game, but we didn’t get into those details yet at this stage. Keeping the wireframe basic and grayscale helped us nail down when animations should occur, what illustrations we would need, and where important Calls to Action should be highlighted throughout the game. 
  - title: User Profiles
    icon: icons/users
    text: |
      For the user profile, we described the game play of a typical player. Thinking through where the player may be coming from — an Adobe promo or a social media post — helped us hone our ideas for the landing page. In order to make the game accessible to as many players as possible, we establish that both sound and animation should start in the off position, with prominent toggles to turn them on at the player’s discretion.
  - title: User Stories
    icon: icons/theater
    text: |
      Each user story defined one task that a player might want to accomplish during the game. (As a Player, I want to select a font option.) We listed each user story and provided itemized estimates per story. This allowed Adobe to add, prioritize, and remove stories before we began development, and throughout the project as needs and timeline constraints changed.
summary: |
  A meditation on typography, Adobe Fonts' Game allows players to choose the
  fonts that they feel apply best to different scenarios. Players' input helps
  Adobe Fonts continue to improve on their new browse-by-tags feature. We worked
  closely with Adobe to create animated & interactive illustrations using
  GreenSock, NuxtJS, and CSS -- while maintaining high performance standards and
  responsive, accessible design.
---

{% import 'quotes.macros.njk' as quotes %}
{% import 'embed.macros.njk' as embed %}

More detailed description of what users can do here?

{{ quotes.grid(press | slice(2) | first ) }}

## What Adobe Needed

Adobe wanted to make their fonts more searchable, tagged with natural language terms like “organic,” “edgy,” and “calligraphic.” They envisioned a fun and meditative game — a bit of joy in a difficult day — that would let players pick the tags for each font, and give Adobe the tools to track the user input. Adobe described it as “a game for people who have feelings about fonts” and requested custom illustrations, animations, and sound design. As typography and game lovers ourselves, the OddBird team was excited to dive in!

{{ embed.icon_block(planning, 'Planning & Discovery Phase') }}

## Design and Development Phase

### Illustrations / Web Graphic

While part of the team began setting up the infrastructure of the game, the designers got to work on illustrations. Sarah Hyndman of Type Tasting (https://www.typetasting.com/) provided initial sketches. In collaboration with the animator, we established a style — solid, filled SVGs — for easy layer grouping and relatively small file size. In Illustrator, we created unique graphics for ten font questions and five typographic superpowers. We used Asset Export to ensure that our gradients and other styles would translate well to SVG. A tight back-and-forth via Slack between designers, animators, and Adobe helped us moved swiftly through drafting to final designs in order to meet the project deadline.

### Audio & Nuxt.js

Audio implementation provided an interesting challenging. First, we tried Web Audio API and a Nuxt.js plugin that automatically played and paused the sounds on each page of the game. When we tested it, the sounds played simultaneously. Uh oh! We switched to HTML5 Audio and added an ID for each question tag. The correct sound played when the ID and tag matched. Yay!

During testing across different browsers and devices, we discovered that our audio solution didn’t work correctly everywhere — returning auto-play errors. We had to get clever. Using HTML5 audio made recovery trivial if autoplay failed. (https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide)

It was fun collaborating with audio specialist, Rob Taliesin Owen of Potion SoundWorks (https://potionsoundworks.com/). Adding sound elevated the whole experience of game play. 

### CSS Custom Properties

Each question in the game has nine options and each option consists of the same identical image plus a unique font. Typefaces have a wide array of letter heights and widths. When we placed the typefaces on top of the images, some barely filled the space, some hung off the edges of the illustrations. CSS Custom Properties to the rescue! Custom Properties made it possible to adjust individual typefaces.

### SVG Animation

We were privileged to have Christina Gorton (https://www.christinagorton.com/) join us for this project. Christina worked with our designers to create clean and optimized SVGs for animating. She used the GreenSock animation library to create varied animations for each font question. Each font had a certain personality she put in to each animation. She worked with the whole team and Adobe to adjust timing and easing on animations. GreenSock mades it easier to iterate on animations helping us to meet the project deadline.

### Usability Testing

Testing web applications with users for the first time is exciting and a bit nerve wracking. Are we headed in the right direction? We tested the Font Tags Game with users as early in the process as possible — as soon as we had the questions, options, and animations in place, but before adding sounds and superpowers. Since our timeline was tight, we ran half hour sessions via video with two volunteer designers. Their feedback was invaluable. They caught typeface alignment issues, pointed out confusing language, and helped us imagine new features for phase two. Most importantly, they let us know we were hitting our goals, describing their feelings afterwards as curious, optimistic, empowered, and ready to explore typography!
