import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './TicketMessageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TicketMessageSelectObjectSchema).optional(),
  include: z.lazy(() => TicketMessageIncludeObjectSchema).optional()
}).strict();
export const TicketMessageArgsObjectSchema = makeSchema();
export const TicketMessageArgsObjectZodSchema = makeSchema();
