import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureMaxOrderByAggregateInput>;
export const ProductFeatureMaxOrderByAggregateInputObjectZodSchema = makeSchema();
