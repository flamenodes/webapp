import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketCountOutputTypeSelectObjectSchema as TicketCountOutputTypeSelectObjectSchema } from './TicketCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TicketCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TicketCountOutputTypeArgsObjectSchema = makeSchema();
export const TicketCountOutputTypeArgsObjectZodSchema = makeSchema();
