import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  billingPeriods: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigCountOrderByAggregateInput>;
export const ProductCategoryConfigCountOrderByAggregateInputObjectZodSchema = makeSchema();
