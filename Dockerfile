FROM node:18.10.0

WORKDIR /app

COPY . .

EXPOSE 8081

RUN npm i 

CMD npm run dev