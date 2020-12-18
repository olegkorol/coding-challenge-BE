## Task
Your task is to implement a **Personal Job Alert service** which will send an email for newly added jobs, which match the criteria defined by the user.

1. **Basic Version of the Job Alert Service**
   1. For every new job added to the DB I want to get an **email notification** if it matches my search criteria
   1. Search criteria will be:
        - a list of **cities** that I define, when I set up the service
        - List of **keywords** that I’m interested in, which will be searched for in the job’s title
   1. Every time a new job get’s added which matches any of these criteria I want to receive a simple notification via email (plain-text is fine) containing the details of the job (title, city, company name, investors)
1. **Advanced version: Daily Jobs Digest Service**
   1.  In a real-world example we would have lots of jobs being added every day, it would be very spammy to send the user one email for each new job
   1. Instead we want to send him a digest at the end of the day (scheduled for a specific time) that will contain an aggregated list of all matching jobs that have been added during the day  

How you write that service is up to you, the only requirement from our side is that you do it in **NodeJS**.

Here are some suggestions where to get started:
- You should take a look at **Events** in Hasura, for setting up a trigger to your service
- Right now the DB does not have an exposed port to the outside in the Docker config
- You can either query data from the DB using GraphQL queries or connect directly with Postgres credentials
- Please design the extended DB schema that can store the job alert configs for users

Make sure to put a focus on **error handling** and **testing** for the service that you’re developing.

Let me know if you have any questions.

## Overview

This project uses a `docker-compose` file to bundle the React app with a Postgres database and [Hasura GraphQL Engine](https://hasura.io/).
Upon start the database will be initialized with tables `jobs`, `companies`, `investors` and `company_investors` and seeded with data.

## How to run the project

There are two ways how to run the project:

1.) Using only the docker-compose file: 
- `docker-compose up --build`
- This will start the React app on port 8000 and Hasura on port 8080

## Description of commands

### `docker-compose up -d --build`

Builds and starts the containers for the React app, Postgres database and Hasura Console alongside each other.
It can take a few seconds after the containers have started until the Database is fully initialized and seeded.
* Open [http://localhost:8000](http://localhost:8000) for the **React app**
* Open [http://localhost:8080](http://localhost:8080) for the **Hasura Console**

## About Hasura GraphQL Engine

Hasura GraphQL Engine is a blazing-fast GraphQL server that gives you **instant, realtime GraphQL APIs over Postgres**, with [**webhook triggers**](event-triggers.md) on database events, and [**remote schemas**](remote-schemas.md) for business logic.

Hasura helps you build GraphQL apps backed by Postgres or incrementally move to GraphQL for existing applications using Postgres.

Read more at [hasura.io](https://hasura.io) and the [docs](https://hasura.io/docs).


