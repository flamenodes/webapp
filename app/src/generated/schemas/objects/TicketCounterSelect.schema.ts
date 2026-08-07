import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  seq: z.boolean().optional()
}).strict();
export const TicketCounterSelectObjectSchema: z.ZodType<Prisma.TicketCounterSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterSelect>;
export const TicketCounterSelectObjectZodSchema = makeSchema();
