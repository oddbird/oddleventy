---
title: CSS Language Development
sub: Cascade Layers, Container Queries, Scope, and more
date: 2020-07-01
logo: google
client: &client Google
image:
  src: work/google/contain-3.jpg
  alt: |
    CSS Containment Module, Level 3 specification -
    screenshot with W3C logo
  position: top left
list_tag: CSSWG
sponsors: true
action:
  text: Sponsor our open source work »
  url: https://opencollective.com/oddbird-open-source
people:
  - &nicole
    name: Nicole Sullivan
    title: Product Manager for Web UI
    venue: Google Chrome
    face: nicole-sullivan.jpg
    url: https://www.stubbornella.org/
press:
  - text: |
      Working with Miriam and her team
      is **a force multiplier for my engineering team**.
      We ship higher quality APIs
      much faster than we had before.
    <<: *nicole
    slug: force-multiplier
  - text: |
      Developers who use our APIs are so happy with the results,
      even calling it **a renaissance of CSS**.
    <<: *nicole
    slug: renaissance
  - text: |
      OddBird communication is excellent.
      They come prepared, they are deeply technical,
      and **they can express complex concepts to a variety of audiences**.
      I have invited them to meetings with execs,
      designers, engineers, and our own customers.
      They always do a great job representing the project.
    <<: *nicole
    slug: complex-concepts
  - text: |
      [CSS Scope] looks amazing tbh.
      Simple and very easy to leverage in existing models.
      **I can already see Vue SFCs using this under the hood**.
    name: Evan You
    face: evan-you.jpg
    title: Creator and project lead
    venue: Vue JS
    url: https://vuejs.org/
    slug: vue-scope
  - text: |
      So happy that this work is happening.
      **Declarative style scoping will be a game changer**.
    name: Rich Harris
    face: rich-harris.jpg
    title: Creator and project lead
    venue: Svelte JS
    url: https://svelte.dev
    slug: svelte-scope
tags:
  - Technology Sector
  - Cascade Layers
  - Container Queries
  - CSS Scope
summary: |
  We were [sponsored](#open-source-sponsors)
  by the Google Chrome UI Fund
  in our work developing
  new web platform functionality
  and tooling for developers.
  Over the course of the grant,
  we helped standardized
  a range of new CSS features
  now shipping in browsers -- like
  Cascade Layers, Container Queries, and CSS Scope --
  as well as [polyfills](/polyfill/) for
  CSS Anchor Positioning and the Popover attribute.
---

{% import 'layout.macros.njk' as layout %}
{% import 'quotes.macros.njk' as quotes %}

{{ quotes.find(collections.all, 'force-multiplier') }}

{{ layout.title('What We Did') }}

Working [in the open](https://css.oddbird.net/),
we researched the major pain-points
and most highly-requested features in CSS --
along with the existing tools and proposed solutions.
That research led to a number of
new proposals and explainers
for new CSS features
like [Cascade Layers](/tags/cascade-layers/),
[Container Size & Style Queries](/tags/container-queries/),
and [CSS Scope](/tags/css-scope/).

As an Invited Expert on the CSS Working Group,
Miriam was able to guide those proposals
through the standardization process --
incorporating feedback from web authors and browser implementors,
as well as the W3C Technical Architecture Group.
All three of the primary specifications
have stabilized as 'Working Drafts'
and begun shipping in browsers.
Container Queries and Cascade Layers
are both available in all major browsers,
and the Cascade Layers specification
has moved on to become a 'Candidate Recommendation' --
the final stage for a spec to be considered _complete_.

{{ quotes.find(
  collections.all,
  slugs=['vue-scope', 'svelte-scope']
) }}

In addition to leading those three features
through the standards process,
Miriam and the OddBird team have contributed
to a range of other CSS and HTML specifications:

- Custom functions & mixins
- Wide-gamut color spaces
- Overflow extensions for native carousels
- CSS interpolation functions & responsive typography
- Scroll-timeline API and declarative syntax
- Various improvements to CSS grid layout
- Long-term planning for logical properties
- Declarative syntax for the view transitions API
- CSS Nesting
- Cascade Layers polyfill
- Anchor positioning syntax & polyfill
- Popover polyfill

{{ quotes.find(collections.all, 'renaissance') }}

### Services

- Research & Feature Explainers
- Standardization Process & Specifications
- Web Platform Tests
- Documentation & Developer Outreach
- Polyfills

### Languages & Tools

- CSS
- BikeShed
- Eleventy
- JavaScript
