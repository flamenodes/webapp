import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  configuration: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutProductInput>;
export const CartItemCreateWithoutProductInputObjectZodSchema = makeSchema();
