FROM node:latest
COPY package.json /script/package.json
COPY genValidator.js /script/genValidator.js
RUN cd /script && npm install
ENTRYPOINT ["node", "/script/genValidator.js"]
