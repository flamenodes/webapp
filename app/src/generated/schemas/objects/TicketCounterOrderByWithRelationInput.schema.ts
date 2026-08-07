import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketCounterOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterOrderByWithRelationInput>;
export const TicketCounterOrderByWithRelationInputObjectZodSchema = makeSchema();
