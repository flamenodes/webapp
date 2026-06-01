import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  clientId: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  pteroUserId: z.number().int().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  displayUsername: z.string().optional().nullable()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
