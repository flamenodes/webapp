import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DiscountOrderByWithRelationInputObjectSchema as DiscountOrderByWithRelationInputObjectSchema } from './DiscountOrderByWithRelationInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema as CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  planName: SortOrderSchema.optional(),
  icon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  featureCategory: SortOrderSchema.optional(),
  inStock: SortOrderSchema.optional(),
  discountId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  specs: SortOrderSchema.optional(),
  deployMode: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  discount: z.lazy(() => DiscountOrderByWithRelationInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
