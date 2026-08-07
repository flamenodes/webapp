import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const TicketTagPresetSelectObjectSchema: z.ZodType<Prisma.TicketTagPresetSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetSelect>;
export const TicketTagPresetSelectObjectZodSchema = makeSchema();
