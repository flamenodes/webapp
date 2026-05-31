import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    ticketId: SortOrderSchema.optional(),
    senderId: SortOrderSchema.optional(),
    senderRole: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    attachments: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const TicketMessageCountOrderByAggregateInputObjectSchema = makeSchema();
export const TicketMessageCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageCountOrderByAggregateInput.schema.js.map