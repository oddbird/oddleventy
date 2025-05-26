---
title: Advanced CSS Video Course
summary: |
  CSS layout techniques have come a long way since
  the early days of responsive design, but many
  websites are still using decade-old approaches.

  It doesn’t have to be that way!
author: miriam
---

{% import 'layout.macros.njk' as layout %}
{% import 'oddnews.macros.njk' as oddnews %}
{% import "quotes.macros.njk" as quotes %}

{% call layout.block(
  name='full',
  attrs={'class': 'has-angles'}
) %}

{% call layout.block(
  name='center',
  attrs={
    'style':
      '--block-max: var(--min-page-column);
      --block-spacer: 0;
      --oddnews-bg: transparent;'
  }
) %}

{{ oddnews.oddnews_signup(
  heading='Join the CSS video course waitlist',
  subheading='Miriam will share mini video lessons, and
  you’ll get to register for the course at a reduced price.',
  tag='advanced-css-video',
  class='headerless',
  buttonText='Join Waitlist'
) }}

{% endcall %}

{% endcall %}

{{ quotes.find(
  collections.all,
  slugs=['unique-talent', 'fits-together']
) }}
