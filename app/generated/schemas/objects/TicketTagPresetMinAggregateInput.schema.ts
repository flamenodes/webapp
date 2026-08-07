import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TicketTagPresetMinAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetMinAggregateInputType>;
export const TicketTagPresetMinAggregateInputObjectZodSchema = makeSchema();
