---
banner: Odd Jobs
sub: Interested in working with OddBird?

# Needed to override directory data
eleventyComputed:
  title: Jobs
---

{% import 'utility.macros.njk' as utility %}
{% set jobs = collections.all | withData('data.position', 'open') %}

{% if jobs | length > 0 %}

## Open Positions:

{% for job in jobs %}
- **[{{ job.data.banner }}]({{ job.url }})**:
  {{ job.data.sub }}
{% endfor %}

{% else %}

No positions are currently open.
Check back later!

{% endif %}
