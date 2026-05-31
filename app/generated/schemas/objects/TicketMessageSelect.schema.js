import * as z from 'zod';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './TicketArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
    senderId: z.boolean().optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    senderRole: z.boolean().optional(),
    content: z.boolean().optional(),
    attachments: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const TicketMessageSelectObjectSchema = makeSchema();
export const TicketMessageSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageSelect.schema.js.map