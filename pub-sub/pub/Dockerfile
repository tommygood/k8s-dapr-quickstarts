FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 6000
CMD ["node", "subscriber.js"]
