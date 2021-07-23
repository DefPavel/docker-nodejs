FROM node:14-stretch AS develop

WORKDIR /var/www/appNode

COPY app/package.json .

RUN yarn install

FROM node:14-stretch

WORKDIR /var/www/appNode

COPY --from=develop /var/www/appNode/node_modules /var/www/appNode/node_modules

COPY --from=develop /var/www/appNode/yarn.lock /var/www/appNode/yarn.lock

COPY ./app /var/www/appNode

RUN chown -R node.node /var/www/appNode

RUN yarn global add knex

USER node

ENTRYPOINT ["npm", "run", "dev"]

EXPOSE 3000

