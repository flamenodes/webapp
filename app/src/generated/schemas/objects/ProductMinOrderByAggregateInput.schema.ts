import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
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
  deployMode: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinOrderByAggregateInput>;
export const ProductMinOrderByAggregateInputObjectZodSchema = makeSchema();
