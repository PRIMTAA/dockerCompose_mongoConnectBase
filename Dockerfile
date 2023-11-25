FROM node:21-alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "node","index.js" ]