import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageCreateManyTicketInputObjectSchema as TicketMessageCreateManyTicketInputObjectSchema } from './TicketMessageCreateManyTicketInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TicketMessageCreateManyTicketInputObjectSchema), z.lazy(() => TicketMessageCreateManyTicketInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TicketMessageCreateManyTicketInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketMessageCreateManyTicketInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateManyTicketInputEnvelope>;
export const TicketMessageCreateManyTicketInputEnvelopeObjectZodSchema = makeSchema();
