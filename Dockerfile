# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package files first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application using the built files
CMD ["npx", "vite", "preview", "--port", "3000", "--host"]
