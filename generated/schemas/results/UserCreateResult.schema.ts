import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.date().optional(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  servers: z.array(z.unknown()),
  cart: z.unknown().optional(),
  orders: z.array(z.unknown()),
  displayUsername: z.string().optional()
});