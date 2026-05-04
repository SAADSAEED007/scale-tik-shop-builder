# TikShop Scale

Production React/Vite site for TikShop Scale.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vitest
- Cloudflare Workers static asset deployment

## Getting Started

```sh
npm install
npm run dev
```

The local Vite server uses port `8080` by default.

## Project Structure

```txt
src/
  assets/       Static images, fonts, and SVG assets imported by the app
  components/   Shared app components and shadcn/ui primitives
  hooks/        Shared React hooks
  lib/          Shared utilities
  pages/        Route-level page components
  test/         Vitest setup and tests
  worker.ts     Cloudflare Worker entry used by wrangler.toml
docs/           Deployment and handoff documentation
scripts/        Local maintenance scripts
public/         Public static files served as-is
```

## Scripts

```sh
npm run dev       # Start local development server
npm run build     # Build production assets into dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
npm run test      # Run Vitest once
```

## Deployment

Cloudflare deployment is configured with `wrangler.toml` and `src/worker.ts`.

Detailed deployment notes are in `docs/DEPLOYMENT_GUIDE.md`.
Quick operational commands are in `docs/QUICK_REFERENCE.md`.
