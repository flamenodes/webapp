import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  percentage: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DiscountCountAggregateInputObjectSchema: z.ZodType<Prisma.DiscountCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCountAggregateInputType>;
export const DiscountCountAggregateInputObjectZodSchema = makeSchema();
