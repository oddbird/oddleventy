---
templateEngineOverride: njk
title: Want to chat about your web project or training?
face: miriam
summary: |
  Contact us for custom web app design & development
  with our team of Python, UX, and front-end experts --
  or a 1-3 day workshop with Miriam Suzanne.
---

{% import 'utility.macros.njk' as utility %}

{{ summary | md | safe }}

<ul class="inline-list">
{%- for link in site.links -%}
<li>{{- utility.icon_link(
    icon=link.icon + '.svg',
    text=link.text,
    url=link.url
  ) -}}
</li>
{%- endfor -%}
</ul>
