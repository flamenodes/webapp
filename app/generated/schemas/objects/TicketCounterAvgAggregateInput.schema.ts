import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  seq: z.literal(true).optional()
}).strict();
export const TicketCounterAvgAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterAvgAggregateInputType>;
export const TicketCounterAvgAggregateInputObjectZodSchema = makeSchema();
