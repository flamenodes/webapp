import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  maxUses: SortOrderSchema.optional(),
  usedCount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CouponMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponMaxOrderByAggregateInput>;
export const CouponMaxOrderByAggregateInputObjectZodSchema = makeSchema();
