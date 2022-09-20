FROM node:alpine
EXPOSE 25025
WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start"]