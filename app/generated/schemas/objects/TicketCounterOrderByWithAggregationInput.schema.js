import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketCounterCountOrderByAggregateInputObjectSchema as TicketCounterCountOrderByAggregateInputObjectSchema } from './TicketCounterCountOrderByAggregateInput.schema';
import { TicketCounterAvgOrderByAggregateInputObjectSchema as TicketCounterAvgOrderByAggregateInputObjectSchema } from './TicketCounterAvgOrderByAggregateInput.schema';
import { TicketCounterMaxOrderByAggregateInputObjectSchema as TicketCounterMaxOrderByAggregateInputObjectSchema } from './TicketCounterMaxOrderByAggregateInput.schema';
import { TicketCounterMinOrderByAggregateInputObjectSchema as TicketCounterMinOrderByAggregateInputObjectSchema } from './TicketCounterMinOrderByAggregateInput.schema';
import { TicketCounterSumOrderByAggregateInputObjectSchema as TicketCounterSumOrderByAggregateInputObjectSchema } from './TicketCounterSumOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    seq: SortOrderSchema.optional(),
    _count: z.lazy(() => TicketCounterCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => TicketCounterAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TicketCounterMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TicketCounterMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TicketCounterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketCounterOrderByWithAggregationInputObjectSchema = makeSchema();
export const TicketCounterOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketCounterOrderByWithAggregationInput.schema.js.map