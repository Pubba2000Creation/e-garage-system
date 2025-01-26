# Step 1: Use the official Node.js image for the build stage
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally (use the version you want, here it's latest)
RUN npm install -g pnpm@9.12.1

# Copy the root pnpm-lock.yaml and package.json (for workspaces)
COPY pnpm-lock.yaml package.json /app/

# Install dependencies for the entire monorepo (backend and other libs)
RUN pnpm install --frozen-lockfile

# Copy the backend-specific files
COPY ./backend /app/backend

# Build the NestJS project
RUN pnpm build --filter backend

# Step 2: Use a smaller, production-ready base image for the final image
FROM node:20-alpine AS production

# Set the working directory in the production image
WORKDIR /app

# Install only the necessary dependencies for production (without dev dependencies)
COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Copy the built files from the build stage (dist folder for backend)
COPY --from=build /app/backend/dist /app/backend/dist

# Expose the port that your application will listen on
EXPOSE 3000

# Set environment variables if necessary (for MongoDB, JWT, etc.)
ENV NODE_ENV=production
ENV MONGODB_URI=${MONGODB_URI}
ENV JWT_SECRET=${JWT_SECRET}
ENV JWT_EXPIRES_IN=${JWT_EXPIRES_IN}
# Add any additional environment variables your backend needs

# Run the NestJS application
CMD ["node", "backend/dist/apps/main.js"]
