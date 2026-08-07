import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const CartItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.CartItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartItemAvgAggregateInputType>;
export const CartItemAvgAggregateInputObjectZodSchema = makeSchema();
