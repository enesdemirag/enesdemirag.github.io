import { defineConfig } from "astro/config";
import externalPosts from "./src/data/external-posts.json" with { type: "json" };

const redirects = Object.fromEntries(externalPosts.flatMap(({ slug, url }) => [
  [`/${slug}`, url],
  [`/blog/${slug}`, url],
]));

export default defineConfig({
  site: "https://enesdemirag.com",
  redirects,
});
