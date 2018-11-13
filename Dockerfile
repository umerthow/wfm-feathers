FROM node:8-alpine

WORKDIR /app

# Install dependencies
ARG NPM_TOKEN
COPY .npmrc.deploy .npmrc
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --production
RUN rm -f .npmrc

# Copy the required files
COPY . .


CMD node index.js
