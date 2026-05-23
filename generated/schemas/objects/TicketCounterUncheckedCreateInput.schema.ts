import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  seq: z.number().int().optional()
}).strict();
export const TicketCounterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketCounterUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterUncheckedCreateInput>;
export const TicketCounterUncheckedCreateInputObjectZodSchema = makeSchema();
