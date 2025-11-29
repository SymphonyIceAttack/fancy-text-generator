# Agent Guide for Fancy Text Generator

This document provides essential information for AI agents working on the Fancy Text Generator codebase.

## Project Overview

**Type**: Next.js 16 application with TypeScript  
**Purpose**: Unicode text transformation tool with 12+ text styles  
**Main Features**: Bold, italic, script, monospace, circled, squared, and other Unicode text transformations  
**Content Management**: Directus CMS integration for blog posts  

## Essential Commands

### Development
```bash
pnpm dev             # Start development server (http://localhost:3000)
pnpm run build        # Build for production
pnpm run start        # Start production server
```

### Code Quality
```bash
pnpm run lint         # Run Biome linting
pnpm run format       # Format code with Biome
biome ci .           # Check code quality (CI compatible)
```

### Package Management
```bash
pnpm install          # Install dependencies
pnpm run biome:install # Install Biome (handled automatically)
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── posts/             # Blog posts pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── blog/             # Blog-specific components
│   ├── ui/               # shadcn/ui components
│   ├── fancy-text-generator.tsx # Main text transformer
│   ├── faq.tsx           # FAQ section
│   └── theme-toggle.tsx  # Dark/light theme switcher
├── lib/                  # Utility libraries
│   ├── directus.ts       # Directus CMS client
│   └── utils.ts          # Utility functions (cn, etc.)
├── public/              # Static assets
└── .github/workflows/   # CI/CD configuration
```

## Code Patterns and Conventions

### TypeScript Configuration
- **Strict mode enabled** in `tsconfig.json`
- **Path aliases**: `@/*` maps to `./` root
- **Module resolution**: `bundler` mode for Next.js
- **JSX**: `react-jsx` transformation

### Styling Approach
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** component library
- **CSS variables** for theming
- **CSS modules** approach with `cn()` utility
- **Dark/light theme** support via `next-themes`

### Component Patterns
```typescript
// Client component declaration
"use client";

// Type imports from React
import type React from "react";

// Component structure
export function ComponentName() {
  // Hooks and state
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {};
  
  // JSX return
  return <div>...</div>;
}
```

### Utility Patterns
```typescript
// Class name merging (in lib/utils.ts)
import { cn } from "@/lib/utils";
const classes = cn("base-class", condition && "conditional-class");

// Directus data fetching
const posts = await directus.request(
  readItems("posts", {
    fields: ["id", "title", "slug"],
    filter: { status: { _eq: "published" } }
  })
);
```

## Key Technologies

### Core Stack
- **Next.js 16** (App Router)
- **React 19** 
- **TypeScript 5**
- **Tailwind CSS 4**

### UI Components
- **shadcn/ui** with Radix UI primitives
- **Lucide React** icons
- **New York** style variant

### Content & Data
- **Directus CMS** (headless CMS)
- **@directus/sdk** for data fetching
- **Environment variables**: `NEXT_PUBLIC_DIRECTUS_URL`, `DIRECTUS_ACCESS_TOKEN`

### Analytics & Performance
- **@vercel/analytics** 
- **@vercel/speed-insights**

### Development Tools
- **Biome 2.2.4** (replaces ESLint/Prettier)
- **GitHub Actions** CI/CD

## Testing and Quality

### Linting & Formatting
- **Biome** configured in `biome.json`
- **2-space indentation** 
- **Recommended rules** for React and Next.js
- **Source organization** enabled

### CI/CD Pipeline
- **GitHub Actions** workflow: `.github/workflows/code-quality.yml`
- **Automatic Biome checks** on push/PR
- **Code quality enforcement** before merge

## Configuration Files

### Key Configurations
- `biome.json` - Linting and formatting rules
- `next.config.ts` - Next.js configuration
- `components.json` - shadcn/ui configuration  
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS (inferred from package.json)

### Environment Variables
```env
NEXT_PUBLIC_DIRECTUS_URL=your_directus_url
DIRECTUS_ACCESS_TOKEN=your_access_token
```

## Common Patterns

### Text Transformation Logic
The main component (`fancy-text-generator.tsx`) uses:
- **Character mapping objects** for different text styles
- **Chinese character detection** to preserve international text
- **Unicode transformation** for various text styles
- **Clipboard API** for copy functionality

### Data Fetching Pattern
```typescript
export const revalidate = 86400; // Cache for 24 hours

export default async function Page() {
  try {
    const data = await directus.request(/* query */);
    return (<JSX />);
  } catch (error) {
    console.error("[v0] Error:", error);
    return (<ErrorJSX />);
  }
}
```

### Theme Implementation
- **Theme provider** component for CSS variables
- **System preference detection**
- **Persistent theme selection**
- **Server-side rendering** compatible

## Gotchas and Important Notes

### Critical Gotchas
1. **Biome instead of ESLint** - Use `pnpm run lint` and `pnpm run format`
2. **"use client" directive** - Required for client-side interactivity
3. **TypeScript strict mode** - All types must be properly defined
4. **Path aliases** - Use `@/` for imports from root
5. **Directus credentials** - Requires both public URL and access token

### Next.js Specifics
1. **App Router structure** - Use `app/` directory for pages
2. **Server vs Client components** - Default to server, add "use client" when needed
3. **Static generation** - Use `export const revalidate` for caching
4. **Metadata API** - Use `export const metadata` for SEO

### Development Tips
1. **Type safety** - Leverage TypeScript strict mode
2. **Component composition** - Build small, reusable components
3. **Performance** - Use Next.js optimization features
4. **Accessibility** - Follow shadcn/ui a11y patterns

## Deployment

### Vercel Deployment
- **Optimized for Vercel** platform
- **Automatic deployments** from main branch
- **Environment variables** configured in Vercel dashboard
- **Analytics and speed insights** integrated

### Build Process
1. `pnpm run build` compiles the application
2. Static assets optimized
3. Type checking performed
4. Ready for deployment

## Content Management

### Directus Integration
- **Blog posts** stored in Directus CMS
- **Published status** filtering
- **Slug-based routing** for individual posts
- **Error handling** for missing credentials

### Blog Structure
- **Posts listing**: `/posts`
- **Individual posts**: `/posts/{slug}`
- **SEO metadata** generation
- **Revalidation** every 24 hours

## Development Workflow

### Making Changes
1. Run `pnpm dev` for development
2. Use `pnpm run lint` to check code quality  
3. Use `pnpm run format` to format code
4. Test changes in browser
5. Commit with proper git workflow

### Adding New Text Styles
1. Add character mappings to `charMaps` object
2. Create transform function with Chinese character handling
3. Add to `textStyles` array
4. Test with various input types

### Adding New Components
1. Follow existing shadcn/ui patterns
2. Use TypeScript for type safety
3. Implement proper accessibility
4. Add to component library appropriately

This guide covers the essential patterns and conventions for working effectively in this codebase. Refer to the actual source files for specific implementation details and follow the established patterns when adding new features.