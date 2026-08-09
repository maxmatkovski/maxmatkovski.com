# Future Plans

This document tracks possible future improvements for `maxmatkovski.com`. These are ideas, not commitments. New public content should only be added when Max has supplied and approved the underlying facts.

## Projects and Writings

The next meaningful structural improvement is to separate projects from writings.

### Writings

Keep `/writings` focused on essays, technical articles, research notes, and longer-form analysis. Each entry should include:

- Title
- Publication date
- One-sentence description
- Link to the full article hosted on the site

The homepage should continue to show a compact selection of recent writing rather than the entire archive.

### Projects

Create a dedicated `/projects` page when there are enough public projects to justify it. Projects should emphasize what was built rather than repeat résumé experience. Each project may include:

- Project name and concise description
- Problem or user need
- Max's role
- Relevant technologies
- Link to a live product, repository, demo, or detailed write-up

Avoid placeholder cards, invented metrics, generic stock artwork, or projects that cannot be discussed publicly. Until there are at least three strong public examples, it is better to omit the section.

### Homepage

When the Projects page exists, add a compact Projects preview to the homepage and a Projects link to the navigation. Keep Writings and Projects visually distinct:

- Projects: things Max has built
- Writings: ideas, analysis, and technical explanations

On mobile, ensure the expanded navigation remains a single clean row or use a compact menu if five links no longer fit comfortably.

## Possible Project Candidates

Only publish these after confirming the scope, wording, ownership, and links:

- AI phishing detector
- Language model built from scratch with NumPy
- Climate-change sentiment analysis
- Water-potability prediction
- Other applied AI or customer-facing engineering work that is safe to share

Some existing writings may support a related project page, but the project entry should focus on the artifact and implementation rather than duplicate the article.

## Design Principles

- Keep the site simple, fast, and framework-free.
- Preserve the warm cream palette and typography-led presentation.
- Prefer real product details and direct links over decorative visuals.
- Keep the homepage concise and personal.
- Maintain strong mobile behavior and accessible touch targets.
- Do not expose private employer, customer, or project information.

## Implementation Outline

1. Confirm at least three public projects and their links.
2. Define a short, consistent project-entry format.
3. Create `/projects/index.html` and add it to `sitemap.xml`.
4. Add a compact Projects preview to `index.html`.
5. Update desktop and mobile navigation.
6. Add project-specific social metadata where appropriate.
7. Validate all internal links, responsive layouts, and metadata before publishing.

