import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  subtotalAmount: z.literal(true).optional(),
  discountAmount: z.literal(true).optional(),
  totalAmount: z.literal(true).optional(),
  couponCode: z.literal(true).optional(),
  deliveryMessage: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrderMinAggregateInputObjectSchema: z.ZodType<Prisma.OrderMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderMinAggregateInputType>;
export const OrderMinAggregateInputObjectZodSchema = makeSchema();
