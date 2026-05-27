import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const CartWhereUniqueInputObjectSchema: z.ZodType<Prisma.CartWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartWhereUniqueInput>;
export const CartWhereUniqueInputObjectZodSchema = makeSchema();
