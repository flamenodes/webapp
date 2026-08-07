import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TicketCounterWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketCounterWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterWhereUniqueInput>;
export const TicketCounterWhereUniqueInputObjectZodSchema = makeSchema();
