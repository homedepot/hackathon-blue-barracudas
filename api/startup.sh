#!/bin/sh

node ./src/db/seed-db/index.js

if [ $NODE_ENV = "production" ]; then
  node ./app.js;
else
  nodemon ./app.js;
fi
