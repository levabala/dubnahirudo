FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY other/ /usr/share/nginx/html/
EXPOSE 80 443
