import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterMinOrderByAggregateInput>;
export const TicketCounterMinOrderByAggregateInputObjectZodSchema = makeSchema();
