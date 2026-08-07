import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductFeatureCountOrderByAggregateInputObjectSchema as ProductFeatureCountOrderByAggregateInputObjectSchema } from './ProductFeatureCountOrderByAggregateInput.schema';
import { ProductFeatureAvgOrderByAggregateInputObjectSchema as ProductFeatureAvgOrderByAggregateInputObjectSchema } from './ProductFeatureAvgOrderByAggregateInput.schema';
import { ProductFeatureMaxOrderByAggregateInputObjectSchema as ProductFeatureMaxOrderByAggregateInputObjectSchema } from './ProductFeatureMaxOrderByAggregateInput.schema';
import { ProductFeatureMinOrderByAggregateInputObjectSchema as ProductFeatureMinOrderByAggregateInputObjectSchema } from './ProductFeatureMinOrderByAggregateInput.schema';
import { ProductFeatureSumOrderByAggregateInputObjectSchema as ProductFeatureSumOrderByAggregateInputObjectSchema } from './ProductFeatureSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductFeatureCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductFeatureAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductFeatureMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductFeatureMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductFeatureSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductFeatureOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductFeatureOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureOrderByWithAggregationInput>;
export const ProductFeatureOrderByWithAggregationInputObjectZodSchema = makeSchema();
