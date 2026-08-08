import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema as CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { DiscountOrderByWithRelationInputObjectSchema as DiscountOrderByWithRelationInputObjectSchema } from './DiscountOrderByWithRelationInput.schema';
import { ProductBillingOptionOrderByRelationAggregateInputObjectSchema as ProductBillingOptionOrderByRelationAggregateInputObjectSchema } from './ProductBillingOptionOrderByRelationAggregateInput.schema';
import { ProductFeatureOrderByRelationAggregateInputObjectSchema as ProductFeatureOrderByRelationAggregateInputObjectSchema } from './ProductFeatureOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  deployMode: SortOrderSchema.optional(),
  specs: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  icon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  inStock: SortOrderSchema.optional(),
  planName: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discountId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  featureCategory: SortOrderSchema.optional(),
  badge: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sortOrder: SortOrderSchema.optional(),
  cartItems: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
  discount: z.lazy(() => DiscountOrderByWithRelationInputObjectSchema).optional(),
  billingOptions: z.lazy(() => ProductBillingOptionOrderByRelationAggregateInputObjectSchema).optional(),
  features: z.lazy(() => ProductFeatureOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
