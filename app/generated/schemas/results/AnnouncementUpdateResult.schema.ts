import * as z from 'zod';
export const AnnouncementUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  message: z.string(),
  type: z.unknown(),
  active: z.boolean(),
  priority: z.number().int(),
  link: z.string().optional(),
  expiresAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));