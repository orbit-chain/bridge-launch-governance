FROM node:latest
COPY package.json /script/package.json
RUN cd /script && npm install && cd /
COPY ton/gen.validator.js /script/gen.validator.js
ENTRYPOINT ["node", "/script/gen.validator.js"]