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

- Email is displayed only as `maxmatkovski [at] gmail [dot] com`
- Do not add a raw email address or `mailto:` link; this is an intentional anti-scraping choice
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
- The headshot is intentionally a small, proportional circular avatar

## Technical architecture

- Static HTML, CSS, and JavaScript
- No framework, package manager, build command, or runtime dependencies
- Entry point: `index.html`
- Article pages: `articles/*.html`
- Locally hosted article images: `assets/articles/`
- Styles: `styles.css`
- JavaScript only sets the current footer year: `script.js`
- SEO/supporting assets: `favicon.svg`, `robots.txt`, and `sitemap.xml`

## Content policy

Do not invent employer names, job titles, dates, projects, metrics, or technical achievements. Add named experience only when Max supplies the information and confirms it is public.

## Published notes

Five articles were migrated in full from Max's Medium feed on 2026-08-09. Their original publication dates, text, headings, links, captions, code, and images were preserved. All 54 article images are hosted locally rather than hot-linked from Medium.

- From Cyber Nation to AI Nation: Can Israel Reinvent Its Brand?
- Building a Language Model From Scratch With Nothing But NumPy
- Phishing Detector — Autonomous Agent via Claude 4 and MCP
- Natural Language Processing of 100,000 Climate Change Tweets
- Predicting Water Potability Using Machine Learning

The articles are listed under Notes in `index.html` and included in `sitemap.xml`.

## Updating the site

After editing, run:

```sh
node --check script.js
git diff --check
```

Then commit and push `main`. GitHub Pages deploys from the repository root.

## Current operational note

The site is deployed, its public DNS records point to GitHub Pages, and HTTPS enforcement is enabled. A stalled certificate order was repaired on 2026-08-09 by resetting the Pages custom domain; GitHub then issued a valid certificate for both the apex and `www` domains. See `DEPLOYMENT_HANDOFF.md` for the exact records and verification commands.
