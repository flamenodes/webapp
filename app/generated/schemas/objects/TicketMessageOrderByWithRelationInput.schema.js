import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './TicketOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    ticketId: SortOrderSchema.optional(),
    senderId: SortOrderSchema.optional(),
    senderRole: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    attachments: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: SortOrderSchema.optional(),
    ticket: z.lazy(() => TicketOrderByWithRelationInputObjectSchema).optional(),
    sender: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TicketMessageOrderByWithRelationInputObjectSchema = makeSchema();
export const TicketMessageOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageOrderByWithRelationInput.schema.js.map