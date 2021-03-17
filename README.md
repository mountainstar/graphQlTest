## Description

This repository is the starting point for our frontend developer code challenge.

The following skills and technologies will be valuable when completing this challenge:

- React - A JavaScript library for building user interfaces
- Javascript (es6+) - Functional Programming, Promises & Async/Await
- Git, GitHub, NPM - Version Control, Collaboration, dependency management, and a script runner
- GraphQL - A query language for APIs and a runtime for fulfilling those queries with your existing data
- Webpack - Compiler and developer workflow tooling
- Node.js, Express.js - Server side Javascript
- Evergreen UI - a lean and flexible UI component library to aid in prototyping

## Instructions

To complete the code challenge:

- Clone this repository and create a branch named submission
- Follow the steps in this README to get your local development environment setup
- Work on the items in the TODO list, completing as many as possible
- As you complete items, check them off in this README in your commits
- Open a PR back to the master branch

While working on this code challenge, be sure to keep in mind the following criteria that we will be evaulating your work by:

- Solution Quality: How well does your implementation solve the task?
- Organization: How well did you organize the code for your solution?
- Readability: How easy is it to understand what your code does?
- Workflow: How well did you use git to manage your progress?
- Technological Fluency: How many tasks were you able to complete in the time given?
- Prioritization: What order did you complete tasks in?

## TODO

The following tasks should be completed in the order that you deem best. Evergreen is added to the project to aid in building UI features quicker and focus on functionality instead of design.

Some tasks may be too large to complete in the time you are given. Prioritize accordingly.

- [x] Configure a router
- [x] Build a route and new page called Characters
- [x] Configure a graphql client to communicate with the following api https://rickandmortyapi.com/graphql
- [x] On the Characters Page query the graph api for Characters and conditionally render them in a table once its loaded.
- [x] Add the ability to search for a character and update the Characters table based on the results
- [x] Add the ability to filter the table with a query based on an attribute in the Characters table
- [x] Dockerize the application for local development and production deployment as a container to a cloud service like aws.
- [x] Add production configurations and optimizations for:
  - [x] Webpack
  - [x] Express
  - [x] Docker
- [x] implement a linting strategy
- [x] implement a testing strategy

## Set up and development

Once node / npm is installed

```
$ npm i

$ npm run dev
```

The hosted Rick and Morty api has a playground hosted at https://rickandmortyapi.com/graphql for you to test queries and explore the schema.

Have fun!

## New setup and development

make sure to have docker running locally

```
$ docker-compose up -d

```

Once docker is up and running visit http://localhost:3000/

### demo app

https://plausible-minute.surge.sh/#/
