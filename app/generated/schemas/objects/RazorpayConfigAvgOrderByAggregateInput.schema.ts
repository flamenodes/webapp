import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  pteroNodeId: SortOrderSchema.optional()
}).strict();
export const RazorpayConfigAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RazorpayConfigAvgOrderByAggregateInput>;
export const RazorpayConfigAvgOrderByAggregateInputObjectZodSchema = makeSchema();
