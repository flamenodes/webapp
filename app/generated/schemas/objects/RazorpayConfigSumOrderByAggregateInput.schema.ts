import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  pteroNodeId: SortOrderSchema.optional()
}).strict();
export const RazorpayConfigSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigSumOrderByAggregateInput>;
export const RazorpayConfigSumOrderByAggregateInputObjectZodSchema = makeSchema();
