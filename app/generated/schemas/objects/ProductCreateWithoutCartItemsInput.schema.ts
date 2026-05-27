import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductFeatureCreateNestedManyWithoutProductInputObjectSchema as ProductFeatureCreateNestedManyWithoutProductInputObjectSchema } from './ProductFeatureCreateNestedManyWithoutProductInput.schema';
import { DiscountCreateNestedOneWithoutProductInputObjectSchema as DiscountCreateNestedOneWithoutProductInputObjectSchema } from './DiscountCreateNestedOneWithoutProductInput.schema';
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  features: z.lazy(() => ProductFeatureCreateNestedManyWithoutProductInputObjectSchema).optional(),
  discount: z.lazy(() => DiscountCreateNestedOneWithoutProductInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutCartItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutCartItemsInput>;
export const ProductCreateWithoutCartItemsInputObjectZodSchema = makeSchema();
