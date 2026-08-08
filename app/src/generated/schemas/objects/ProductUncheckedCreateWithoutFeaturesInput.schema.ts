import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateNestedManyWithoutProductInput.schema'

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
  discountId: z.string().optional().nullable(),
  featureCategory: z.string().optional(),
  badge: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  billingOptions: z.lazy(() => ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateWithoutFeaturesInput>;
export const ProductUncheckedCreateWithoutFeaturesInputObjectZodSchema = makeSchema();
