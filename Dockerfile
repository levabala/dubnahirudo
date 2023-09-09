FROM node:lts-alpine AS base

FROM httpd:2.4 AS runtime
COPY dist /usr/local/apache2/htdocs/
EXPOSE 80
