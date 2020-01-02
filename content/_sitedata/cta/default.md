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
{{ utility.inline_list(site.links) }}
