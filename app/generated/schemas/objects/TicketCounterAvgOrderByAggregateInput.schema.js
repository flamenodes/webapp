import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    seq: SortOrderSchema.optional()
}).strict();
export const TicketCounterAvgOrderByAggregateInputObjectSchema = makeSchema();
export const TicketCounterAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterAvgOrderByAggregateInput.schema.js.map