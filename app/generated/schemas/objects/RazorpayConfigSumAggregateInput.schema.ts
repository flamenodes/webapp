import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pteroNodeId: z.literal(true).optional()
}).strict();
export const RazorpayConfigSumAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigSumAggregateInputType>;
export const RazorpayConfigSumAggregateInputObjectZodSchema = makeSchema();
