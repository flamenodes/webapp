import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { InvoiceCreateNestedOneWithoutOrderInputObjectSchema as InvoiceCreateNestedOneWithoutOrderInputObjectSchema } from './InvoiceCreateNestedOneWithoutOrderInput.schema';
import { ServerCreateNestedOneWithoutRenewalsInputObjectSchema as ServerCreateNestedOneWithoutRenewalsInputObjectSchema } from './ServerCreateNestedOneWithoutRenewalsInput.schema';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema as UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema'

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
  renewalForServer: z.lazy(() => ServerCreateNestedOneWithoutRenewalsInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema)
}).strict();
export const OrderCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateWithoutItemsInput>;
export const OrderCreateWithoutItemsInputObjectZodSchema = makeSchema();
