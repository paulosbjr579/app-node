FROM node:12-slim

RUN npm install -g knex && \
 npm install --save bcrypt && \
 npm install jsonwebtoken --save


WORKDIR /app

COPY docker/js/start.sh /usr/local/bin
RUN chmod -R 777 /usr/local/bin/start.sh
