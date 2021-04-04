# Wejha Backend

The backend service for the wejha public transport system, includes the user, minibus drivers and admin APIs

## How to run

The easiest solution is to use docker:

- Copy the .env file and make the required edits `cp .env.example .env && vi .env`
- Run docker compose `docker-compose up --build -d`

It's also possible to run locally, but you will have to setup a postgres instance and to input env variables manually.

## Architecture

The backend is a MVC project bootstraped with [Haykal](https://github.com/Mahamed-Belkheir/haykal), documentation about the general architecture can found there.