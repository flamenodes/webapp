import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TicketMessageWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketMessageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageWhereUniqueInput>;
export const TicketMessageWhereUniqueInputObjectZodSchema = makeSchema();
