import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  seq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TicketCounterUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TicketCounterUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCounterUpdateManyMutationInput>;
export const TicketCounterUpdateManyMutationInputObjectZodSchema = makeSchema();
