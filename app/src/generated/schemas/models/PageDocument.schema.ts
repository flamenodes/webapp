import * as z from 'zod';
import { PageStatusSchema } from '../enums/PageStatus.schema';

export const PageDocumentSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  status: PageStatusSchema.default("DRAFT"),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type PageDocumentType = z.infer<typeof PageDocumentSchema>;
