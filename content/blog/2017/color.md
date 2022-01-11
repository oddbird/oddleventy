---
card: large
title: How to Choose Beautiful & Accessible Brand Colors for Your Website
author: sondra
date: 2017-01-16
tags:
  - Article
  - OddSite
  - Open Design
  - Color
  - Design
  - Accessibility
image:
  src: blog/2017/colors/color.jpg
  alt: Jonny next to vertical stripes of color
summary: |
  **How do you select a set of colors that express the attitude of your
  brand**, look great together, and pass WCAG accessibility standards? How
  many colors is too many? This step-by-step guide outlines OddBird's
  process for tackling these challenges.

  It's important to define your brand goals first and review them
  throughout the process. Next, do some research for inspiration. What
  colors are the other companies in your field using? Use Paletton to
  generate a cohesive color palette. Test color contrast to ensure
  accessibility. Finally, create prototypes to make sure you colors work
  well in context.
series: Open Design
---

{% import 'embed.macros.njk' as embed %}

Now that you have [selected excellent typography] that fits your brand
to a “T”, it’s time to explore brand colors. How do you select a set of
colors that express the attitude of your brand, look great together, and
pass WCAG accessibility standards? How many colors is too many? How do
you keep track of all these moving parts without getting completely
overwhelmed? Color toolkit to the rescue! Over the years, I’ve collected
several resources to help guide me through these challenges – many of
which I used during OddBird’s [open redesign process].

[selected excellent typography]: /2017/01/11/typography/
[open redesign process]: /2016/07/12/open-design/

## Step 1 – Define Brand Goals

It’s always important to review the brand goals with your team or your
client multiple times during the brand identity design process so you
don’t lose direction. Ask: What is the personality/attitude of the
project? What is it not?

Though I had just reviewed [OddSite Brand Goals] during the process to
choose our new typography, I looked back once again, this time sorting
and grouping the words into categories of related terms. I found it
helped to pick one keyword that best encapsulated all the words in each
group. One group was “Odd, Quirky, Fun” and another “Trustworthy,
Transparent, Honest”. Of those, I chose *Odd* and *Trustworthy* as my
keywords.

If you try this technique you may want to re-organize your groups of
words in several different ways. Chances are good that each of your
brand words will be related to each other in many different ways. The
process of sorting and resorting may offer new inspiration as you
prepare to look for a color palette that makes your company stand out.

[OddSite Brand Goals]: /2016/11/04/branding-type/

## Step 2 – Research for Inspiration

Look at 10–20 websites of other companies in your industry. Then look at
10–20 of the best website color schemes to see what’s possible. There
are so many inspiring lists of sites with beautiful color palettes.
Don’t get lost down the rabbit hole! Notice what each color palette –
saturated or desaturated, primary or Christmas-y, grayscale or unicorn
rainbow – says about the company. How does each set of colors make you
feel about each company?

## [Canva]

{{ embed.img(
  src='blog/2017/colors/canva.jpg'
) }}

[Canva]: https://www.canva.com/learn/website-color-schemes/

## [Design Seeds]

{{ embed.img(
  src='blog/2017/colors/designseeds.jpg'
) }}

I looked at the sites of many web development agencies that I know and
love as I considered OddBird’s color palette.

[Design Seeds]: https://www.design-seeds.com/

## [Happy Cog]

{{ embed.img(
  src='blog/2017/colors/happycog.jpg'
) }}

[Happy Cog]: https://www.happycog.com/

## [Mild Bunch]

{{ embed.img(
  src='blog/2017/colors/mildbunch.jpg'
) }}

[Mild Bunch]: https://mildbun.ch/

## [Clear Left]

{{ embed.img(
  src='blog/2017/colors/clearleft.jpg'
) }}

[Clear Left]: https://clearleft.com/

## [Crush Lovely]

{{ embed.img(
  src='blog/2017/colors/crushlovely.jpg'
) }}

[Crush Lovely]: https://crushlovely.com/

## Step 3 – Start \[Color\] Scheming

Now you’re ready to begin gathering sets of colors. But how do you keep
from color clash? My favorite tool for the job is Paletton.

## [Paletton]

{{ embed.img(
  src='blog/2017/colors/paletton.jpg'
) }}

If you don’t yet have any color ideas in mind, think back to your brand
goal words. Compare those to the attitudes and personalities of the
color palettes you liked, or pick a color that the other people in your
industry are not using. Then select the color by clicking on the color
wheel or, if you know the hexadecimal value of a specific color that
interests you, type it into the Base RGB field. Voila! You now have
gradations of your base color – your first color palette. For a simple,
stripped-down, unified look you could use variations of a single brand
color on your website. Click the circles in the top right corner to find
more related color combos. I recommend using two brand colors
extensively throughout your website with a few additional accent colors
for particular cases: body text or success or error.

OddBird already had two brand colors, so I used another favorite tool to
expand our color palette and find colors that would look great with our
brand colors. Because we write our style sheets in Sass, SassMe was the
perfect tool for creating our palette. I entered OddBird’s dark blue and
used the sliders to find a very dark color for the text and a very light
“callout” background color for highlighting important information.
SassMe converts the hex colors into Sass color functions for me.

[Paletton]: https://paletton.com/

## [SassMe]

{{ embed.img(
  src='blog/2017/colors/sassme.jpg'
) }}

OddBird saves our colors and typography in a living style guide, making
it easier for designers like me to grab exact colors when I’m
prototyping website pages or features.

[SassMe]: https://sassme.jim-nielsen.com/

## [Living Style Guide]

{{ embed.img(
  src='blog/2017/colors/styleguide.jpg'
) }}

[Living Style Guide]: /styleguide/config-color.html

## Step 4 – Test Colors for Accessibility

There are so many important considerations around color and
accessibility, and I can’t tackle them all in this post. The most basic
and important principle to keep in mind is to maintain high contrast
between background and text colors.

> Users will do what they need to do, and what they are accustomed to
> doing, in order to read. The main concern for web developers is to
> ensure a high degree of contrast for the general population of
> readers.
>
> ---[WebAIM]

Contrast Ratio is my go-to web tool for the job.

[WebAIM]: https://webaim.org/techniques/fonts/

## [Contrast Ratio]

{{ embed.img(
  src='blog/2017/colors/contrastratio.jpg'
) }}

Enter RGB or hexadecimal values as background and text colors. The
circle in the middle will turn green if the two colors have high enough
contrast to be placed on top of one another. Hover over the center
circle to find out whether your color contrast passes AA or AAA and what
font sizes and weights to use for text color.

WebAIM: Color Contrast Checker is also an excellent resource. You can
lighten and darken your colors, right there in the tool, until you find
two that work. Plus, Checker provides detailed descriptions of how to
choose accessible colors, and accessibility articles if you’d like to
dive deep.

[Contrast Ratio]: https://contrast-ratio.com/

## [WebAIM: Color Contrast Checker]

{{ embed.img(
  src='blog/2017/colors/webaim.jpg'
) }}

When I tested OddBird’s signature orange with Contrast Ratio I
discovered that our dark blue passed AA level for any size text on a
white background. Unfortunately, our signature orange failed WCAG 2.0.
Darkening our orange to the point that it passed AA level changed the
color so much that it no longer retained the bright, fun feel we needed.
So I began the search for a new brand color.

[WebAIM: Color Contrast Checker]: https://webaim.org/resources/contrastchecker/

## Step 5 - Test Colors in Context

To really evaluate whether a particular set of colors will work for your
project, I strongly recommend testing it in the context of your website.
Does that fluorescent green actually work well as the link color or does
your site have so many links that it becomes jarring? Does your logo
look better in white or black with one of your brand colors in the
background or vice versa? Try different combinations. Apply your colors
to prototypes of actual content and elements.

To test OddBird’s colors in context I created element collages using a
brand new tool still in beta, Adobe Experience Design. XD is packaged
with a Creative Cloud subscription and has been a delight to use. The
tutorial is quick and clear and I was up and running, creating
prototypes with ease just an hour after downloading the program.

## [Adobe Experience Design]

{{ embed.img(
  src='blog/2017/colors/xd.jpg'
) }}

I created two element collages using exactly the same blog content to
make the designs easy for me and the rest of the team to compare and
contrast. Going back to the groups of words from my brand goals, I
designed one prototype around my Odd group, and another to evoke the
idea of Trustworthiness. I played with other design elements in the
collages to create the desired personalities as well, but color was my
main focus.

{{ embed.img(
  src='blog/2017/colors/elementcollages-color.jpg'
) }}

Drawing on my research into other brands, I realized it could work well
to pull in design elements and colors from the [Susy], an open source
layout framework that [Miriam] developed. This would create a stronger
visual association between Susy and OddBird, potentially benefiting both
brands. Susy pink, I discovered, would be a fantastic replacement for
our orange. Bright, odd, and accessible, it was a good counterpoint to
our serious, dark blue. The team loved the Susy tie-in, and OddBird’s
new brand colors were born – er, hatched.

{{ embed.img(
  src='blog/2017/colors/elementcollage-final.jpg'
) }}

In the end, we loved OddBird orange too much to cut it altogether, and
we snuck it into the OddSite design. Can you find it? Hint: scroll back
to the top and try refreshing the page.

As always, we want to know what your favorite web tools are for playing with
color. Have you tried XD? What did you think? Let us know
via [Twitter].

[Adobe Experience Design]: https://www.adobe.com/products/xd.html
[Susy]: /susy/
[Miriam]: /authors/miriam/
[Twitter]: https://twitter.com/oddbird

### Bonus - Color Palette Inspiration

## Color Palette FX

{{ embed.img(
  src='blog/2017/colors/fx.jpg'
) }}

## [HSL Color Picker]

{{ embed.img(
  src='blog/2017/colors/hsl.jpg'
) }}

[HSL Color Picker]: https://hslpicker.com/

## [Color Me]

{{ embed.img(
  src='blog/2017/colors/colorme.jpg'
) }}

[Color Me]: https://colorme.io/

## [Culrs]

{{ embed.img(
  src='blog/2017/colors/culrs.jpg'
) }}

[Culrs]: https://www.culrs.com/

## [Open Color]

{{ embed.img(
  src='blog/2017/colors/opencolor.jpg'
) }}

[Open Color]: https://yeun.github.io/open-color/

### Bonus - Color Contrast Tools for Accessibility

## [Colour Contrast Check]

{{ embed.img(
  src='blog/2017/colors/check.jpg'
) }}

[Colour Contrast Check]: https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333

## [Accessible Colors]

{{ embed.img(
  src='blog/2017/colors/accessiblecolors.jpg',
  alt='Check foreground and background color with font size and weight'
) }}

[Accessible Colors]: https://accessible-colors.com/


## [Adobe Plugin Check Contrast Ratio]

{{ embed.img(
  src='blog/2017/colors/plugin.jpg',
  alt='Check Contrast Ratio Photoshop Add-on'
) }}

[Adobe Plugin Check Contrast Ratio]: https://exchange.adobe.com/creativecloud.details.12170.html
