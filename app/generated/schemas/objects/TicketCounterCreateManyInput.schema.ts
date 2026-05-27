import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  seq: z.number().int().optional()
}).strict();
export const TicketCounterCreateManyInputObjectSchema: z.ZodType<Prisma.TicketCounterCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterCreateManyInput>;
export const TicketCounterCreateManyInputObjectZodSchema = makeSchema();
