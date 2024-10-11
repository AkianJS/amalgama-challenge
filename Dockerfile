# Use the official Node.js 20.16.0 image as a parent image
FROM node:20.16.0-alpine

# Set the working directory in the container
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Don't copy anything here - we'll mount the directory at runtime

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["sh", "-c", "pnpm install && pnpm dev"]

