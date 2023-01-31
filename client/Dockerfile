FROM node:14.19.0-alpine3.14

COPY . /usr/src/client

WORKDIR /usr/src/client

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]