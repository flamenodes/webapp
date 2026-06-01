import * as z from 'zod';
export const NotificationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  read: z.boolean(),
  link: z.string().optional(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
}));