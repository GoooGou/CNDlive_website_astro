// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection   = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    
    // 修改处：加上 .optional()
    // 这表示：这个字段可以没有，如果没有，它的值就是 undefined
    cover: image().optional(), 
  }),
});

export const collections = {
  news: newsCollection,
};
