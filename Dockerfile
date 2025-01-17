FROM nginx

ENV MICROSERVICE_LINK=https://example.com

COPY ./app.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
