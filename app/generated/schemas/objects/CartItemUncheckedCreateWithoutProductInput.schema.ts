import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartItemUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput>;
export const CartItemUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
