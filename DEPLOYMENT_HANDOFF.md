# Deployment Handoff

Last updated: 2026-08-09 (Asia/Jerusalem)

## Hosting

- Provider: GitHub Pages
- Repository: `https://github.com/maxmatkovski/maxmatkovski.com`
- Branch: `main`
- Publish path: repository root (`/`)
- Custom domain: `maxmatkovski.com`
- `CNAME` file is committed at the repository root

## Latest deployment

- Latest website commit before this handoff refresh: `4f08557` (`Document future site plans and location context`)
- The homepage positions Max as a customer-oriented AI/ML engineer based in Tel Aviv, having previously spent time in San Francisco and New York
- The homepage includes a compact live clock for Tel Aviv, New York, and San Francisco; Tel Aviv is visually emphasized as the current location
- Six articles are published under Writings at `/writings`, with article images hosted locally
- The homepage includes a compact Writings selection, while the full archive lives on the separate Writings page
- `FUTURE_PLANS.md` records the proposed separation between future Projects and Writings areas; a Projects page has not yet been created
- The headshot is a small proportional circle, and the public email address is intentionally obfuscated
- The intended contact text is `maxmatkovski [at] gmail [dot] com`; there should be no raw personal email or `mailto:` link in the site source

## DNS configuration

DNS is managed by GoDaddy using:

- `ns15.domaincontrol.com`
- `ns16.domaincontrol.com`

The configured records are:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `maxmatkovski.github.io` |

Do not change the GoDaddy nameserver, SOA, `_domainconnect`, `pay`, or email/DMARC records as part of the website deployment.

## DNS state

- GoDaddy's authoritative nameserver and public resolvers return the four GitHub Pages IP addresses listed above.
- Do not change the correct DNS records to troubleshoot a stale page.
- GitHub Pages updates commonly take a few minutes to appear. Use the regular URL `https://maxmatkovski.com`; a temporary query string such as `?v=<commit>` is only a cache-busting diagnostic and is not part of the site's address.

## HTTPS state

- HTTPS was repaired on 2026-08-09 by clearing and restoring the GitHub Pages custom domain, which restarted stalled certificate provisioning.
- GitHub Pages now reports `https_enforced: true` and the site status is `built`.
- The active Let's Encrypt certificate covers both `maxmatkovski.com` and `www.maxmatkovski.com`.
- The certificate issued on 2026-08-09 expires on 2026-11-07 and should renew automatically through GitHub Pages.
- DNS has no conflicting `AAAA` or `CAA` records, and `www` resolves to `maxmatkovski.github.io`.

Verify with:

```sh
gh api repos/maxmatkovski/maxmatkovski.com/pages --jq '{status:.status,cname:.cname,https_enforced:.https_enforced}'
curl -I https://maxmatkovski.com/
```

## Refresh troubleshooting on macOS

First quit Chrome completely with Command-Q. Then run:

```sh
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

Reconnect Wi-Fi and reopen the browser. If the resolver remains stale, enable Secure DNS with Cloudflare in Chrome or temporarily use another network. Avoid repeatedly changing the correct GoDaddy records.

## Working tree handoff

After this handoff update is committed, `main` should match `origin/main` with a clean working tree. Validate future changes with:

```sh
node --check script.js
git diff --check
```
