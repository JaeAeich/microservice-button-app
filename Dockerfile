FROM node:20.15.1

ENV MICROSERVICE_LINK=https://youtube.com

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --verbose

COPY ./app.js .

EXPOSE 80

CMD ["node", "app.js"]
