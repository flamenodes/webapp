import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const TicketTagPresetMaxAggregateInputObjectSchema: z.ZodType<Prisma.TicketTagPresetMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetMaxAggregateInputType>;
export const TicketTagPresetMaxAggregateInputObjectZodSchema = makeSchema();
