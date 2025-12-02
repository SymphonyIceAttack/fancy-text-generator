# Style and Conventions

## TypeScript
- Strict mode enabled
- Path aliases: `@/*` maps to root
- Use `type` imports for types: `import type React from "react"`

## Components
- Client components require `"use client"` directive
- Use `cn()` utility from `@/lib/utils` for class merging
- Follow shadcn/ui patterns (Radix UI primitives)

## Styling
- Tailwind CSS v4 with PostCSS
- CSS variables for theming
- Dark/light theme via `next-themes`

## Code Formatting
- Biome (not ESLint/Prettier)
- 2-space indentation
- Source organization enabled

## Naming
- PascalCase for components
- camelCase for functions/variables
- kebab-case for file names
