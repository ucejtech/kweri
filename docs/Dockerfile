FROM node:20-alpine AS builder

RUN npm install -g mintlify

WORKDIR /docs

COPY . .

RUN mintlify export

FROM nginx:alpine

COPY --from=builder /docs/_site /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
