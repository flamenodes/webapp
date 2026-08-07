import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  seq: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TicketCounterCountAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterCountAggregateInputType>;
export const TicketCounterCountAggregateInputObjectZodSchema = makeSchema();
