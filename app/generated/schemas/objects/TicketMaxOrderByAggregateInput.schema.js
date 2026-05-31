import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    ticketId: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    priority: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    assignedToId: SortOrderSchema.optional(),
    channelName: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    closedAt: SortOrderSchema.optional()
}).strict();
export const TicketMaxOrderByAggregateInputObjectSchema = makeSchema();
export const TicketMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMaxOrderByAggregateInput.schema.js.map