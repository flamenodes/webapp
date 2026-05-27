import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CartUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput>;
export const CartUncheckedCreateWithoutItemsInputObjectZodSchema = makeSchema();
