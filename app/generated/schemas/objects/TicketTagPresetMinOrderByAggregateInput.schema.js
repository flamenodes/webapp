import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetMinOrderByAggregateInputObjectSchema = makeSchema();
export const TicketTagPresetMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetMinOrderByAggregateInput.schema.js.map