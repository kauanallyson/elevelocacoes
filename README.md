# Eleve Locações

Landing page e catálogo da Eleve Locações, empresa de locação de equipamentos para construção em Sobral-CE.

## Stack

- Next.js (App Router), exportado como site estático
- Bun como runtime e gerenciador de pacotes
- Tailwind CSS
- Deploy no Cloudflare Pages

## Rodando localmente

```
bun install
bun run dev
```

## Testes

```
bun test
```

## Build e deploy

```
bun run build   # gera ./out
bun run deploy  # build + wrangler pages deploy
```

O envio de eventos do Meta Pixel para a Conversions API roda em `functions/api/capi.ts` (Cloudflare Pages Function). Precisa da secret `META_CAPI_ACCESS_TOKEN`:

```
npx wrangler pages secret put META_CAPI_ACCESS_TOKEN
```

Para rodar/testar localmente, copie `.dev.vars.example` para `.dev.vars` e preencha o token.

## SEO

- Metadados (title, description, canonical, Open Graph, Twitter).
- `sitemap.xml` (`src/app/sitemap.ts`).
- `robots.txt` (`src/app/robots.ts`).
- JSON-LD (`src/components/seo/JsonLd.tsx`).
