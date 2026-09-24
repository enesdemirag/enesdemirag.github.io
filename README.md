# enesdemirag.com

Personal site built with Astro. The source is intentionally small: personal and product data lives in `src/data/site.ts`, pages in `src/pages/`, and the 13 published posts in `src/content/blog/`.

```bash
npm install
npm run dev
npm run check
npm run build
```

The complete curated archive is under `public/assets/`. Every file there is publicly addressable at `/assets/...` after deployment, including documents and historical source material. The site only links to selected items.

## Editing

- Change bio, social links, product cards, experience, and résumé link in `src/data/site.ts`.
- Add a post as `src/content/blog/post-slug.md` with `title` and `date` frontmatter.
- Keep post images in `public/assets/images/blog/` and refer to them with `/assets/images/blog/...`.
- Review [OPEN_ITEMS.md](OPEN_ITEMS.md) for unresolved links and copy.

`.github/workflows/deploy.yml` builds and deploys when the new site is on `main`. This branch is local until pushed or merged.
