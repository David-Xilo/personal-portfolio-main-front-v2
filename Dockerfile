FROM node:21.1.0-bookworm AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev
COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
