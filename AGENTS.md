<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# enola-landing

Single-app Next.js 16 (App Router) **company profile page** for Enola (health-tech company). Product landings live elsewhere (`enola.up.railway.app` = Enola Clinica RME, `casemixpintar.id` = BPJS claims mgmt) — this page only showcases the company and links out to them. React 19, TypeScript, layout based on the tailark `dusk-landing-6` template. No tests, no CI.

## Commands

- `npm run dev` / `npm run build` — dev server / production build
- `npm run lint` — ESLint (flat config: core-web-vitals + next/typescript)
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — Prettier on `**/*.{ts,tsx}`
- Verify changes with `npm run lint && npm run typecheck` (no test suite exists)

## shadcn/ui — non-default setup

- Style `base-luma` built on **Base UI** (`@base-ui/react`), NOT Radix. Don't import `radix-ui` or write Radix patterns.
- Icons are **Tabler** (`@tabler/icons-react`), NOT lucide.
- Add components with `npx shadcn@latest add <name>` (uses `components.json`); they land in `components/ui/`. Don't hand-write primitives that shadcn can generate.
- Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`; `cn` lives in `@/lib/utils`.

## Tailwind v4

- No `tailwind.config` file — theme tokens are CSS variables in `app/globals.css`. Edit there, don't create a config.
- Dark mode via `next-themes` (`components/theme-provider.tsx`, already wired in `app/layout.tsx` with `suppressHydrationWarning`).
- Dev-mode React here warns on any executable `<script>` rendered by components. Inline no-flash scripts must follow `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`: `type="text/javascript"` on server, `type="text/plain"` on client, `suppressHydrationWarning`.

## Style

- Prettier: no semicolons, double quotes, 80 cols, tailwind class sorting via `prettier-plugin-tailwindcss` (sorts classes inside `cn`/`cva` calls). Run `npm run format` before finishing.
