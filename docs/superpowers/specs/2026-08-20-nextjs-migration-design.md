# Migrate elevelocacoes from Astro to Next.js

## Why

The catalog page's search/filter (`Catalogo.astro`) needs real React interactivity
instead of hand-rolled vanilla-JS DOM toggling. Rather than bolt React onto Astro,
the whole site (2 pages, ~1000 lines of components) is small enough to port wholesale
to Next.js.

## Decisions

- **Framework**: Next.js 15, App Router.
- **Rendering**: fully static (`output: "export"`) — matches the current Astro static
  build, no server logic needed anywhere else on the site.
- **Hosting**: Cloudflare Pages, served as plain static assets (the `out/` directory),
  same deployment model as today's `dist/`. No OpenNext/Workers adapter — not needed
  for a static site.
- **Styling**: Tailwind v4, via `@tailwindcss/postcss` (Next uses PostCSS, not Vite).
- **Fonts**: `next/font/google`, replacing Astro's `fontProviders.google()`.

## Component mapping

| Astro | Next.js |
|---|---|
| `layouts/Layout.astro` | `app/layout.tsx` + `Metadata` API |
| `pages/index.astro` | `app/page.tsx` |
| `pages/catalogo/index.astro` | `app/catalogo/page.tsx` |
| `components/seo/SEO.astro` | `generateMetadata` / `metadata` export + JSON-LD script |
| `@astrojs/sitemap` | `app/sitemap.ts` + `app/robots.ts` |
| Header/Footer/Hero/Contact/WhatsAppButton/Button/Chip/Link/icons | React Server Components (mechanical JSX port) |
| `Catalogo.astro` filter script | `"use client"` component, `useState` for search term + active category |
| `CardEquipamento.astro` (`import.meta.glob` images) | product images moved to `public/produtos/`, referenced by path + `next/image` |
| `GoogleTag`/`Pixel`/`PixelEvents.astro` | `next/script`, same load strategy/timing as current inline scripts |
| `CookieConsent.astro` | client component; `lib/consent.ts` ports unchanged |
| `lib/whatsapp.ts`, `data/equipamentos.ts` | ported unchanged (plain TS) |

## Testing

Manual verification against the current live site as reference: both pages render
identically, catalog search/filter works, WhatsApp links fire, cookie banner behaves
the same, GA/Pixel still load (checked via browser network tab), static export serves
correctly via `wrangler pages dev`.
