FROM node:14.19.0-alpine3.14

COPY . /usr/src/server

WORKDIR /usr/src/server

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]