# CareCloud L1 Technical Interview Coffee Shop Application | Backend

This README serves as a documentation for the decisions I've made regarding the
structure of the application as well as what I've inferred from the document and thus coded.
With `asdf` being my version manager of choice, the Ruby version has been locked locally using
`.tool-versions` as well besides `.ruby-version`.

## Tech Stack

- Ruby 3.1.2
- Ruby on Rails 7.0.8
- SQLite

## Thoughts &amp; Decisions

### The Structure

Initially I installed TailwindCSS-Rails intending to go the default ERB route but thinking it would
eventually become more time-consuming to work with, I instead opted to create a React project inside
the `client/` directory and leverage `foreman` to run the servers altogether.

I could have very well gone with Docker but based on my current setup at the moment, I am unable to
enable virtualization on my machine due to some issues with my system; it keeps disabling it thus
I am going forward with the `foreman` approach.

### The Migrations

While I could have dumped the tables the times I realized something wrong with my approach (since this
is essentially just a 'test' project), I have however decided to leave all migrations intact in spirit
of being honest about my early mistakes and to make it more apparent on how I rectified them as I went
forward.

### Storing Prices

In the beginning (while just jotting down the basic structure), I created the columns storing the prices
with `float` for every table. However, later when I was trying to change them to be `decimal`, I realized
I can't really do that; the database is configured to be SQLite which is quite easy-going when it comes to
enforcing precision.

Still, relying on `float` for 'price' related values doesn't seem to be the right way to go, as such, I've
decided to store the prices in cents and then do the math up to avoid having precision issues when storing
values in the database.

### Open APIs

Since the point of the project is to create the structure and show that it works, I have opted to leave the
APIs unprotected without any form of authentication, based on the task description, it is not mentioned. As
it is not mentioned, I have concluded that it is not required.

## Getting Started

The usual steps for setting up a Rails project:

```sh
$ bin/rails db:create
$ bin/rails db:migrate
$ bin/rails db:migrate

# To get some data seeded

$ bin/rails db:seed
```

## Running the Application

Since the project contains the Rails backend as well as the React frontend, both of the servers can
be run together using `foreman` by running the command:

```sh
$ bin/dev
```

However, in case it is preferrable to run the projects separately, then the two commands can be run
separately:

```sh
$ bin/rails server

# In a different session

$ cd client && npm start
```

Either way, you should end up with the Rails server running on port 3000 and the frontend running on 3001.

## Design

The application is designed to be managed in a single repo to make it easy to run everything altogether.
However, I would like to mention that this is not how I normally prefer to manage the codebase; I am of
the thought that the Rails app should live in a separate repository and the the React app(s) should exist
in their own repositories.

## APIs

I have included the Postman collection as well, but here are some example responses you can expect:

### GET /items

```
{
    "id": 1,
    "name": "Kreb-Full-o Select",
    "price_in_cents": 233.0,
    "quantity": 14,
    "taxes": [
        {
            "id": 1,
            "name": "State Sales Tax",
            "rate": 8.52418034481334,
            "created_at": "2024-11-21T21:18:38.657Z",
            "updated_at": "2024-11-21T21:18:38.657Z"
        },
        {
            "id": 2,
            "name": "County Sales Tax",
            "rate": 7.595269603047685,
            "created_at": "2024-11-21T21:18:38.672Z",
            "updated_at": "2024-11-21T21:18:38.672Z"
        },
        {
            "id": 3,
            "name": "Prepared Food Tax",
            "rate": 7.65424679425208,
            "created_at": "2024-11-21T21:18:38.683Z",
            "updated_at": "2024-11-21T21:18:38.683Z"
        }
    ]
}
```


### GET /deals

### POST /orders

The request body would conform to this pattern:

```
{
    "customer_name":"Test User",
    "order_items_attributes":[
        {
            "orderable_id": 8,
            "orderable_type": "Item",
            "quantity": 1
        }
    ]
}
```

And in response, you are going to get:

```
{ "message": "Order saved successfully" }
```

