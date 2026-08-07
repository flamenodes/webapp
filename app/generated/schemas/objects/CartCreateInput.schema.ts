import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { UserCreateNestedOneWithoutCartInputObjectSchema as UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartCreateInputObjectSchema: z.ZodType<Prisma.CartCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateInput>;
export const CartCreateInputObjectZodSchema = makeSchema();
