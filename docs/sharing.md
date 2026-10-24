# Sharing setup and verification

[Website overview and release workflow](../README.md)

## Behavior

Supported paths:

- `/s/review/{token}`
- `/s/profile/{token}`
- `/s/restaurant/{token}`
- `/s/dish/{token}` — one dish at one restaurant, opened in the native dish viewer.

Only these four types are supported. Tokens must be 1–64 ASCII letters, digits, underscores, or hyphens. Malformed or unsupported paths return a generic 404. A well-formed token always gets the same generic landing shell: the website cannot determine content availability, expiry, or authorization.

The page explains that sign-in or sign-up is required. It offers an explicit **Open SRVN** action with the original kind/token and instructions to install SRVN, return to the original message, and tap the same link again. The custom scheme is attempted only after a click. There are no automatic redirects, install matching, or timers.

**SRVN is not in the stores yet.** Leave both store URL variables empty to show “SRVN is coming soon” without a waitlist action. Waitlist signup remains on the main website. Configure each platform independently once its real listing has been verified. If only one is released, the other platform gets accurate availability copy. Desktop visitors see both configured store choices.

Share pages have generic metadata and imagery, `noindex`/no-follow directives, `no-referrer`, and dynamic responses with no-store caching. They contain no content preview or content resolver request. Repeated visits do not consume or refresh a token. Authentication, token expiry, and the final content destination belong to the backend/native app.

### Messaging previews

Page, Open Graph, and Twitter titles identify the sharing type:

| Type | Preview title |
| --- | --- |
| Profile | View this profile on SRVN |
| Review | Read this review on SRVN |
| Restaurant | Explore this restaurant on SRVN |
| Dish | Check out this dish on SRVN |

All four use the same square 1200 × 1200 PNG at `/s/opengraph-image`, with the existing SRVN logo, wordmark, and brand colors. This public image has no token or personal content and needs no authentication. Next.js supplies the Open Graph image URL and dimensions; Twitter metadata points to the same asset. Metadata uses the configured sharing origin rather than the incoming Host header.

Messages and other receiving apps choose the card layout and may cache existing previews. After deployment, test a newly generated or previously unpreviewed link in Messages to verify the recipient's actual card. The website update does not require a native rebuild; authentication and app opening continue to use the existing flow.

## Configuration

These variables are read on the server at request time. They are not `NEXT_PUBLIC_` variables.

| Variable | Meaning |
| --- | --- |
| `SHARE_APP_ENV` | `production` or `development`. Defaults to development only under `next dev`; otherwise production. |
| `SHARE_BASE_URL` | This deployment's website origin, matching the backend's public share origin. Required HTTPS origin in production; defaults to http://localhost:3000 in development. Paths, queries, credentials, fragments, and whitespace are rejected. |
| `SRVN_IOS_STORE_URL` | Optional verified HTTPS `apps.apple.com` app listing. Empty until released. Validation checks URL shape; verify that the numeric listing actually belongs to SRVN before configuring it. |
| `SRVN_ANDROID_STORE_URL` | Optional HTTPS `play.google.com/store/apps/details?id=com.srvnapp.srvn` listing. Empty until released. |
| `APPLE_APP_ID_PREFIX` | Optional verified 10-character application-identifier prefix from the signed iOS app's entitlement. Often the Team ID; confirm the actual prefix. |
| `ANDROID_SHA256_CERT_FINGERPRINTS` | Optional comma/newline-separated SHA-256 signing certificate fingerprints, each 32 colon-separated hex bytes. Multiple certificates support signing-key rotation. |

Production uses `srvn` and `com.srvnapp.srvn`. Development uses `srvn-dev` and `com.srvnapp.srvn.dev`, must use a separate host from srvnapp.com/www.srvnapp.com, and cannot offer production store downloads. A local HTTP website can test rendering and custom-scheme syntax; HTTPS on a separately verified development host is needed to test native domain associations.

Example pre-release production configuration:

```dotenv
SHARE_APP_ENV=production
SHARE_BASE_URL=https://srvnapp.com
SRVN_IOS_STORE_URL=
SRVN_ANDROID_STORE_URL=
APPLE_APP_ID_PREFIX=
ANDROID_SHA256_CERT_FINGERPRINTS=
```

Blank signing values deliberately authorize no apps. Populate them with verified values before device verification. No release identity or store URL is inferred from a request's Host header. Invalid configured values fail the request instead of publishing incorrect association data.

## Native domain association endpoints

The website serves these public GET endpoints directly as JSON, without authentication or redirects:

- `/.well-known/apple-app-site-association`
- `/.well-known/assetlinks.json`

The iOS document includes the configured prefix and environment-specific bundle ID and allows only the four sharing path families. Confirm the signed app's application identifier and associated-domain entitlement against [Apple's associated domains documentation](https://developer.apple.com/documentation/xcode/supporting-associated-domains).

The Android document includes the environment-specific package and configured SHA-256 signing certificates. Android 15+ dynamic rules allow the four sharing path families and exclude other paths. Older versions also require the same narrow path filters in the native manifest. Use the **Play App Signing certificate** for Play-distributed builds when it differs from the upload certificate; the Maps SHA-1 is not suitable. See [Android's website association documentation](https://developer.android.com/training/app-links/configure-assetlinks).

Without signing data, iOS returns `{"applinks":{"details":[]}}` and Android returns `[]`, both with `Cache-Control: no-store`. Configured documents use a five-minute public cache. These routes are dynamic so signing values can be supplied at runtime.

Website endpoints alone do not enable app opening. The subsequent mobile stage must add:

1. iOS `associatedDomains` for the exact HTTPS host.
2. Android verified HTTPS VIEW intent filters, BROWSABLE/DEFAULT categories, and the four sharing path prefixes.
3. The share entry route and pending destination through sign-in/sign-up/onboarding.
4. A new native build containing the entitlements and manifest.

A JavaScript update cannot add native domain registration. Keep development and production hosts/identities separate.

## Local validation

Run the standard checks listed in the [main README](../README.md#checks).

`npm test` builds the production bundle, then runs configuration and Chromium tests against two local production servers. One checks pre-release development rendering; the other uses synthetic release identity/store fixtures to exercise configured responses. Test values are never release credentials, and tests do not visit external store listings. Screenshots and traces go into ignored `test-results/`.

## Release readiness

Before enabling new branded URLs for recipients:

1. Configure the final HTTPS origin consistently in the website, backend, and native app.
2. Deploy the website and verify each association endpoint returns HTTP 200 with JSON at that exact origin. Do not put them behind authentication, bot challenges, or a redirect. Apex and www are different hosts; verify whichever host the shared URLs use.
3. Confirm share pages have no-referrer/no-index/no-store headers and do not fetch content. Check both pre-release and released platform availability as applicable.
4. Configure hosting/CDN access logs and log drains to suppress or redact `/s/{kind}/{token}` paths. This code adds no share analytics or content logging; it cannot control provider access logs. Verify managed-host logging before release.
5. After native registration/auth continuation is implemented, install signed builds on physical devices and verify cold/warm, signed-in/signed-out, invalid/expired, and messaging-app browser cases for all four types.
6. Test installation using a real original message: install the app, return to that message, tap the same link, complete authentication/onboarding, and reach the exact resource.

For example, check responses without following redirects:

```bash
curl --max-redirs 0 -i https://srvnapp.com/.well-known/apple-app-site-association
curl --max-redirs 0 -i https://srvnapp.com/.well-known/assetlinks.json
```

On a connected Android device with the signed app installed, verification can be retried and inspected with:

```bash
adb shell pm verify-app-links --re-verify com.srvnapp.srvn
adb shell pm get-app-links com.srvnapp.srvn
```

Local tests verify rendering, routing, headers, and association payloads. They do not establish HTTPS hosting, real signing identity, App Store availability, or native verification on devices.
