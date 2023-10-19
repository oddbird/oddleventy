---
title: FastAPI Path Operations for Django Developers
author: ed
date: 2023-10-24
tags:
  - Article
  - Python
  - Django
  - FastAPI
image:
  src: blog/2023/fast.jpg
summary: |
  FastAPI path operations are the equivalent to Django views. In this article we
  explore the differences, advantages, and gotchas of using them from the
  perspective of a Django developer.
---

If you've heard about [FastAPI], a modern and fast web framework for building
APIs with Python, you might be wondering how it compares to Django, the most
popular and mature web framework for Python. In this series, I will answer this
question by comparing various aspects and features of Django and FastAPI, based
on our recent experience converting an internal project from Django to FastAPI.

[FastAPI]: https://fastapi.tiangolo.com/

1. FastAPI Path Operations for Django Developers (this article)
2. SQLAlchemy for Django Developers (coming soon)
3. Testing a FastAPI Application (coming soon)
4. How To Use FastAPI Dependency Injection Everywhere (coming soon)

## Why is FastAPI Worth Considering?

I discovered Django when I wanted to explore web frameworks outside the ASP.NET
and Windows ecosystem. I was impressed by its "batteries included" approach that
provides everything you need to build a web application, from the database layer
to the user interface. I also appreciate its "don't repeat yourself" philosophy
that encourages developers to write less code and focus on the business logic.
For over a decade, Django has been my go-to framework for building web apps that
are secure, performant, and a pleasure to work with.

In recent years, I have experienced two big shifts in the way I develop web
applications. First, I expect development tools to do more for me when it comes
to authoring software. Modern IDEs and code editors have really spoiled me with
convenient features like go-to-definition, auto-completion, and one-click
refactoring. This also means I expect languages and frameworks themselves to
encourage best practices and help me write better code. Static type checking,
automatic code formatting, and dependency injection are some of the features
that I have a hard time living without.

Because Django pre-dates Python's type checking system and it (rightly) wants to
remain as backwards compatible as possible, all efforts to leverage static type
checking and deeper text editor integration have been bolted-on, experimental,
and incomplete. The main player in this space seems to be [django-stubs], which
provides type hints for Django as a separate package. After using it for a
while, my conclusion is that Django was not designed with types in mind, and
efforts to add them are mostly futile. The time and effort of adding and
maintaining type hints for a Django app is not worth the limited benefits.

[django-stubs]: https://github.com/typeddjango/django-stubs

The second shift has to do with the proliferation of single-page applications
and the need for cohesion and consistency across the API and frontend layers.
Cohesion means that the API should provide a clear and logical way to access and
manipulate the data and services that the backend offers. Consistency means that
the API should follow common standards and conventions for data types, formats,
errors, validations, and documentation.

Developing APIs with Django means you're probably using the excellent [Django
REST Framework] (DRF for short). This package is a shining example of how Django
gives you complete and robust functionality with very little code (shout out to
you, `ViewSet`). However, it suffers from the same problems as Django itself: it
was not designed with types in mind or to share information about endpoints and
serializers with consumers of its APIs. We tried to bridge this gap with
[drf-spectacular], which produces [OpenAPI] schemas from DRF views and
serializers. Its main limitation is that it relies on developers to manually
annotate their application with additional information, and there's no guarantee
that your schema will be up-to-date with your code. For this reason I wouldn't
consider it a definitive solution.

[Django REST Framework]: https://www.django-rest-framework.org/
[drf-spectacular]: https://github.com/tfranzel/drf-spectacular
[OpenAPI]: https://swagger.io/specification/

In the middle of all this, I kept hearing about FastAPI and how it was not only
fast, but also leveraged Python's type system to provide a better developer
experience *and* automatic documentation and schemas for API consumers. After
following its excellent [tutorial], I asked the team to consider it for
[OddBooks], our collaborative writing tool. An exploratory branch was created
and after reviewing the resulting code, we decided to go ahead and officially
switch to FastAPI for this project.

[tutorial]: https://fastapi.tiangolo.com/tutorial/
[OddBooks]: https://oddbooks.app

## Django Views

In OddBooks we have a `Version` model that encapsulates the idea of a snapshot
of a document at a given point in time. Here's a simplified Django model:

```python
class Version(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    text = models.TextField()
```

And the corresponding DRF serializer and view set that only allows editing the
document and text during creation, not updates:

```python
class VersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Version
        fields = ["id", "document", "created_at", "title", "text"]
        read_only_fields = ["id", "document", "created_at", "text"]

class VersionCreateSerializer(VersionSerializer):
    class Meta(VersionSerializer.Meta):
        read_only_fields = ["id", "created_at"]

class VersionViewSet(viewsets.ModelViewSet):
    queryset = Version.objects.all()
    serializer_class = VersionSerializer

    def get_serializer_class(self):
        if self.action == "create":
            return VersionCreateSerializer
        return super().get_serializer_class()
```

Notice a few things:

- We don't get auto-complete or static type checking for the serializer fields.
  We are on our own to fill out `fields` and `read_only_fields`. There's also no
  way to know the types of the fields without looking at the model definition
  directly.
- We get no documentation or schemas for the API endpoints. We have to manually
  write them and keep them up-to-date with the code.

## FastAPI Path Operations

Here's an equivalent version written as FastAPI path operations (the equivalent
to Django views):

```python
from pydantic import BaseModel
from fastapi import FastAPI

class VersionUpdate(BaseModel):
    title: str

class VersionCreate(BaseModel):
    document: int
    title: str
    text: str

class VersionRead(BaseModel):
    id: int
    document: int
    created_at: datetime
    text: str

app = FastAPI()

@app.get("/versions", response_model=list[VersionRead])
def list_versions():
    return get_versions_from_db()

@app.post("/versions", response_model=VersionRead, status_code=201)
def create_version(version: VersionCreate):
    return write_version_to_db(**version.dict())

@app.put("/versions/{version_id}", response_model=VersionRead)
def update_version(version_id: int, version: VersionUpdate):
    version = get_version_from_db(id=version_id)
    version.title = version.title
    version.save()
    return version

@app.get("/versions/{version_id}", response_model=VersionRead)
def get_version(version_id: int):
    return get_version_from_db(id=version_id)

@app.delete("/versions/{version_id}", status_code=204)
def delete_version(version_id: int):
    delete_version_from_db(id=version_id)
```

*Note: I'm hiding the actual database read and write operations behind
`get_versions_from_db` and similar functions. How you connect to your database
is a separate topic and I want to focus on writing and consuming API endpoints
here.*

In contrast with the Django version, we get:

- Auto-complete and static type checking for the model fields thanks to
  [Pydantic]. Need to see what fields are available on a version instance? Just
  type `version.` and your editor will show you the available fields and their
  types.
- [Automatic documentation] and [OpenAPI schema] for the API endpoints. This is
  cohesive and consistent enough to be used to autogenerate frontend type
  definitions and [API clients]. We are actually doing this in OddBooks and it
  has done away with a handful of unit / integration tests and consistently
  warns the frontend team when the API has changed.
- Runtime validation of the request body and URL parameters by using type hints.
  FastAPI will ensure that something like `def update_version(id: int, version:
  VersionUpdate):` will only accept a JSON body with a `title` field and an
  integer URL parameter.
- Automatic serialization of the response body by using the `response_model`
  parameter. FastAPI will ensure that the response body is a JSON object with
  the expected fields and types. The path operation itself can return anything
  that can be converted to JSON, including Pydantic models, dictionaries, lists,
  and primitives.

[Pydantic]: https://docs.pydantic.dev/latest/
[Automatic documentation]: https://fastapi.tiangolo.com/tutorial/path-params/#documentation
[OpenAPI schema]: https://fastapi.tiangolo.com/tutorial/first-steps/#check-the-openapijson
[API clients]: https://fastapi.tiangolo.com/advanced/generate-clients/

## Advice for Django Developers

You will notice that the FastAPI version is considerably more verbose than the
Django version. This is where Django's "batteries included" approach really
shines. However, I would argue that the verbosity is worth it for the benefits
listed above, and by also nudging developers to be explicit in the input and
output types of each individual endpoint, instead of relying on the hooks
provided by DRF to serialize and deserialize data in different ways.

FastAPI itself doesn't have concepts of models or serializers. Instead, it
relies on [Pydantic] models to validate data. These models are not meant to be
used as representations of database tables, but rather as representations of the
data that is sent and received by the API, so they are closer to DRF
serializers.

I spent a non-trivial amount of time trying to make FastAPI behave like Django
by trying to minimize the amount of Pydantic models. If Django only needs one or
two serializers for all CRUD operations, why can't FastAPI do the same? I
started going down the rabbit hole of adding custom methods and properties,
using inheritance, and in general introducing a lot of complexity to get that
DRY magic back. I eventually realized that I was fighting against the framework
instead of embracing it, and that I was better off writing small, focused
Pydantic models for each endpoint.

## Conclusion

So, is FastAPI worth considering? I would say yes, especially if you're
developing an API that needs to be consumed by a frontend application. The
benefits of static type checking, automatic documentation, and automatic schema
generation are too good to pass up. If you're developing a traditional,
multi-page application then the benefits are less clear and you might be better
off sticking with Django because while FastAPI offers Jinja2 support for
[templating] and easily serves [static files] as well, it lacks a built-in ORM
and admin interface.

[templating]: https://fastapi.tiangolo.com/advanced/templates/
[static files]: https://fastapi.tiangolo.com/tutorial/static-files/
