import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './TicketCounterSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TicketCounterSelectObjectSchema).optional()
}).strict();
export const TicketCounterArgsObjectSchema = makeSchema();
export const TicketCounterArgsObjectZodSchema = makeSchema();
