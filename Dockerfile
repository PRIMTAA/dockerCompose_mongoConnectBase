FROM node:20-alpine

WORKDIR /src/usr/app

COPY package* .

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "node","index.js" ]