import * as z from 'zod';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema';

export const AnnouncementSchema = z.object({
  id: z.string(),
  title: z.string(),
  message: z.string(),
  type: AnnouncementTypeSchema.default("INFO"),
  active: z.boolean().default(true),
  priority: z.number().int(),
  link: z.string().nullish(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});

export type AnnouncementType = z.infer<typeof AnnouncementSchema>;
