import { getCollection } from "astro:content";
import { XMLParser } from "fast-xml-parser";
import { site } from "../site.config";

export type Source = "blog" | "linkedin" | "medium" | "substack" | "other";

export interface Post {
  title: string;
  date: Date;
  description?: string;
  href: string;
  external: boolean;
  source: Source;
}

export const sourceLabel: Record<Source, string> = {
  blog: "Blog",
  linkedin: "LinkedIn",
  medium: "Medium",
  substack: "Substack",
  other: "Elsewhere",
};

async function localPosts(): Promise<Post[]> {
  const entries = await getCollection("blog", ({ data }) => !data.draft);
  return entries.map(({ id, data }) => ({
    title: data.title,
    date: data.date,
    description: data.description,
    href: data.url ?? `/blog/${id}/`,
    external: Boolean(data.url),
    source: data.url ? data.source : "blog",
  }));
}

async function mediumPosts(): Promise<Post[]> {
  const user = site.mediumUsername;
  if (!user) return [];
  try {
    const res = await fetch(`https://medium.com/feed/@${user}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const feed = new XMLParser().parse(await res.text());
    const items = [feed?.rss?.channel?.item ?? []].flat();
    return items.map((item: any) => ({
      title: String(item.title),
      date: new Date(item.pubDate),
      href: String(item.link).split("?")[0],
      external: true,
      source: "medium" as const,
    }));
  } catch (err) {
    console.warn(`[posts] Could not load Medium feed for @${user}:`, err);
    return [];
  }
}

const titleKey = (title: string) => title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

async function loadPosts(): Promise<Post[]> {
  const [local, medium] = await Promise.all([localPosts(), mediumPosts()]);
  // Posts cross-posted to Medium are listed once, using the copy on this site.
  const localTitles = new Set(local.map((p) => titleKey(p.title)));
  const mediumOnly = medium.filter((p) => !localTitles.has(titleKey(p.title)));
  return [...local, ...mediumOnly].sort((a, b) => b.date.getTime() - a.date.getTime());
}

let cache: Promise<Post[]> | undefined;

/** All posts from every source, newest first. */
export function getAllPosts(): Promise<Post[]> {
  cache ??= loadPosts();
  return cache;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
