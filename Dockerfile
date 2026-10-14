FROM node:22-alpine AS builder
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

COPY package*.json pnpm-lock.yaml ./
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:22-alpine
WORKDIR /runtime 
COPY --from=builder /app/app/.output /app/server/dist /app/server/node_modules /app/server/package*.json  ./

EXPOSE 3000 4000
CMD ["pnpm", "start"]
