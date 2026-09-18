# SASTRAVA Website Technical Audit & Remediation Assessment

**Assessment date:** 15 September 2026 (IST)  
**Scope:** Passive public checks of `https://sastrava.com`, plus code review and local build of the checked-out repository.  
**Authorization boundary:** No forms were submitted. No authenticated, active, exploit, fuzzing, load, API, database, or vulnerability-scanning activity was performed.

## Executive summary

The public website has a confirmed conversion-critical deployment defect: direct requests to `/about`, `/services`, `/courses`, `/portfolio`, and `/contact` return Vercel 404 responses. The checked-out React SPA declares all of these routes, so the immediate root cause is the absence of an SPA fallback rewrite in the checked-out deployment configuration. This breaks refresh, deep links, sharing, and crawler access to every client-side route.

The public origin also returned 404 for `robots.txt`, `sitemap.xml`, and `/.well-known/security.txt`. On the sampled homepage response, the server was Vercel and `Access-Control-Allow-Origin: *` was present; CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options` were absent. This is a public configuration finding, not a claim about any unobserved API.

The repository is a public Vite 8 / React 19 SPA on `master`, commit `890083505988bb9a35cad49c09682d4a9e016e1b` (5 September 2026). Public GitHub metadata reports the same default branch, SHA, and push time, but the deployed homepage bundle (`/assets/index-OQY5b14p.js`) does not match the fresh local build bundle (`dist/assets/index-HSj1ODn2.js`). There is no deployment identifier or Vercel project linkage in the repository; production-to-source equivalence is therefore **not demonstrated**.

## Evidence log and limitations

| Evidence | Result | Confidence |
|---|---|---|
| Local Git | `master`, clean worktree; SHA `890083505988bb9a35cad49c09682d4a9e016e1b`; only commit is “Initial commit: SASTRAVA website” | High |
| GitHub public API | Repository default branch `master`, public, pushed 2026-09-05T11:42:21Z; head SHA equals checkout | High |
| Passive HEAD, production | `/` = 200, Vercel; `/about`, `/services`, `/courses`, `/portfolio`, `/contact`, arbitrary unknown path, robots, sitemap, and security.txt = 404 | High |
| Passive homepage GET | title and description match `index.html`; production bundle name differs from local fresh build; no static canonical tag found | High |
| Local build | `npm run build` passed using Node `v24.21.0`, npm `11.19.0`; initial JS is 1,009 KiB / 277 KiB gzip and three homepage PNGs are 1.7–2.1 MiB | High |
| Local lint | `npm run lint` failed with widespread unused imports/variables, undefined barrel exports, a hooks-in-callback violation, and switch lexical-declaration violations | High |
| Dependency audit | Could not complete: npm audit endpoint/cache access failed. It is **not** evidence of no vulnerabilities. | High |
| Secret hygiene | No tracked sensitive filename matched the audit patterns. `.gitignore` does not ignore `.env`; content scan was not a credential validation. | Medium |

Untested: Vercel project settings and deployment history; TLS detail; runtime console, Lighthouse, axe, keyboard and screen-reader behavior; source maps; production form delivery; all backend/API/database/auth behavior; third-party processors; cookie behavior; retention; regional processing; and all active security controls.

## Prioritized findings

| ID | Severity / confidence | Evidence and affected area | Root cause / impact | Required remediation and verification |
|---|---|---|---|---|
| F-01 | **High / confirmed** | Production direct requests to five published routes return Vercel 404. Local [App.jsx](src/App.jsx) lines 78–96 defines them; [main.jsx](src/main.jsx) lines 3, 9 uses `BrowserRouter`; no `vercel.json` exists. | SPA history fallback is absent. Contact conversion and all deep links fail; the in-app `*` route cannot run on the server’s 404 response. | Add the scoped Vercel rewrite below, deploy to staging, then test navigation, direct load, refresh, browser back/forward, and crawler-rendered routes. Preserve a server 404 strategy for unknown paths (preferred architecture below). Owner: frontend/platform; effort: S. |
| F-02 | **High / confirmed** | `GET/HEAD` production checks: `/robots.txt`, `/sitemap.xml`, `/.well-known/security.txt` are 404. | Search discovery/governance endpoints are absent. | Create static robots and security.txt; generate a sitemap only from canonical, indexable route data; check all are 200 and sitemap URLs resolve. Owner: frontend/SEO; S. |
| F-03 | **High / confirmed** | Homepage header sample: `Access-Control-Allow-Origin: *`; no CSP, XCTO, Referrer, Permissions, or XFO observed. | A permissive CORS header is being applied to the document/static response, while essential baseline headers are absent. This does **not** prove API CORS exposure. | Inspect Vercel header inheritance. Remove ACAO from HTML/private responses; only use it on deliberately public assets. Deploy CSP Report-Only first; inventory violations, then enforce. Add headers below after compatibility testing. Owner: platform/security; M. |
| F-04 | **High / code-review risk** | [leadService.js](src/services/leadService.js) lines 127–164 stores contact submissions, including message data, in browser `localStorage` even when Google Forms is unconfigured. [googleFormConfig.js](src/config/googleFormConfig.js) line 27 has no endpoint. | The UI can claim success without server-side durable delivery; PII persists unencrypted in a shared browser profile and is not governed by retention/deletion. | Remove the local-storage “sheet” fallback; require a server-side endpoint with validation, rate limiting, idempotency, anti-spam, audit controls and an explicit failure state. Do not send contact data directly to a Google Form with `no-cors`. Owner: backend/privacy; M. |
| F-05 | **High / code-review risk** | [leadService.js](src/services/leadService.js) lines 10, 192–226 and 257–374 assumes a localhost API and stores bearer token material in `localStorage`. No backend, CORS config, API contract enforcement, or deployment config is checked in. | Client-side token storage is exposed to XSS; backend authorization, CORS, and object-level access controls cannot be verified. | Move authenticated admin behavior to a verified backend using `HttpOnly; Secure; SameSite` cookies or a documented token threat model; enforce authorization server-side for every lead/export/analytics/bulk endpoint. Obtain staging/API access before validating. Owner: backend/security; L. |
| F-06 | **Medium / confirmed** | Local build warns for a 1,009 KiB initial JS chunk (277 KiB gzip); homepage PNG sources are 1.7–2.1 MiB. [Home.jsx](src/pages/Home.jsx) line 49 loads the hero image eagerly without dimensions; only lower images are lazy. | High mobile transfer/decode/main-thread cost and potential layout shift; no measured Core Web Vitals yet. | Convert appropriate raster imagery to AVIF/WebP; use responsive `srcset`/`sizes`, explicit `width`/`height` or aspect-ratio, preload only the LCP candidate; dynamically import route chunks. Set budgets in CI. Owner: frontend; M. |
| F-07 | **Medium / confirmed** | [index.html](index.html) has one generic title/description. SEO config mutates head in client code, and its canonical values use `https://www.sastrava.com` while the sampled production origin is `https://sastrava.com`. | Client-only metadata is unreliable for non-JS crawlers and can split canonical signals between hosts. | Choose one canonical host, redirect the other at Vercel, pre-render/static-generate route-specific head or migrate to a framework with SSG/SSR. Add per-route title, description, OG/X metadata and JSON-LD. Owner: frontend/SEO; M. |
| F-08 | **Medium / confirmed** | `npm run lint` fails; package scripts contain no test, typecheck, format, E2E, accessibility, or CI workflow. | Release gates are ineffective; runtime and accessibility regressions are unguarded. | Resolve lint failures; add scripts and CI matrix in the test strategy. Owner: frontend/platform; M. |
| F-09 | **Medium / code-review risk** | [leadService.js](src/services/leadService.js) line 226 calls `api.ipify.org` to attach IP address; conversion helpers use local storage. No privacy notice/data-flow implementation was verified. | A third party receives visitor IP addresses; notice, lawful basis, retention, transfer and deletion policy are unverified. | Document processor/purpose/legal basis/retention, eliminate collection unless necessary, and gate non-essential collection with consent where required. Owner: privacy/product; M. |
| F-10 | **Medium / pending validation** | Source shows labels, semantic main areas, alt text, status role and visible large CTAs; however no automated axe or keyboard/screen-reader execution was authorized/performed. | WCAG 2.2 AA compliance cannot be asserted. Motion-heavy UI, mobile-menu focus handling, contrast, text reflow and form errors need testing. | Add automated axe plus manual keyboard and NVDA/VoiceOver tests; remediate against the matrix below. Owner: frontend/QA; M. |

## Patch-ready implementation plan

### 1. Repair routing correctly

For the current SPA, the minimum Vercel rewrite is:

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This enables all client routes but also returns HTTP 200 for unknown URLs, so the React `NotFound` component is visually correct but semantically not a 404. The preferred long-term remediation is to migrate public pages to static routes (for example, Astro/Next SSG) and publish an actual static 404 document. If retaining Vite immediately, deploy the rewrite as an emergency conversion fix and set `noindex` on `NotFound`; track server-correct 404 as a follow-up.

### 2. Public files and headers

```text
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://sastrava.com/sitemap.xml
```

```text
# public/.well-known/security.txt
Contact: mailto:security@sastrava.com
Policy: https://sastrava.com/security
Preferred-Languages: en
Expires: 2027-09-15T00:00:00.000Z
```

Create `src/data/routes.js` as the single indexable-route source and generate `public/sitemap.xml` during build. Include only live canonical routes; exclude login, unknown, parameterized/admin, preview, and unfinished pages.

Start with this *report-only* header baseline in `vercel.json`, adjust CSP directives only from observed reports, then enforce:

```json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [
      {"key":"Content-Security-Policy-Report-Only","value":"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; upgrade-insecure-requests; report-to csp-endpoint"},
      {"key":"X-Content-Type-Options","value":"nosniff"},
      {"key":"Referrer-Policy","value":"strict-origin-when-cross-origin"},
      {"key":"Permissions-Policy","value":"camera=(), microphone=(), geolocation=(), payment=(), usb=()"},
      {"key":"X-Frame-Options","value":"DENY"}
    ]
  }]
}
```

Do not apply `Access-Control-Allow-Origin: *` globally. Place CORS decisions in each API response, using exact allowed origins/methods/headers and `Vary: Origin`; do not combine wildcard origin with credentials.

### 3. Contact data flow

Implement `POST /api/contact` on a server-side Vercel Function or separate backend. Accept a schema-whitelisted payload, server timestamps and a generated idempotency key; validate/sanitize on the server; rate-limit by a privacy-preserving key; use bot controls; write to the approved CRM/email provider with retries; return an accessible success/failure result. Keep provider credentials server-only (`CONTACT_PROVIDER_API_KEY`, never `VITE_*`). Update [LeadForm.jsx](src/components/forms/LeadForm.jsx) and [leadService.js](src/services/leadService.js) to prevent duplicate submissions, announce status with `aria-live`, link errors with `aria-describedby`, and remove PII local storage/IP lookup.

Data flow to document and approve: browser → Vercel CDN/function → validation/rate-limit → CRM/email processor → restricted operations users → audited logs/backups. Record each data category (name, email, phone, company, message, consent, source), purpose, legal basis, processor/region, encryption, retention/deletion, access roles, DSAR owner and incident owner. No database model is verified in this repository.

## Quality, accessibility, and performance test strategy

Add Playwright + axe-core with desktop and 390px mobile projects. Test each published route directly and after refresh; header/footer links; unknown route behavior; menu keyboard open/close/focus return; visible focus; tab order; forms (staging only); reduced motion; console errors; failed asset/network handling; and screenshots. Run axe on every template plus manual checks for WCAG 2.2 AA: 1.1.1, 1.3.1/1.3.2, 1.4.3/1.4.10/1.4.11, 2.1.1, 2.4.1/2.4.3/2.4.7/2.4.11, 2.5.8, 3.2.6 and 3.3.1–3.3.3.

Add scripts: `format:check`, `lint`, `typecheck`, `test`, `test:e2e`, `test:a11y`, `test:routes`, `test:headers`, `test:seo`, `test:links`, `build`, `test:lighthouse`. CI must use `npm ci`, pin actions by commit SHA, use read-only default permissions, secret scan, dependency/SBOM checks, then deploy-preview smoke tests. Initial budgets: JS ≤250 KiB gzip per entry, CSS ≤50 KiB gzip, LCP ≤2.5 s, CLS ≤0.10, no failed first-party requests; establish exact Lighthouse mobile baseline before enforcing ratcheting budgets.

## VAPT matrix and authorization gate

Passive work completed: public route/status/header/governance file checks and source configuration review. Before any active or authenticated test, obtain written authorization naming legal entity, targets/environments, dates/time zone, source IPs, rate limits, accounts/roles, prohibited actions, data handling, stop contact and escalation process. Use staging and synthetic data.

| Test family (OWASP WSTG/ASVS) | Environment / prerequisite | Allowed only after authorization | Stop condition |
|---|---|---|---|
| Configuration, headers, TLS, deployment | Staging; approved source IP | Bounded configuration verification | Unexpected production impact or scope ambiguity |
| Authentication/session/authorization | Staging; least-privilege synthetic accounts | Manual role/object/function checks | Access to real data or unintended privilege |
| Input validation, XSS, injection, CSRF | Staging; disposable records | Single bounded payloads with manual validation | Any persistent change, data exposure, error spike |
| API, rate limits, uploads, redirects, SSRF | Applicable staging endpoints only | Per-endpoint agreed test cases | Availability degradation or third-party impact |
| Business logic and error leakage | Staging workflows | Controlled duplicate/sequence tests | Financial/operational side effect |

Never conduct denial-of-service, password spraying, credential stuffing, broad port scanning, destructive payloads, extraction of real data, persistence, or escalation beyond approved roles. A retest records endpoint/component, preconditions, safe evidence, severity, fix version, verifier and result; passive-only work must never be called “secure” or “VAPT passed.”

## Remediation roadmap and acceptance criteria

1. **P0 (0–2 days):** fix route handling and verify `/contact` direct load/refresh; return a truthful unavailable state until server-side delivery works.
2. **P1 (week 1):** error boundary/loading/offline resilience; remove PII local fallback; configure server contact endpoint; deploy header report-only policy and governance files.
3. **P1 (week 2):** canonical host redirects, route metadata/sitemap/schema, static or SSG route rendering, responsive image conversion and code splitting.
4. **P2:** resolve lint, establish CI and browser/a11y/performance gates; complete manual accessibility pass.
5. **P2:** complete data inventory, privacy/terms/security pages and authorized staging VAPT; production retest.

Acceptance requires all published routes to load and refresh; an unknown path to produce a real 404; accessible, rate-protected server-side contact delivery; valid public governance files; intentional headers/CORS; no critical console/network failures; passing agreed budgets; documented data flows; and an authorized VAPT retest or explicitly accepted residual risks.

## References

- [OWASP Web Security Testing Guide](https://wstg.owasp.org/)
- [OWASP Application Security Verification Standard](https://owasp.github.io/www-project-application-security-verification-standard/)
- [W3C WCAG 2.2](https://www.w3.org/TR/wcag/)
- [Google Search Central: build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
