---
card: feature
title: SQLAlchemy for Django Developers
author: ed
date: 2023-10-23
tags:
  - Article
  - Python
  - Django
  - FastAPI
  - SQLAlchemy
image:
  src: blog/2023/library.jpg
summary: |
  SQLAlchemy is a Python library for interacting with relational databases. It
  is a popular alternative to Django's ORM used by frameworks such as FastAPI.
  In this article we will help curious Django developers write their first
  queries with SQLAlchemy, and highlight key differences.
---

If you've heard about [FastAPI], a modern and fast web framework for building
APIs with Python, you might be wondering how it compares to Django, the most
popular and mature web framework for Python. In this series, I will answer this
question by comparing various aspects and features of Django and FastAPI, based
on our recent experience converting an internal project from Django to FastAPI.

[FastAPI]: https://fastapi.tiangolo.com/

1. [FastAPI Path Operations for Django Developers]
2. SQLAlchemy for Django Developers (this article)
3. [Testing FastAPI Applications]
4. How To Use FastAPI Dependency Injection Everywhere (coming soon)

[FastAPI Path Operations for Django Developers]:
    /2023/10/19/fastapi-path-operations-for-django-developers/
[Testing FastAPI Applications]: /2024/02/08/testing-fastapi/

## About SQLAlchemy

Both Django's [ORM] (Object Relational Mapper) and [SQLAlchemy] are libraries
for interacting with relational databases. Django's ORM is tightly coupled with
the Django framework, while SQLAlchemy is a standalone library that can be used
with any Python application. I heard about it many years ago, but never had the
need to use it because Django's ORM was good enough for me (to the point that I
know surprisingly little SQL). But when I started using FastAPI, SQLAlchemy was
the recommended library for interacting with the database. Let's follow
SQLAlchemy's [Quick Start] guide to create a simple database while learning
about the differences between SQLAlchemy and Django's ORM.

[ORM]: https://docs.djangoproject.com/en/4.2/topics/db/queries/
[SQLAlchemy]: https://www.sqlalchemy.org/
[Quick Start]: https://docs.sqlalchemy.org/en/20/orm/quickstart.html

## Model Definition: Surprisingly Similar

The first thing I noticed when I started using SQLAlchemy was how similar it is
to Django's ORM when it comes to defining models as classes that represent
database tables. Here is an example of a `User` model in Django:

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    fullname = models.TextField()
```

And here is the same model in SQLAlchemy:

```python
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase

class User(DeclarativeBase):
     __tablename__ = "user_account"

     id: Mapped[int] = mapped_column(primary_key=True)
     name: Mapped[str] = mapped_column(String(30))
     fullname: Mapped[Optional[str]]
```

*Note: this [declarative style] for model definition is relatively new,
superseding the old `declarative_base` function in SQLAlchemy 2.0. You might
still encounter the old style in some codebases.*

[declarative style]: https://docs.sqlalchemy.org/en/20/orm/mapping_styles.html#orm-declarative-mapping

These two models are similar in that once they get information out of the
database, table columns are accessible as attributes of the model instances such
as `user.name` and `user.fullname`. In the same way, modifying the attributes of
a model instance like `user.name = "Jane"` will modify the corresponding
database record when the object is "saved" (which is done differently in
SQLAlchemy as we will see later).

In contrast, these models differ in that SQLAlchemy relies more heavily on type
hints to define the model. In my opinion this results in a more natural and
robust developer experience. For example, the `fullname` field only requires the
`Mapped[Optional[str]]` annotation to be mapped to a nullable text column.
Fields that require further customization that can't be expressed in a type
hint, like setting a character limit or marking a column as primary key, can use
the [`mapped_column`] function as seen in the `id` and `name` fields. In all
cases, by using the [`Mapped`] annotation type checkers have everything they
need to correctly type the model attributes.

[`mapped_column`]: https://docs.sqlalchemy.org/en/20/orm/mapping_api.html#sqlalchemy.orm.mapped_column
[`Mapped`]: https://docs.sqlalchemy.org/en/20/orm/internals.html#sqlalchemy.orm.Mapped

SQLAlchemy also supports defining models with the
[imperative syntax], which is less similar to Django's ORM. I personally prefer
the declarative syntax and find it more readable and intuitive.

[imperative syntax]: https://docs.sqlalchemy.org/en/20/orm/mapping_styles.html#orm-imperative-mapping

## Engines and Sessions Instead of Managers

In Django, every model comes with a manager exposed as the `objects` attribute.
This means that as long as you get a reference to the model class, you can
access the manager and perform queries. For example, for the `User` model, you
can get all users with `User.objects.all()`.

In SQLAlchemy, you need to create an [engine] and [session] first before you can
perform any queries. You can think of the engine as a factory that provides us
with database connections, and sessions map roughly to these individual
connections.

[engine]: https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine
[session]: https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#tutorial-executing-orm-session

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

engine = create_engine("sqlite:///db.sqlite3")
with Session(engine) as session:
    users = session.execute("SELECT * FROM users").all()
```

*Notice we are using raw SQL here instead of the ORM. We will get to the ORM in
the next section.*

You don't need to use a context manager to create a session, but it is
recommended so that the session is automatically closed when you are done with
it. This can get annoying when you are writing FastAPI path operations because
the code for each operation will be inside a context manager. Luckily, you can
create a FastAPI dependency that `yield`s the session from the context manager
and use it by declaring it as an argument in your path operation.

```python
from fastapi import Depends, FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

engine = create_engine("sqlite:///db.sqlite3")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

def get_session() -> Session:
    with SessionLocal() as session:
        yield session

@app.get("/users", response_model=...)
def get_users(session: Session = Depends(get_session)):
    return session.execute("SELECT * FROM users").all()
```

## Query with Class Attributes Instead of Keyword Arguments

In Django, you can query a model with keyword arguments. For example, if you
want to get a single user with the name "John", you can do
`User.objects.get(name="John")`. In SQLAlchemy, you need to use class attributes
instead:

```python
from sqlalchemy import select

john = session.scalars(select(User).where(User.name == "John")).one()
```

The `where` method is chained to the `select` function and achieves the same as
the `filter` and `get` methods in Django. However, instead of keyword arguments,
we use an actual comparison of the `name` attribute with the string `"John"`.
This caught me off guard at first but I've come to appreciate it because I get
help from my text editor when building queries instead of trying to guess the
names of keyword arguments.

More complex queries are also different. Django encourages you to use a double
underscore syntax for more specific lookups. For example, to get all users with
IDs 1, 2, or 3, you use `User.objects.filter(id__in=[1, 2, 3])`. SQLAlchemy
achieves this by exposing custom methods as part of the class attributes:

```python
users = session.scalars(select(User).where(User.id.in_([1, 2, 3]))).all()
```

*The trailing underscore in `in_()` is needed because `in` is a reserved word in
Python, not because of anything specific to SQLAlchemy.*

There's a whole host of interesting methods you can use with model attributes as
explained in the [`ColumnElement` documentation].

[`ColumnElement` documentation]:
    https://docs.sqlalchemy.org/en/20/core/sqlelement.html#sqlalchemy.sql.expression.ColumnElement

The `select` function accepts entire model classes or individual columns as
arguments. For example, to get only the `name` column, you can do
`select(User.name)`.

Finally, notice that we call `one()` or `all()` instead of using separate
`get()` and `filter()` methods. This is because the `scalars` method returns a
[ScalarResult] that allows us to chose how to get the results.

[ScalarResult]: https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.ScalarResult

## Commit Sessions Instead of Saving Model Instances

In Django, given a model instance `user`, you can save it to the database with
`user.save()`. In SQLAlchemy, you need to commit the session instead:

```python
session.add(user)
session.commit()
```

This actually makes it easier to bundle together multiple "saves", even if they
are for different models, into a single transaction. You can do this by adding
multiple objects to the session and then committing the session.

```python
user1 = User(...)
user2 = User(...)
address1 = Address(...)
session.add_all([user1, user2, address1])
session.commit()
```

In Django terms, the session is like a transaction that you can commit to when
you're ready, and the notion of saving individual model instances by calling one
of their methods is not present.

## Relations Require More Work

Let's add an `Address` and let each user have multiple addresses. In Django, you
can do this with a `ForeignKey`:

```python
# No changes required to the User model

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email_address = models.TextField()
```

In SQLAlchemy, you need to define the relationship explicitly:

```python
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase

class User(DeclarativeBase):
    # Previous attributes omitted for brevity

    addresses: Mapped[list["Address"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )

class Address(DeclarativeBase):
    __tablename__ = "address"

    id: Mapped[int] = mapped_column(primary_key=True)
    email_address: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))

    user: Mapped["User"] = relationship(back_populates="addresses")
```

Notice you need to define both the `user_id` column and the `user` relationship
in the `Address` model, something that Django does automatically. Additionally,
you also need to define the "other side" of the relationship as
`User.addresses`.

Once your models are in place you can query the `Address` model and join it with
the `User` model:

```python
from sqlalchemy import select

stmt = (
    select(Address)
    .join(Address.user)
    .where(User.name == "sandy")
)
sandy_addresses = session.scalars(stmt).all()
```

There is no double underscore syntax like in Django, and no "related managers"
that allow you to get related objects from a given model instance. Instead we
need to use a `join` to bring in the `User` model and then filter on the `name`
attribute.

One clear advantage of SQLAlchemy is that you can instantiate models and relate
them before they are saved, and then commit them all at once:

```python
spongebob = User(
    name="spongebob",
    fullname="SpongeBob SquarePants",
    addresses=[Address(email_address="spongebob@sqlalchemy.org")],
)
sandy = User(
    name="sandy",
    fullname="Sandy Cheeks",
    addresses=[
        Address(email_address="sandy@sqlalchemy.org"),
        Address(email_address="sandy@squirrelpower.org"),
    ],
)
patrick = User(name="patrick", fullname="Patrick Star")
session.add_all([spongebob, sandy, patrick])
session.commit()
```

In Django you would need to save all the users first, then save the addresses
with the `user` attribute set to the corresponding user. Here we can nest them
naturally and SQLAlchemy will take care of the rest.

## Migrations Are Not Built-In

Django comes with a built-in [migration system] that allows you to create and
apply migrations with a single command. This is definitely one of the most
important features of Django and I was surprised to find out that SQLAlchemy
does not have a built-in alternative. Instead, they maintain a separate package
called [Alembic] to manage migrations (which have their name changed to
"revisions").

[migration system]: https://docs.djangoproject.com/en/4.2/topics/migrations/
[Alembic]: https://alembic.sqlalchemy.org/en/latest/

We won't go into details here, but the basic substitutions are:

- `./manage.py makemigrations` becomes `alembic revision --autogenerate`
- `./manage.py migrate` becomes `alembic upgrade head`
- `./manage.py migrate app <migration number>` becomes `alembic upgrade
  <revision hash>` if going forward, or `alembic downgrade <revision hash>` if
  going back

SQLAlchemy and Alembic don't have the concept of "apps" as standalone elements
with their own models and migrations. Instead, they use a single
`alembic/versions` directory that contains all the revisions for all tables, and
autogenerating revisions will scan the entire database for changes.

To date I don't know how to manage migrations in databases that have models
defined by third-party packages. This is in contrast with Django where
third-parties usually ship their own migration history to manage their tables
independently from user-defined models.

## Conclusion

SQLAlchemy is a powerful library. We have only scratched the surface of what it
can do. I think it's as powerful as Django's ORM, but it's definitely not as
streamlined and putting the pieces together requires time. There also seems to
be a lot of old, pre-2.0 information out there that can be confusing. All in
all, I think it's a library worth learning and keeping in your tool belt,
especially if you are using FastAPI.
