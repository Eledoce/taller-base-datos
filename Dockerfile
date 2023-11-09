FROM node:20-alpine3.17

WORKDIR /app

COPY . .

RUN npm i mssql

CMD ["tail", "-f", "/dev/null"]