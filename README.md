# enesdemirag.com

Personal site built with Astro. Home, work, and about live on one page; the blog is separate. Personal and product data lives in `src/data/site.ts`, and the 13 published posts live in `src/content/blog/`.

```bash
npm install
npm run dev
npm run check
npm run build
```

The curated files live directly under `public/` in folders such as `images/`, `documents/`, `profile/`, and `writing/`. Each file is publicly available at the matching root URL after deployment. The site only links to selected items.

## Editing

- Change bio, social links, product cards, experience, and résumé link in `src/data/site.ts`.
- Add a post as `src/content/blog/post-slug.md` with `title` and `date` frontmatter.
- Keep post images in `public/images/blog/` and refer to them with `/images/blog/...`.
- Use kebab-case for files and folders under `public/`. Keep the required `CNAME` filename unchanged.
- Review [OPEN_ITEMS.md](OPEN_ITEMS.md) for unresolved links and copy.

`.github/workflows/deploy.yml` builds and deploys when the new site is on `main`. The `site-rebuild` branch can be reviewed before merging.
