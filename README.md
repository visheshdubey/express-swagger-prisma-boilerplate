# Project Initialization and Dependency Setup

Initialize a new project with the default `package.json`:

```shell
yarn init -y
```

Install runtime dependencies for your project:

```shell
yarn add express dotenv cors express-validator @prisma/client
```

Install TypeScript and type definitions for Node.js, Express, dotenv, and cors:

```shell
yarn add -D typescript @types/node @types/express @types/dotenv @types/cors
```

Install development dependencies, including Prisma, esbuild-register, and nodemon:

```shell
yarn add -D prisma esbuild-register nodemon
```

## Prisma Setup

Initialize Prisma with SQLite as the data source provider:

```shell
yarn prisma init --datasource-provider sqlite
```

Push the Prisma schema to the database:

```shell
yarn prisma db push
```

Seed the database with initial data using Prisma:

```shell
yarn prisma db seed
```

Generate the Prisma Client based on your schema:

```shell
yarn prisma generate
```

## Linting and Code Quality

Install ESLint, Prettier, and related configurations and plugins for code linting and formatting:

```shell
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-base eslint-plugin-node eslint-config-node
```

Initialize ESLint configuration:

```shell
yarn eslint --init
```

These `yarn` commands provide the equivalent functionality to the provided `npm` commands, helping you manage your Node.js project, set up Prisma, and maintain code quality with ESLint and Prettier.

## Swagger-UI Setup

Install the dependencies

```shell
yarn add swagger-autogen swagger-ui-express
```

Install the types

```shell
yarn add --dev @types/swagger-ui-express
```

## Express validator

Install the dependencies

```shell
yarn add express-validator
```
