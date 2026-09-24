# enesdemirag.com

Personal site built with Astro. Home, work, and about live on one page; the writing list is separate. Personal and product data lives in `src/data/site.ts`. Published posts on other platforms are listed once in `src/data/external-posts.json`.

```bash
npm install
npm run dev
npm run check
npm run build
```

The curated files live directly under `public/` in folders such as `images/`, `documents/`, `profile/`, and `writing/`. Each file is publicly available at the matching root URL after deployment. The site only links to selected items.

## Editing

- Change bio, social links, product cards, experience, and résumé link in `src/data/site.ts`.
- Add a local post as `src/content/blog/post-slug.md` with `title` and `date` frontmatter. It opens on this site.
- Add a post hosted elsewhere to `src/data/external-posts.json` with `slug`, `title`, `date` (`YYYY-MM-DD`), `platform`, and the original `url`. It opens in a new tab. The slug also keeps old `/blog/slug/` links working for previously local posts.
- List each publication in one place only. If a local post is published elsewhere, remove its Markdown file and add its original URL to the external list.
- Keep post images in `public/images/blog/` and refer to them with `/images/blog/...`.
- Use kebab-case for files and folders under `public/`. Keep the required `CNAME` filename unchanged.
- Review [OPEN_ITEMS.md](OPEN_ITEMS.md) for unresolved links and copy.

`.github/workflows/deploy.yml` builds and deploys when the new site is on `main`. The `site-rebuild` branch can be reviewed before merging.
