import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketTagPresetOrderByWithRelationInput>;
export const TicketTagPresetOrderByWithRelationInputObjectZodSchema = makeSchema();
