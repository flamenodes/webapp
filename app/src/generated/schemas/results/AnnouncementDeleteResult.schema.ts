import * as z from 'zod';
export const AnnouncementDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  message: z.string(),
  type: z.any(),
  active: z.boolean(),
  priority: z.number().int(),
  link: z.string().optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));