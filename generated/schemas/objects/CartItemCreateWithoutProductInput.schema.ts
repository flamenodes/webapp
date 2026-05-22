import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutProductInput>;
export const CartItemCreateWithoutProductInputObjectZodSchema = makeSchema();
