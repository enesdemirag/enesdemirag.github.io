import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../site.config";
import { getAllPosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getAllPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.title,
      pubDate: p.date,
      description: p.description,
      link: p.href,
    })),
  });
}
