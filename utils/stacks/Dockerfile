FROM node:latest
COPY ../package.json /script/package.json
COPY gen.validator.js /script/genValidator.js
RUN cd /script && npm install
ENTRYPOINT ["node", "/script/gen.validator.js"]
