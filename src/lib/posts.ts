import { getCollection } from "astro:content";
import externalPosts from "../data/external-posts.json";

export type Post = {
  title: string;
  description?: string;
  date: Date;
  href: string;
  platform: string;
  external: boolean;
};

const externalSlugs = new Set(externalPosts.map((post) => post.slug));
const externalTitles = new Set(externalPosts.map((post) => post.title.trim().toLocaleLowerCase()));

export async function getLocalPosts() {
  return getCollection("blog", (post) =>
    !post.data.draft &&
    !externalSlugs.has(post.id) &&
    !externalTitles.has(post.data.title.trim().toLocaleLowerCase()),
  );
}

export async function getPosts(): Promise<Post[]> {
  const localPosts = await getLocalPosts();
  return [
    ...localPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      href: `/blog/${post.id}/`,
      platform: "This Site",
      external: false,
    })),
    ...externalPosts.map((post) => ({
      title: post.title,
      date: new Date(`${post.date}T00:00:00Z`),
      href: post.url,
      platform: post.platform,
      external: true,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
