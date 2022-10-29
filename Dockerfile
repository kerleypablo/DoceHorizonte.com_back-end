FROM node:16.14-alpine

WORKDIR /DOCEHORIZONTE-BACK-END

COPY "package.json" .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]