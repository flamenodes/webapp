import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional()
}).strict();
export const TicketTagPresetWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketTagPresetWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetWhereUniqueInput>;
export const TicketTagPresetWhereUniqueInputObjectZodSchema = makeSchema();
