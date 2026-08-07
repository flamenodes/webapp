import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  seq: z.literal(true).optional()
}).strict();
export const TicketCounterMinAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterMinAggregateInputType>;
export const TicketCounterMinAggregateInputObjectZodSchema = makeSchema();
