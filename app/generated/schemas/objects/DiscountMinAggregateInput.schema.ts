import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  label: z.literal(true).optional(),
  percentage: z.literal(true).optional()
}).strict();
export const DiscountMinAggregateInputObjectSchema: z.ZodType<Prisma.DiscountMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DiscountMinAggregateInputType>;
export const DiscountMinAggregateInputObjectZodSchema = makeSchema();
