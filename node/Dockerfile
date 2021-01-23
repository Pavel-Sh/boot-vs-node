FROM node:15

WORKDIR /usr/app
COPY package*.json ./
RUN apt-get update && apt-get install -y netcat
RUN npm install
COPY . .