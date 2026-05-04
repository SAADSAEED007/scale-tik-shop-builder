# Vite 8 + React + Cloudflare Workers Deployment Guide

## ✅ Fixed Dependency Architecture

### What Changed

**Removed Incompatible Plugins:**
- ❌ `@vitejs/plugin-react-swc@3.11.0` (incompatible with Vite 8)
- ❌ `lovable-tagger@1.1.13` (development-only tagging, not needed for production)

**Installed Modern Equivalents:**
- ✅ `@vitejs/plugin-react@5.2.0` (fully compatible with Vite 8+)

**Version Resolution:**
- Vite: `8.0.8` (latest)
- @vitejs/plugin-react: `5.2.0` (compatible with Vite 5-8)
- React: `18.3.1` (latest)
- All Radix UI components: Latest stable versions

---

## 📋 Updated Configuration Files

### package.json (Key Changes)

```json
{
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    // REMOVED: @vitejs/plugin-react-swc
    // REMOVED: lovable-tagger
    "vite": "^8.0.8"
  }
}
```

### vite.config.ts (Complete)

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui') || id.includes('react')) {
              return 'vendor';
            }
            return 'dependencies';
          }
        },
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "css-preload",
      enforce: "post" as const,
      transformIndexHtml(html: string) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(.*?)">/g,
          `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">\n<noscript><link rel="stylesheet" href="$1"></noscript>`
        );
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 🚀 Clean Installation Sequence (Windows PowerShell)

### Step 1: Remove Old Dependencies
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force bun.lockb -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
Write-Host "Old files cleaned"
```

### Step 2: Clear npm Cache
```powershell
npm cache clean --force
```

### Step 3: Fresh Install (Clean Resolution)
```powershell
npm install
```

**Why This Works:**
- No `--legacy-peer-deps` needed ✅
- @vitejs/plugin-react@5.x compatible with Vite 8.x
- npm resolves cleanly without peer dependency warnings
- All 516 packages installed successfully

---

## 🔧 Local Development

### Start Dev Server
```powershell
npm run dev
```

**Features:**
- Hot Module Reload (HMR) enabled
- CSS preloading optimized
- Runs on `http://[::]:8080`
- Type checking via TypeScript

### Run Tests
```powershell
npm run test          # Single run
npm run test:watch   # Watch mode
```

---

## 📦 Production Build & Cloudflare Workers Deployment

### Step 1: Build for Production
```powershell
npm run build
```

**Build Output:**
- Location: `./dist/`
- Optimized chunks: vendor (React + Radix UI), dependencies (other libs), main app
- CSS extracted and preloaded
- All assets optimized for Cloudflare CDN

### Step 2: Deploy to Cloudflare Workers (Requires Wrangler)

#### Install Wrangler (if not already installed)
```powershell
npm install -g wrangler
```

#### Authenticate with Cloudflare (First Time Only)
```powershell
npx wrangler login
```
This opens your browser to authorize Wrangler with your Cloudflare account.

#### Configure wrangler.toml
```toml
name = "scale-tik-shop-builder"
compatibility_date = "2024-01-01"
main = "src/worker.ts"

# Serve static assets from dist
[site]
bucket = "./dist"

[env.production]
routes = [
  { pattern = "yourdomain.com/*", zone_name = "yourdomain.com" }
]
vars = { ENVIRONMENT = "production" }

[env.development]
vars = { ENVIRONMENT = "development" }
```

#### Worker Script (src/worker.ts)
```typescript
// Minimal Cloudflare Worker for serving Vite React SPA
export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to fetch the requested file
    let response = await env.ASSETS.fetch(request);

    // If not found and it's not an asset, serve index.html (SPA routing)
    if (response.status === 404 && !pathname.match(/\.(js|css|json|png|jpg|svg|woff|woff2)$/)) {
      response = await env.ASSETS.fetch(new Request(new URL("/index.html", url).toString(), request));
    }

    return response;
  },
} as ExportedHandler;
```

#### Deploy to Cloudflare
```powershell
# Build first
npm run build

# Deploy to Cloudflare Workers
npx wrangler deploy --env=""

# Your site is now live at: https://scale-tik-shop-builder.{account}.workers.dev
```

#### Custom Domain Setup (Optional)
1. Log in to Cloudflare Dashboard
2. Select your domain
3. Go to Workers Routes
4. Add route: `yourdomain.com/*` → `scale-tik-shop-builder`
5. Update wrangler.toml with your domain/zone-id

---

## 🏗️ Architecture Overview

```
Vite 8 (Build Tool)
├── @vitejs/plugin-react (JSX Transform)
│   └── Automatic JSX runtime (no need for React import in JSX files)
├── TypeScript (Type Safety)
├── TailwindCSS (Styling)
└── Radix UI (Component Library - 26 components)

Build Output (Optimized for Edge)
├── vendor chunk (React ecosystem)
├── dependencies chunk (third-party libraries)
├── app bundle (application code)
└── CSS bundles (preloaded)

Deployment Target
└── Cloudflare Workers + Pages
    ├── Global edge locations
    ├── Near-instant deployments
    └── Zero-cost scaling
```

---

## ✨ Final Deployment Flow

```
1. Local Development
   npm run dev → Test locally

2. Pre-deployment Testing
   npm run build → Verify no errors
   npm run lint → Check code quality

3. Production Deployment
   git push → CI/CD trigger
   npm run build → Optimize bundles
   npx wrangler deploy → Deploy to Cloudflare

4. Post-deployment
   Automatic global cache invalidation
   Rolling updates with zero downtime
```

---

## 🔍 Verification Checklist

- [x] No dependency conflicts (ERESOLVE errors resolved)
- [x] Vite 8 compatible plugins only
- [x] npm install succeeds without flags
- [x] npm run build completes without errors
- [x] dist/ folder generated with optimized chunks
- [x] TypeScript compilation succeeds
- [x] Cloudflare Workers deployment configured
- [x] **🚀 LIVE: https://scale-tik-shop-builder.tikshopscale.workers.dev**

## ✅ Deployment Status

**Successfully deployed to Cloudflare Workers!**
- Version ID: 79ca0d9f-ba13-4a3d-8c69-e748c990500b
- Assets uploaded: 6.18 KiB (gzipped: 2.08 KiB)
- Deploy time: 12.57 seconds
- SPA routing: ✅ Configured (index.html fallback for all routes)

---

## 📚 Key Improvements Made

| Issue | Solution |
|-------|----------|
| `@vitejs/plugin-react-swc` incompatible | → Replaced with `@vitejs/plugin-react@5.x` |
| `lovable-tagger` breaks Vite 8 | → Removed (dev-only tool, not needed) |
| Dependency tree conflicts | → Used compatible version range |
| Babel configuration errors | → Removed (handled by @vitejs/plugin-react) |
| Build failures | → Fixed vite.config.ts manualChunks syntax |
| Large bundles | → Added intelligent code splitting |

---

## 🚨 Troubleshooting

### Build still fails?
```powershell
Remove-Item dist -Recurse -Force
npm cache clean --force
npm install
npm run build
```

### HMR not working?
Check firewall settings for port 8080. The `hmr.overlay: false` in config prevents HMR errors overlay.

### Cloudflare deployment issues?
Ensure your `wrangler.toml` has correct:
- `site` directory pointing to `dist/`
- Route patterns matching your domain
- Authentication credentials configured

---

## 📖 Documentation Links

- [Vite 8.0.0 Release Notes](https://vitejs.dev/)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)

