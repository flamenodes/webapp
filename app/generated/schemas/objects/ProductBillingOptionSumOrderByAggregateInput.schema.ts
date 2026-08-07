import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  customDays: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionSumOrderByAggregateInput>;
export const ProductBillingOptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
