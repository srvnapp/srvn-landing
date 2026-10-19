# Web Analytics

[Website overview and release workflow](../README.md)

The root layout includes Vercel Web Analytics through a small client component.
It loads after hydration on the public home, demo, privacy, support, terms, and
waitlist pages. Shared-link and unknown paths are excluded, and the event filter
continues to reject them if a visitor navigates there after loading analytics on
a public page. Recorded page URLs omit query strings and fragments. No custom
events, form contents, or shared-content identifiers are sent.

Enable Web Analytics for the existing website project in the Vercel dashboard,
then deploy the updated website. The production collector is supplied by Vercel;
a plain local Next.js production server does not supply that endpoint. Local
browser tests substitute the hosted collector to verify SDK integration and the
privacy filter without sending test visits to Vercel. See the
[Vercel quickstart](https://vercel.com/docs/analytics/quickstart?framework=nextjs)
and [event filtering guidance](https://vercel.com/docs/analytics/redacting-sensitive-data).

## Validation

The focused checks are in `tests/web-analytics.spec.ts`. They verify that public
page navigation is tracked, query strings and fragments are removed, share and
unknown paths are rejected, and direct share visits do not load the collector.
Run them through `npm test` as described in the [main README](../README.md#checks).
Live dashboard verification waits for an explicitly authorized deployment.
