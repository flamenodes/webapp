import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TicketTagPresetCreateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetCreateInput>;
export const TicketTagPresetCreateInputObjectZodSchema = makeSchema();
