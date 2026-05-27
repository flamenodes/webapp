import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateNestedOneWithoutCartInputObjectSchema as UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
}).strict();
export const CartCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateWithoutItemsInput>;
export const CartCreateWithoutItemsInputObjectZodSchema = makeSchema();
