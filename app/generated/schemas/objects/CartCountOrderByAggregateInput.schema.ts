import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  couponCode: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CartCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCountOrderByAggregateInput>;
export const CartCountOrderByAggregateInputObjectZodSchema = makeSchema();
