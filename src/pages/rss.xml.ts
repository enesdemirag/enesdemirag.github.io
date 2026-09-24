import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";

export async function GET(context: { site: URL }) {
  const posts = await getPosts();
  return rss({
    title: "Enes Demirağ — Writing",
    description: "Notes on software, AI, computer vision, and building products.",
    site: context.site,
    items: posts.map((post) => ({ title: post.data.title, pubDate: post.data.date, description: post.data.description ?? "", link: `/blog/${post.id}/` })),
  });
}
