import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  planName: SortOrderSchema.optional(),
  icon: SortOrderSchema.optional(),
  badge: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  featureCategory: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  discountId: SortOrderSchema.optional(),
  specs: SortOrderSchema.optional(),
  deployMode: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOrderByAggregateInput>;
export const ProductCountOrderByAggregateInputObjectZodSchema = makeSchema();
