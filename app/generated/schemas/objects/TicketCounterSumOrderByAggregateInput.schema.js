import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterSumOrderByAggregateInputObjectSchema = makeSchema();
export const TicketCounterSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterSumOrderByAggregateInput.schema.js.map