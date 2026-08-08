import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  totalAmount: z.literal(true).optional(),
  discountAmount: z.literal(true).optional(),
  subtotalAmount: z.literal(true).optional()
}).strict();
export const OrderSumAggregateInputObjectSchema: z.ZodType<Prisma.OrderSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderSumAggregateInputType>;
export const OrderSumAggregateInputObjectZodSchema = makeSchema();
