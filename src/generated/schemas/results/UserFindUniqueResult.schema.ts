import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  sessions: z.array(z.any()),
  accounts: z.array(z.any()),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  servers: z.array(z.any()),
  cart: z.any().optional(),
  orders: z.array(z.any()),
  displayUsername: z.string().optional()
}));