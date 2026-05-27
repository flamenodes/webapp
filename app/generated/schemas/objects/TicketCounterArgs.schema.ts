import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './TicketCounterSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TicketCounterSelectObjectSchema).optional()
}).strict();
export const TicketCounterArgsObjectSchema = makeSchema();
export const TicketCounterArgsObjectZodSchema = makeSchema();
