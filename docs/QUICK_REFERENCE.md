# Quick Command Reference - Vite 8 + React + Cloudflare Setup

## One-Time Setup (After Fresh Clone)

```powershell
# Clean old files
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force bun.lockb -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Clear cache and install
npm cache clean --force
npm install
```

## Daily Development

```powershell
# Start dev server
npm run dev

# Run tests
npm run test:watch

# Lint code
npm run lint
```

## Before Commit/Merge

```powershell
# Full build test
npm run build

# Clean test
npm run lint

# Run all tests
npm run test
```

## Deployment to Cloudflare

```powershell
# Build production bundles
npm run build

# Deploy (requires wrangler setup)
npx wrangler deploy

# Preview deployment locally before pushing
npx wrangler deploy --dry-run
```

## If Something Breaks

```powershell
# Full reset
Remove-Item -Recurse -Force node_modules dist -ErrorAction SilentlyContinue
npm cache clean --force
npm install
npm run build
```

## Key Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts |
| `vite.config.ts` | Vite build configuration |
| `tsconfig.json` | TypeScript settings |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `wrangler.toml` | Cloudflare Workers config |
| `dist/` | Production build output |

## Version Summary

- **Vite**: 8.0.8
- **React**: 18.3.1
- **React Plugin**: @vitejs/plugin-react@5.2.0 (NOT plugin-react-swc)
- **TypeScript**: 5.8.3
- **TailwindCSS**: 3.4.17

**Status**: ✅ All dependencies compatible, clean installation verified, build succeeds
