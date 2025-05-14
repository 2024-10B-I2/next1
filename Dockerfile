FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

FROM base AS builder
WORKDIR /app
COPY --chown=nextjs:nodejs package*.json ./
RUN npm ci
COPY --chown=nextjs:nodejs . .
RUN npx next build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public  

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]