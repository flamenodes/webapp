import * as z from 'zod';
export const PageDocumentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  status: z.any(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));