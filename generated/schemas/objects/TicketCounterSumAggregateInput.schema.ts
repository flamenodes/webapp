import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  seq: z.literal(true).optional()
}).strict();
export const TicketCounterSumAggregateInputObjectSchema: z.ZodType<Prisma.TicketCounterSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterSumAggregateInputType>;
export const TicketCounterSumAggregateInputObjectZodSchema = makeSchema();
