# Django DRF Auth

Django project for authorization and user administration based on **Django Rest Framework**, **Dj-Rest-Auth** and **SimpleJWT** libraries, using **PostgreSQL v14.15**, mounted with Docker containerization.

[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)


## Requirements

This project is based on Docker, so in order to be executed, you need to install the Docker distribution, according to the SO you have.

## Settings

In order to get this project to run, you need to set first the .envs folder in the root path, with the following setup:

    $ /.envs/.local/.django
    $ /.envs/.local/.postgres
    
For the **.django** file, you need to setup the following parameters:

    USE_DOCKER=yes
    IPYTHONDIR=/app/.ipython


For the **.postgres** file, you need to setup the following parameters in order to let Docker start the database:

    POSTGRES_HOST=postgres
    POSTGRES_PORT=5432
    POSTGRES_DB=django_demo
    POSTGRES_USER=debug
    POSTGRES_PASSWORD=debug

## Basic Commands

To build the Docker containers, you need to run the following command:

    $ docker compose -f docker-compose.local.yml build

After bulding the required containers, you can run the project with the following command:

    $ docker compose -f docker-compose.local.yml up

In addition, if you need to run any of the Django commands, you need to follow this syntax:

    $ docker compose -f docker-compose.local.yml run --rm django python manage.py **command**



