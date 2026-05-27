import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DiscountCreateNestedOneWithoutProductInputObjectSchema as DiscountCreateNestedOneWithoutProductInputObjectSchema } from './DiscountCreateNestedOneWithoutProductInput.schema';
import { CartItemCreateNestedManyWithoutProductInputObjectSchema as CartItemCreateNestedManyWithoutProductInputObjectSchema } from './CartItemCreateNestedManyWithoutProductInput.schema';
import { OrderItemCreateNestedManyWithoutProductInputObjectSchema as OrderItemCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  planName: z.string(),
  icon: z.string().optional().nullable(),
  badge: z.string().optional().nullable(),
  category: ProductCategorySchema,
  price: z.number().int(),
  sortOrder: z.number().int().optional(),
  featureCategory: z.string().optional(),
  inStock: z.boolean().optional(),
  specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  deployMode: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  discount: z.lazy(() => DiscountCreateNestedOneWithoutProductInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutFeaturesInput>;
export const ProductCreateWithoutFeaturesInputObjectZodSchema = makeSchema();
