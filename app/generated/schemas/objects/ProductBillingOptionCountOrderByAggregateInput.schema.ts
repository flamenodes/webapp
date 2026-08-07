import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  customDays: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCountOrderByAggregateInput>;
export const ProductBillingOptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
