FROM mhart/alpine-node:latest

RUN npm install webpack -g

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /app && cp -a /tmp/node_modules /app

WORKDIR /app
ADD . /app

RUN webpack

EXPOSE 3034

CMD ["npm", "run", "production"]
