import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const TicketMessageOrderByRelationAggregateInputObjectSchema = makeSchema();
export const TicketMessageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketMessageOrderByRelationAggregateInput.schema.js.map