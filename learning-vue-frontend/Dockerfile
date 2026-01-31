FROM node:24.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]