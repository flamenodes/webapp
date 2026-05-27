import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageCreateManySenderInputObjectSchema as TicketMessageCreateManySenderInputObjectSchema } from './TicketMessageCreateManySenderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TicketMessageCreateManySenderInputObjectSchema), z.lazy(() => TicketMessageCreateManySenderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TicketMessageCreateManySenderInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketMessageCreateManySenderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateManySenderInputEnvelope>;
export const TicketMessageCreateManySenderInputEnvelopeObjectZodSchema = makeSchema();
