import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrderCreateNestedOneWithoutItemsInputObjectSchema as OrderCreateNestedOneWithoutItemsInputObjectSchema } from './OrderCreateNestedOneWithoutItemsInput.schema';
import { ServerCreateNestedOneWithoutOrderItemInputObjectSchema as ServerCreateNestedOneWithoutOrderItemInputObjectSchema } from './ServerCreateNestedOneWithoutOrderItemInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  productName: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema,
  unitPrice: z.number().int(),
  totalPrice: z.number().int(),
  specsSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutItemsInputObjectSchema),
  server: z.lazy(() => ServerCreateNestedOneWithoutOrderItemInputObjectSchema).optional()
}).strict();
export const OrderItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateWithoutProductInput>;
export const OrderItemCreateWithoutProductInputObjectZodSchema = makeSchema();
