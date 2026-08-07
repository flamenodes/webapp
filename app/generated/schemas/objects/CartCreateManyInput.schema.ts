import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  couponCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartCreateManyInputObjectSchema: z.ZodType<Prisma.CartCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateManyInput>;
export const CartCreateManyInputObjectZodSchema = makeSchema();
