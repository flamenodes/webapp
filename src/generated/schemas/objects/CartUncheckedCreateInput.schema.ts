import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateInput>;
export const CartUncheckedCreateInputObjectZodSchema = makeSchema();
