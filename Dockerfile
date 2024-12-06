# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app will run on (e.g., 9000)
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
