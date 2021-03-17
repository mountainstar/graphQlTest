### STAGE 1: Build ###
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev

### STAGE 2: Production Environment ###

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html