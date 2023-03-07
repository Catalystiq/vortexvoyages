# base node image
FROM node:18

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production
RUN npm audit fix

# Copy local node code to the container
COPY . .

# Build Production App
RUN npm run build

# Start the service
CMD npm start