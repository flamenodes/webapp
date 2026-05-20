import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema';
import { ProductCreateNestedOneWithoutCartItemsInputObjectSchema as ProductCreateNestedOneWithoutCartItemsInputObjectSchema } from './ProductCreateNestedOneWithoutCartItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  billingPeriod: BillingPeriodSchema.optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemsInputObjectSchema)
}).strict();
export const CartItemCreateInputObjectSchema: z.ZodType<Prisma.CartItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateInput>;
export const CartItemCreateInputObjectZodSchema = makeSchema();
