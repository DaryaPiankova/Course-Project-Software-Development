# Use the official Node.js image as a base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (if any)
# In this case, there is no specific port exposed as the script is listening to RabbitMQ messages

# Command to run the application
CMD ["node", "index.js"]
