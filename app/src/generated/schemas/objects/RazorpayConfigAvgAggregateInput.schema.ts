import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  pteroNodeId: z.literal(true).optional()
}).strict();
export const RazorpayConfigAvgAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigAvgAggregateInputType>;
export const RazorpayConfigAvgAggregateInputObjectZodSchema = makeSchema();
