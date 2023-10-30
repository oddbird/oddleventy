---
title: Popover Attribute Polyfill
sub: Polyfill the Popover API
feature: true
date: 2023-10-31
logo: oddcontrast
image:
  position: top
  src: projects/contrast.jpg
oss: owner
author: oddbird
action:
  text: Try Polyfill Demo »
  url: https://popover-polyfill.netlify.app/
index: Popover
links:
  demo: https://popover-polyfill.netlify.app/
  source: https://github.com/oddbird/popover-polyfill
summary: |
  OddBird’s Popover Attribute Polyfill
  lets developers preview the upcoming mechanism
  for displaying popover content 
  on top of other page content,
  drawing the user’s attention
  to specific important information
  or actions that need to be taken.
---

{% import 'embed.macros.njk' as embed %}

## What the Polyfill Does

This polyfills the HTML `popover` attribute
and `showPopover`/`hidePopover`/`togglePopover` methods
onto HTMLElement, as well as the `popovertarget`
and `popovertargetaction` attributes on Button elements.

Typical use cases for the Popover API
include user-interactive elements
like action menus, custom “toast” notifications,
form element suggestions, content pickers,
or teaching UI. To learn more about
the Popover API in general,
check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

## Polyfill Usage

After installation,
the polyfill will automatically
add the correct methods and attributes
to the HTMLElement class.
Check out the [Polyfill Installation Guide](https://github.com/oddbird/popover-polyfill#polyfill-installation)
for various methods.

This polyfill is not a perfect replacement
for the native behavior;
there are some caveats
which will need accommodations.
Check out the list of [caveats](https://github.com/oddbird/popover-polyfill#caveats).
