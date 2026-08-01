import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  customDays: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionMinOrderByAggregateInput>;
export const ProductBillingOptionMinOrderByAggregateInputObjectZodSchema = makeSchema();
