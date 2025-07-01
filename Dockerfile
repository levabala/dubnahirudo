FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install -g bun && bun install
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
COPY other/ /usr/share/nginx/html
EXPOSE 80 443
