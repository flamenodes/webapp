import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const NotificationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: UserSchema.optional(),
  type: z.string(),
  title: z.string(),
  message: z.string(),
  read: z.boolean(),
  link: z.string().optional(),
  metadata: z.any().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));