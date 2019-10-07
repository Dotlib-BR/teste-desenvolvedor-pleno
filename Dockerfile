FROM node:12
WORKDIR /app
ADD . /app
RUN npm i
COPY . /app
CMD npm start