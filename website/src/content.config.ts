import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		author: z.string().default('Kunwer Sachdev'),
		tags: z.array(z.string()).default([]),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/news" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		pubDate: z.coerce.date(),
		link: z.string().url(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
	}),
});

export const collections = { blog, news };
