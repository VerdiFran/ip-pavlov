FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
ENV PORT=80
CMD ["npm", "run", "start"]