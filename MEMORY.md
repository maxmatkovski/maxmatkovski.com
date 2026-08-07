# Project Memory

## Purpose

`maxmatkovski.com` is Max Matkovski's long-term professional home on the internet.

The intended positioning is:

> Max Matkovski is an AI/ML engineer, technical builder, and active participant in the Israeli and U.S. technology ecosystems.

The site should feel credible to engineers, startup founders, investors, and other people in technology. It should remain simple, understated, fast, and easy to expand over time.

## Personal context

- Based in Tel Aviv, Israel
- Born in Tel Aviv and raised in California
- Works in AI/ML engineering at an early-stage startup
- B.S. in Computer Science and Cognitive Science from UCLA
- M.S. in Computer Science from Georgia Tech, focused on AI and machine learning
- Experience spans applied AI, ML, search, retrieval, embeddings, speech recognition, mobility, data engineering, software engineering, and product
- Interested in applied AI, LLMs, agents, search, retrieval, embeddings, AI infrastructure, computer vision, data/ML engineering, early-stage technology, product, and business

## Public contact details

- Email: `maxmatkovski@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/maxmatkovski/`
- GitHub: `https://github.com/maxmatkovski`
- No public résumé

## Design direction

- Simple personal profile rather than a job-seeker portfolio
- Compact navigation and conventional content hierarchy
- Typography-led, neutral, and professional
- Direct biography and readable experience summaries
- No stereotypical AI imagery, gradients, buzzwords, oversized marketing statements, decorative project graphics, or scroll animations
- Responsive and optimized for iPhone safe areas and touch targets
- The headshot is stored as `headshot.jpg`

## Technical architecture

- Static HTML, CSS, and JavaScript
- No framework, package manager, build command, or runtime dependencies
- Entry point: `index.html`
- Styles: `styles.css`
- JavaScript only sets the current footer year: `script.js`
- SEO/supporting assets: `favicon.svg`, `robots.txt`, and `sitemap.xml`

## Content policy

Do not invent employer names, job titles, dates, projects, metrics, or technical achievements. Add named experience only when Max supplies the information and confirms it is public.

## Updating the site

After editing, run:

```sh
node --check script.js
git diff --check
```

Then commit and push `main`. GitHub Pages deploys from the repository root.

## Current operational note

The site is deployed and its public DNS records point to GitHub Pages. HTTPS certificate provisioning is still pending as of 2026-08-07, so Chrome may show `NET::ERR_CERT_COMMON_NAME_INVALID`. This is a temporary certificate mismatch, not a content or build failure. Do not change DNS while waiting; retry HTTPS enforcement after GitHub issues the certificate. See `DEPLOYMENT_HANDOFF.md` for the exact records and commands.
