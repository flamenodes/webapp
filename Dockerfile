FROM oven/bun:1.4.3 AS builder
WORKDIR /app

COPY package.json bun.lock ./
COPY app/package.json app/package.json
COPY server/package.json server/package.json
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1.4.3
WORKDIR /app
COPY --from=builder /app/package.json /app/bun.lock ./
COPY --from=builder /app/app/package.json app/package.json
COPY --from=builder /app/app/.output app/.output
COPY --from=builder /app/server/package.json server/package.json
COPY --from=builder /app/server/dist server/dist
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000 4000
CMD ["bun", "run", "start"]
