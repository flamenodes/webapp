import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterMaxOrderByAggregateInputObjectSchema = makeSchema();
export const TicketCounterMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterMaxOrderByAggregateInput.schema.js.map