FROM node:10
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "server.js"]