FROM node:lts-buster-slim

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

ARG strapi_api_url
ENV STRAPI_API_URL=$strapi_api_url
ENV NODE_ENV production

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]