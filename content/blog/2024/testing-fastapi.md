---
title: Testing FastAPI Applications
author: ed
date: 2024-02-08
tags:
  - Article
  - Python
  - Testing
  - FastAPI
image:
  src: blog/2024/light-fixture.jpg
summary: |
  We explore the useful testing capabilities provided by FastAPI and pytest, and
  how to leverage them to produce a complete and reliable test suite for your
  application.
---

_This article is part of our ongoing series on [FastAPI]:_

[FastAPI]: https://fastapi.tiangolo.com/

1. [FastAPI Path Operations for Django Developers]
2. [SQLAlchemy for Django Developers]
3. Testing FastAPI Applications (this article)
4. How To Use FastAPI Dependency Injection Everywhere (coming soon)

[FastAPI Path Operations for Django Developers]: /2023/10/19/fastapi-path-operations-for-django-developers/
[SQLAlchemy for Django Developers]: /2023/10/23/sqlalchemy-for-django-developers/

Testing is an integral part of the development process, as it ensures the
functionality, stability, and overall quality of the codebase. In this article,
we will explore several topics related to testing FastAPI applications. By the
end, you will have a solid understanding of how to effectively test your FastAPI
applications, giving you the confidence to add new features, refactor code, and
squash bugs.

## Testing basics

When testing API endpoints, we want to follow this basic structure:

1. Make requests to our endpoint.
2. Assert/verify something about the response.
3. Optionally, assert/verify something about the application state.

FastAPI provides a test client that makes it easy to make requests to our
application without needing to run a server, and we can use Python's built-in
`assert` statement to verify the response.

```python
# File: test_api.py

from fastapi.testclient import TestClient
from app.main import app  # The application with all your endpoints

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
```

The recommended way to run tests is to use the [`pytest`] testing framework.
After installing it with `pip install pytest`, you can run your tests with the
`pytest` command.

[`pytest`]: https://docs.pytest.org/

```bash
$ pytest
```

Pytest will collect all files that match the `test_*.py` or `*_test.py` pattern,
and execute all methods and functions that match the `test_*` pattern. Then it
will report the status of each test (pass, fail, or error).

## Pytest fixtures

Pytest [fixtures] are one of its most powerful features. I encourage you to read
the official documentation to get acquainted with this excellent tool, but for
the purposes of this article we can define them as so:

[fixtures]: https://docs.pytest.org/en/stable/explanation/fixtures.html

- Fixture are functions defined in `conftest.py` and decorated with
  `@pytest.fixture`
- In our test files we can *request* a fixture by including its name as an
  argument of our test function.
- The test will receive the return value of our fixture.

Why are fixtures so useful? Because they let us abstract out complex setup and
teardown logic for our tests. We can use the results of these processes by
simply adding an argument to our test function. For example, we can define a
fixture that creates test data for us, instead of having to manually create it
in each test.

```python
# File: conftest.py

import pytest
from app.models import Fruit

@pytest.fixture
def fruit_collection():
    return [
        Fruit("apple"),
        Fruit("banana"),
        Fruit("cherry"),
    ]
```

All our tests can use the `fruit_collection` fixture to get a list of fruits to
test against:

```python
# File: test_api.py

from app import make_pie, make_smoothie

def test_pies(fruit_collection):
    pies = make_pie(fruit_collection)
    assert pies == ...  # Some assertion about the `make_pie` function

def test_smoothies(fruit_collection):
    smoothies = make_smoothie(fruit_collection)
    assert smoothies == ...  # Some assertion about the `make_smoothie` function
```

Notice we don't need to import or call the fixture, we get the return value (a
list of `Fruit` instances) by adding a parameter to our tests. This is a simple
example, but in the next sections we will see how to use fixtures to factor out
complex setup logic for our FastAPI tests.

## Testing with a database

I consider it a best practice to use a real database when testing, instead of
using mocks or "light" databases. My goal is to test the application as close to
production as possible, and if the test suite doesn't catch a bug related to the
database implementation, it doesn't give me much confidence to add new features
or refactor. At the same time, I want to make sure that tests execute in
isolation from each other and without worrying about the state of the database
before and after the test runs. Fixtures are the perfect tool to achieve this.

First, let's make sure we have a database to test against:

```python
# File: conftest.py

import pytest
from urllib.parse import urlparse
from sqlalchemy import create_engine
from app.models import Base
from app import settings

@pytest.fixture(scope="session")
def engine():
    """
    Create the test database (if needed) and engine
    """
    test_db_name = "test_app"
    db_url = urlparse(str(settings.DATABASE_URL))
    test_engine = create_engine(db_url._replace(path=f"/{test_db_name}").geturl())

    try:
        Base.metadata.drop_all(bind=test_engine)
    except OperationalError as err:
        if f'database "{test_db_name}" does not exist' not in str(err):
            raise
        root_db_url = db_url._replace(path="/postgres").geturl()
        conn = create_engine(root_db_url, isolation_level="AUTOCOMMIT").connect()
        conn.execute(sa.text(f"CREATE DATABASE {test_db_name}"))
        conn.close()
    finally:
        Base.metadata.create_all(bind=test_engine)

    return test_engine
```

This fixture is scoped to the test `"session"`, which means it will be
automatically created once and shared across all tests. We start by obtaining a
`db_url` from our application settings, which contains the credentials to
connect to the database engine. We then create a new SQLAlchemy engine with the
same credentials, but with a different database name defined in `test_db_name`.

Because the database will not be deleted after each test run, we `try` to drop
all tables now. In CI environments the database will not exist at all, so we
make sure to execute a `CREATE DATABASE` in those cases. Finally, we create all
the tables in the test database. We now have an isolated database for our tests!

Let's review our application code to figure out how to insert this new engine:

```python
# File: app/main.py

from fastapi import FastAPI, Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import settings

app = FastAPI()

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def my_endpoint(db: Session = Depends(get_db)):
    return db.query(...).all()
```

Notice the chain of dependencies starting from the `my_endpoint` function:

1. `my_endpoint` uses a `db` parameter provided by `get_db` (wrapped in `Depends`).
2. `get_db` yields from `SessionLocal`.
3. `SessionLocal` is bound to the `engine` we created.
4. `engine` is created from the `DATABASE_URL` in our settings.

We can try to be clever and monkey-patch the settings or the functions provided
by SQLAlchemy, but FastAPI actually provides a better way to do this:
[dependency overrides]. Basically, we can replace any function or class that
uses `Depends` with a different implementation.

[dependency overrides]: https://fastapi.tiangolo.com/advanced/testing-dependencies/

Let's create a new fixture that will automatically inject itself in place of the
`get_db` function:

```python
# File: conftest.py

from app.main import app, get_db

@pytest.fixture(autouse=True)
def db(engine: sa.engine.Engine):
    """
    Provides a DB session that will roll back after the test is complete to ensure clean
    tables for each test. See: https://stackoverflow.com/a/67348153
    """
    connection = engine.connect()
    transaction = connection.begin()
    session = Session(autocommit=False, autoflush=False, bind=connection)

    # Begin a nested transaction (using SAVEPOINT)
    nested = connection.begin_nested()

    # If the application code calls `session.commit`, it will end the nested
    # transaction. We need to start a new one when that happens.
    @sa.event.listens_for(session, "after_transaction_end")
    def end_savepoint(session, transaction):
        nonlocal nested
        if not nested.is_active:
            nested = connection.begin_nested()

    app.dependency_overrides[get_db] = lambda: session
    yield session
    del app.dependency_overrides[get_db]

    # Rollback the overall transaction, restoring the state before the test ran
    session.close()
    transaction.rollback()
    connection.close()
```

This fixture has the `autouse` flag, which means it will be automatically used
by all tests. Because the `scope` is not set, the fixture will run for each
individual test function. The fixture creates a new connection to the database
using the `engine` from the previous fixture and ensures all changes are rolled
back after the test is complete. The actual override of our application happens
in this line:

```python
app.dependency_overrides[get_db] = lambda: session
```

This tells FastAPI to use the `session` object instead of the real `get_db`
function when resolving the `db` parameter in our endpoint. Now all endpoints
that use `get_db` will use our automatically rolled-back session instead of the
real database, giving us predictable and isolated tests.

You will notice that this fixture uses `yield session` instead of `return
session`. This is because we want to run some code after the test is complete,
and `yield` allows us to do that. The `yield` statement is where the test
function will receive the `session` object, and the code after the `yield`
statement will run after the test is complete. In this case we make sure to
remove the override and close the connection to the database.

Because the `db` fixture is auto-used, we don't need to add it to our test
functions. However, we can add explicitly to assert the application state after
making requests to our endpoints:

```python
# File: test_api.py

from app.models import Item

def test_add_item(db):
    response = client.post("/add-item", json={"name": "Item 1"})
    assert response.status_code == 200
    item = db.scalars(select(Item)).one()
    assert item.name == "Item 1"
```

The `db` fixture allows us to make queries in the context of the test
transaction, and is automatically rolled back after the test is complete. You
can also use it in other fixtures to create test data.

```python
# File: conftest.py

@pytest.fixture
def item(db):
    item = Item()
    db.add(item)
    db.commit()
    return item
```

Now we can use the `item` fixture in our tests to get an instance of `Item` that
is automatically rolled back after the test is complete:

```python
# File: test_api.py

def test_update_item(db, item):
    response = client.post(f"/items/{item.id}", json={"name": "Item 2"})
    assert response.status_code == 200
    db.refresh(item)
    assert item.name == "Item 2"
```

## Testing endpoints that require authentication

We can create a fixture to get instances of the test client for our tests:

```python
# File: conftest.py

from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture
def anon_client():
    return TestClient(app)
```

We can then use this fixture in our tests to make anonymous requests to our
application:

```python
# File: test_api.py

def test_root(anon_client):
    response = anon_client.get("/")
    assert response.status_code == 200
```

But what if we need to test endpoints that require authentication? We can create
a new fixture that creates a user and an access token and injects them into the
client:

```python
# File: conftest.py

from fastapi.testclient import TestClient
from app.main import app

# These functions are defined somewhere in the application code
from app.auth import create_access_token, create_user

@pytest.fixture
def client(db):
    user = create_user(db)
    token = create_access_token(user)
    client = TestClient(app)
    client.user = user
    client.headers["Authorization"] = f"Bearer {token}"
    return client
```

`client.user = user` is a convenience to access the user instance in tests. It's
useful to make assertions about the user's state after making requests to the
application.

```python
# File: test_api.py

def test_user_name(client):
    response = client.get("/user")
    assert response.status_code == 200
    assert response.json()["name"] == client.user.name
```

Now we can use the `client` fixture in our tests to make requests to our
application with a user that is authenticated. Assuming our application checks
for tokens in the `Authorization` header, we can now test our authenticated
endpoints:

```python
# File: test_api.py

def test_protected_endpoint(client):
    response = client.get("/protected")
    assert response.status_code == 200
```

Alternatively, if we were to use a different transport for authentication, we
can update the fixture to use the appropriate headers or cookies. Here's an
example that uses [fastapi-users] with cookies:

[fastapi-users]: https://fastapi-users.github.io/fastapi-users/latest/

```python
# File: conftest.py

from fastapi.testclient import TestClient
from app.main import app

# These functions are defined somewhere in the application code
from app.auth import create_access_token, create_user

@pytest.fixture
def client(db):
    user = create_user(db)
    token = create_access_token(user)
    client = TestClient(app)
    client.user = user
    client.cookies.set(
        "fastapiusersauth", token, domain="testserver.local", path="/"
    )
    return client
```

In this case we are setting `client.cookies` instead of `client.headers`. The
point is that our `client` fixture can modify the built-in client in whatever
way is necessary to make authenticated requests to our application, or comply
with any other requirements we have for our tests.

## Closing thoughts

By following the techniques outlined in this article, you can ensure the
robustness and correctness of your FastAPI application by testing it in a way
that closely resembles its behavior in production. These techniques also ensure
your test suite is not fragile and behaves in a predictable manner, leveraging
the powerful testing capabilities provided by FastAPI and pytest.

To further explore testing in FastAPI applications, we recommend referring to
the [FastAPI testing tutorial] and the [`pytest`] documentation for in-depth
explanations and additional examples.

[FastAPI testing tutorial]:  https://fastapi.tiangolo.com/tutorial/testing/
