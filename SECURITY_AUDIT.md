# Security and dependency audit

Run on 9 Nov 2026.

## Dependencies
- `npm audit`: **0 vulnerabilities**.
- Runtime: next 16.4.5, react 19.3.1, react-dom, lucide-react, two self-hosted @fontsource-variable font packages.
- Dev only: typescript, tailwindcss 4.3.5, @tailwindcss/postcss, type packages.
- Re-run `npm audit` before each deploy; enable Dependabot alerts on the GitHub repo.

## Application
| Area | Status |
|---|---|
| Secrets / API keys / env vars | None used. `.env*` is git-ignored. |
| Visitor data | None collected. No forms, cookies, analytics or trackers. |
| Contact | `mailto:` and `tel:` links only. No fake form. |
| HTML injection | No `dangerouslySetInnerHTML`; content rendered through React. |
| External links | `rel="noopener noreferrer"`. |
| Fonts | Self-hosted via npm; no Google Fonts requests. |
| Backend / database | None. Fully static pages. |

## Response headers (verified with `next start`)
Content-Security-Policy (self-only, `frame-ancestors 'none'`, `object-src 'none'`), Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. `X-Powered-By` removed.

## Known limits
- CSP allows inline scripts because Next.js static pages inject inline hydration scripts; a nonce-based CSP would need dynamic rendering, unnecessary here.
- HTTPS is provided by Vercel; HSTS is also sent by the app.
- If you add a contact form later, it needs an email service and server-side validation, with keys stored in Vercel environment variables.
