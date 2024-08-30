# Teebay App Overview

Teebay is an simple product list/buy/sell/renting app. User can list there own products and buy other users product or rent them for a fixed price with the listed duration.

for the Backend part of Teebay We used, 
- NestJS 
- Graphql
- Apollo server
- Prisma ORM
- Postgres DB


## Installation (Backend)

Change directory to app > backend

Then do npm install to integrate necessary packages,

```bash
$ npm install
```

Create a `.env` file from the template `.env.template` file with proper input

### Run the Postgres Server

```bash
$ docker compose up
```

### Run the migrations

We need to run the migration to create our DBs

```bash
$ npm run migration:run
```

### Seed the categories

We need to seed our listed categories to do that please put below command

```bash
$ npx prisma db seed
```

## Running the app


To run the server  we need this pre-requisite:

- Postgres server running

then, 

Commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

go to localhost:3000/graphql to try out different queries and mutations

## List of graphql requests

### User

- mutation createUser
- query validateUser


### Product

- mutation createProduct
- mutation updateProduct
- mutation removeProduct
- query getProduct
- query getProducts
- mutation purchaseProduct
- mutation rentProduct
- query getMyProductCollection


### Category

- query getCategories
- query getCategory