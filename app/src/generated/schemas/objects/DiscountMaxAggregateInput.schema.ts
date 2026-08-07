import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  percentage: z.literal(true).optional()
}).strict();
export const DiscountMaxAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiscountMaxAggregateInputType>;
export const DiscountMaxAggregateInputObjectZodSchema = makeSchema();
