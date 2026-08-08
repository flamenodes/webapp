import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  banExpires: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  banned: SortOrderSchema.optional(),
  displayUsername: SortOrderSchema.optional(),
  firstname: SortOrderSchema.optional(),
  lastname: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  pteroUserId: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export const UserCountOrderByAggregateInputObjectZodSchema = makeSchema();
