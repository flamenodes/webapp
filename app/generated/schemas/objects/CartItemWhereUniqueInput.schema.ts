import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CartItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.CartItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemWhereUniqueInput>;
export const CartItemWhereUniqueInputObjectZodSchema = makeSchema();
