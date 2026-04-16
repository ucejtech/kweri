FROM node:20-alpine

RUN npm install -g mintlify serve

WORKDIR /docs

COPY . .

RUN mintlify build

EXPOSE 3000

CMD ["serve", "_site", "-p", "3000"]
