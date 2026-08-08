import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  couponCode: z.string().optional().nullable(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput>;
export const CartUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
