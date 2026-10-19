# SRVN website

Marketing, waitlist, support, and the public sharing fallback for SRVN. Built with Next.js 16.4.2 and React 19.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The website runs at http://localhost:3000. The waitlist API is configured separately with `NEXT_PUBLIC_API_BASE_URL` (local backend: http://localhost:5000). Sharing pages do not call the backend or resolve content.

## Checks

```bash
npm run lint
npm run typecheck
npx playwright install chromium --only-shell
npm test
npm audit --omit=dev
```

`npm test` builds the production bundle and runs the configuration and browser tests.

## Feature documentation

- [Sharing](docs/sharing.md): landing behavior, environment variables, store availability, Apple/Android associations, and device verification.
- [Web Analytics](docs/analytics.md): Vercel setup, excluded routes, URL filtering, and validation.

## Release workflow

Release order is commit, push, pull request, review/checks, merge, then an
explicitly authorized deployment. `vercel.json` disables automatic Git
deployments so pushing a branch or merging to `main` does not publish the
website. After deployment is authorized, deploy the merged `main` checkout with
`vercel --prod` against the existing `srvn-landing` project. Do not create a new
project or deploy an unmerged checkout. Keep the website production environment
settings in Vercel; local environment files are not release configuration.

See [Vercel's Git deployment configuration](https://vercel.com/docs/project-configuration/git-configuration#turning-off-all-automatic-deployments).

For a production server, supply the environment variables documented in
[Sharing configuration](docs/sharing.md#configuration) and run:

```bash
npm ci
npm run build
npm run start
```

The sharing routes are evaluated at runtime. The existing marketing pages and waitlist keep their own configuration.
