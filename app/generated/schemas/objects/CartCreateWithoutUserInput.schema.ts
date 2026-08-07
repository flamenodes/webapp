import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateWithoutUserInput>;
export const CartCreateWithoutUserInputObjectZodSchema = makeSchema();
