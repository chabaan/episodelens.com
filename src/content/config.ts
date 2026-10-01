import { defineCollection, z } from 'astro:content';

// هذا الـschema يطابق تمامًا الحقول التي يرسلها Google Apps Script
// (Astro Celebrity News Engine) عبر GitHub Contents API كملف JSON
// داخل src/content/articles/<slug>.json لكل مقال.
const articles = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    metaDescription: z.string(),
    focusKeyword: z.string().optional().default(''),
    category: z.string().optional().default('Entertainment News'),
    altText: z.string().optional().default(''),
    image: z.string().optional().default(''),
    hashtags: z.array(z.string()).optional().default([]),
    linkedCelebrity: z.string().nullable().optional().default(null),
    publishDate: z.coerce.date(),
    html: z.string()
  })
});

export const collections = { articles };
