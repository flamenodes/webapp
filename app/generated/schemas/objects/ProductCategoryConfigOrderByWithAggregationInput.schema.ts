import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductCategoryConfigCountOrderByAggregateInputObjectSchema as ProductCategoryConfigCountOrderByAggregateInputObjectSchema } from './ProductCategoryConfigCountOrderByAggregateInput.schema';
import { ProductCategoryConfigMaxOrderByAggregateInputObjectSchema as ProductCategoryConfigMaxOrderByAggregateInputObjectSchema } from './ProductCategoryConfigMaxOrderByAggregateInput.schema';
import { ProductCategoryConfigMinOrderByAggregateInputObjectSchema as ProductCategoryConfigMinOrderByAggregateInputObjectSchema } from './ProductCategoryConfigMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  billingPeriods: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductCategoryConfigCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductCategoryConfigMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductCategoryConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductCategoryConfigOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigOrderByWithAggregationInput>;
export const ProductCategoryConfigOrderByWithAggregationInputObjectZodSchema = makeSchema();
