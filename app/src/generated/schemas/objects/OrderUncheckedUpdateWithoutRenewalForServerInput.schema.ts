import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { EnumOrderStatusFieldUpdateOperationsInputObjectSchema as EnumOrderStatusFieldUpdateOperationsInputObjectSchema } from './EnumOrderStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { InvoiceUncheckedUpdateOneWithoutOrderNestedInputObjectSchema as InvoiceUncheckedUpdateOneWithoutOrderNestedInputObjectSchema } from './InvoiceUncheckedUpdateOneWithoutOrderNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema as OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalAmount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([OrderStatusSchema, z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  deliveryMessage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deliveryData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  couponCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  discountAmount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  subtotalAmount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  invoice: z.lazy(() => InvoiceUncheckedUpdateOneWithoutOrderNestedInputObjectSchema).optional(),
  items: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema).optional()
}).strict();
export const OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateWithoutRenewalForServerInput>;
export const OrderUncheckedUpdateWithoutRenewalForServerInputObjectZodSchema = makeSchema();
