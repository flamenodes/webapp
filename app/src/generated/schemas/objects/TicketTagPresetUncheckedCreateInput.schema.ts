import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const TicketTagPresetUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetUncheckedCreateInput>;
export const TicketTagPresetUncheckedCreateInputObjectZodSchema = makeSchema();
