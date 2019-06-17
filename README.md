# hackathon-blue-barracudas
create-react-app + expressjs + mongodb + docker-compose!!

[![Node.JS Version](https://img.shields.io/badge/node.js-12.4.0-00ADD8.svg?style=flat)](https://nodejs.org/en/) 
[![Code Coverage](https://img.shields.io/codecov/c/github/homedepot/hackathon-blue-barracudas.svg?style=flat)](https://codecov.io/gh/homedepot/hackathon-blue-barracudas)
[![Build Status](https://travis-ci.org/homedepot/hackathon-blue-barracudas.svg?branch=master)](https://travis-ci.org/homedepot/hackathon-blue-barracudas)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat)](LICENSE)

## Admin Default Credentials:

__Username__: admin

__Password__: password123

## Features Completed!:

- Admins can login to secure area and view all wishes
- The public can see only the wishes with status of "Granted" (wishes that have not been granted are only visible to Admins)
- Wishers have a form to submit wishes (note: we were not able to get the back end wired in to capture this info)
- Seed data script (auto runs on deploy)
- GraphQL Integration
- Redux single state store
- Based on a mobile friendly styleguide : https://bootswatch.com/litera/

## Quick Setup

This blue-barracudas application uses docker-compose to get the entire environment setup off of the ground.

The tech stack is: 

- [create-react-app](https://github.com/facebook/create-react-app) on the front-end

- [express](https://expressjs.com/) API

- [Mongodb](https://www.mongodb.com/) for database 

If you don't have docker installed, install [docker desktop](https://www.docker.com/products/docker-desktop). 

From there, clone the repository into your workspace of choice. 

Finally, make sure you are on public wifi and then run the following command from your favorite terminal: 

```
docker-compose down && docker-compose build && docker-compose up
```

*NOTE*: The first build will be slow due to docker world-building

This will host your front end on `localhost:3001`, your api endpoint on `localhost:3002`, and mongodb will be networked internally (more details TBD)

The frontend and backend will auto-refresh as you make changes, and the only time you will ever need to re-run `docker-compose down && docker-compose build && docker-compose up` 
is if you made changes to the package.json file in either ui or api.
 

## TODOs

- Add captcha: https://github.com/appleboy/react-recaptcha