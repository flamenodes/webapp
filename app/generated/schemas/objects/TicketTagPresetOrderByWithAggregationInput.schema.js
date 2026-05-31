import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TicketTagPresetCountOrderByAggregateInputObjectSchema as TicketTagPresetCountOrderByAggregateInputObjectSchema } from './TicketTagPresetCountOrderByAggregateInput.schema';
import { TicketTagPresetMaxOrderByAggregateInputObjectSchema as TicketTagPresetMaxOrderByAggregateInputObjectSchema } from './TicketTagPresetMaxOrderByAggregateInput.schema';
import { TicketTagPresetMinOrderByAggregateInputObjectSchema as TicketTagPresetMinOrderByAggregateInputObjectSchema } from './TicketTagPresetMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    _count: z.lazy(() => TicketTagPresetCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TicketTagPresetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TicketTagPresetMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketTagPresetOrderByWithAggregationInputObjectSchema = makeSchema();
export const TicketTagPresetOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetOrderByWithAggregationInput.schema.js.map