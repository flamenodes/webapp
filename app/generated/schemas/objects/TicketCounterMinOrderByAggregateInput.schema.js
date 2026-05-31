import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterMinOrderByAggregateInputObjectSchema = makeSchema();
export const TicketCounterMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterMinOrderByAggregateInput.schema.js.map