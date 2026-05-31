import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    percentage: SortOrderSchema.optional()
}).strict();
export const DiscountMaxOrderByAggregateInputObjectSchema = makeSchema();
export const DiscountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountMaxOrderByAggregateInput.schema.js.map