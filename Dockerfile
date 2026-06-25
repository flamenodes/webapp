# Build stage
FROM node:18-bullseye-slim AS builder
WORKDIR /app

# Use Corepack to enable pnpm (Node 16+ includes corepack)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies and build
COPY package.json pnpm-lock.yaml* ./
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Runtime stage
FROM node:18-bullseye-slim AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only what we need from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
# Default app port — change if your app uses another port
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
