import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TicketMessageOrderByRelationAggregateInputObjectSchema as TicketMessageOrderByRelationAggregateInputObjectSchema } from './TicketMessageOrderByRelationAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    ticketId: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    priority: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    assignedToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    channelName: SortOrderSchema.optional(),
    tags: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    closedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    assignedTo: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    messages: z.lazy(() => TicketMessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithRelationInputObjectSchema = makeSchema();
export const TicketOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketOrderByWithRelationInput.schema.js.map