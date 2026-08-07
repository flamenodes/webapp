import * as z from 'zod';
export const NotificationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown().optional(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  read: z.boolean(),
  link: z.string().optional(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
}));