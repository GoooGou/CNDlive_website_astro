// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// 定义新闻集合的数据结构
const newsCollection = defineCollection({
  type: 'content', // v4+ 默认是 content
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('CNDlive Team'),
    pubDate: z.date(),
    image: z.string().optional(), // 这里填写图片路径，如 '/images/news-1.jpg'
    tags: z.array(z.string()),
    link: z.string().optional(), // 可选的外部链接，如果没有则跳转内部文章页
  }),
});

export const collections = {
  'news': newsCollection,
};