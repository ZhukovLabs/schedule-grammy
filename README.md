# Schedule: web app + Telegram bot

Schedule service that combines a **Next.js web app** with a **Telegram bot** (grammY): teachers check their schedules from the browser or directly in Telegram.

## Web app (`app/`)

- Next.js App Router with a `(teacher)` route group for teacher-facing pages
- API route handlers (`app/api`)
- Authentication (NextAuth)
- MUI component library, React Query for server state
- Internationalization (`i18n/`, `messages/`)

## Telegram bot (`bot/`)

- grammY with a long-polling runner (`@grammyjs/runner`)
- Commands, callback queries and hears handlers
- Middlewares, background tasks and general requests
- Auto-retry and rate limiting (`@grammyjs/auto-retry`, `@grammyjs/ratelimiter`)

## Data

- Prisma ORM, models: `User`, `Teacher`, `Schedule`

## Engineering

- Docker Compose for local services
- ESLint, Prettier, Husky + commitlint
- CI via GitHub Actions
