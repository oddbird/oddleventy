---
banner: Odd Jobs
sub: Interested in working with OddBird?

# Needed to override directory data
eleventyComputed:
  title: Jobs
---

Learn more about our team structure --
what we're offering,
and what we expect from you --
in our full
[OddBirding Guide](/quickstart/).

{% import 'utility.macros.njk' as utility %}
{% set jobs = collections.all | withData('data.position', 'open') %}

{% if jobs | length > 0 %}

## Open Positions:

{% for job in jobs %}
- **[{{ job.data.banner }}]({{ job.url }})**:
  {{ job.data.sub }}
{% endfor %}

{% else %}

## No Positions are Currently Open

Check back later!

{% endif %}
