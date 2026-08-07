import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  maxUses: SortOrderSchema.optional(),
  usedCount: SortOrderSchema.optional()
}).strict();
export const CouponSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponSumOrderByAggregateInput>;
export const CouponSumOrderByAggregateInputObjectZodSchema = makeSchema();
