# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose frontend port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
