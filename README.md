# enesdemirag.github.io

Personal site ([enesdemirag.com](https://enesdemirag.com)) built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing

- **Your details, products, projects, socials:** `src/site.config.ts`
- **Blog post written here:** add `src/content/blog/my-post.md` with `title` and `date` frontmatter
- **LinkedIn (or any external) article:** add a `.md` file with only frontmatter:
  ```md
  ---
  title: My LinkedIn article
  date: 2026-09-10
  url: https://www.linkedin.com/pulse/...
  source: linkedin
  ---
  ```
- **Medium:** set `mediumUsername` in `src/site.config.ts`. Posts are pulled from the RSS feed on every build.
- **Images:** put app icons or your photo in `public/` and reference them as `/filename.png`.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on every push to `main`.
Re-run the workflow (Actions → Run workflow) to pick up new Medium posts.
