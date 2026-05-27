import * as z from 'zod';
export const PageDocumentFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));