# ReturnSense

Sync Shopify return, exchange, and refund activity into Klaviyo as marketing-ready
customer events and profile properties.

## What this project is about

ReturnSense is a SaaS integration that connects Shopify stores with Klaviyo so marketers
can act on what customers return — and why — not only what they buy.

Shopify already records rich return data (line items, quantities, status, refunds,
exchanges, and reasons). Klaviyo can receive custom events and store profile properties.
ReturnSense bridges the two: when a shopper returns or exchanges an item, ReturnSense
normalizes that activity and sends item-level, reason-aware events into Klaviyo so flows
and segments can respond correctly (for example, suggesting a better size after a
“too small” return instead of promoting the same product again).

Merchants connect Shopify and Klaviyo via OAuth, map return reasons to marketing
categories, choose which events to sync, and monitor sync health from a dashboard.
ReturnSense does not manage reverse logistics or approve returns — its job is to move
clean return data into Klaviyo so marketing can use it.

- Product vision: [`plan.md`](plan.md)
- Full documentation: [`docs/`](docs/README.md)

## Monorepo layout

```text
apps/api        Node.js + Express + TypeScript backend (Prisma, Redis/BullMQ)
apps/web        Vite + React + TypeScript dashboard SPA
packages/shared Shared TypeScript types
```

## Prerequisites

- Node.js 20+ and npm 10+
- PostgreSQL 15+ and Redis 7+ (local or Docker)

```bash
docker run -d --name rs-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=returnsense -p 5432:5432 postgres:16
docker run -d --name rs-redis -p 6379:6379 redis:7
```

## Setup

```bash
cp .env.example .env          # then fill in secrets (see docs/07-environment-setup.md)
npm install
npm run db:migrate            # create the database schema
npm run db:seed               # optional: seed default return-reason mappings
npm run dev                   # start api + web together
```

- API: http://localhost:4000 (health: http://localhost:4000/api/health)
- Web: http://localhost:5173

## Scripts

| Script | Effect |
| --- | --- |
| `npm run dev` | Run api + web concurrently |
| `npm run build` | Build all workspaces |
| `npm run test` | Run tests |
| `npm run typecheck` | Type-check all workspaces |
| `npm run db:migrate` | Prisma migrate (api) |
| `npm run db:seed` | Seed default mappings |

See [`docs/`](docs/README.md) for architecture, data model, API reference, and the
three-chunk build breakdown.
