# CivicLens frontend

The Next.js frontend for the CivicLens group project. See the [project README](../../README.md) for features, team credit, and deployment instructions.

```bash
npm ci
npm run dev
npm run build
npm run typecheck
npm run lint
```

The build exports static assets to `out/`. Set `NEXT_PUBLIC_BASE_PATH=/Civiclens` when building for the current GitHub Pages repository path. The Pages workflow supplies this automatically.

The current app uses sample data, simulated authentication, and scripted assistant responses.
