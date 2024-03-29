---
card: large
title: Django REST Framework & Channels
tags:
  - Article
  - Python
  - Django
  - Push Notifications
  - WebSockets
  - Django REST Framework
  - Django Channels
author: kit
image:
  src: blog/2018/channel.jpg
  alt: The English Channel from above
summary: |
  We've begun exploring some patterns for how to add WebSocket push
  notifications to what is otherwise a RESTful API. This means, for us,
  using Django REST Framework and Django Channels in concert.
date: 2018-12-12
---

A ways back, Tom Christie, the creator of [Django REST Framework] (DRF),
said:

> I think the biggest thing missing for folks ATM is probably just a
> lack of tutorials or blog posts on using Channels and REST framework
> together.
>
> ---[Tom Christie]

I realized that's *exactly* what we're working on lately at OddBird, so
I thought I'd write up an in-progress report. I'm not at all convinced
that this is the best way, but it's what seems to be working so far.

  [Django REST Framework]: https://www.django-rest-framework.org/
  [Tom Christie]: https://groups.google.com/d/msg/django-rest-framework/3-QNn3SYlZI/Gwx6rFr4BQAJ

## The Basics

First, DRF. I'll just touch briefly on this, assuming that you're
already familiar with it. If you're not, [their own documentation] is
better than any summary I can offer here. We've made a pretty
traditional RESTful API with it, keeping the endpoints flat, with
minimal server-side logic mostly encapsulated in the serializers.

Just so we're on the same page, the endpoints look a bit like this:

```
GET /api/foo
POST /api/foo
GET /api/foo/:id
PUT /api/foo/:id
DELETE /api/foo/:id
```

And the code is organized like this:

```
foo/
  __init__.py
  models.py
  serializers.py
  urls.py
  views.py
  tests/
    __init__.py
    models.py
    serializers.py
    views.py
```

(For something that I'm not distributing as a library, I like to keep
the tests parallel to the code and within the same tree; I find it makes
it easier to work with the tests that pertain to the code you're
touching as you work on it. If I'm writing a library, I root the tests
in a different tree, but still with parallel structure to the code; this
makes it easier to exclude them on an install.)

Inside those files, we mostly have simple declarative use of DRF. Follow
their [tutorial] if you want to get that set up.

We use [pytest] for all our Python tests, and a require 100% test
coverage. Because of this, we can't just skip anything that's "too hard"
to test, so I will talk a bit about our testing setup later.

Now Channels. I don't encounter people as familiar with it as I do with
DRF, so I'll walk through how we set it up a little more. It's not too
bad, but it is different than you may be used to from basic Django.

First, you need to move from using WSGI to ASGI, which is "basically
WSGI, but async". This means changing your server process from gunicorn
(or whatever you use) to something like [Daphne], changing your
`project.wsgi` module to `project.asgi` (as described in the [Channels
docs]), adding a `routing` module and a `consumers` module, and
adjusting your settings appropriately.

At this stage, you won't yet have anything in `consumers`, nor much in
`routing`. `routing` can look like this:

```python
from channels.routing import ProtocolTypeRouter

application = ProtocolTypeRouter({
    # (http->django views is added by default)
})
```

Yep, that's basically an empty `ProtocolTypeRouter`. We're just first
making sure we don't break anything with the transition to ASGI, and
that `ProtocolTypeRouter` correctly wires HTTP to Django.

Once that's all done and you've confirmed that everything's still
working, you can start to add in the wiring for WebSockets.

  [their own documentation]: https://www.django-rest-framework.org/
  [tutorial]: https://www.django-rest-framework.org/tutorial/quickstart/
  [pytest]: https://docs.pytest.org/en/latest/
  [Daphne]: https://github.com/django/daphne
  [Channels docs]: https://channels.readthedocs.io/en/latest/deploying.html?highlight=asgi.py#run-protocol-servers

## WebSockets, Consumers, and Groups

Let's talk a bit about architecture before we dive into implementation.

As we're using it, Channels primarily drives WebSockets to push
notifications to the client. We've opted to simplify the client's job by
having one endpoint that it can call to subscribe to any object it
wants, using the payload it sends to validate and set up that
subscription. So the client sends the following data to
`wss://server.domain/ws/notifications/`:

```json
{
  "model": "app.label",
  "id": "123ABC"
}
```

The model is something like `foo.Foo`, using the syntax `apps.get_model`
[expects]. The id is the HashID of the model instance in question. (We
use HashIDs everywhere we can, to avoid leaking information through
consecutive ID numbers.)

The server will then decide if the requesting user can subscribe to that
model, and start sending them updates over that WebSocket if so.

On the server's side of things, we have a `Consumer` object that handles
a bunch of WebSocket events, and, when appropriate, adds a particular
socket connection to a named `Group`. Elsewhere in the server logic, we
send events to that `Group` when the model changes, and all subscribed
sockets will receive a serialization of the model with the changes.

(Since we're using React on the front-end for this project, we're also
sending a value that happens to map to the Redux event names we're
using, but that sort of tight coupling may not match your needs.)

OK, but what does that `Consumer` look like?

```python
from channels.generic.websocket import AsyncJsonWebsocketConsumer


class NotificationConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        # We're always going to accept the connection, though we may
        # close it later based on other factors.
        await self.accept()

    async def notify(self, event):
        """
        This handles calls elsewhere in this codebase that look
        like:

            channel_layer.group_send(group_name, {
                'type': 'notify',  # This routes it to this handler.
                'content': json_message,
            })

        Don't try to directly use send_json or anything; this
        decoupling will help you as things grow.
        """
        await self.send_json(event["content"])


    async def receive_json(self, content, **kwargs):
        """
        This handles data sent over the wire from the client.

        We need to validate that the received data is of the correct
        form. You can do this with a simple DRF serializer.

        We then need to use that validated data to confirm that the
        requesting user (available in self.scope["user"] because of
        the use of channels.auth.AuthMiddlewareStack in routing) is
        allowed to subscribe to the requested object.
        """

        serializer = self.get_serializer(data=content)
        if not serializer.is_valid():
            return
        # Define this method on your serializer:
        group_name = serializer.get_group_name()
        # The AsyncJsonWebsocketConsumer parent class has a
        # self.groups list already. It uses it in cleanup.
        self.groups.append(group_name)
        # This actually subscribes the requesting socket to the
        # named group:
        await self.channel_layer.group_add(
            group_name,
            self.channel_name,
        )

     def get_serializer(self, *, data):
         # ... omitted for brevity. See
         # https://github.com/encode/django-rest-framework/blob/master/rest_framework/generics.py
```

And now you'll want to add some stuff to your `routing` module, too:

```python
from django.urls import path

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from .consumers import NotificationConsumer


websockets = URLRouter([
    path(
        "ws/notifications/",
        NotificationConsumer,
        name="ws_notifications",
    ),
])


application = ProtocolTypeRouter({
    # (http->django views is added by default)
    "websocket": AuthMiddlewareStack(websockets),
})
```

There are a couple more pieces. We need to actually send updates when a
model changes!

We separate out those concerns. We add a `notifications` module with the
appropriate functions to wrap up the data and send it over the channels
layer, and then we call out to those functions in the models' `save`
methods.

First, the `notifications` module: we define an async function that will
build and send an appropriately-shaped object to the appropriate group
on the channel layer. This is part of our API, and the output of all the
helper functions here should be documented for anyone who consumes this
API.

```python
from channels.layers import get_channel_layer
from .serializers import FooSerializer

async def update_foo(foo):
    serializer = FooSerializer(foo)
    group_name = serializer.get_group_name()
    channel_layer = get_channel_layer()
    content = {
        # This "type" passes through to the front-end to facilitate
        # our Redux events.
        "type": "UPDATE_FOO",
        "payload": serializer.data,
    }
    await channel_layer.group_send(group_name, {
        # This "type" defines which handler on the Consumer gets
        # called.
        "type": "notify",
        "content": content,
    })
```

And then our `models` relies on three things: an override in the `save`
method, the `FieldTracker` from `django-model-utils`, and calling the
update method from `notifications` wrapped in
`asgiref.sync.async_to_sync`. This looks like:

```python
from django.db import models
# Using FieldTracker from django-model-utils helps you only send
# updates when something actually changes.
from model_utils import FieldTracker
from asgiref.sync import async_to_sync

class Foo(models.Model):
    tracker = FieldTracker(fields=("bar",))
    bar = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        ret = super().save(*args, **kwargs)
        has_changed = self.tracker.has_changed("bar")
        if has_changed:
            # This is the wrapper that lets you call an async
            # function from inside a synchronous context:
            async_to_sync(update_foo)(self)
        return ret
```

[expects]: https://docs.djangoproject.com/en/2.1/ref/applications/#django.apps.apps.get_model

## Testing

Testing async code with pytest is best done with the [pytest-asyncio]
package. This allows you to write tests that are themselves async
functions, if you use the `@pytest.mark.asyncio` marker on them. The
Channels docs have some more details on [how to test consumers] this
way.

The one caution I can offer is be sure to read from your consumer at
each point where you expect it to have new data, or your tests may fall
down with hard-to-diagnose timeout errors. So your tests will look a
little like this:

```python
connected, _ = await communicator.connect()
assert connected

await communicator.send_json_to({
    "model": "as.Appropriate",
    "id": str(some_model.id),
})
assert await communicator.receive_nothing()

await some_notification_async_function()
response = await communicator.receive_json_from()
assert response == {
    # ... whatever you expect
}

await communicator.disconnect()
```

[pytest-asyncio]: https://github.com/pytest-dev/pytest-asyncio
[how to test consumers]: https://channels.readthedocs.io/en/latest/topics/testing.html

## Final Thoughts

This is a work in progress, of course. As we iron out the kinks, I
intend to wrap up the easily isolated pieces of logic into a package we
can distribute. I think that this will involve a particular `Consumer`,
a serializer mixin, a model mixin, and a particular notifications
module.

One particular problem we've found, and not yet solved, is what happens
when you change a serializer based on the requesting user. For example,
if you want to only show a restricted version of the User unless it is
the user requesting their own information, how do we handle this when
serializing for the websocket? I don't have a good answer yet.

Let us know if you try this, or have ideas for improvements! This is new
ground for me, and I'd love to have some different perspectives on it.
