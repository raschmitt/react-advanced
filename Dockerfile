FROM node:12-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silent

COPY . ./
RUN npm run build
CMD ["npm", "run", "start"]

RUN apk --no-cache add curl
HEALTHCHECK CMD curl -f http://localhost:3000/health

EXPOSE 3000
