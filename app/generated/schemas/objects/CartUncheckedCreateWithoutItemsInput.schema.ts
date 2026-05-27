import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput>;
export const CartUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
