import * as z from 'zod';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './TicketArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TicketMessageIncludeObjectSchema = makeSchema();
export const TicketMessageIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageInclude.schema.js.map