import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigMinOrderByAggregateInput>;
export const ProductCategoryConfigMinOrderByAggregateInputObjectZodSchema = makeSchema();
