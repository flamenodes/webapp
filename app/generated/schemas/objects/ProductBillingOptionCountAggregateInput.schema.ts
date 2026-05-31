import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  billingPeriod: z.literal(true).optional(),
  price: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductBillingOptionCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType>;
export const ProductBillingOptionCountAggregateInputObjectZodSchema = makeSchema();
