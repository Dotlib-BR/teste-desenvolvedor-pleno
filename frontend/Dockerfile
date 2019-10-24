FROM node:alpine
RUN npm install npm@latest -g

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .