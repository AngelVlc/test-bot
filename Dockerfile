FROM node:8.16.0-alpine AS base
ENV APP=/app
WORKDIR $APP
COPY package.json package-lock.json $APP/
RUN npm install
COPY . $APP

# FROM node:8.16.0-alpine AS test
# ENV APP=/app
# WORKDIR $APP
# COPY package.json package-lock.json jasmine.json $APP/
# RUN npm install
# COPY --from=base /app/lib ./lib/

FROM node:8.16.0-alpine AS release
ENV NODE_ENV=production
ENV APP=/app
WORKDIR $APP
COPY package.json package-lock.json $APP/
RUN npm install --only=prod
COPY . $APP
RUN chmod +x /app/dockerEntryPoint.sh

ENTRYPOINT [ "/app/dockerEntryPoint.sh" ]
