# Project Overview

## Purpose
Fancy Text Generator - Unicode text transformation tool with 12+ text styles (bold, italic, script, monospace, circled, squared, etc.)

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui
- **CMS**: Directus for blog posts
- **Linting**: Biome 2.2.4
- **Hosting**: Vercel

## Structure
- `app/` - Next.js App Router pages and API routes
- `components/` - React components (ui/, blog/)
- `lib/` - Utilities (directus.ts, utils.ts)
- `public/` - Static assets

## Key Files
- `components/fancy-text-generator.tsx` - Main text transformer
- `lib/directus.ts` - Directus CMS client
- `lib/utils.ts` - Utility functions (cn)
