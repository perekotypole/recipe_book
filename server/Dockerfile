FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 8000

CMD ["npm", "run", "start"]