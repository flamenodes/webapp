import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  seq: z.literal(true).optional()
}).strict();
export const TicketCounterMaxAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterMaxAggregateInputType>;
export const TicketCounterMaxAggregateInputObjectZodSchema = makeSchema();
