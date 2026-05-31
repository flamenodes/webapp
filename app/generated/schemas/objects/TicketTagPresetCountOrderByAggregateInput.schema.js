import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const TicketTagPresetCountOrderByAggregateInputObjectSchema = makeSchema();
export const TicketTagPresetCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=TicketTagPresetCountOrderByAggregateInput.schema.js.map