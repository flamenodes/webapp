import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterCountOrderByAggregateInputObjectSchema = makeSchema();
export const TicketCounterCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterCountOrderByAggregateInput.schema.js.map