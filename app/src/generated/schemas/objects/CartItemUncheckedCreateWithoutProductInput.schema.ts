import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CartItemUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput>;
export const CartItemUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
