import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  seq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TicketCounterUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TicketCounterUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterUncheckedUpdateInput>;
export const TicketCounterUncheckedUpdateInputObjectZodSchema = makeSchema();
