import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  maxUses: SortOrderSchema.optional(),
  usedCount: SortOrderSchema.optional()
}).strict();
export const CouponAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CouponAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CouponAvgOrderByAggregateInput>;
export const CouponAvgOrderByAggregateInputObjectZodSchema = makeSchema();
