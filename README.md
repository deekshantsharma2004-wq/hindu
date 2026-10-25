# Agency GrowthOS

Agency GrowthOS is an agency-first operating surface for turning client context into source-grounded strategy, content, approvals, and reporting.

## Foundation scope

Task 1 establishes the Next.js App Router foundation, strict TypeScript checks, linting, a deterministic Vitest smoke test, and a future-ready Playwright command. The root page renders the product name and links to the planned client setup route at `/agency/demo/clients/new`.

The first vertical slice will eventually cover:

1. Agency and client setup.
2. Source ingestion and Business Brain review.
3. Research and strategy generation.
4. A 30-day content plan with platform-specific drafts.
5. Approval and report drafts.

This foundation does not yet implement persistence, authentication, provider integrations, social publishing, outreach, spending, CRM replacement, or the later client dashboard routes.

## Local setup

Requirements:

- Node.js 20 or newer.
- npm 10 or newer.

Install dependencies and copy the placeholder environment file:

```bash
npm install
cp .env.example .env.local
```

`.env.example` contains placeholders only. Do not put credentials or provider tokens in it.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm test -- --run
npm run test:e2e
```

The Playwright command is wired during the foundation task and allows zero tests until browser coverage is added in the complete vertical-slice task.

## Architecture direction

The application will use typed server-side domain boundaries for workspaces, ingestion, knowledge, research, strategy, content, approvals, and reporting. Local fixture adapters will keep the first slice deterministic and testable before real AI and social connectors are introduced.
