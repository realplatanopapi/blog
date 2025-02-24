# Base ------------------------------------------------------------
FROM node:22.14-alpine AS base
RUN corepack enable

# Dependencies ------------------------------------------------------------
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY sst-env.d.ts* ./
RUN pnpm install --frozen-lockfile --prod=false

# Build ------------------------------------------------------------
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG SST_RESOURCE_CoquitoPostgres
ENV DATABASE_URL=$DATABASE_URL

RUN pnpm build
RUN pnpm prune --prod=true

# Runner ------------------------------------------------------------
FROM base AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./.next/public

EXPOSE 3000

CMD ["node", "server.js"]