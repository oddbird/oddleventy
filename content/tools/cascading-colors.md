---
title: Cascading Colors
sub: Dynamic & interactive color palettes using CSS
logo: cascading-colors
image:
  src: projects/cascading-colors.jpg
author:
  - miriam
  - jonny
  - erica
oss: creator
date: 2019-09-07
index: Cascading Colors
links:
  docs: /cascading-colors/docs/
  source: https://github.com/oddbird/cascading-color-system
badges:
  - name: npm
    src: https://badge.fury.io/js/cascading-color-systems.svg
    url: https://www.npmjs.com/package/cascading-color-systems
summary: |
  Generate dynamic and interactive color palettes.
  Define custom themes with CSS custom properties,
  allow user-adjustments with a bit of light-weight JS,
  and customize the underlying system with Sass.
---
{% import "site/ccs.macros.njk" as colors %}
{% import "layout.macros.njk" as layout %}

{{ layout.title('OddSite Colors') }}

We use Cascading Colors on this site,
with user-settings available in the top banner
"colors" menu.
The default system is generated
from a primary hue of `{{ ccs.hue }}` (our brand blue).

Each theme provides an
`accent`, `special`, and `neutral` palette
with 6 tints and 6 shades
for a total of 13 generated colors each.
Some themes use preset hues for each color,
and others are generated based on color-theory.

### Light & Dark Modes:

The system includes a light and dark mode,
along with an `invert` option
which results in the opposite
of the currently active mode:

<ul data-ccs-show="modes">
  <li data-ccs-colors="light">light</li>
  <li data-ccs-colors="invert">invert</li>
  <li data-ccs-colors="dark">dark</li>
</ul>

{{ layout.title('Generated Palettes') }}

{% for color in ccs.colors %}
  {{ colors.preview(color, ccs) }}
{% endfor %}
