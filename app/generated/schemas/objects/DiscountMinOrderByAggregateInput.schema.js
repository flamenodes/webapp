import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    percentage: SortOrderSchema.optional()
}).strict();
export const DiscountMinOrderByAggregateInputObjectSchema = makeSchema();
export const DiscountMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountMinOrderByAggregateInput.schema.js.map