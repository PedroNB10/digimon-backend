FROM node:22.3.0-alpine

WORKDIR /app
COPY . .

ARG APP_PORT

EXPOSE ${APP_PORT}

RUN ["npm", "i"]
CMD ["sh", "-c", "npm run build && npm run start:prod"]