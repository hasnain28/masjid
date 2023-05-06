# Use an official Node.js runtime as a parent image
FROM node:14.17.0-alpine3.13 AS build-stage

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the Vue.js application
RUN yarn build

# Expose the default port
EXPOSE 8080

# Start the app
CMD ["yarn", "run", "serve"]

FROM nginx:1.21.0-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
