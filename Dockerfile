# Build Stage 1
FROM node:14-stretch AS builder

WORKDIR /var/www/appNode

COPY app/package.json .

RUN yarn install


# Build Stage 2
FROM node:14-stretch

WORKDIR /var/www/appNode

COPY --from=builder /var/www/appNode/node_modules /var/www/appNode/node_modules

COPY --from=builder /var/www/appNode/yarn.lock /var/www/appNode/yarn.lock

COPY ./app /var/www/appNode

RUN chown -R node.node /var/www/appNode

RUN yarn global add knex

USER node

ENTRYPOINT ["npm", "run", "dev"]

EXPOSE 3000

