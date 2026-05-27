import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  percentage: z.literal(true).optional()
}).strict();
export const DiscountSumAggregateInputObjectSchema: z.ZodType<Prisma.DiscountSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiscountSumAggregateInputType>;
export const DiscountSumAggregateInputObjectZodSchema = makeSchema();
