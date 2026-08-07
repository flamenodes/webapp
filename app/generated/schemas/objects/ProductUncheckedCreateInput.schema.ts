import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateNestedManyWithoutProductInput.schema';
import { CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateNestedManyWithoutProductInput.schema'

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
  discountId: z.string().optional().nullable(),
  specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  deployMode: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  features: z.lazy(() => ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  billingOptions: z.lazy(() => ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateInput>;
export const ProductUncheckedCreateInputObjectZodSchema = makeSchema();
