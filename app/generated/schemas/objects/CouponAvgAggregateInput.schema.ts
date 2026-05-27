import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  maxUses: z.literal(true).optional(),
  usedCount: z.literal(true).optional()
}).strict();
export const CouponAvgAggregateInputObjectSchema: z.ZodType<Prisma.CouponAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CouponAvgAggregateInputType>;
export const CouponAvgAggregateInputObjectZodSchema = makeSchema();
