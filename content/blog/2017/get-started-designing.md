---
title: Get Started with Design
sub: Four useful tools & tutorials
author: sondra
card: feature
tags:
  - Article
  - Recommendations
  - Color
  - Typography
  - Design
  - User Experience
image:
  src: blog/2017/get-started-designing/cafe-computer.jpg
  alt: Tools for design include a computer, sketchbook, pen and paper
summary: |
  So you'd like to start learning design, but the number of tools and
  tutorials available is overwhelming. Where do you start? I recommend
  Paper for sketching out UX ideas, *Practical Color Theory for Coders* to
  generate color palettes and learn color theory, *Choosing the Right
  Font: A Practical Guide to Typography on the Web* as an introduction to
  typography, and Adobe Experience Design for UX prototyping.
date: 2017-02-22
---

{% import 'embed.macros.njk' as embed %}

So you’re a developer or you’re brand new to the world of web design,
and you’d like to grow your design chops. How do you even begin to sort
through the overwhelming assortment of tools and tutorials available? In
this guide, I’ll introduce the tools I use daily in my work as a user
experience and brand designer for OddBird. I’ll recommend quick and
useful tutorials that will get you started designing right away.

## Start Sketching: Paper

![Paper sketching tool]

When tackling a complex UX design challenge, I start with sketches. My
go-to tool is aptly named [Paper]. Paper, by 53, is free for iPad and
iPhone. Paper is much more basic than tools like Adobe Photoshop and
Illustrator. In my experience, a collapsable toolkit with several brush
styles, seven colors, and an eraser is all I need to sketch rough drafts
of web features. Here are two sample sketches I drew using Paper during
the development of the [QuarqNet] web app.

![QuarqNet sketches on Paper]

With Paper, I can auto-straighten uneven lines and zoom in for detail
work. When drafting logos, I often trace images. Paper lets me upload an
image, draw on top of it, and easily delete the image from the
background when I’m finished.

  [Paper sketching tool]: {{ site.images }}blog/2017/get-started-designing/paper.jpg
  [Paper]: https://www.fiftythree.com/
  [QuarqNet]: https://www.quarqnet.com/
  [QuarqNet sketches on Paper]: {{ site.images }}blog/2017/get-started-designing/sketches.jpg

## Typography: A Practical Guide

{{ embed.img(
  src='blog/2017/get-started-designing/santamaria.jpg',
  alt='Website by Jason Santa Maria',
  attrs={'class': 'img-border'}
) }}

According to typography expert [Jason Santa Maria], “If your type is
bad, the design fails.” There’s so much to learn in the rich field of
typography. To get started, I recommend [Choosing the Right Font - A
Practical Guide to Typography on the Web] by Max Luzuriaga. Max provides
an overview of important elements to consider: readability, pairing, and
size.

If you have an hour, check out [Jason Santa Maria On Web Typography], a
talk he presented at Build Conf 2011. Or delve into his book [On Web
Typography], but be warned – you may get bitten by the typography bug
and find yourself regaling your friends about that horrendous typeface
pairing on the menu at your favorite restaurant.

If you already know the theory and you’re looking for free, high-quality
typography for your web project, here’s a list of [my favorite
resources]. You can also read about the process I use to select
typography for a brand identity.

  [Jason Santa Maria]: https://jasonsantamaria.com/
  [Choosing the Right Font - A Practical Guide to Typography on the Web]:
    https://webdesign.tutsplus.com/articles/choosing-the-right-font-a-practical-guide-to-typography-on-the-web--webdesign-15
  [Jason Santa Maria On Web Typography]: https://www.youtube.com/watch?v=ipbbbMsvTEI
  [On Web Typography]: https://abookapart.com/products/on-web-typography
  [my favorite resources]: /2017/01/11/typography/

## Color: Sass Color Functions

![Natalya's color theory decision tree]

It’s important for any designer to be able to create pleasing and
accessible color palettes. If you write code, Natalya Shelburne’s Sass
color functions outlined in [Practical Color Theory for People Who Code]
are an excellent tool for generating a palette that works. If you’re not
a developer, this is still a fantastic tutorial in how to think about
color for the web. You’ll learn about accessible contrast, using neutral
colors, and how to simulate cohesive lighting conditions.

Color can make or break a user’s experience on the web. If you’d like to
learn more, here's an outlined of my [process for choosing brand colors]
including a list of several tools for generating color palettes and
testing contrast.

  [Natalya's color theory decision tree]: {{ site.images }}blog/2017/get-started-designing/decision-tree.jpg
  [Practical Color Theory for People Who Code]: https://tallys.github.io/color-theory/
  [process for choosing brand colors]: /2017/01/16/color/

## Prototype: Adobe Experience Design

![Adobe Experience Design]

My new favorite UX design tool, [Adobe Experience Design][1], is still
in beta. Xd has a built-in tutorial that’s fun, beautiful, and takes
less than an hour to complete. I use Xd prototypes to flesh out my
sketches, and to play with colors, typography, and layout. Xd is also an
excellent tool for working out how users will flow through the content.

What design tools and tutorials have you found most useful? I’d love to
hear your recommendations. Join the conversation on [Twitter] or join
our public [Slack channel].

  [Adobe Experience Design]: {{ site.images }}blog/2017/get-started-designing/xd.jpg
  [1]: https://helpx.adobe.com/xd/how-to/web-mobile-app-ui-ux-design-basics.html
  [Twitter]: https://twitter.com/oddbird
  [Slack channel]: http://friends.oddbird.net/
