FROM node:alpine
WORKDIR /app
COPY dist/ ./dist/
COPY other/ ./other/
RUN npm install -g serve
ENV PORT=3000
EXPOSE $PORT
CMD sh -c "serve -s dist -l $PORT"
