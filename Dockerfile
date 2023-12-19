FROM node:20-alpine


# Create web-app directory
RUN mkdir -p /usr/src/backend-cadernteta
WORKDIR /usr/src/backend-cadernteta

COPY . /usr/src/backend-cadernteta

RUN npm install
EXPOSE 8080

ENTRYPOINT npm run build \
&& export NODE_OPTIONS="--max-old-space-size=2560" \
&& npm run start:prod
