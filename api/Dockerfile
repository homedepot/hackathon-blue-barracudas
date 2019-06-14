FROM node:alpine

WORKDIR /api

ENV PATH /api/node_modules/.bin:$PATH

COPY package*.json ./
COPY ./.yarn.rc .yarn.rc
COPY ./.npmrc .npmrc

RUN yarn install --silent

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
