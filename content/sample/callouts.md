---
title: Callouts
sub: Showing different types of callouts
---
{% import 'utility.macros.njk' as utility %}


## `note` Callout (default)

{% set update1 = ['Update', utility.datetime('2022-09-01')] | join(' ') %}
{% callout 'note', update1 %}
- Chrome 105 shipped on August 30,
  with support for size Container Queries and units.

The note label is wrapped in a `strong` tag.
{% endcallout %}


{% callout %}
Callouts default to note. If a label isn't provided, the default label **Note:**
will be shown above the callout content.
{% endcallout %}


## `warn` Callout

{% callout 'warn' %}
The only difference at this time between note and warn callouts are the default
labels that appear above the content. For the warn callout, the label will show
**Warning:** above the content. Eventually we may style these differently if we
start using the warn callout.
{% endcallout %}

## Callout without a note

{% callout 'note', false %}
Check out our [Winging It](/wingingit/) channel for a conversation between
designers and developers on intuitive web design.

**Winging It** episode 3: [Intuitive Web Design with OOUX](/2023/10/24/winging-it-03/)
{% endcallout %}
