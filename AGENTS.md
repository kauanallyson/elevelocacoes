## Development

This project uses Bun as the runtime and package manager (`bun install`, `bunx`), not Node/npm directly.

When starting the dev server, use background mode:

```
next dev --background
```

### Testing

Unit tests use Bun's built-in test runner:

```
bun test
```

Test files live alongside the code they test (e.g. `src/lib/catalogo.test.ts`).

## Deployment

Static export, deployed to Cloudflare Pages as static assets:

```
next build   # outputs to ./out
```

### Meta Conversions API

`functions/api/capi.ts` is a Cloudflare Pages Function (server-side, alongside the static export) that forwards Meta Pixel events (`Contact`, `Lead`, `ViewContent`, `FindLocation`) to the Meta Conversions API for deduplication and better match quality. It needs the `META_CAPI_ACCESS_TOKEN` secret:

```
npx wrangler pages secret put META_CAPI_ACCESS_TOKEN
```

For local dev/preview, copy `.dev.vars.example` to `.dev.vars` (gitignored) and fill in the token.

## Documentation

Full documentation: https://nextjs.org/docs

Consult these guides before working on related tasks:

- [App Router routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [Metadata API (SEO)](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Styling with Tailwind CSS](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)

## Agent skills

### Domain docs

Single-context layout (`CONTEXT.md` + `docs/adr/` at repo root, created lazily). See `docs/agents/domain.md`.
