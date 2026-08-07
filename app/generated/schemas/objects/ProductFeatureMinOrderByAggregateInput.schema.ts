import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureMinOrderByAggregateInput>;
export const ProductFeatureMinOrderByAggregateInputObjectZodSchema = makeSchema();
