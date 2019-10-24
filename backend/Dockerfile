FROM node:alpine
RUN npm install npm@latest -g

WORKDIR /usr/src/api

COPY package*.json ./
RUN npm install

COPY . .