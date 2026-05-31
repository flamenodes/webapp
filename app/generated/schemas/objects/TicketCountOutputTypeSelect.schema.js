import * as z from 'zod';
import { TicketCountOutputTypeCountMessagesArgsObjectSchema as TicketCountOutputTypeCountMessagesArgsObjectSchema } from './TicketCountOutputTypeCountMessagesArgs.schema';
const makeSchema = () => z.object({
    messages: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeCountMessagesArgsObjectSchema)]).optional()
}).strict();
export const TicketCountOutputTypeSelectObjectSchema = makeSchema();
export const TicketCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCountOutputTypeSelect.schema.js.map