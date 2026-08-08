import * as z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullish(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
  banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
  banReason: z.string().nullish(),
  banned: z.boolean().nullish(),
  displayUsername: z.string().nullish(),
  firstname: z.string(),
  lastname: z.string(),
  role: z.string().nullish(),
  username: z.string(),
  clientId: z.string(),
  pteroUserId: z.number().int().nullish(),
});

export type UserType = z.infer<typeof UserSchema>;
