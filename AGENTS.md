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

## Documentation

Full documentation: https://nextjs.org/docs

Consult these guides before working on related tasks:

- [App Router routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [Metadata API (SEO)](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Styling with Tailwind CSS](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)