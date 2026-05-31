import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    percentage: SortOrderSchema.optional()
}).strict();
export const DiscountCountOrderByAggregateInputObjectSchema = makeSchema();
export const DiscountCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountCountOrderByAggregateInput.schema.js.map