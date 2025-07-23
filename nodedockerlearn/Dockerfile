FROM node:22-alpine

WORKDIR /app

# optimize layer caching by copying only package.json and package-lock.json so that npm install is cached

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .

EXPOSE 3001
 
CMD ["node", "index.js"]