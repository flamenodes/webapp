import * as z from 'zod';
import { TicketCountOutputTypeSelectObjectSchema as TicketCountOutputTypeSelectObjectSchema } from './TicketCountOutputTypeSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => TicketCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TicketCountOutputTypeArgsObjectSchema = makeSchema();
export const TicketCountOutputTypeArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCountOutputTypeArgs.schema.js.map