---
title: Tips and Tools We Love
author: stacy
tags:
  - Article
  - Tips
  - Recommendations
image:
  src: blog/2017/tips-tools/love-tools.jpg
  alt: Mac OS Dock with some of our favoite app icons
summary: |
  We wanted to show some love to a few great tools we use to get us
  through our work days. Do you have any to add to our list?
date: 2017-02-14
---

{% import 'embed.macros.njk' as embed %}

In the spirit of Valentine’s Day, let’s kick off this post with a CSS
love poem:

<p data-height="238" data-theme-id="light" data-slug-hash="jydWVB" data-default-tab="result" data-user="stacy" data-embed-version="2" data-pen-title="CSS Love Poem" class="codepen">See the Pen <a href="https://codepen.io/stacy/pen/jydWVB/">CSS Love Poem</a> by Stacy (<a href="https://codepen.io/stacy">@stacy</a>) on <a href="https://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Obviously, there are some pieces missing from the above sample, like
where is the `you` [mixin defined]? And why aren’t you even using the
variable you declared? This code would not pass our OddBird code review,
but today’s post is about the tips and tools that have our approval and
praise. I asked each OddBird to share one work-related item they
wouldn’t want to be without and why.

[mixin defined]: https://codepen.io/stacy/pen/249235ffa47cbe123358452508c554b9

## JSON Viewer

[David Glick] loves the [JSON Viewer] extension for debugging JSON-based
APIs. Instead of seeing an unreadable blob of JSON it automatically
formats any response with a content-type of text/json, making it easy to
read, searchable, and collapsible. Below is a screenshot comparing the
default json view to the enhanced view after enabling this extension.

{{ embed.img(
  src='blog/2017/tips-tools/before-after-json-viewer.jpg',
  alt='clean and messy json screenshots',
  attrs={'class':'img-shadow'}
) }}

[David Glick]: /authors/david/
[JSON Viewer]: https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

## Git Gutter

No matter what text editor you use, it’s super helpful to quickly see
where you’ve made changes in a file. [Jonny Gerig Meyer] claims he
couldn’t live without [Git Gutter], by [JD Isaacks]. This plugin shows
icons in the “gutter” area (next to the line numbers) to indicate
whether a line has been added, modified, or removed. It also includes
shortcuts to quickly jump to the next change in the file, show the
details of a modification, or revert a change. Jonny uses the plugin
with [Sublime Text], but there are versions for [most text editors].

{{ embed.img(
  src='blog/2017/tips-tools/gitgutter.jpg',
  alt='screenshot of the Git Gutter plugin in use'
) }}

[Jonny Gerig Meyer]: /authors/jonny/
[Git Gutter]: https://github.com/jisaacks/GitGutter
[JD Isaacks]: https://twitter.com/jisaacks
[Sublime Text]: https://www.sublimetext.com/
[most text editors]: https://github.com/gitgutter

## Surround.vim

[Kit La Touche] uses a wonderful vim plugin from [Tim Pope] called
[Surround.vim]. He uses it to make things-in-parens or things-in-quotes
into text objects, so he can select “everything inside these curly
braces” with a single vim motion.

You can also get versions of this plugin for Sublime Text called
[Sublime-surround] and [Vim Surround for Atom].

[Kit La Touche]: /authors/kit/
[Tim Pope]: https://twitter.com/tpope
[Surround.vim]: https://github.com/tpope/vim-surround
[Sublime-surround]: https://github.com/jcartledge/sublime-surround
[Vim Surround for Atom]: https://atom.io/packages/vim-surround

## Alfred

[Alfred] can be one of those apps that you use all the time without
realizing how vital it is until you use someone else’s computer. Two of
[Miriam Suzanne’s] most used Alfred features are the [launcher] and
[searchable clipboard].

{{ embed.img(
  src='blog/2017/tips-tools/alfred-launcher.jpg',
  alt='screenshot of the Alfred application launcher in use',
  attrs={'class':'img-shadow'}
) }}

The launcher allows you to find and open files or applications on your
computer with just a few keyboard commands and inputs. The Alfred
clipboard history feature gives you access to text, images, and file
links you’ve copied but may have not pasted yet.

You can also create custom workflows or add from the available ones
[created by the Alfred community]. Workflows save you time by replacing
repetative tasks with simple keyboard shortcuts. These can be easily
created in a drag and drop interface making it a great tool for
non-developers as well.

[Alfred]: https://www.alfredapp.com/
[Miriam Suzanne’s]: /authors/miriam/
[launcher]: https://www.alfredapp.com/help/features/default-results/
[searchable clipboard]: https://www.alfredapp.com/help/features/clipboard/
[created by the Alfred community]: https://www.alfredapp.com/workflows/

## Adobe Experience Design

[Sondra Eby] can’t say enough about [Adobe XD], a new prototyping app
that’s still in beta. The tutorial is quick, fun, and easy to follow!
Create clickable mockups of user flows to share with team members and
clients. The latest updates makes it possible for everyone – even people
without Adobe accounts – to comment on individual prototypes. The Repeat
Grid feature speeds up the design process considerably, cutting out all
that time she use to spend copying, pasting, and spacing repeating
elements.

{{ embed.img(
  src='blog/2017/tips-tools/adobexd.jpg',
  alt='linked prototype in Adobe XD'
) }}

[Sondra Eby]: /authors/sondra/
[Adobe XD]: https://www.adobe.com/products/xd.html

## TextExpander

Most text editors have language-specific autocompletion and plugins that
allow you to create snippets, but I use [TextExpander] made by [Smile]
for a few reasons. Not only does it allow me to sync my snippets across
my Apple devices, I can also choose which applications to use or exclude
from expanding snippets, and create complex snippets that allow
repositioning of the cursor and a variety of other options for their
“Fill-ins” function. TextExpander deserves a full post of its own
explaining all of the benefits, but I’ll share two of my favorites.

When I want to use a double right arrow symbol, I can use my snippet
`>>` and TextExpander automatically changes it to `»`. If I want the
html entity I can use `html>>` and it changes it to `&raquo;`. This way,
I don’t have to remember each of the codes and can use a more
english-friendly version.

Another snippet I use often allows me to visually see the breakpoints of
a web project I am working on. When I type `;showbp` the following
TextExpander snippet is triggered:

```scss
$breakpoints: (
  '%filltext:name=Breakpoint 1 Name:default=small%': %filltext:name=Breakpoint 1 Value :default=24rem%,
  '%filltext:name=Breakpoint 2 Name:default=medium%': %filltext:name=Breakpoint 2 Value :default=44rem%,
  '%filltext:name=Breakpoint 3 Name:default=large%': %filltext:name=Breakpoint 3 Value :default=60rem%,
);


// Display Breakpoint During Development on Front end
@each $breakpoint, $screen-size in $breakpoints {

  @media screen and (min-width: '#{$screen-size}') {
    body:before {
      content: '@include above(#{$breakpoint}) // min-width: #{$screen-size}';
    }
  }
}

body:before {
  background-color: hsla(0, 80%, 20%, .75);
  color: #fff;
  display: block;
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem;
  position: fixed;
  text-align: center;
  top: 0;
  width: auto;
}
```

I used six single-line fill-in fields for the breakpoint names and
values. Breakpoints can be added or removed later if necessary.

{{ embed.img(
  src='blog/2017/tips-tools/fill-ins.jpg',
  alt='Fill-in text dialog box'
) }}

This snippet is very useful when you need a fast way to easily see which
breakpoint you are in when your design needs to change. You can see it
in action [in this Pen].

There are so many more tools we use that completely deserve to make this
list. What are the tips or tools you wouldn’t want to be without? Let’s
continue this conversation on [Twitter].

[TextExpander]: https://textexpander.com
[Smile]: https://smilesoftware.com
[in this Pen]: https://codepen.io/stacy/pen/9b76e7d9eb9d730e734aa776a7078fc5/
[Twitter]: https://twitter.com/oddbird
