FROM node:alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

RUN npm run compile

COPY ./dist .

EXPOSE 3050

CMD ["npm", "start"]