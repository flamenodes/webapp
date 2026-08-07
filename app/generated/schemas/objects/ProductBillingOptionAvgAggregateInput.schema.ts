import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  price: z.literal(true).optional(),
  customDays: z.literal(true).optional()
}).strict();
export const ProductBillingOptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionAvgAggregateInputType>;
export const ProductBillingOptionAvgAggregateInputObjectZodSchema = makeSchema();
