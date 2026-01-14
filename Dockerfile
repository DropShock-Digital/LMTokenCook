# 1. Build Stage
FROM node:20-alpine as build-stage
WORKDIR /app
COPY src/ui/package.json src/ui/package-lock.json ./
RUN npm ci
COPY src/ui/ .
RUN npm run build

# 2. Production Stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
