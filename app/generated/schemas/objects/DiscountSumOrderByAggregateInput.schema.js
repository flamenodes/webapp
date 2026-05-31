import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    percentage: SortOrderSchema.optional()
}).strict();
export const DiscountSumOrderByAggregateInputObjectSchema = makeSchema();
export const DiscountSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountSumOrderByAggregateInput.schema.js.map