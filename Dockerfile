FROM node:14.17-alpine
WORKDIR /app
COPY ./ .

RUN yarn install
RUN yarn build --standalone
ENV NUXT_PORT 80
ENV NUXT_HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]
