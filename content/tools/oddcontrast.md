---
title: OddContrast
sub: Color contrast checker with Oklch, Oklab, P3, and more
feature: true
date: 2022-12-31
logo: oddcontrast
image:
  position: top
  src: projects/contrast.jpg
oss: owner
author: oddbird
index: OddContrast
links:
  site: https://www.oddcontrast.com/
  source: https://github.com/oddbird/oddcontrast
summary: |
  OddContrast is a color space converter,
  featuring newer color spaces like
  Oklch, Oklab, and P3.
  It's also a color contrast checker
  to help designers meet
  WCAG 2 accessibility standards.
---

{% import 'embed.macros.njk' as embed %}

## Support for Newer Color Formats and Spaces

In additional to Oklch, Oklab, and P3, OddContrast also includes hex, HSL, lab,
LCH, and sRGB. Enter a color from any color space and convert the color to any
other space. OddContrast provides an alert if the color you entered is out of
gamut for a given color space. Adjust the sliders until your desired color space
is back in gamut.

{{ embed.img(
  src='projects/out-of-gamut.jpg',
  alt='display-p3 light yellow color showing hexidecimal color
    outside the sRGB gamut and the hsl color outside the hsl gamut'
) }}

## Contrast Checker for Accessibility

OddContrast checks the contrast ratio between two colors and displays pass or
fail information based on the WCAG 2 accessibility standards for AA and AAA in
normal and large font sizes. If you need a reminder of contrast ratio standard
or what font size qualifies as large, OddContrast provides helpful tips and a
link to learn more about ratio requirements.

{{ embed.img(
  src='projects/color-ratio.jpg',
  alt='showing the red and yellow colors at 4.37:1 contrast ratio
    failing for AA Normal, AAA Normal, and AAA Large font sizes,
    but passing for AA Large font size'
) }}

## What New Features Should OddContrast Have?

OddContrast is still in development. [Let us know](/contact/) if you have a
favorite feature you'd like to see in OddContrast. To receive updates when new
features arrive, sign up for [OddNews](/oddnews/).