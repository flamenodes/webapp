import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { InvoiceCreateNestedOneWithoutOrderInputObjectSchema as InvoiceCreateNestedOneWithoutOrderInputObjectSchema } from './InvoiceCreateNestedOneWithoutOrderInput.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema as OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  totalAmount: z.number().int(),
  status: OrderStatusSchema.optional(),
  deliveryMessage: z.string().optional().nullable(),
  deliveryData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  couponCode: z.string().optional().nullable(),
  discountAmount: z.number().int().optional(),
  subtotalAmount: z.number().int(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  invoice: z.lazy(() => InvoiceCreateNestedOneWithoutOrderInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema),
  items: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderCreateWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderCreateWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateWithoutRenewalForServerInput>;
export const OrderCreateWithoutRenewalForServerInputObjectZodSchema = makeSchema();
