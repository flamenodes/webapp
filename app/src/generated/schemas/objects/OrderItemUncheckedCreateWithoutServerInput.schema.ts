import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema,
  unitPrice: z.number().int(),
  totalPrice: z.number().int(),
  specsSnapshot: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const OrderItemUncheckedCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput>;
export const OrderItemUncheckedCreateWithoutServerInputObjectZodSchema = makeSchema();
