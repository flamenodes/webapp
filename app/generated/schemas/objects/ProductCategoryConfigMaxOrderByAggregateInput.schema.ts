import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigMaxOrderByAggregateInput>;
export const ProductCategoryConfigMaxOrderByAggregateInputObjectZodSchema = makeSchema();
