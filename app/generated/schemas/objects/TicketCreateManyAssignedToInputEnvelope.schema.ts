import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketCreateManyAssignedToInputObjectSchema as TicketCreateManyAssignedToInputObjectSchema } from './TicketCreateManyAssignedToInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TicketCreateManyAssignedToInputObjectSchema), z.lazy(() => TicketCreateManyAssignedToInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TicketCreateManyAssignedToInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyAssignedToInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyAssignedToInputEnvelope>;
export const TicketCreateManyAssignedToInputEnvelopeObjectZodSchema = makeSchema();
