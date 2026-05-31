import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductBillingOptionCountOrderByAggregateInputObjectSchema as ProductBillingOptionCountOrderByAggregateInputObjectSchema } from './ProductBillingOptionCountOrderByAggregateInput.schema';
import { ProductBillingOptionAvgOrderByAggregateInputObjectSchema as ProductBillingOptionAvgOrderByAggregateInputObjectSchema } from './ProductBillingOptionAvgOrderByAggregateInput.schema';
import { ProductBillingOptionMaxOrderByAggregateInputObjectSchema as ProductBillingOptionMaxOrderByAggregateInputObjectSchema } from './ProductBillingOptionMaxOrderByAggregateInput.schema';
import { ProductBillingOptionMinOrderByAggregateInputObjectSchema as ProductBillingOptionMinOrderByAggregateInputObjectSchema } from './ProductBillingOptionMinOrderByAggregateInput.schema';
import { ProductBillingOptionSumOrderByAggregateInputObjectSchema as ProductBillingOptionSumOrderByAggregateInputObjectSchema } from './ProductBillingOptionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  billingPeriod: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductBillingOptionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductBillingOptionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductBillingOptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductBillingOptionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductBillingOptionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionOrderByWithAggregationInput>;
export const ProductBillingOptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
