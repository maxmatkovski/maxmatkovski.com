# Deployment Handoff

Last updated: 2026-08-07 (Asia/Jerusalem)

## Hosting

- Provider: GitHub Pages
- Repository: `https://github.com/maxmatkovski/maxmatkovski.com`
- Branch: `main`
- Publish path: repository root (`/`)
- Custom domain: `maxmatkovski.com`
- `CNAME` file is committed at the repository root

## Latest deployment

- Latest website commit: `afd2c4635c7a398af34e6b719dc9cf0ab3e26bf0`
- Latest repository commit after adding context files: `150bc2e`
- GitHub Pages build status: `built`
- Build completed successfully with no reported error

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

## Current propagation state

At the time of this handoff:

- GoDaddy's authoritative nameserver returns all four correct GitHub Pages IP addresses.
- Cloudflare DNS (`1.1.1.1`) returns all four correct GitHub Pages IP addresses.
- The Mac's current default DNS resolver still returns the old GoDaddy Website Builder addresses:
  - `76.223.105.230`
  - `13.248.243.5`

This is why refreshing the site on that Mac still shows the old GoDaddy page while an iPhone or another network may show the new site. A browser refresh does not clear the operating system or router DNS cache.

## HTTPS state

- GitHub Pages currently reports `https_enforced: false`.
- An attempt to enable HTTPS returned: `The certificate does not exist yet`.
- Chrome currently shows `NET::ERR_CERT_COMMON_NAME_INVALID` when opening `https://maxmatkovski.com` because GitHub has not issued a certificate containing the custom domain yet.
- This warning is expected during certificate provisioning. Do not bypass the warning.
- GitHub must finish provisioning the TLS certificate after DNS propagation before HTTPS can be enforced.
- DNS has been checked for common certificate blockers: there are no conflicting `AAAA` or `CAA` records, and `www` resolves to `maxmatkovski.github.io`.
- Typical provisioning takes several minutes to a few hours. Allow up to 24 hours before treating it as a deployment problem.
- Do not change the correct DNS records while certificate provisioning is pending, because doing so may delay or restart validation.

Retry later with:

```sh
gh api --method PUT repos/maxmatkovski/maxmatkovski.com/pages -F https_enforced=true
```

Then verify:

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
