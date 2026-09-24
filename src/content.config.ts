import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per post.
// - Full posts: write the body below the frontmatter.
// - Posts published elsewhere (e.g. LinkedIn): set `url` and `source`, leave the body empty.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    url: z.url().optional(),
    source: z.enum(["blog", "linkedin", "medium", "substack", "other"]).default("blog"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
