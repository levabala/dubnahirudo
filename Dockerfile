FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
COPY other/ /usr/share/nginx/html
EXPOSE 80
