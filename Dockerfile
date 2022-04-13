FROM node:alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3050

CMD ["npm", "start"]