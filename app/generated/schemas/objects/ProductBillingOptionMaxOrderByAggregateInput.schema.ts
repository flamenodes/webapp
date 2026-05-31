import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionMaxOrderByAggregateInput>;
export const ProductBillingOptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
