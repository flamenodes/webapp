import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductCategoryFieldUpdateOperationsInputObjectSchema as EnumProductCategoryFieldUpdateOperationsInputObjectSchema } from './EnumProductCategoryFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductFeatureUncheckedUpdateManyWithoutProductNestedInputObjectSchema as ProductFeatureUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductFeatureUncheckedUpdateManyWithoutProductNestedInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema as CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema as OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductNestedInput.schema'

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
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  features: z.lazy(() => ProductFeatureUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUncheckedUpdateWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateWithoutDiscountInput>;
export const ProductUncheckedUpdateWithoutDiscountInputObjectZodSchema = makeSchema();
