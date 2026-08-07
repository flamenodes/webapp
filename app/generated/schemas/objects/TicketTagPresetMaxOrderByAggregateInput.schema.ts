import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetMaxOrderByAggregateInput>;
export const TicketTagPresetMaxOrderByAggregateInputObjectZodSchema = makeSchema();
