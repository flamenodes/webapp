import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductFeatureCreateNestedManyWithoutProductInputObjectSchema as ProductFeatureCreateNestedManyWithoutProductInputObjectSchema } from './ProductFeatureCreateNestedManyWithoutProductInput.schema';
import { DiscountCreateNestedOneWithoutProductInputObjectSchema as DiscountCreateNestedOneWithoutProductInputObjectSchema } from './DiscountCreateNestedOneWithoutProductInput.schema';
import { CartItemCreateNestedManyWithoutProductInputObjectSchema as CartItemCreateNestedManyWithoutProductInputObjectSchema } from './CartItemCreateNestedManyWithoutProductInput.schema'

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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  features: z.lazy(() => ProductFeatureCreateNestedManyWithoutProductInputObjectSchema).optional(),
  discount: z.lazy(() => DiscountCreateNestedOneWithoutProductInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput>;
export const ProductCreateWithoutOrderItemsInputObjectZodSchema = makeSchema();
