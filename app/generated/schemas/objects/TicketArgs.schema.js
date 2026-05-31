import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './TicketInclude.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => TicketSelectObjectSchema).optional(),
    include: z.lazy(() => TicketIncludeObjectSchema).optional()
}).strict();
export const TicketArgsObjectSchema = makeSchema();
export const TicketArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketArgs.schema.js.map