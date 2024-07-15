FROM node:16.11.1

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3001

CMD ["npm", "run", "dev"]