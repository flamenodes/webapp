import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  deployMode: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  icon: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  planName: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discountId: SortOrderSchema.optional(),
  featureCategory: SortOrderSchema.optional(),
  badge: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinOrderByAggregateInput>;
export const ProductMinOrderByAggregateInputObjectZodSchema = makeSchema();
