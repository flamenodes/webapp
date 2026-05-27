import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetMinOrderByAggregateInput>;
export const TicketTagPresetMinOrderByAggregateInputObjectZodSchema = makeSchema();
