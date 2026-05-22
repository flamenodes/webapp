import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductCategoryFieldUpdateOperationsInputObjectSchema as EnumProductCategoryFieldUpdateOperationsInputObjectSchema } from './EnumProductCategoryFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductFeatureUpdateManyWithoutProductNestedInputObjectSchema as ProductFeatureUpdateManyWithoutProductNestedInputObjectSchema } from './ProductFeatureUpdateManyWithoutProductNestedInput.schema';
import { DiscountUpdateOneWithoutProductNestedInputObjectSchema as DiscountUpdateOneWithoutProductNestedInputObjectSchema } from './DiscountUpdateOneWithoutProductNestedInput.schema';
import { CartItemUpdateManyWithoutProductNestedInputObjectSchema as CartItemUpdateManyWithoutProductNestedInputObjectSchema } from './CartItemUpdateManyWithoutProductNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  planName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  icon: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  badge: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  category: z.union([ProductCategorySchema, z.lazy(() => EnumProductCategoryFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  featureCategory: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inStock: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  deployMode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  features: z.lazy(() => ProductFeatureUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  discount: z.lazy(() => DiscountUpdateOneWithoutProductNestedInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateWithoutOrderItemsInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput>;
export const ProductUpdateWithoutOrderItemsInputObjectZodSchema = makeSchema();
