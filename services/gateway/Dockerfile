FROM node:19.0.0-alpine as development

USER node

WORKDIR /home/node

FROM node:19.0.0-alpine as build

USER node

WORKDIR /home/node

COPY --chown=node:node ./package.json .

RUN npm install

COPY  --chown=node:node . .

RUN npm run build

FROM node:19.0.0-alpine as production

USER node

WORKDIR /home/node

COPY --from=build --chown=node:node /home/node/dist ./dist
COPY --from=build --chown=node:node /home/node/node_modules ./node_modules
COPY --from=build --chown=node:node /home/node/package.json ./package.json

CMD ["npm", "run", "start:prod"]
