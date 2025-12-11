# /src/ui/Dockerfile

# 1. Base Image (Alpine for security/size)
FROM node:20-alpine

# 2. Work Directory
WORKDIR /app

# 3. Install Dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy Application Code
COPY . .

# 5. Expose Port (Internal Docker Network)
EXPOSE 5173

# 6. Run Command (Dev Mode for now, can switch to build later)
CMD ["npm", "run", "dev", "--", "--host"]
