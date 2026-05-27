import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketPrioritySchema } from '../enums/TicketPriority.schema'

const makeSchema = () => z.object({
  set: TicketPrioritySchema.optional()
}).strict();
export const EnumTicketPriorityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTicketPriorityFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTicketPriorityFieldUpdateOperationsInput>;
export const EnumTicketPriorityFieldUpdateOperationsInputObjectZodSchema = makeSchema();
