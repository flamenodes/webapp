import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  billingPeriod: z.literal(true).optional(),
  price: z.literal(true).optional(),
  customDays: z.literal(true).optional()
}).strict();
export const ProductBillingOptionMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionMaxAggregateInputType>;
export const ProductBillingOptionMaxAggregateInputObjectZodSchema = makeSchema();
