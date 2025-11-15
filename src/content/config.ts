import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    blurb: z.string().optional(),
    published: z.boolean(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

export const collections = {
  articles,
};
