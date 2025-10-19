# Stage 1: Build the Angular app
FROM node:20-alpine AS build
WORKDIR /app

# Install build deps
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source
COPY . .

# Build for production (Angular default configuration is "production")
RUN npm run build --silent

# Stage 2: Serve with nginx
FROM nginx:stable-alpine AS production

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built artifacts from previous stage
## Copy the final browser build output (Angular's `browser` folder) so index.html
## and other static assets are placed at nginx's document root.
COPY --from=build /app/dist/Docker/browser/. /usr/share/nginx/html

# Replace default nginx config with a simple SPA-friendly configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
