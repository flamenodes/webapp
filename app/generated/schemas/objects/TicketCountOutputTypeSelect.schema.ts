import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketCountOutputTypeCountMessagesArgsObjectSchema as TicketCountOutputTypeCountMessagesArgsObjectSchema } from './TicketCountOutputTypeCountMessagesArgs.schema'

const makeSchema = () => z.object({
  messages: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeCountMessagesArgsObjectSchema)]).optional()
}).strict();
export const TicketCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TicketCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketCountOutputTypeSelect>;
export const TicketCountOutputTypeSelectObjectZodSchema = makeSchema();
