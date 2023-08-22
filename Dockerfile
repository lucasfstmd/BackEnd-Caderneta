FROM node:latest

WORKDIR /usr/src/api

COPY . .

RUN npm install --quiet --no-optional --no-found --loglevel=error

RUN npm run build

CMD ["node", "run", "start:prod"]
