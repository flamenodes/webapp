import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema as OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';
import { InvoiceCreateNestedOneWithoutOrderInputObjectSchema as InvoiceCreateNestedOneWithoutOrderInputObjectSchema } from './InvoiceCreateNestedOneWithoutOrderInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: OrderStatusSchema.optional(),
  subtotalAmount: z.number().int(),
  discountAmount: z.number().int().optional(),
  totalAmount: z.number().int(),
  couponCode: z.string().optional().nullable(),
  deliveryMessage: z.string().optional().nullable(),
  deliveryData: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema).optional(),
  invoice: z.lazy(() => InvoiceCreateNestedOneWithoutOrderInputObjectSchema).optional()
}).strict();
export const OrderCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OrderCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateWithoutUserInput>;
export const OrderCreateWithoutUserInputObjectZodSchema = makeSchema();
