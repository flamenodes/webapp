import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  ticketId: z.string().optional()
}).strict();
export const TicketWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketWhereUniqueInput>;
export const TicketWhereUniqueInputObjectZodSchema = makeSchema();
