import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { CartItemCreateNestedManyWithoutProductInputObjectSchema as CartItemCreateNestedManyWithoutProductInputObjectSchema } from './CartItemCreateNestedManyWithoutProductInput.schema';
import { OrderItemCreateNestedManyWithoutProductInputObjectSchema as OrderItemCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductInput.schema';
import { ProductBillingOptionCreateNestedManyWithoutProductInputObjectSchema as ProductBillingOptionCreateNestedManyWithoutProductInputObjectSchema } from './ProductBillingOptionCreateNestedManyWithoutProductInput.schema';
import { ProductFeatureCreateNestedManyWithoutProductInputObjectSchema as ProductFeatureCreateNestedManyWithoutProductInputObjectSchema } from './ProductFeatureCreateNestedManyWithoutProductInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  deployMode: z.string().optional(),
  specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  category: ProductCategorySchema,
  icon: z.string().optional().nullable(),
  inStock: z.boolean().optional(),
  planName: z.string(),
  price: z.number().int(),
  featureCategory: z.string().optional(),
  badge: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema).optional(),
  billingOptions: z.lazy(() => ProductBillingOptionCreateNestedManyWithoutProductInputObjectSchema).optional(),
  features: z.lazy(() => ProductFeatureCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutDiscountInput>;
export const ProductCreateWithoutDiscountInputObjectZodSchema = makeSchema();
