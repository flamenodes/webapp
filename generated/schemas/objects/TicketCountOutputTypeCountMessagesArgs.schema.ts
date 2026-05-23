import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './TicketMessageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereInputObjectSchema).optional()
}).strict();
export const TicketCountOutputTypeCountMessagesArgsObjectSchema = makeSchema();
export const TicketCountOutputTypeCountMessagesArgsObjectZodSchema = makeSchema();
