import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const SessionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  token: z.string(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: z.string(),
  impersonatedBy: z.string().optional(),
  user: UserSchema.optional()
}));