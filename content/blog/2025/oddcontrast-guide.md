---
title: A guide to using OddContrast
sub: A modern color tool
author: oddbird
date: 2025-05-20
tags:
  - Article
  - Accessibility
  - Color
  - Design
  - OddTools
image:
  src: blog/2025/oddcontrast-gamut-sliders.png
  alt: >
    OddContrast displays sRGB gamut range
    in P3 color format and an estimate
    of foreground alpha value ratio.
summary: |
  Learn how to use OddBird's color tool that not only checks contrast ratios
  but also utilizes the color formats and spaces newly available in CSS.
---

{% import 'embed.macros.njk' as embed %}

## Background we might not need?

For years designers and developers were limited to colors in the sRGB colors
space, using formats like hexadecimal, RGB, and HSL. As display technology
progressed, so too has CSS, and we have access to additional color spaces and
wider gamuts. These advances led us to build OddContrast, a color editing and
testing tool that handles our new world of modern color formats.

## The flexibility of OddContrast

Although it looks simple on the surface, OddContrast has many built-in
conveniences when working with color.

The default color format is `p3` but you can select from the following options:
- Hex
- HSL
- Lab
- LCH
- Oklab
- Oklch
- P3
- sRGB

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-formats.jpg',
    alt: 'p3 is selected in the color format select field'
  }]
) }}

You may enter any supported color notation regardless of chosen color format.
There's also some flexibility when it comes to how you enter your color.
For instance, you can paste a 6 digit Hex color without the `#`.
This level of recognition is helpful when coming from design tools as they
often will not include the full color notation.

The same goes for when you are working in decimals, you can paste
`oklch(.44 0.1 295)` even though the default is set to display the lightness
value as a `%`. You can even used named colors! Here’s `honeydew` as the
foreground color.

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-named-colors-cropped.jpg',
    alt: 'honeydew named colors is used as the foreground color'
  }]
) }}

## Workflow enhancements

To streamline your color-editing tasks, OddContrast includes several helpful
features. For starters, you can edit a single component of a color by using the
visual sliders. These change depending on the color format you've selected. For
instance, if Oklab is selected, the first slider controls the lightness (L).
The next two sliders show options from green to red (A) and blue to yellow (B).
The last slider sets the Alpha value and is consistent across all color formats.
Additionally, you can use your keyboard arrow keys to nudge the color values
incrementally when focused.

Need to swap the foreground and background colors? No problem, select the left
right arrow icon button or you can drag and drop the color swatches themselves.

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-swap.gif',
    alt: 'use the arrow icon to swap foreground and background colors'
  }]
) }}

Once you are happy with your colors, you can easily copy your preferred color
notation to the clipboard with a single click.

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-clipboard.png',
    alt: 'the copy to clipboard flow'
  }]
) }}

## Visualize the in-gamut range

OddContrast allows you to choose whether or not to display a color gamut for
visual reference, and if so, which specific gamut you'd like to see. Once a
gamut is selected, the color sliders will display the "in-gamut" boundaries and
will update with the color values. To preview this, select the sRGB option in
the "Show Gamut" field, edit the color sliders and see how every shift in color
will affect the other channels.

{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-srgb-gamut.jpg',
    alt: 'use the arrow icon to swap foreground and background colors'
  }]
) }}

<div class="contain">
{{ embed.figure(
  data=[{
    img: 'blog/2025/oddcontrast-gamut-warning.jpg',
    alt: 'use the arrow icon to swap foreground and background colors'
  }],
    class='align-left'
) }}

A warning will be displayed if your color is out of gamut over the swatch if you have a gamut selected. A separate warning will appear near the color notations for each affected color space regardless of your gamut display setting.
</div>

## Saving and sharing your color combinations

OddContrast automatically updates the URL as you make changes to the colors.
This dynamic URL allows you to easily share color combinations with others or
bookmark them for your own future use.

## For fun

To add some whimsy, OddContrast proudly showcases your chosen color
combination within its very own logo.

## Learn more about the available colors spaces and formats

- [Okay, Color Spaces](https://ericportis.com/posts/2024/okay-color-spaces/) by Eric Portis
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) by Lea Verou
- [Falling For Oklch: A Love Story Of Color Spaces, Gamuts, And CSS](https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/) by Geoff Graham
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) by Björn Ottosson
- [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) by Evil Martians

## ToDo / Things to include

- [ ] Evaluates the contrast ratio between two colors
- [ ] WCAG 2 Level AA and AAA pass/fail results for both normal and large text
- [ ] Mention Alpha
- [x] Resources section that has links to learn more about color
- [x] Shows the selected colors in all the supported color notation
- [x] Indicates when a chosen color falls outside the current color gamut


## Background that I probably don't need, was going to start with this

When HSL was introduced in the
[CSS Color Module 3](https://www.w3.org/TR/css-color-3/#hsl-color)
it offered an intuitive approach to color manipulation.
Designers and developers could more easily predict the resulting
color when adjusting the Hue (H), Saturation (S), and Lightness (L) values.
Now with the [Color 4 specification](https://www.w3.org/TR/css-color-4/),
color formats like Oklch offer similar predictability but with an even broader
palette of possibilities as it isn't confined to the sRGB color space.
