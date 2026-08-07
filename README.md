# maxmatkovski.com

A fast, responsive personal brand site with no build step or framework dependencies.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize before launch

The core positioning and biography are populated. Before launch, update:

- `max@maxmatkovski.com` if you use a different domain mailbox
- Selected work with named projects when they are ready to share
- Notes with links as articles are published

## Deploy

### Vercel

Import this repository at Vercel, choose **Other** as the framework, leave the build command empty, and set the output directory to `.`. Add `maxmatkovski.com` in Project → Domains, then follow the DNS values Vercel provides.

### Netlify

Create a site from this repository, leave the build command empty, and use `.` as the publish directory. Add the custom domain under Domain management and follow Netlify's DNS instructions.

### GitHub Pages

Push the directory to a GitHub repository, enable Pages from the repository's root branch, and add `maxmatkovski.com` as the custom domain.
