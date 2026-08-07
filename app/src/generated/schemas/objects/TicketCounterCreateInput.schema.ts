import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string(),
  seq: z.number().int().optional()
}).strict();
export const TicketCounterCreateInputObjectSchema: z.ZodType<Prisma.TicketCounterCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterCreateInput>;
export const TicketCounterCreateInputObjectZodSchema = makeSchema();
