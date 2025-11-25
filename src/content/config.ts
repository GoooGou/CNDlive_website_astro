// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news   = defineCollection({
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
// 🔥 新增：pages 集合 (用于 About, Contact, Privacy Policy 等单页)
// 🔥 必须有 pages 的定义
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// 🔥 新增：solutions 集合
const solutions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/solutions" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().optional(),
    
    // 🔥🔥 补上这两个字段，跟 News 保持一致
    pubDate: z.date(), 
    author: z.string().optional(), // 作者可以是可选的
  }),
});

export const collections = { news, pages, solutions }; // 记得导出 

