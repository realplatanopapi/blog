# Base ------------------------------------------------------------
FROM node:22.14-alpine AS base
RUN corepack enable

# Dependencies ------------------------------------------------------------
FROM base AS deps
ENV NODE_ENV=production

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY sst-env.d.ts* ./
COPY .husky/ ./.husky/
RUN pnpm install --frozen-lockfile --prod=false

# Build ------------------------------------------------------------
FROM base AS build
ARG SST_RESOURCE_CoquitoPostgres
ENV NODE_ENV=production
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build
RUN pnpm prune

# Runner ------------------------------------------------------------
FROM base AS run
ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]