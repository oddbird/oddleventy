---
title: A Visit to the RESTful SPA
author: kit
card: feature
date: 2016-12-16
tags:
  - Article
  - Single-Page Applications
  - Server-Side Rendering
  - JavaScript
  - Jinja2
  - Django
  - Django REST Framework
  - Python
  - Backbone
  - Marionette
image:
  src: blog/2016/spa.jpg
  alt: Marionette puppet visits a spa
summary: |
  You can't always get away with a single-page app; sometimes you need
  server-side rendering. When you need both, here's one approach.
---

At OddBird, the lion's share of what we do is make webapps for people.
We work a lot with [Backbone] and [Marionette] on the frontend, and
[Django] on the backend. It's your typical [RESTful] [SPA].

Even though this area is pretty well-explored, we've occasionally run
into a couple of interesting challenges. Today, I'll talk about how
we're approaching a site that needs to both be a dynamic SPA, and have
pages that are rendered on the server.

For this site, there's a lot of content that we want to make accessible
to search engines' crawlers, but a lot of interactivity and behavior
that we want to handle with our preferred SPA tools. Since we are not
yet quite in the wonderful future where every search engine's crawlers
can handle SPAs where the markup is almost entirely generated by
JavaScript, we have to do some server-side rendering.

Doing this has the added benefit of making sure that the page will work
for users who, for whatever reason, don't have JavaScript enabled. This
makes your site more accessible, whether someone's constrained by
ability, computing power, or security concerns. Progressive enhancement
is useful for lots of people.

There are a few different ways to approach this. One of the first
options is to use the `<noscript>` tag to surround the server-side
rendered content, and then let the JavaScript render and manage the page
as-normal for users whose browsers support it. However, we've opted not
to do this. There are two reasons. First, the crawler may actually run
some JavaScript, just not well enough to correctly index the page
(imagine a race between rendering the JavaScript templates and
extracting the text from the page). Second, as long as we're putting in
the work to render content on the server, we may as well use that when a
human user visits the page, right? Why waste the effort? There are some
existing tools that make use of this approach, in fact, such as [Ember
fastboot]. However, many of them presume that you are using JavaScript
on the server.

Since we *aren't* using JavaScript on the server, and thus can't just
directly share logic, we have a bit more work to do. The first step is
to use a templating language that we can easily render both with
JavaScript and Python. This motivates us to use Backbone/Marionette,
rather than something like Ember, Angular, or React on the front,
because we can more easily use a templating language of our choice.
Django, on the back, is not the most amenable to plugging in your own
templating language, but it can be done. And so, where do JavaScript and
Python templating languages overlap? [Nunjucks]/[Jinja2].

This allows us to have the same templates, shared between the front and
back ends. Django can serve the templates as static content, and also
render them.

But we do have to render them *slightly* differently: the frontend has a
skeleton page, and renders the templates into a particular element in
the DOM. The backend needs to render a whole page every time. It turns
out that you can put a Jinja2 `extends` directive in a conditional. So,
our `layout.njk` template begins with a simple incantation:

```django
{​% if server_rendered %}
  {​% extends 'base.html.j2' %}
{​% endif %}
```

The variable `server_rendered` is set to `True` on the backend, and left
undefined (therefore falsy) on the frontend.

What other potential duplication can we remove? How about API logic?

There are two plausible approaches:

1.  We could make distinct business logic, and then put an API wrapper
    around that, which can handle content-type negotiation,
    authentication, whatever else.
2.  We can just fake out calls to the API on the server.

The first clearly has the ring of morality to it, but the second is what
we've opted to do, and I'll explain why.

The first approach turns out to have some problems. First, and most
practically, we're making our API using [Django REST Framework], which
provides its own hooks for a lot of the logic that might otherwise live
in a dedicated business logic layer. This makes the particular
separation of concerns implied in the first approach difficult, though
not impossible.

Second, the Jinja2/Nunjucks templates will need *the exact same JSON
structures* whether they're being rendered on the front end or on the
back end, in order to be consistent. So getting in-memory Python objects
doesn't actually give us something we want; we still have to pass them
through our API's serializers. So the value of a distinct business logic
layer diminishes.

Finally, while it likely introduces some runtime inefficiencies, the
second approach requires much less code, and provides a very clean and
clear interface. If every line of code is a liability, this is a strong
argument in favor of the "stupid hack" approach.

The shim we use to make "requests" from inside a request is something
like this:

```python
from django.core.urlresolvers import resolve
from django.http import Http404

def server_side_api_adapter(path, request):
    """
    Access a particular API path from inside the server, and get
    the resulting data.
    This is not going to be the most runtime-efficient usually,
    but it allows powerful reduction in duplication of effort.

    Arguments
    ---------
    path : str
        The API path to request.
    request : Request
        The request object from the calling view, to give things like
        headers and request.user that the inner API view requires.

    Returns
    -------
    JSON object
        The decoded JSON that would be returned from that API
        endpoint.
    None
        If the path is not an API path, this returns None.
"""
try:
    resolved = resolve(path)
    handler = resolved.func
    args = resolved.args
    kwargs = resolved.kwargs
    resp = handler(request, *args, **kwargs)
    if resp.status_code == 404:
        return None
    return getattr(resp, 'data', None)
except Http404:
    return None
```

Now our terrible hacks can be yours!

When we continue this series in the next month, we'll talk about how to
wire up Backbone and Marionette to take over from the server-rendered
page.

[Backbone]: https://backbonejs.org/
[Marionette]: https://marionettejs.com/
[Django]: https://www.djangoproject.com/
[RESTful]: https://en.wikipedia.org/wiki/Representational_state_transfer
[SPA]: https://en.wikipedia.org/wiki/Single-page_application
[Ember fastboot]: https://github.com/ember-fastboot/ember-cli-fastboot
[Nunjucks]: https://mozilla.github.io/nunjucks/
[Jinja2]: https://jinja.palletsprojects.com/en/master/
[Django REST Framework]: https://www.django-rest-framework.org/
